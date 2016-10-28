const {expect} = require('chai');
const fs = require('fs');
const {exportToSchemas} = require('../../lib/schema/export');
const {Namespace, DataElement, Group, Identifier, QuantifiedValue, PrimitiveIdentifier, Value, CodeValue, OrValues} = require('../../lib/models');

describe('#exportToSchemas()', () => {
  it('should correctly export a simple data element', () => {
    let expectedSchema = importFixture('SimpleDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Simple');
    de.description = 'It is a simple data element';
    de.value = new Value(new PrimitiveIdentifier('string'));
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a coded data element', () => {
    let expectedSchema = importFixture('CodedDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Coded');
    de.description = 'It is a coded data element';
    de.value = new CodeValue('http://standardhealthrecord.org/test/vs/Coded');
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a choice data element', () => {
    let expectedSchema = importFixture('ChoiceDataElement');
    let [ns, de] = createNameSpaceAndDE('shr.test', 'Choice');
    de.description = 'It is a data element with a choice';
    let or = new OrValues();
    or.addValue(new Value(new PrimitiveIdentifier('date')));
    or.addValue(new Value(new Identifier('other.ns', 'Period')));
    or.addValue(new Value(new Identifier('shr.test', 'Simple')));
    de.value = or;
    let schema = exportToSingleSchema(ns);
    expect(schema).to.eql(expectedSchema);
  });

  it('should correctly export a group', () => {
    let expectedSchema = importFixture('GroupOfThingsDataElement');
    let ns = new Namespace('shr.test');
    let de = new Group(new Identifier('shr.test', 'GroupOfThings'));
    ns.addDefinition(de);
    de.description = 'It is a group data element';
    de.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Simple')), 0, 1));
    de.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Coded')), 0));
    de.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Choice')), 1));
    de.addElement(new QuantifiedValue(new Value(new Identifier('other.ns', 'Thing')), 1, 1));
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
      de.value = new Value(new PrimitiveIdentifier(p));
      ns.addDefinition(de);
    }
    let expectedSchemas = importFixture('primitives', '.json');
    let schemas = exportToSchemas([ns]);
    expect(schemas).to.have.length(16);
    expect(schemas).to.eql(expectedSchemas);
  });
});

function createNameSpaceAndDE(namespace, name) {
  let ns = new Namespace(namespace);
  let de = new DataElement(new Identifier(namespace, name));
  ns.addDefinition(de);
  return [ns, de];
}

function exportToSingleSchema(namespace) {
  let schemas = exportToSchemas([namespace]);
  expect(schemas).to.have.length(1);
  return schemas[0];
}

function importFixture(name, ext='.schema.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}
