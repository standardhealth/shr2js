const {Group, CodeValue, OrValues} = require('../models');

function exportToSchemas(namespaces) {
  let schemas = [];
  for (const ns of namespaces) {
    for (const def of ns.definitions) {
      schemas.push(defToSchema(def));
    }
  }
  return schemas;
}

function defToSchema(def) {
  let schema = {
    '$schema': 'http://standardhealthrecord.org/schemas/shr/extended-schema.schema.json',
    id: buildSchemaRef(def.identifier)
  };
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
  for (let el of elements) {
    if (el.isMaxUnbounded() || el.max > 1) {
      let ary = {
        type: 'array',
        items: valueToSchemaTypeObject(el.value)
      };
      if (el.min > 0) {
        ary.minItems = el.min;
      }
      if (!el.isMaxUnbounded()) {
        ary.maxItems = el.max;
      }
      schema.properties[el.value.identifier.fqn] = ary;
    } else if (el.max == 1) {
      schema.properties[el.value.identifier.fqn] = valueToSchemaTypeObject(el.value);
    }
  }
}

function encodeValueInSchema(value, schema) {
  if (value instanceof OrValues) {
    schema.oneOf = value.values.map(v => valueToSchemaTypeObject(v));
  } else {
    Object.assign(schema, valueToSchemaTypeObject(value));
  }
}

function valueToSchemaTypeObject(value) {
  if (value.identifier.isPrimitive()) {
        // TO CONSIDER: These could all be defined as separate (resusable) types in our types.schema.json.
    switch(value.identifier.name) {
    case 'boolean':
      return {type: 'boolean'};
    case 'integer':
      return {type: 'integer'};
    case 'decimal':
      return {type: 'number'};
    case 'unsignedInt':
      return {type: 'integer', minimum: 0};
    case 'positiveInt':
      return {type: 'integer', minimum: 1};
    case 'string':
      return {type: 'string'};
    case 'markdown':
      return {type: 'string'}; // TODO: differentiate from string
    case 'code':
      {
        const obj = {type: 'string', pattern: '[^\\s]+([\\s]?[^\\s]+)*'};
        if (value instanceof CodeValue) {
          obj.valueset = value.valueset;
        }
        return obj;
      }
    case 'id':
      return {type: 'string', pattern: '[A-Za-z0-9\\-\\.]{1,64}'};
    case 'oid':
      return {type: 'string', pattern: 'urn:oid:[0-2](\\.[1-9]\\d*)+'};
    case 'uri':
      return {type: 'string', format: 'uri'};
    case 'base64Binary':
      return {type: 'string'}; // TODO: differentiate from string
    case 'date':
      return {type: 'string', pattern: '-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?'};
    case 'dateTime':
      return {type: 'string', pattern: '-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?'};
    case 'instant':
      return {type: 'string', format: 'date-time'};
    case 'time':
      return {type: 'string', pattern: '([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?'};
    default:
      console.warn(`WARNING: Unrecognized primitive type: ${value.identifier.name}.  Treating as string.`);
      return {type: 'string'};
    }
  }

    // We fell through, so this is a reference to another data element or entry
  return {'$ref': buildSchemaRef(value.identifier)};
}

function buildSchemaRef(identifier) {
  let nsPath = identifier.namespace.replace(/\./g, '/');
  return `http://standardhealthrecord.org/schemas/${nsPath}/${identifier.name}.schema.json`;
}

module.exports = {exportToSchemas};