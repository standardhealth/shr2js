const mdIt = require('markdown-it');
const {Group, QuantifiedValue, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, OrValues} = require('../models');

function exportToMarkdown(namespaces) {
  const exporter = new MarkdownExporter(namespaces);
  return exporter.export();
}

function exportToHTML(namespaces) {
  const md2html = new mdIt({ html: true });
  const md = exportToMarkdown(namespaces);
  const indexHTML = embedInHTMLPage('Standard Health Record', md2html.render(md.index));
  const namespaceHTMLs = {};
  for (const ns of Object.keys(md.namespaces)) {
    const namespaceHTML = embedInHTMLPage(`SHR: ${ns}`, md2html.render(md.namespaces[ns].index), ns);
    const definitionHTMLs = {};
    for (const def of Object.keys(md.namespaces[ns].definitions)) {
      definitionHTMLs[def] = embedInHTMLPage(def, md2html.render(md.namespaces[ns].definitions[def]), ns);
    }
    namespaceHTMLs[ns] = {
      index: namespaceHTML,
      definitions: definitionHTMLs
    };
  }
  return {
    index: indexHTML,
    namespaces: namespaceHTMLs
  };
}

function embedInHTMLPage(title, body, namespace) {
  // First replace all links to .md to be links to .html
  body = body.replace(/\.md#/g, '.html#');
  // Then figure out the relative path to the css
  let pathToBase = '';
  if (namespace) {
    const depth = namespace.split('.').length;
    for (let i=0; i < depth; i++) {
      pathToBase += '../';
    }
  }
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>${title}</title>
  <link rel="stylesheet" href="${pathToBase}shr-github-markdown.css">
  <style>
      thead, th {display: none;}
      .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
      }
  </style>
</head>
<body class="markdown-body">
${body}
</body>
</html>`;
}

class Dictionary {
  constructor() {
    this._map = {};
  }

  registerNamespace(ns) {
    this._map[ns.namespace] = ns;
  }

  lookup(identifier) {
    const ns = this._map[identifier.namespace];
    if (typeof ns != 'undefined') {
      return ns.lookup(identifier.name);
    }
  }
}


class MarkdownExporter {
  constructor(namespaces) {
    this._namespaces = namespaces;
    this._dictionary = new Dictionary();
    this._currentNamespace = '';
    for (const ns of namespaces) {
      this._dictionary.registerNamespace(ns);
    }
  }

  export() {
    let indexMD = `# Standard Health Record\n`;
    const namespaceMDs = {};
    for (const ns of this._namespaces) {
      this._currentNamespace = ns;
      let nsMD = `# ${ns.namespace}`;
      indexMD += `\n## [${ns.namespace}](${toURLRelativeToBase(ns.namespace)})\n`;
      const defMDs = {};
      let defs = ns.definitions.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
      for (const def of defs) {
        defMDs[def.identifier.name] = this.defToMarkdown(def);
        nsMD += `\n\n${defMDs[def.identifier.name]}`.replace(/\(index\.md#/g, '(#'); // fix index.md#Foo to be #Foo
        indexMD += `- [${def.identifier.name}](${toURLRelativeToBase(ns.namespace, def.identifier.name)})\n`;
      }
      namespaceMDs[ns.namespace] = {
        index: nsMD,
        definitions: defMDs
      };
    }
    return {
      index: indexMD,
      namespaces: namespaceMDs
    };
  }

  defToMarkdown(def) {
    let name = def.identifier.name;
    if (def.isEntry) {
      name += ' [Entry]';
    }
    let md = `### <a name="${def.identifier.name}"></a>${name}\n`;
    if (typeof def.description != 'undefined') {
      md += `${def.description}`;
    }

    if (def.concepts.length > 0) {
      for (const concept of def.concepts) {
        md += ` ${conceptMD(concept)},`;
      }
      md = md.slice(0, -1);
    }
    md += `\n\n`;

    // Create the table heading
    md += tr();
    md += tr('---','---','---');
    // Create the table of values
    if (def instanceof Group) {
      for (const el of def.elements) {
        if (el.value instanceof OrValues) {
          md += this.choiceTr(el);
        } else {
          md += tr(this.identifierMD(el), cardinalityMD(el), this.elementDescription(el));
        }
      }
    } else {
      md += tr('`Value`', this.valueMD(def.value));
    }
    return md.slice(0, -1); // removes trailing newline
  }

  choiceTr(el, indent=0) {
    let md = tr(indentIt('Choice', indent), cardinalityMD(el));
    for (let option of el.value.values) {
      if (!(option instanceof QuantifiedValue)) {
        option = new QuantifiedValue(option, 1, 1);
      }

      if (option.value instanceof OrValues) {
        md += this.choiceTr(option, indent+1);
      } else {
        md += tr(indentIt(this.identifierMD(option), indent+1), cardinalityMD(option), this.elementDescription(option));
      }
    }
    return md;
  }

  elementDescription(value) {
    if (value instanceof QuantifiedValue) {
      value = value.value;
    }

    if (value instanceof OrValues) {
      // Still *can* happen when a choice is nested in a choice
      return this.inlineChoice(value);
    }

    const def = this._dictionary.lookup(value.identifier);
    if (def && def.description) {
      return def.description;
    }

    return '';
  }

  valueMD(value) {
    if (value instanceof QuantifiedValue) {
      value = value.value;
    }

    if (value instanceof OrValues) {
      return this.inlineChoice(value);
    } else if (value instanceof CodeFromValueSetValue) {
      return `code from ${value.valueset}`;
    } else if (value instanceof CodeFromAncestorValue) {
      return `code descending from ${conceptMD(value.ancestor)}`;
    } else if (value instanceof RefValue) {
      return `reference to ${this.identifierMD(value)}`;
    } else if (value.identifier.isPrimitive()) {
      return value.identifier.name;
    }

    // We fell through, so this is another element or entry type
    return this.identifierMD(value);
  }

  inlineChoice(value) {
    let md = `Choice of: <ul>`;
    for (const option of value.values) {
      const quantifier = cardinalityMD(option);
      md += `<li>${quantifier == 1? '' : quantifier + ' '}${this.valueMD(option)}</li>`;
    }
    return md + '</ul>';
  }

  identifierMD(value) {
    if (value instanceof QuantifiedValue) {
      value = value.value;
    }

    return `[\`${value.identifier.name}\`](${this.toURLRelativeToNamespace(value.identifier)})`;
  }

  toURLRelativeToNamespace(identifier) {
    const toParts = identifier.namespace.split('.');
    const fromParts = this._currentNamespace.namespace.split('.');
    const pathParts = [];
    var i;
    for (i=0; i < toParts.length && i < fromParts.length && toParts[i] == fromParts[i]; i++);
    for (let j=fromParts.length-1; j >= i; j--) {
      pathParts.push('..');
    }
    for (; i < toParts.length; i++) {
      pathParts.push(toParts[i]);
    }
    pathParts.push('index.md');
    return pathParts.join('/') + `#${identifier.name}`;
  }
}

function conceptMD(concept) {
  var url;
  switch (concept.codesystem) {
  case 'http://uts.nlm.nih.gov/metathesaurus':
    url = `https://uts.nlm.nih.gov/metathesaurus.html?cui=${concept.code}`;
    break;
  case 'http://snomed.info/sct':
    url = `https://uts.nlm.nih.gov/snomedctBrowser.html?conceptId=${concept.code}`;
    break;
  case 'http://loinc.org':
    url = `http://s.details.loinc.org/LOINC/${concept.code}.html`;
    break;
  case 'http://unitsofmeasure.org':
    url = 'http://unitsofmeasure.org/ucum.html#section-Alphabetic-Index-By-Symbol';
    break;
  default:
    url = `${concept.codesystem}/${concept.code}`;
  }
  let md = `[${concept.code}](${url})`;
  if (concept.label) {
    md = `${md} _(${concept.label})_`;
  }
  return md;
}

function cardinalityMD(value) {
  let card = '1';
  if (value instanceof QuantifiedValue) {
    if (value.min == 0 && value.max == 1) {
      card = 'optional';
    } else if (value.isMaxUnbounded()) {
      card = `${value.min}&nbsp;or&nbsp;more`;
    } else if (value.min == value.max) {
      card = `${value.min}`;
    } else {
      card = `${value.min}&nbsp;to&nbsp;${value.max}`;
    }
  }
  return card;
}

function tr(col1='', col2='', col3='') {
  return `| ${col1} | ${col2} | ${col3} |\n`;
}

function indentIt(text, indent) {
  if (indent == 0) return text;
  let indentSpace = '';
  for (let i = 0; i < indent; i++) {
    indentSpace += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\|';
  }
  return `${indentSpace}&nbsp;${text}`;
}

function toURLRelativeToBase(namespace, name) {
  let url = `${namespace.split('.').join('/')}/index.md#`;
  if (name) {
    url += name;
  }
  return url;
}

module.exports = {exportToMarkdown, exportToHTML};