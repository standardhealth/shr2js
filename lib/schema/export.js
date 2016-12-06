const {Group, QuantifiedValue, CodeFromValueSetValue, CodeFromAncestorValue, OrValues} = require('../models');

function exportToSchemas(namespaces) {
  let schemas = [];
  for (const ns of namespaces) {
    for (const def of ns.definitions) {
      try {
        schemas.push(defToSchema(def));
      } catch(e) {
        console.error(`Failed to export ${def.identifier.fqn} to a JSON schema\n  `, e);
      }
    }
  }
  return schemas;
}

function defToSchema(def) {
  let schema = {
    '$schema': 'http://standardhealthrecord.org/schemas/shr/extended-schema.schema.json',
    id: buildSchemaRef(def.identifier),
    isEntry: def.isEntry
  };
  if (def.concepts.length > 0) {
    schema.concepts = def.concepts.map(concept => {
      var theConcept = {
        system: concept.codesystem,
        code: concept.code
      }
      if (concept.label != null) {
        theConcept.display = concept.label;
      }
      return theConcept;
    });
  }
  if (typeof def.description != 'undefined') {
    schema.description = def.description;
  }
  encodeTypesInSchema(def, schema);
  if (typeof def.valueset != 'undefined') {
    schema.valueset = def.valueset;
  }

  return schema;
}

function encodeTypesInSchema(def, schema) {
  if (def instanceof Group) {
    encodeElementsInSchema(def.elements, schema);
  } else {
    encodeValueInSchema(def.value, schema);
  }
}

function encodeElementsInSchema(elements, schema) {
  schema.type = 'object';
  schema.properties = {};
  const required = [];
  let numChoices = 0;
  for (let el of elements) {
    var prop;
    if (el.value instanceof OrValues) {
      numChoices++;
      prop = numChoices > 1 ? `choice${numChoices}` : 'choice';
      schema.properties[prop] = {
        oneOf: el.value.values.map(v => valueToSchemaTypeObject(v))
      };
    } else {
      prop = el.value.identifier.fqn;
      schema.properties[prop] = valueToSchemaTypeObject(el);
    }
    if (el.min == 1 && el.max == 1) {
      required.push(prop);
    }
  }
  if (required.length > 0) {
    schema.required = required;
  }
}

function encodeValueInSchema(value, schema) {
  Object.assign(schema, valueToSchemaTypeObject(value));
}

function valueToSchemaTypeObject(value) {
  if (value instanceof OrValues) {
      return {oneOf : value.values.map(v => valueToSchemaTypeObject(v))};
  } else if (value instanceof QuantifiedValue) {
    if (value.isMaxUnbounded() || value.max > 1) {
      const ary = {
        type: 'array',
        items: valueToSchemaTypeObject(value.value)
      };
      if (value.min > 0) {
        ary.minItems = value.min;
      }
      if (!value.isMaxUnbounded()) {
        ary.maxItems = value.max;
      }
      return ary;
    } else if (value.max == 1) {
      return valueToSchemaTypeObject(value.value);
    }
  }
  // Note: We currently do not distinguish between a RefValue and other Value
  const obj = {'$ref': `http://standardhealthrecord.org/schemas/shr/types.schema.json#/definitions/${value.identifier.name}`};
  if (value.identifier.name == 'code') {
    if (value instanceof CodeFromValueSetValue) {
      obj.valueset = value.valueset;
    } else if (value instanceof CodeFromAncestorValue) {
      obj.descendingFrom = buildAncestorFromValue(value.ancestor);
    }
    return obj;
  } else if (value.identifier.isPrimitive()) {
    return obj;
  }

  // We fell through, so this is a reference to another data element or entry
  return {'$ref': buildSchemaRef(value.identifier)};
}

function buildSchemaRef(identifier) {
  let nsPath = identifier.namespace.replace(/\./g, '/');
  return `http://standardhealthrecord.org/schemas/${nsPath}/${identifier.name}.schema.json`;
}

function buildAncestorFromValue(value) {
  if (value.label != null) {
      return {'code': value.code, 'codesystem': value.codesystem, 'display': value.label};
  } else {
      return {'code': value.code, 'codesystem': value.codesystem};
  }
}

module.exports = {exportToSchemas};