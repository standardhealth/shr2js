//const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Concept, Identifier, Group, Value, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, PrimitiveIdentifier, QuantifiedValue, OrValues, PRIMITIVES} = require('../models');

class Importer extends SHRParserListener {
  constructor() {
    super();
    // The map of namespace to elements
    this._nsMap = {};
    // The currently active namespace
    this._currentNs = '';
    // The currently active definition (DataElement, Group)
    this._currentDef = null;
    // The vocabulary, mapping aliases to urls (string -> string)
    this._vocabMap = {};
  }

  enterDataDefsHeader(ctx) {
    const ns = ctx.namespace().getText();
    this._currentNs = ns;
    if (typeof this._nsMap[ns] == 'undefined') {
      this._nsMap[ns] = new Namespace(ns);
    }
  }

  enterUsesStatement(ctx) {
    // TODO
  }

  enterVocabularyDef(ctx) {
    this._vocabMap[ctx.ALL_CAPS().getText()] = ctx.URL().getText();
  }

  enterElementDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.elementHeader().simpleName().getText());
    if (ctx.singleValue()) {
      this._currentDef = new DataElement(id);
    } else {
      this._currentDef = new Group(id);
    }
  }

  exitElementDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterEntryDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.entryHeader().simpleName().getText());
    if (ctx.singleValue()) {
      this._currentDef = new DataElement(id, true);
    } else {
      this._currentDef = new Group(id, true);
    }
  }

  exitEntryDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterDescriptionProp(ctx) {
    this._currentDef.description = stripDelimitersFromToken(ctx.STRING());
  }

  enterConcepts(ctx) {
    for (const fqc of ctx.fullyQualifiedCode()) {
      this._currentDef.addConcept(this.processFullyQualifiedCode(fqc));
    }
  }

  enterSingleValue(ctx) {
    if (ctx.countedType().length > 1) {
      const or = new OrValues();
      for (const ct of ctx.countedType()) {
        or.addValue(this.processCountedType(ct));
      }
      this._currentDef.value = or;
    } else {
      const value = this.processCountedType(ctx.countedType()[0]);
      if (value.max == 1) {
        this._currentDef.value = value.value; // no need for QuantifiedValue here
      } else {
        this._currentDef.value = value;
      }
    }
  }

  processCountedType(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.types().type());
  }

  enterMultiValue(ctx) {
    for (const ce of ctx.countedElements()) {
      this._currentDef.addElement(this.processCountedElements(ce));
    }
  }

  processCountedElements(ctx) {
    if (ctx.countedElement().length > 1) {
      const or = new OrValues();
      for (const ce of ctx.countedElement()) {
        or.addValue(this.processCountedElement(ce));
      }
      return or;
    } else {
      return this.processCountedElement(ctx.countedElement()[0]);
    }
  }

  processCountedElement(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.elements().element());
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    var value;
    if (typeCtxArr.length > 1) {
      value = new OrValues();
      for (const t of typeCtxArr) {
        value.addValue(this.processType(t));
      }
    } else {
      value = this.processType(typeCtxArr[0]);
    }
    const [min, max] = this.getMinMax(countCtx);
    return new QuantifiedValue(value, min, max);
  }

  processType(ctx) {
    if (ctx.simpleOrFQName()) {
      return new Value(this.resolveToIdentifier(ctx.simpleOrFQName().getText()));
    } else if (ctx.ref()) {
      return new RefValue(this.resolveToIdentifier(ctx.ref().simpleOrFQName().getText()));
    } else if (ctx.primitive()) {
      return new Value(new PrimitiveIdentifier(ctx.getText()));
    } else if (ctx.codeConstraint()) {
      if (ctx.codeConstraint().codeFromValueset()) {
        const vs = ctx.codeConstraint().codeFromValueset().valueset().getText();
        return new CodeFromValueSetValue(vs);
      } else {
        const fqn = ctx.codeConstraint().codeDescendent().processFullyQualifiedCode();
        return new CodeFromAncestorValue(this.processFullyQualifiedCode(fqn));
      }
    }
  }

  processFullyQualifiedCode(ctx) {
    const csAlias = ctx.ALL_CAPS().getText();
    const code = ctx.code().CODE().getText().substr(1); // substr to skip the '#'
    const concept = new Concept(csAlias, code);
    if (ctx.code().EXTRA_INFO()) {
      concept.label = stripDelimitersFromToken(ctx.code().EXTRA_INFO());
    }
    return concept;
  }

  exitShr(ctx) {
    // Update the concepts to use the real vocab URLs instead of aliases
    const ns = this._nsMap[this._currentNs];
    for (const def of ns.definitions) {
      const concepts = def.concepts.map(concept => {
        const url = this._vocabMap[concept.codesystem];
        if (typeof url != 'undefined') {
          return new Concept(url, concept.code);
        } else {
          return concept;
        }
      });
      def.concepts = concepts;
    }
  }

  getMinMax(countCtx) {
    const cards = countCtx.WHOLE_NUMBER();
    const min = parseInt(cards[0].getText(), 10);
    var max;
    if (cards.length == 2) {
      max = parseInt(cards[1].getText(), 10);
    }
    return [min, max];
  }

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      return new Identifier(ref.substr(0, lastDot), ref.substr(lastDot+1));
    }

    // No specified namespace -- is either primitive or in this namespace (TODO: Support Uses)
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

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes or brackets, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};