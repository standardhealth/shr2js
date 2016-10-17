const {DataElement, Group, Value, CodeValue, QuantifiedValue} = require('../models');

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
        structdefs.push(entryDefToSD(def, ns));
      }
    }
  }

  return structdefs;
}

function entryDefToSD(def, ns) {
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

  addDefToSDElements(structdef.snapshot.element, ns, def, '', 0, '*');
  structdef.differential = structdef.snapshot;

  return structdef;
}

function addDefToSDElements(sdElements, ns, def, path, min=1, max='1') {
  let isBase = path.length == 0;
  if (isBase) {
    path = def.identifier.name;
  } else {
    path = `${path}.${lc(def.identifier.name)}`;
  }

  let obj = {
    id: path,
    path: path,
    definition: def.description,
    alias: def.identifier.fqn,
    min: min,
    max: max
  };
  if (!isBase) {
    obj.type = [{code: 'BackboneElement'}];
  }

  sdElements.push(obj);

  if (def instanceof DataElement) {
    addValueToSDElements(sdElements, ns, def.value, path);
  } else if (def instanceof Group) {
    for (let value of def.elements) {
      addValueToSDElements(sdElements, ns, value, path);
    }
  }
}

function addValueToSDElements(sdElements, ns, value, path) {
  let [min, max] = [1, '1'];
  if (value instanceof QuantifiedValue) {
    min = value.min;
    max = value.isMaxUnbounded() ? '*' : `${value.max}`;
    value = value.value;
  }

  if (value instanceof Value) {
    if (value.identifier.isPrimitive()) {
      addPrimitiveValueToSDElements(sdElements, value, path, min, max);
    } else {
      // TODO: Support other namespaces
      let def = ns.lookup(value.identifier.name);
      if (typeof def === 'undefined') {
        throw new Error(`Error: Could not find definition of value: ${value.identifier.fqn}`);
      }
      addDefToSDElements(sdElements, ns, def, path, min, max);
    }
  }
}

function addPrimitiveValueToSDElements(sdElements, value, path, min=1, max='1') {
  let obj = {
    id: `${path}.value`,
    path: `${path}.value`,
    min: min,
    max: max,
    type: [{code: value.identifier.name}],
    isSummary: true
  };
  if (value instanceof CodeValue && typeof value.valueset != 'undefined' && value.valueset.length > 0) {
    obj.binding = {
      strength: 'required',
      valueSetReference: {
        'reference': value.valueset
      }
    };
  }
  sdElements.push(obj);
}

function lc(word) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}

function buildStructureDefinitionURL(identifier) {
  let nsPath = identifier.namespace.replace(/\./g, '/');
  return `http://standardhealthrecord.org/StructureDefinition/${nsPath}/${identifier.name}`;
}

module.exports = {exportToStructureDefinitions};