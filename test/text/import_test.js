const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple data element', () => {
    let results = importFixture('SimpleDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'Simple');
    expect(simple.description).to.equal('It is a simple data element');
    expectSingleAnswer(simple, 'primitive', 'string');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a coded data element', () => {
    let results = importFixture('CodedDataElement');
    let coded = expectAndGetSingleElement(results, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectSingleAnswer(coded, 'primitive', 'code');
    expect(coded.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.components).to.be.empty;
  });

  it('should correctly import a choice data element', () => {
    let results = importFixture('ChoiceDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'Choice');
    expect(simple.description).to.equal('It is a data element with a choice');
    expect(simple.answers).to.have.length(3);
    expectAnswer(simple, 0, 'primitive', 'date');
    expectAnswer(simple, 1, 'other.ns', 'Period');
    expectAnswer(simple, 2, 'shr.test', 'Simple');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a group', () => {
    let results = importFixture('GroupOfThingsDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'GroupOfThings');
    expect(simple.description).to.equal('It is a group data element');
    expect(simple.answers).to.be.empty;
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.have.length(4);
    expectComponent(simple, 0, 'shr.test', 'Simple', 0, 1);
    expectComponent(simple, 1, 'shr.test', 'Coded', 0);
    expectComponent(simple, 2, 'shr.test', 'Simple', 1);
    expectComponent(simple, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    let results = importFixture('MultipleElements');
    expect(results).to.have.length(1);
    let ns = expectAndGetNamespace(results, 0, 'shr.test');

    let simple = expectAndGetElement(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date data element');
    expectSingleAnswer(simple, 'primitive', 'date');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;

    let coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectSingleAnswer(coded, 'primitive', 'code');
    expect(coded.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.components).to.be.empty;
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  let ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);

  return ns;
}

function expectAndGetElement(namespace, elementIndex, expectedName, expectedClass=DataElement) {
  let element = namespace.elements[elementIndex];
  expect(element).to.be.instanceof(expectedClass);
  expect(element.identifier.namespace).to.equal(namespace.namespace);
  expect(element.identifier.name).to.equal(expectedName);

  return element;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  expect(results).to.have.length(1);

  let ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetElement(ns, 0, expectedName, expectedClass);
}

function expectAnswer(element, answerIndex, expectedNamespace, expectedName) {
  expect(element.answers[answerIndex].namespace).to.equal(expectedNamespace);
  expect(element.answers[answerIndex].name).to.equal(expectedName);
}

function expectSingleAnswer(element, expectedNamespace, expectedName) {
  expect(element.answers).to.have.length(1);
  expectAnswer(element, 0, expectedNamespace, expectedName);
}

function expectComponent(element, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  expect(element.components[componentIndex].namespace).to.equal(expectedNamespace);
  expect(element.components[componentIndex].name).to.equal(expectedName);
  expect(element.components[componentIndex].min).to.equal(expectedMin);
  if (typeof expectedMax != 'undefined') {
    expect(element.components[componentIndex].max).to.equal(expectedMax);
    expect(element.components[componentIndex].isMaxUnbounded()).to.be.false;
  } else {
    expect(element.components[componentIndex].max).to.be.undefined;
    expect(element.components[componentIndex].isMaxUnbounded()).to.be.true;
  }
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
