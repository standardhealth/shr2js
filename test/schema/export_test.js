const {expect} = require('chai');
const fs = require('fs');
const {exportToSchemas} = require('../../lib/schema/export');
const {Namespace, DataElement, Identifier, QuantifiedIdentifier, PrimitiveIdentifier} = require('../../lib/models');

describe('#exportToSchemas()', () => {
  it('should correctly export a simple data element', () => {
    let expectedSchema = importFixture('SimpleDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Simple');
    de.description = 'It is a simple data element';
    de.addAnswer(new PrimitiveIdentifier('string'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a coded data element', () => {
    let expectedSchema = importFixture('CodedDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Coded');
    de.description = 'It is a coded data element';
    de.addAnswer(new PrimitiveIdentifier('code'));
    de.valueset = 'http://standardhealthrecord.org/test/vs/Coded';
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a choice data element', () => {
    let expectedSchema = importFixture('ChoiceDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Choice');
    de.description = 'It is a data element with a choice';
    de.addAnswer(new PrimitiveIdentifier('date'));
    de.addAnswer(new Identifier('other.ns', 'Period'));
    de.addAnswer(new Identifier('shr.test', 'Simple'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a group', () => {
    let expectedSchema = importFixture('GroupOfThingsDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'GroupOfThings');
    de.description = 'It is a group data element';
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'Simple'), 0, 1));
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'Coded'), 0));
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'Simple'), 1));
    de.addComponent(new QuantifiedIdentifier(new Identifier('other.ns', 'Thing'), 1, 1));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export all primitive types', () => {
    let ns = new Namespace('shr.test');
    for (let p of ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt',
                   'string', 'markdown', 'code', 'id', 'oid', 'uri', 'base64Binary',
                   'date', 'dateTime', 'instant', 'time']) {
      let de = new DataElement(new Identifier('shr.test', `${p}Element`));
      de.description = `It is a ${p} data element`;
      de.addAnswer(new PrimitiveIdentifier(p));
      ns.addElement(de);
    }
    let expectedSchemas = importFixture('primitives', '.json');
    let schemas = exportToSchemas(ns);
    expect(schemas).to.have.length(16);
    expect(schemas).to.eql(expectedSchemas);
  });
});

function createNameSpaceAndDE(namespace, name) {
  let ns = new Namespace(namespace);
  let de = new DataElement(new Identifier(namespace, name));
  ns.addElement(de);
  return [ns, de];
}

function exportToSingleSchema(namespace) {
  let schemas = exportToSchemas(namespace);
  expect(schemas).to.have.length(1);
  return schemas[0];
}

function importFixture(name, ext='.schema.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}
