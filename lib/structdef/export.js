const {DataElement, Group, Value, CodeValue, RefValue, OrValues, QuantifiedValue} = require('../models');

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
        try {
          structdefs.push(new StructureDefinitionExporter(entry.value.identifier, nsMap).export());
        } catch(e) {
          console.error(`Failed to export ${entry.value.identifier.fqn} to a structure definition\n  `, e);
        }
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
      code: this.getConceptCodes(def.concepts),
      kind: 'logical',
      abstract: false,
      type: 'Element',
      snapshot: { element: [] }
    };

    if (typeof this._structDef.definition == 'undefined') {
      delete this._structDef.definition;
    }

    if (typeof this._structDef.code == 'undefined') {
      delete this._structDef.code;
    }

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
      path = this.uniquifyPath(`${path}.${lcName}`);
    }

    let obj = {
      id: path,
      path: path,
      definition: def.description,
      code: this.getConceptCodes(def.concepts),
      alias: def.identifier.fqn,
      min: min,
      max: max
    };
    if (!isBase) {
      obj.type = [{code: 'BackboneElement'}];
    }

    if (typeof obj.definition == 'undefined') {
      delete obj.definition;
    }

    if (typeof obj.code == 'undefined') {
      delete obj.code;
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
    } else if (value instanceof OrValues) {
      this.addOrValues(value, path, min, max);
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

  addOrValues(value, path, min=1, max='1') {
    path = this.uniquifyPath(`${path}.choice`);
    const obj = {
      id: path,
      path: path,
      min: min,
      max: max,
      type: [{code: 'BackboneElement'}]
    };
    this._structDef.snapshot.element.push(obj);
    for (let option of value.values) {
      // Inside a choice, the minimum cardinality MUST be 0 (otherwise it's not really a choice, is it?)
      if (option instanceof QuantifiedValue) {
        option = new QuantifiedValue(option.value, 0, option.max);
      } else {
        option = new QuantifiedValue(option, 0, 1);
      }
      this.addValue(option, path);
    }
  }

  getValueObject(value, path, type, min=1, max='1') {
    const leaf = this.isParentChoice(path) ? type.code : 'value';
    path = this.uniquifyPath(`${path}.${leaf}`);
    return {
      id: path,
      path: path,
      min: min,
      max: max,
      type: [type],
      isSummary: true
    };
  }

  getConceptCodes(concepts) {
    if (concepts.length > 0) {
      return concepts.map(c => {
        return {
          system: c.codesystem,
          code: c.code
        };
      });
    }
  }

  isParentChoice(path) {
    // Simplistic (fails if someone names a data element "choice"), but good enough for now!
    return path.endsWith('.choice');
  }

  uniquifyPath(path) {
    if (this.pathExists(path)) {
      let i = 2;
      for (; this.pathExists(`${path}${i}`); i++);
      return `${path}${i}`;
    }
    return path;
  }

  pathExists(path) {
    for (let el of this._structDef.snapshot.element) {
      if (el.path == path) {
        return true;
      }
    }
    return false;
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