const {expect} = require('chai');
const fs = require('fs');
const {exportToStructureDefinitions} = require('../../lib/structdef/export');
const {Namespace, Section, DataElement, Group, Value, CodeValue, QuantifiedValue, PrimitiveIdentifier, Identifier} = require('../../lib/models');

describe('#exportToStructureDefinitions()', () => {
  it('should correctly export a simple entry', () => {
    let expectedStructDef = importFixture('Simple');
    let ns = new Namespace('shr.test');
    let simple = addSimpleThing(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(simple.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns);
    expect(structdef).to.eql(expectedStructDef);
  });

  it('should correctly export a coded entry', () => {
    let expectedStructDef = importFixture('Coded');
    let ns = new Namespace('shr.test');
    let coded = addCodedThing(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(coded.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns);
    expect(structdef).to.eql(expectedStructDef);
  });

  it('should correctly export an entry with nested value', () => {
    // NOTE: This is an entry where the value is not a primitive, e.g. "Value: SomeOtherDataElement"
    let expectedStructDef = importFixture('Nest');
    let ns = new Namespace('shr.test');
    let simple = addNest(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(simple.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns);
    expect(structdef).to.eql(expectedStructDef);
  });

  it('should correctly export an entry with two-deep nested value', () => {
    // NOTE: This is an entry where the value is a non-primitive, that itself has a value that is a non-primitive
    let expectedStructDef = importFixture('OakTree');
    let ns = new Namespace('shr.test');
    let oak = addOakTree(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(oak.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns);
    expect(structdef).to.eql(expectedStructDef);
  });

  it('should correctly export a group', () => {
    let expectedStructDef = importFixture('GroupOfThings');
    let ns = new Namespace('shr.test');
    let group = addGroupOfThings(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(group.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns);
    expect(structdef).to.eql(expectedStructDef);
  });
});

function addGroupOfThings(ns, addSubElements=true) {
  let gr = new Group(new Identifier(ns.namespace, 'GroupOfThings'));
  gr.description = 'It is a group of things';
  gr.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Simple')), 1, 1));
  gr.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Coded')), 0, 1));
  gr.addElement(new QuantifiedValue(new Value(new Identifier('shr.test', 'Nest')), 0));
  ns.addDefinition(gr);
  if (addSubElements) {
    addSimpleThing(ns);
    addCodedThing(ns);
    addNest(ns);
  }
  return gr;
}

function addSimpleThing(ns) {
  let de = new DataElement(new Identifier(ns.namespace, 'Simple'));
  de.description = 'It is a simple thing';
  de.value = new Value(new PrimitiveIdentifier('string'));
  ns.addDefinition(de);
  return de;
}

function addCodedThing(ns) {
  let de = new DataElement(new Identifier(ns.namespace, 'Coded'));
  de.description = 'It is a coded thing';
  de.value = new CodeValue('http://standardhealthrecord.org/test/vs/Coded');
  ns.addDefinition(de);
  return de;
}

function addOakTree(ns, addSubElement=true) {
  let de = new DataElement(new Identifier(ns.namespace, 'OakTree'));
  de.description = 'It is an oak tree';
  de.value = new Value(new Identifier(ns.namespace, 'Nest'));
  ns.addDefinition(de);
  if (addSubElement) {
    addNest(ns, true);
  }
  return de;
}

function addNest(ns, addSubElement=true) {
  let de = new DataElement(new Identifier(ns.namespace, 'Nest'));
  de.description = 'It is a nest';
  de.value = new Value(new Identifier(ns.namespace, 'Robin'));
  ns.addDefinition(de);
  if (addSubElement) {
    addRobin(ns);
  }
  return de;
}

function addRobin(ns) {
  let de = new DataElement(new Identifier(ns.namespace, 'Robin'));
  de.description = 'It is a robin!';
  de.value = new Value(new PrimitiveIdentifier('string'));
  ns.addDefinition(de);
  return de;
}

function exportToSingleStructDef(namespace) {
  let structdefs = exportToStructureDefinitions(namespace);
  expect(structdefs).to.have.length(1);
  return structdefs[0];
}

function importFixture(name, ext='.structdef.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}
