const mdIt = require('markdown-it');
const {Group, QuantifiedValue, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, OrValues} = require('../models');

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

function exportToMarkdown(namespaces) {
  const dictionary = new Dictionary();
  for (const ns of namespaces) {
    dictionary.registerNamespace(ns);
  }

  let indexMD = `# Standard Health Record`;
  const namespaceMDs = {};
  for (const ns of namespaces) {
    let nsMD = `# ${ns.namespace}`;
    indexMD += `\n\n## [${ns.namespace}](${toURLRelativeToBase(ns.namespace)})\n`;
    const defMDs = {};
    let defs = ns.definitions.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
    for (const def of defs) {
      defMDs[def.identifier.name] = defToMarkdown(def, dictionary);
      nsMD += `\n\n${defMDs[def.identifier.name]}`;
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
  <link rel="stylesheet" href="${pathToBase}github-markdown.css">
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

function defToMarkdown(def, dictionary) {
  let name = def.identifier.name;
  if (def.isEntry) {
    name += ' [Entry]';
  }
  let md = `### <a name="${def.identifier.name}"></a>${name}\n`;
  if (typeof def.description != 'undefined') {
    md += `${def.description} `;
  }

  if (def.concepts.length > 0) {
    for (const concept of def.concepts) {
      md += `${conceptToMarkdown(concept)}, `;
    }
    md = md.slice(0, -2);
  }
  md += `\n\n`;

  md += `| | | |\n|---|---|---|\n`;
  if (def instanceof Group) {
    for (const el of def.elements) {
      if (el.value instanceof OrValues) {
        md += `|Choice|${quantifiedValueToMarkdown(el)}||\n`;
        for (const option of el.value.values) {
          md += `|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\|&nbsp;${identifierToMarkdown(option.identifier)} | ${quantifiedValueToMarkdown(option)} | ${elementDescription(option, dictionary)} |\n`;
        }
      } else {
        md += `| ${identifierToMarkdown(el.value.identifier)} | ${quantifiedValueToMarkdown(el)} | ${elementDescription(el, dictionary)} |\n`;
      }
    }
  } else {
    md += `| \`Value\` | ${valueToMarkdown(def.value)} ||\n`;
  }
  return md.slice(0, -1); // removes trailing newline
}

function quantifiedValueToMarkdown(value) {
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

function elementDescription(value, dictionary) {
  if (value instanceof QuantifiedValue) {
    value = value.value;
  }

  if (value instanceof OrValues) {
    // Still *can* happen when a choice is nested in a choice
    let md = `Choice of: <ul>`;
    for (const option of value.values) {
      md += `<li>${valueToMarkdown(option)}</li>`;
    }
    return md + '</ul>';
  }

  const def = dictionary.lookup(value.identifier);
  if (def && def.description) {
    return def.description;
  }

  return '';
}


function valueToMarkdown(value) {
  if (value instanceof QuantifiedValue) {
    value = value.value;
  }

  if (value instanceof OrValues) {
    let md = `Choice of: <ul>`;
    for (const option of value.values) {
      md += `<li>${valueToMarkdown(option)}</li>`;
    }
    return md + '</ul>';
  } else {
    return typeToMarkdown(value);
  }
}

function typeToMarkdown(value) {
  if (value instanceof CodeFromValueSetValue) {
    return `code from ${value.valueset}`;
  } else if (value instanceof CodeFromAncestorValue) {
    return `code descending from ${conceptToMarkdown(value.ancestor)}`;
  } else if (value instanceof RefValue) {
    return `reference to ${identifierToMarkdown(value.identifier)}`;
  } else if (value.identifier.isPrimitive()) {
    return value.identifier.name;
  }

  // We fell through, so this is another element or entry type
  return identifierToMarkdown(value.identifier);
}

function conceptToMarkdown(concept) {
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

function identifierToMarkdown(identifier) {
  return `[\`${identifier.name}\`](${toURLRelativeToNamespace(identifier)})`;
}

function toURLRelativeToBase(namespace, name) {
  let url = `${namespace.split('.').join('/')}/index.md#`;
  if (name) {
    url += name;
  }
  return url;
}

function toURLRelativeToNamespace(identifier) {
  return `../${identifier.namespace.split('.').splice(-1)}/index.md#${identifier.name}`;
}

module.exports = {exportToMarkdown, exportToHTML};