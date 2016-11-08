const fs = require('fs');
const th = require('../test_helper');
const {exportToStructureDefinitions} = require('../../lib/structdef/export');

describe('#exportToStructureDefinitions()', th.commonTests(importFixture, exportNamespaces));

function exportNamespaces(...namespace) {
  let structdefs = exportToStructureDefinitions(namespace);
  // for now, only check the first one (the primary entry of interest)
  return structdefs[0];
}

function importFixture(name, ext='.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
}
