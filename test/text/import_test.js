const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Group, Value, CodeValue, PrimitiveIdentifier} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple data element', () => {
    const results = importFixture('simpleDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'Simple');
    expect(simple.description).to.equal('It is a simple data element');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a coded data element', () => {
    const results = importFixture('CodedDataElement');
    const coded = expectAndGetSingleElement(results, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

 /* it('should correctly import a choice data element', () => {
    let results = importFixture('ChoiceDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'Choice');
    expect(simple.description).to.equal('It is a data element with a choice');
    expect(simple.answers).to.have.length(3);
    expectAnswer(simple, 0, 'primitive', 'date');
    expectAnswer(simple, 1, 'other.ns', 'Period');
    expectAnswer(simple, 2, 'shr.test', 'Simple');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });*/

  it('should correctly import a group', () => {
    const results = importFixture('GroupOfThingsDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'GroupOfThings', Group);
    expect(simple.description).to.equal('It is a group data element');
    expect(simple.elements).to.have.length(4);
    expectGroupElement(simple, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(simple, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(simple, 2, 'shr.test', 'Simple', 1);
    expectGroupElement(simple, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const results = importFixture('MultipleElements');
    expect(results).to.have.length(1);
    const ns = expectAndGetNamespace(results, 0, 'shr.test');

    const simple = expectAndGetElement(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date data element');
    expectPrimitiveValue(simple.value, 'date');

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  const ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);
  return ns;
}

function expectAndGetElement(namespace, defIndex, expectedName, expectedClass=DataElement) {
  const def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(expectedClass);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);
  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  expect(results).to.have.length(1);
  const ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetElement(ns, 0, expectedName, expectedClass);
}

function expectValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(Value);
  expect(value.identifier.namespace).to.equal(expectedNamespace);
  expect(value.identifier.name).to.equal(expectedName);
}

function expectPrimitiveValue(value, expectedName) {
  expect(value).to.be.instanceof(Value);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal(expectedName);
}

function expectCodeValue(value, expectedValueset) {
  expect(value).to.be.instanceof(CodeValue);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal('code');
  expect(value.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
}

function expectGroupElement(group, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const element = group.elements[componentIndex];

  expectValue(element.value, expectedNamespace, expectedName);
  expect(element.min).to.equal(expectedMin);
  if (typeof element.max != 'undefined') {
    expect(element.max).to.equal(expectedMax);
    expect(element.isMaxUnbounded()).to.be.false;
  } else {
    expect(element.max).to.be.undefined;
    expect(element.isMaxUnbounded()).to.be.true;
  }
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
