const {expect} = require('chai');
const fs = require('fs');
const {exportToSchemas} = require('../../lib/schema/export');
const {Namespace, DataElement, Entry, Identifier, QuantifiedIdentifier, PrimitiveIdentifier} = require('../../lib/models');

describe('#exportToSchemas()', () => {
  it('should correctly export a simple entry', () => {
    let expectedSchema = importFixture('simpleEntry');
    let [ns, entry] = createNameSpaceAndEntry('shr.test', 'Simple');
    entry.description = 'It is a simple entry';
    entry.addAnswer(new PrimitiveIdentifier('date'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a simple data element', () => {
    let expectedSchema = importFixture('simpleDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'simple');
    de.description = 'It is a simple data element';
    de.addAnswer(new PrimitiveIdentifier('string'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a coded data element', () => {
    let expectedSchema = importFixture('codedDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'coded');
    de.description = 'It is a coded data element';
    de.addAnswer(new PrimitiveIdentifier('code'));
    de.valueset = 'http://standardhealthrecord.org/test/vs/coded';
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a choice data element', () => {
    let expectedSchema = importFixture('choiceDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'choice');
    de.description = 'It is a data element with a choice';
    de.addAnswer(new PrimitiveIdentifier('date'));
    de.addAnswer(new Identifier('other.ns', 'period'));
    de.addAnswer(new Identifier('shr.test', 'simple'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a composition', () => {
    let expectedSchema = importFixture('compositionDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'composition');
    de.description = 'It is a composition data element';
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'simple'), 0, 1));
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'coded'), 0));
    de.addComponent(new QuantifiedIdentifier(new Identifier('shr.test', 'Simple'), 1));
    de.addComponent(new QuantifiedIdentifier(new Identifier('other.ns', 'thing'), 1, 1));
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

function createNameSpaceAndEntry(namespace, name) {
  let ns = new Namespace(namespace);
  let entry = new Entry(new Identifier(namespace, name));
  ns.addElement(entry);
  return [ns, entry];
}

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
