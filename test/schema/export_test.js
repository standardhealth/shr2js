const {expect} = require('chai');
const th = require('../test_helper');
const fs = require('fs');
const urlvalidator = require('validator');
const {exportToSchemas} = require('../../lib/schema/export');
const validator = require('jsonschema').Validator;
const {Namespace, DataElement, Identifier, PrimitiveIdentifier, Value} = require('../../lib/models');

describe('#exportToSchemasCommonCases()', th.commonTests(importFixture, exportNamespaces));

describe('#exportToSchemasUniqueCases()', () => {
  it('should correctly export all primitive types', () => {
    let ns = new Namespace('shr.test');

    for (let p of ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt',
                   'string', 'markdown', 'code', 'id', 'oid', 'uri', 'base64Binary',
                   'date', 'dateTime', 'instant', 'time']) {
      let de = new DataElement(new Identifier('shr.test', `${p}Element`));
      de.description = `It is a ${p} data element`;
      de.value = new Value(new PrimitiveIdentifier(p));
      ns.addDefinition(de);
    }
    let expectedSchemas = importFixture('primitives');
    let schemas = exportToSchemas([ns]);
    expect(schemas).to.have.length(16);
    expect(schemas).to.eql(expectedSchemas);
    expect(validateSchema(schemas)).to.be.true;
  });
});

function exportNamespaces(...namespace) {
  let schemas = exportToSchemas(namespace);
  expect(validateSchema(schemas)).to.be.true;
  return schemas;
}

function importFixture(name, ext='.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}

function validateSchema(schema) {

    // Note: schema extentions (e.g. Concept) still are not validated correctly as of 1/4/17 (tcrews)
    const v = new validator();
    const extendedSchema = importSchema();
    let isValid = false;

   for (let i in schema) {
        if (v.validate(schema[i], extendedSchema).valid) {
            isValid = true;

            if (typeof schema[i].id != 'undefined') {
                isValid = urlvalidator.isURL(schema[i].id);
            }
            if (typeof schema[i].valueset != 'undefined') {
                isValid = urlvalidator.isURL(schema[i].valueset);
            }
            if (typeof schema[i].concepts != 'undefined') {
                isValid = urlvalidator.isURL(schema[i].concepts[0].system);
            }
            if (!isValid) {
                break;
            }

        } else {
            isValid = false;
            break;
        }
    }
    return isValid;
}

function importSchema() {
    return JSON.parse(fs.readFileSync(`${__dirname}/../../static/schema/extended-schema.schema.json`, 'utf8'));
}

