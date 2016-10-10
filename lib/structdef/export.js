const {DataElement, Group, Value, CodeValue} = require('../models');

function exportToStructureDefinitions(ns) {
  // NOTE: We only generate StructureDefinitions for ENTRIES.
  // Entries are those elements that are referenced in a SECTION.
  // TODO: Generate a StructureDefinition representing each Section
  // TODO: Assumes that Section only contains entries in same namespace

  let structdefs = [];
  for (const section of ns.sections) {
    for (const entry of section.entries) {
      const def = ns.lookup(entry.value.identifier.name);
      if (def instanceof DataElement || def instanceof Group) {
        structdefs.push(defToStructureDefinition(def, ns));
      }
    }
  }

  return structdefs;
}

function defToStructureDefinition(def, ns) {
  let structdef = {
    resourceType: 'StructureDefinition',
    id: def.identifier.name,
    text: { status: 'generated' },
    url: buildStructureDefinitionURL(def.identifier),
    identifier: [{
      use: 'usual',
      system: 'http://standardhealthrecord.org',
      value: def.identifier.fqn
    }],
    name: def.identifier.name,
    status: 'draft',
    publisher: 'Standard Health Record',
    description: def.description,
    kind: 'logical',
    abstract: false,
    type: 'Element',
    snapshot: { element: [] }
  };

  populateStructDefSnapshot(structdef, def, ns);
  structdef.differential = structdef.snapshot;

  return structdef;
}

function populateStructDefSnapshot(structdef, def, ns) {
  structdef.snapshot.element.push({
    id: def.identifier.name,
    path: def.identifier.name,
    definition: def.description,
    alias: def.identifier.fqn,
    min: 0,
    max: '*'
  });

  if (def instanceof DataElement) {
    if (def.value instanceof Value) {
      populateStructDefSnapshotWithValue(structdef, def, `${def.identifier.name}.value`, ns);
    }
  } else if (def instanceof Group) {
    populateStructDefSnapshotWithGroupElements(structdef, def, def.identifier.name, ns);
  }
}

function populateStructDefSnapshotWithValue(structdef, def, path, ns, min=1, max='1') {
  let sdVal = {
    id: path,
    path: path,
    min: min,
    max: max
  };
  if (def.value.identifier.isPrimitive()) {
    sdVal.definition = def.description;
    sdVal.alias = def.identifier.fqn;
    sdVal.type = [{ code: def.value.identifier.name }];
    sdVal.isSummary = true;
    if (def.value instanceof CodeValue && typeof def.value.valueset != 'undefined' && def.value.valueset.length > 0) {
      sdVal.binding = {
        strength: 'required',
        valueSetReference: {
          'reference': def.value.valueset
        }
      };
    }
    structdef.snapshot.element.push(sdVal);
  } else {
    // TODO: This assumes other data element is in same namespace!
    let val = ns.lookup(def.value.identifier.name);
    if (typeof val === 'undefined') {
      throw new Error(`Error exporting ${def.identifier.fqn}: Could not find definition of value: ${def.value.identifier.fqn}`);
    }
    if (val.value instanceof Value) {
      if (val.value.identifier.isPrimitive()) {
        // Directly nest the value
        populateStructDefSnapshotWithValue(structdef, val, path, ns);
      } else {
        // Need to create a backbone element first, then nest the value
        sdVal.definition = val.description;
        sdVal.alias = val.identifier.fqn;
        sdVal.type = [{ code: 'BackboneElement' }];
        structdef.snapshot.element.push(sdVal);
        populateStructDefSnapshotWithValue(structdef, val, `${path}.value`, ns);
      }
    }
  }
}

function populateStructDefSnapshotWithGroupElements(structdef, def, path, ns) {
  for (let el of def.elements) {
    // TODO: This assumes other data element is in same namespace!
    // TODO: Support for OrValues
    let val = ns.lookup(el.value.identifier.name);
    if (typeof val === 'undefined') {
      throw new Error(`Error exporting ${def.identifier.fqn}: Could not find definition of element: ${el.value.identifier.fqn}`);
    }
    let name = el.value.identifier.name.charAt(0).toLowerCase() + el.value.identifier.name.slice(1);
    if (val.value.identifier.isPrimitive()) {
      // Directly nest the value
      populateStructDefSnapshotWithValue(structdef, val, `${path}.${name}`, ns, el.min, el.isMaxUnbounded() ? '*' : `${el.max}`);
    } else {
      // Need to create a backbone element first, then nest the value
      structdef.snapshot.element.push({
        id: `${path}.${name}`,
        path: `${path}.${name}`,
        definition: val.description,
        alias: val.identifier.fqn,
        min: el.min,
        max: el.isMaxUnbounded ? '*' : `${el.max}`,
        type: [{ code: 'BackboneElement' }]
      });
      populateStructDefSnapshotWithValue(structdef, val, `${path}.${name}.value`, ns);
    }

  }
}

function buildStructureDefinitionURL(identifier) {
  let nsPath = identifier.namespace.replace(/\./g, '/');
  return `http://standardhealthrecord.org/StructureDefinition/${nsPath}/${identifier.name}`;
}

module.exports = {exportToStructureDefinitions};