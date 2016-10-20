const {DataElement, Group, Value, CodeValue, RefValue, QuantifiedValue} = require('../models');

function exportToStructureDefinitions(namespaces) {
  // NOTE: We only generate StructureDefinitions for ENTRIES.
  // Entries are those elements that are referenced in a SECTION.

  // Create a map for easier lookup by namespace and name
  let nsMap = new Map();
  for (const ns of namespaces) {
    nsMap.set(ns.namespace, ns);
  }

  // Iterate the namespaces, exporting each entry
  let structdefs = [];
  for (const ns of namespaces) {
    for (const section of ns.sections) {
      for (const entry of section.entries) {
        structdefs.push(new StructureDefinitionExporter(entry.value.identifier, nsMap).export());
      }
    }
  }

  return structdefs;
}

class StructureDefinitionExporter {
  constructor(identifier, nsMap) {
    this._identifier = identifier;
    this._nsMap = nsMap;
    this._structDef = {};
  }

  export() {
    const def = this.lookup(this._identifier);
    this._structDef = {
      resourceType: 'StructureDefinition',
      id: def.identifier.name,
      text: { status: 'generated' },
      url: this.identifierToURL(def.identifier),
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

    this.addDefinition(def, '', 0, '*');
    this._structDef.differential = this._structDef.snapshot;

    return this._structDef;
  }

  addDefinition(def, path, min=1, max='1') {
    let isBase = path.length == 0;
    if (isBase) {
      path = def.identifier.name;
    } else {
      const lcName = def.identifier.name.charAt(0).toLowerCase() + def.identifier.name.slice(1);
      path = `${path}.${lcName}`;
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

    this._structDef.snapshot.element.push(obj);

    if (def instanceof DataElement) {
      this.addValue(def.value, path);
    } else if (def instanceof Group) {
      for (let value of def.elements) {
        this.addValue(value, path);
      }
    }
  }

  addValue(value, path) {
    let [min, max] = [1, '1'];
    if (value instanceof QuantifiedValue) {
      min = value.min;
      max = value.isMaxUnbounded() ? '*' : `${value.max}`;
      value = value.value;
    }

    if (value instanceof Value) {
      if (value.identifier.isPrimitive()) {
        this.addPrimitiveValue(value, path, min, max);
      } else if (value instanceof RefValue) {
        this.addReferenceValue(value, path, min, max);
      } else {
        let def = this.lookup(value.identifier);
        if (typeof def === 'undefined') {
          throw new Error(`Error: Could not find definition of value: ${value.identifier.fqn}`);
        }
        this.addDefinition(def, path, min, max);
      }
    }
  }

  addPrimitiveValue(value, path, min=1, max='1') {
    const type = {code: value.identifier.name};
    const obj = this.getValueObject(value, path, type, min, max);
    if (value instanceof CodeValue && typeof value.valueset != 'undefined' && value.valueset.length > 0) {
      obj.binding = {
        strength: 'required',
        valueSetReference: {
          'reference': value.valueset
        }
      };
    }
    this._structDef.snapshot.element.push(obj);
  }

  addReferenceValue(value, path, min=1, max='1') {
    const type = {
      code: 'Reference',
      targetProfile: this.identifierToURL(value.identifier)
    };
    const obj = this.getValueObject(value, path, type, min, max);
    this._structDef.snapshot.element.push(obj);
  }

  getValueObject(value, path, type, min=1, max='1') {
    return {
      id: `${path}.value`,
      path: `${path}.value`,
      min: min,
      max: max,
      type: [type],
      isSummary: true
    };
  }

  lookup(identifier) {
    const ns = this._nsMap.get(identifier.namespace);
    if (typeof ns != 'undefined') {
      return ns.lookup(identifier.name);
    }
  }

  identifierToURL(identifier) {
    const nsPath = identifier.namespace.replace(/\./g, '/');
    return `http://standardhealthrecord.org/StructureDefinition/${nsPath}/${identifier.name}`;
  }
}

module.exports = {exportToStructureDefinitions};