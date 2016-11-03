const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Group} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple data element', () => {
    let results = importFixture('simpleDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'Simple');
    expect(simple.description).to.equal('It is a simple data element');
    expectValue(simple, 'primitive', 'string');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a coded data element', () => {
    let results = importFixture('CodedDataElement');
    let coded = expectAndGetSingleElement(results, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expect(coded.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.components).to.be.empty;
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
    let results = importFixture('GroupOfThingsDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'GroupOfThings', Group);
    expect(simple.description).to.equal('It is a group data element');
    expect(simple.values).to.be.empty;
    expect(simple.valueset).to.be.undefined;
    expect(simple.elements).to.have.length(4);
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
    expectValue(simple, 'primitive', 'date');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;

    let coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
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

function expectAndGetElement(namespace, defIndex, expectedName, expectedClass=DataElement) {
  let def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(expectedClass);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);

  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  expect(results).to.have.length(1);
  let ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetElement(ns, 0, expectedName, expectedClass);
}

function expectValue(def, expectedNamespace, expectedName) {
  expect(def.value.namespace).to.equal(expectedNamespace);
  expect(def.value.name).to.equal(expectedName);
}

function expectComponent(element, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  var elementValue = element.elements[componentIndex].value;
  var elementNS = element.identifier.namespace;
  var elementMax = element.elements[componentIndex].max;
  var elementMin = element.elements[componentIndex].min;

  if (elementValue.lastIndexOf('.') != -1) {
    elementNS = getCorrectedNamespace(elementValue);
    elementValue = getCorrectedValue(elementValue);
  }

  expect(elementNS).to.equal(expectedNamespace);
  expect(elementValue).to.equal(expectedName);
  expect(elementMin).to.equal(expectedMin);
  if (typeof expectedMax != 'undefined') {
    expect(elementMax).to.equal(expectedMax);
    expect(element.elements[componentIndex].isMaxUnbounded()).to.be.false;
  } else {
    expect(elementMax).to.be.undefined;
    expect(element.elements[componentIndex].isMaxUnbounded()).to.be.true;
  }
}
/* Use this if you have a dot separated namespace in QuantifiedValue */
function getCorrectedNamespace(fqname) {
  var index = fqname.lastIndexOf('.');
  correctedNS = fqname.slice(0, index);
  return correctedNS;
}

/* Use this if you have a dot separated namespace in QuantifiedValue */
function getCorrectedValue(fqname) {
  var index = fqname.lastIndexOf('.');
  correctedValue = fqname.slice(index + 1);
  return correctedValue;
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
