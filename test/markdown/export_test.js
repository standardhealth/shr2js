const {expect} = require('chai');
const fs = require('fs');
const th = require('../test_helper');
const {exportToMarkdown} = require('../../lib/markdown/export');
const {Namespace, DataElement, Identifier, Concept, CodeFromAncestorValue} = require('../../lib/models');

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
    expect(markdown).to.have.length(1);
    expect(markdown).to.eql(expectedMD);
  });
});

function exportNamespaces(...namespace) {
  let markdowns = [];
  const results = exportToMarkdown(namespace);
  for (const ns of namespace) {
    markdowns = markdowns.concat(results.namespaces[ns.namespace].index);
  }
  return markdowns;
}

function importFixture(name, ext='.md') {
  const fixture = fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8');
  const files = fixture.split('<!-- next file -->');
  return files.map(f => f.trim());
}
