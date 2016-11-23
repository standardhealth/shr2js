const {expect} = require('chai');
const fs = require('fs');
const th = require('../test_helper');
const {exportToMarkdown} = require('../../lib/markdown/export');
const {Namespace, DataElement, Identifier, Concept, Value, PrimitiveIdentifier, CodeFromValueSetValue, CodeFromAncestorValue} = require('../../lib/models');

describe('#exportToMarkdownCommonCases()', th.commonTests(importFixture, exportNamespaces));

describe('#exportToMarkdownGrammarV3Cases()', () => {
  it('should correctly export coded descendents', () => {
    let ns = new Namespace('shr.test');
    let de = new DataElement(new Identifier(ns.namespace, 'CodedDescendent'), true);
    de.description = 'It is a coded element descending from foobar';
    de.value = new CodeFromAncestorValue(new Concept('http://foo.org', 'bar', 'Foobar'));
    ns.addDefinition(de);
    let expectedMD = importFixture('CodedDescendent');
    let markdown = exportNamespaces(ns);
    expect(markdown).to.eql(expectedMD);
  });
});

describe('#exportToMarkdownSpecificCases()', () => {
  it('should correctly export a master index', () => {
    let ns = new Namespace('shr.test');
    let de = new DataElement(new Identifier(ns.namespace, 'Simple'), true);
    de.description = 'It is a simple element';
    de.addConcept(new Concept('http://foo.org', 'bar'));
    de.value = new Value(new PrimitiveIdentifier('string'));
    ns.addDefinition(de);

    de = new DataElement(new Identifier(ns.namespace, 'Coded'), true);
    de.description = 'It is a coded element';
    de.value = new CodeFromValueSetValue('http://standardhealthrecord.org/test/vs/Coded');
    ns.addDefinition(de);

    let ns2 = new Namespace('shr.other.test');
    de = new DataElement(new Identifier(ns2.namespace, 'Simple'), true);
    de.description = 'It is a coded element descending from foobar';
    de.value = new CodeFromAncestorValue(new Concept('http://foo.org', 'bar', 'Foobar'));
    ns2.addDefinition(de);

    let expectedMD = importFixture('index');
    const results = exportToMarkdown([ns, ns2]);
    expect(splitLines(results.index)).to.eql(expectedMD);
  });
});

function exportNamespaces(...namespace) {
  let markdowns = [];
  const results = exportToMarkdown(namespace);
  for (const ns of namespace) {
    markdowns = markdowns.concat(splitLines(results.namespaces[ns.namespace].index), '');
  }
  return markdowns;
}

function importFixture(name, ext='.md') {
  const fixture = fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8');
  return splitLines(fixture).concat('');
}

function splitLines(text) {
  return text.split('\n').map(l => l.trim());
}
