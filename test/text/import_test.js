const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Group, Value, CodeFromValueSetValue, RefValue, OrValues, QuantifiedValue, PrimitiveIdentifier} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple entry', () => {
    const results = importFixture('Simple');
    const simple = expectAndGetSingleEntry(results, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a simple element', () => {
    const results = importFixture('SimpleElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a coded entry', () => {
    const results = importFixture('Coded');
    const coded = expectAndGetSingleEntry(results, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import a reference to simple element', () => {
    const results = importFixture('SimpleReference');
    const simple = expectAndGetSingleEntry(results, 'shr.test', 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectRefValue(simple.value, 'shr.test', 'Simple');
  });

  it('should correctly import an entry with a list value', () => {
    const results = importFixture('MultiString');
    const simple = expectAndGetSingleEntry(results, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string entry');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should correctly import a choice entry', () => {
    const results = importFixture('Choice');
    const choice = expectAndGetSingleEntry(results, 'shr.test', 'Choice');
    expect(choice.description).to.equal('It is an entry with a choice');
    expectOrValues(choice.value, 3);
    expectOrValue(choice.value, 0, 'primitive', 'date');
    expectOrValue(choice.value, 1, 'other.ns', 'Period');
    expectOrValue(choice.value, 2, 'shr.test', 'Simple');
  });

  it('should correctly import a complex choice entry', () => {
    const results = importFixture('ComplexChoice');
    const choice = expectAndGetSingleEntry(results, 'shr.test', 'ComplexChoice');
    expect(choice.description).to.equal('It is an entry with a complex choice');
    const or = choice.value;
    expectOrValues(or, 2);
    const or0 = or.values[0];
    expectMinMax(or0, 1, 2);
    expectOrValues(or0.value, 2);
    expectOrValue(or0.value, 0, 'primitive', 'date');
    expectOrValue(or0.value, 1, 'other.ns', 'Period');
    const or1 = or.values[1];
    expectMinMax(or1, 3, 4);
    expectValue(or1.value, 'shr.test', 'Simple');
  });

  it('should correctly import a group entry', () => {
    const results = importFixture('Group');
    const simple = expectAndGetSingleEntry(results, 'shr.test', 'SimpleGroup', Group);
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expectConcept(simple.concepts[1], 'http://boo.org', 'far');
    expectConcept(simple.concepts[2], 'ZOO', 'bear');
    expect(simple.description).to.equal('It is a group entry');
    expect(simple.elements).to.have.length(4);
    expectGroupElement(simple, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(simple, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(simple, 2, 'shr.test', 'Simple', 1);
    expectGroupElement(simple, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import a group element', () => {
    const results = importFixture('GroupElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'SimpleGroup', Group);
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expectConcept(simple.concepts[1], 'http://boo.org', 'far');
    expectConcept(simple.concepts[2], 'ZOO', 'bear');
    expect(simple.description).to.equal('It is a group element');
    expect(simple.elements).to.have.length(4);
    expectGroupElement(simple, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(simple, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(simple, 2, 'shr.test', 'Simple', 1);
    expectGroupElement(simple, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const results = importFixture('MultipleElementNamespace');
    expect(results).to.have.length(1);
    const ns = expectAndGetNamespace(results, 0, 'shr.test');

    const simple = expectAndGetEntry(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectPrimitiveValue(simple.value, 'date');

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
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
  return expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, false);
}

function expectAndGetEntry(namespace, defIndex, expectedName, expectedClass=DataElement) {
  return expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, true);
}

function expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, isEntry) {
  const def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(expectedClass);
  expect(def.isEntry).to.equal(isEntry);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);
  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  return expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, false);
}

function expectAndGetSingleEntry(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  return expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, true);
}

function expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, isEntry) {
  expect(results).to.have.length(1);
  const ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetBaseElement(ns, 0, expectedName, expectedClass, isEntry);
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
  expect(value).to.be.instanceof(CodeFromValueSetValue);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal('code');
  expect(value.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
}

function expectRefValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(RefValue);
  expect(value.identifier.namespace).to.equal(expectedNamespace);
  expect(value.identifier.name).to.equal(expectedName);
}

function expectOrValues(value, size) {
  expect(value).to.be.instanceof(OrValues);
  expect(value.values).to.have.length(size);
}

function expectMinMax(quantifiedValue, expectedMin, expectedMax) {
  expect(quantifiedValue).to.be.instanceof(QuantifiedValue);
  expect(quantifiedValue.min).to.equal(expectedMin);
  if (typeof quantifiedValue.max != 'undefined') {
    expect(quantifiedValue.max).to.equal(expectedMax);
    expect(quantifiedValue.isMaxUnbounded()).to.be.false;
  } else {
    expect(quantifiedValue.max).to.be.undefined;
    expect(quantifiedValue.isMaxUnbounded()).to.be.true;
  }
}

function expectOrValue(or, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  let value = or.values[componentIndex];
  if (typeof expectedMin != 'undefined') {
    expectMinMax(value, expectedMin, expectedMax);
    value = value.value;
  }
  expectValue(value, expectedNamespace, expectedName);
}

function expectGroupElement(group, elementIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const element = group.elements[elementIndex];
  expectMinMax(element, expectedMin, expectedMax);
  expectValue(element.value, expectedNamespace, expectedName);
}

function expectConcept(concept, codesystem, code) {
  expect(concept.codesystem).equals(codesystem);
  expect(concept.code).equals(code);
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
