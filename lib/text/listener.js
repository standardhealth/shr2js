const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Entry, Identifier, Group, CodeValue, PrimitiveIdentifier, QuantifiedValue, QuantifiedIdentifier, PRIMITIVES} = require('../models');

class Importer extends SHRParserListener {
  constructor() {
    super();
        // The map of namespace to elements
    this._nsMap = {};
        // The currently active namespace
    this._currentNs = '';
        // The currently active definition (data element, entry, vocabulary)
    this._currentDef = null;
  }

  exitNamespace(ctx) {
    if (ctx.parentCtx instanceof SHRParser.NamespaceDefContext) {
      let ns = ctx.getText();
      this._currentNs = ns;
      this._nsMap[ns] = new Namespace(ns);
    }
  }

  exitDataElementHeader(ctx) {
    this._currentDef = new DataElement(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitDataElementDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitEntryName(ctx) {
    if (ctx.parentCtx instanceof SHRParser.EntryHeaderContext) {
      this._currentDef = new Entry(new Identifier(this._currentNs, ctx.getText()));
    }
  }

  exitEntryDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitGroupDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitDescriptionProp(ctx) {
    let d = stripStringToken(ctx.STRING());
    this._currentDef.description = d;
  }

  exitValues(ctx) {
    if (ctx.OPEN_PAREN()) {

    } else if (ctx.KW_OR()) {

    } else {
      if (ctx.value().primitive()) {
        this._currentDef.value = new PrimitiveIdentifier(ctx.value().getText());
      } else if (ctx.value().codeFromValueset()) {
        //this._currentDef.value = new PrimitiveIdentifier(ctx.value().getText());
      }

    }
  }

  exitValueset(ctx) {
    this._currentDef.valueset = ctx.URL().getText();
  }

  exitValuesetProp(ctx) {
    this._currentDef.valueset = ctx.URL().getText();
  }

  exitGroupHeader(ctx) {
    this._currentDef = new Group(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitCountedElement(ctx) {
    let simpleOrFQName = ctx.children[1].getText();
    let min = parseInt(ctx.getText()[0], 10);
    var max;

    if (!isNaN(ctx.children[0].getText()[3])) {
      max = parseInt(ctx.getText()[3], 10);
    }
    this._currentDef.addElement(new QuantifiedValue(simpleOrFQName, min, max));
  }

  resolveToIdentifier(ref) {
    let lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      return new Identifier(ref.substr(0, lastDot), ref.substr(lastDot+1));
    }

        // No specified namespace -- is either primitive or in this namespace
    if (PRIMITIVES.includes(ref)) {
      return new PrimitiveIdentifier(ref);
    }
    return new Identifier(this._currentNs, ref);
  }

  pushCurrentDefinition() {
    this._nsMap[this._currentNs].addDefinition(this._currentDef);
    //this._nsMap[this._currentNs].addSection(this._currentDef);
    this._currentDef = null;
  }

  namespaces() {
    return Object.keys(this._nsMap).map(key => this._nsMap[key]);
  }
}

function stripStringToken(tkn) {
  let str = tkn.getText();
    // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};