const fs = require('fs');
const path = require('path');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {Preprocessor} = require('./preprocessor');
const {Importer} = require('./listener');

function importFromFilePath(filePath) {
  const preprocessor = new Preprocessor();
  preprocessPath(filePath, preprocessor);
  const importer = new Importer(preprocessor.data);
  processPath(filePath, importer);
  return {
    namespaces: importer.namespaces(),
    errors: importer.errors
  };
}

function processPath(filePath, importer) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      if (file.endsWith('.txt') && !file.endsWith('_cp.txt')) {
        processPath(path.join(filePath, file), importer);
      }
    }
  } else {
    const chars = new FileStream(filePath);
    const lexer = new SHRLexer(chars);
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.shr();
    const walker = new ParseTreeWalker();
    walker.walk(importer, tree);
  }
}

function preprocessPath(filePath, preprocessor) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      if (file.endsWith('.txt' || file.endsWith('.shr'))) {
        preprocessPath(path.join(filePath, file), preprocessor);
      }
    }
  } else {
    const chars = new FileStream(filePath);
    const lexer = new SHRLexer(chars);
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.shr();
    preprocessor.visitShr(tree);
  }
}

module.exports = {importFromFilePath};