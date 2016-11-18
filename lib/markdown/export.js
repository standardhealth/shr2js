const {Group, QuantifiedValue, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, OrValues} = require('../models');

function exportToMarkdown(namespaces, alsoIncludeIndividuals=false) {
  const results = {};
  for (const ns of namespaces) {
    const mds = [];
    for (const def of ns.definitions) {
      try {
        mds.push(defToMarkdown(def));
      } catch(e) {
        console.error(`Failed to export ${def.identifier.fqn} to Markdown\n  `, e);
      }
    }
    const nsMD = `# ${ns.namespace}\n\n${mds.join('\n\n')}`;
    results[ns.namespace] = { markdown: nsMD, defMarkdowns: mds };
  }
  return results;
}

function defToMarkdown(def) {
  let name = def.identifier.name;
  if (def.isEntry) {
    name += ' [Entry]';
  }
  let md = `### ${name}\n`;
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

  md += `|---|---|\n`;
  if (def instanceof Group) {
    md += `| Type | group |\n`;
    for (const el of def.elements) {
      md += `| \`Element\` | ${valueToMarkdown(el)} |\n`;
    }
  } else {
    md += `| Type | ${valueToMarkdown(def.value)} |\n`;
  }
  return md.slice(0, -1); // removes trailing newline
}

function valueToMarkdown(value) {
  let card = '';
  if (value instanceof QuantifiedValue) {
    if (value.min == 0 && value.max == 1) {
      card = 'optional ';
    } else if (value.isMaxUnbounded()) {
      card = `${value.min} or more `;
    } else if (value.min == value.max) {
      card = value.min == 1 ? '' : `${value.min} `;
    } else {
      card = `${value.min} to ${value.max} `;
    }
    value = value.value;
  }

  if (value instanceof OrValues) {
    let md = `${card}Choice of: <ul>`;
    for (const option of value.values) {
      md += `<li>${valueToMarkdown(option)}</li>`;
    }
    return md + '</ul>';
  } else {
    return card + typeToMarkdown(value);
  }
}

function typeToMarkdown(value) {
  if (value instanceof CodeFromValueSetValue) {
    return `code from ${value.valueset}`;
  } if (value instanceof CodeFromAncestorValue) {
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
  case '':
  // http://browser.ihtsdotools.org/?perspective=full&conceptId1=404684003&edition=us-edition&release=v20160901&server=https://browser-aws-1.ihtsdotools.org/api/snomed&langRefset=900000000000509007
    url = `${concept.codesystem}/${concept.code}`;
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
  return `${identifier.namespace}.${identifier.name}`;
}

module.exports = {exportToMarkdown};