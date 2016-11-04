const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Identifier, Group, Value, CodeValue, PrimitiveIdentifier, QuantifiedValue, PRIMITIVES} = require('../models');

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
      const ns = ctx.getText();
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

  exitGroupHeader(ctx) {
    this._currentDef = new Group(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitGroupDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitDescriptionProp(ctx) {
    this._currentDef.description = stripStringToken(ctx.STRING());
  }

  exitValues(ctx) {
    if (ctx.OPEN_PAREN()) {
      // TODO
    } else if (ctx.KW_OR()) {
      // TODO
    } else {
      if (ctx.value().primitive()) {
        this._currentDef.value = new Value(new PrimitiveIdentifier(ctx.value().getText()));
      } else if (ctx.value().codeFromValueset()) {
        this._currentDef.value = new CodeValue(ctx.value().codeFromValueset().valueset().getText());
      }
    }
  }

  exitCountedElement(ctx) {
    const identifier = this.resolveToIdentifier(ctx.simpleOrFQName().getText());
    const cards = ctx.count().WHOLE_NUMBER();
    const min = parseInt(cards[0].getText(), 10);
    var max;
    if (cards.length == 2) {
      max = parseInt(cards[1].getText(), 10);
    }
    this._currentDef.addElement(new QuantifiedValue(new Value(identifier), min, max));
  }

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
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
    this._currentDef = null;
  }

  namespaces() {
    return Object.keys(this._nsMap).map(key => this._nsMap[key]);
  }
}

function stripStringToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};