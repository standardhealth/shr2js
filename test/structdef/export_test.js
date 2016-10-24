const {expect} = require('chai');
const fs = require('fs');
const {exportToStructureDefinitions} = require('../../lib/structdef/export');
const {Namespace, Section, DataElement, Group, Value, CodeValue, RefValue, OrValues, QuantifiedValue, PrimitiveIdentifier, Identifier} = require('../../lib/models');

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

  it('should correctly export a simple entry in a different namespace', () => {
    let expectedStructDef = importFixture('OtherSimple');
    let otherNS = new Namespace('shr.other.test');
    let simple = addSimpleThing(otherNS);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(simple.identifier), 0, 1));
    let ns = new Namespace('shr.test');
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns, otherNS);
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

  it('should correctly export a reference entry', () => {
    let expectedStructDef = importFixture('SimpleReference');
    let ns = new Namespace('shr.test');
    let ref = addSimpleReference(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(ref.identifier), 0, 1));
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

  it('should correctly export an entry with nested value in a different namespace', () => {
    // NOTE: This is an entry where the value is not a primitive, e.g. "Value: SomeOtherDataElement"
    let expectedStructDef = importFixture('NestWithOtherRobin');
    let ns = new Namespace('shr.test');
    let otherNS = new Namespace('shr.other.test');
    let simple = addNestWithOtherRobin(ns, otherNS);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(simple.identifier), 0, 1));
    ns.addSection(section);
    let structdef = exportToSingleStructDef(ns, otherNS);
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

  it('should correctly export a choice', () => {
    let expectedStructDef = importFixture('Choice');
    let ns = new Namespace('shr.test');
    let choice = addChoice(ns);
    let section = new Section('test');
    section.addEntry(new QuantifiedValue(new Value(choice.identifier), 0, 1));
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

function addSimpleReference(ns) {
  let de = new DataElement(new Identifier(ns.namespace, 'SimpleReference'));
  de.description = 'It is a reference to a simple thing';
  de.value = new RefValue(new Identifier(ns.namespace, 'Simple'));
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

function addNestWithOtherRobin(nestNS, robinNS) {
  let de = new DataElement(new Identifier(nestNS.namespace, 'NestWithOtherRobin'));
  de.description = 'It is a nest with a strange Robin!';
  de.value = new Value(new Identifier(robinNS.namespace, 'Robin'));
  nestNS.addDefinition(de);
  addRobin(robinNS);
  return de;
}

function addRobin(ns) {
  let de = new DataElement(new Identifier(ns.namespace, 'Robin'));
  de.description = 'It is a robin!';
  de.value = new Value(new PrimitiveIdentifier('string'));
  ns.addDefinition(de);
  return de;
}

function addChoice(ns, addSubElements=true) {
  let ch = new DataElement(new Identifier(ns.namespace, 'Choice'));
  ch.description = 'It is a thing with a choice';
  let or = new OrValues();
  or.addValue(new Value(new PrimitiveIdentifier('string')));
  or.addValue(new QuantifiedValue(new CodeValue('http://standardhealthrecord.org/test/vs/CodeChoice'), 0));
  or.addValue(new QuantifiedValue(new Value(new Identifier('shr.test', 'Coded')), 1, 1));
  ch.value = or;
  ns.addDefinition(ch);
  if (addSubElements) {
    addCodedThing(ns);
  }
  return ch;
}

function exportToSingleStructDef(...namespace) {
  let structdefs = exportToStructureDefinitions(namespace);
  expect(structdefs).to.have.length(1);
  return structdefs[0];
}

function importFixture(name, ext='.structdef.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}
