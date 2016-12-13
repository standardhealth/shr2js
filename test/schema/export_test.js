const {expect} = require('chai');
const fs = require('fs');
const th = require('../test_helper');
const {exportToSchemas} = require('../../lib/schema/export');
const validator = require('jsonschema').Validator;
const {Namespace, DataElement, Identifier, PrimitiveIdentifier, Value} = require('../../lib/models');

describe('#exportToSchemasCommonCases()', th.commonTests(importFixture, exportNamespaces));

describe('#exportToSchemasUniqueCases()', () => {
  it('should correctly export all primitive types', () => {
    let ns = new Namespace('shr.test');
    let v = new validator();
    let extendedSchema = importSchema();

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

    expect(v.validate(schemas, extendedSchema));
  });



});

function exportNamespaces(...namespace) {
  let schemas = exportToSchemas(namespace);
  return schemas;
}

function importFixture(name, ext='.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}

function importSchema() {
    return JSON.parse(fs.readFileSync(`${__dirname}/../../static/schema/extended-schema.schema.json`, 'utf8'));
}
