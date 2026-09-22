/**
 * Lightweight indentation and formatting utility for HTML and CSS
 */

export function formatHtml(html: string): string {
  if (!html.trim()) return '';

  // Clean extra spaces and newlines
  const tokens = html
    .replace(/>\s*</g, '><')
    .replace(/<!--[\s\S]*?-->/g, match => match.trim())
    .split(/(<[^>]+>)/g)
    .filter(token => token.trim().length > 0);

  let indentLevel = 0;
  const indentStr = '  ';
  const result: string[] = [];

  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim();
    if (!token) continue;

    // Comment
    if (token.startsWith('<!--')) {
      result.push(indentStr.repeat(indentLevel) + token);
      continue;
    }

    // Closing tag: </tag>
    if (token.startsWith('</')) {
      indentLevel = Math.max(0, indentLevel - 1);
      result.push(indentStr.repeat(indentLevel) + token);
      continue;
    }

    // Opening or self-closing tag: <tag ...>
    if (token.startsWith('<')) {
      const tagNameMatch = token.match(/^<([a-zA-Z0-9-]+)/);
      const tagName = tagNameMatch ? tagNameMatch[1].toLowerCase() : '';
      const isSelfClosing = token.endsWith('/>') || voidTags.has(tagName);

      result.push(indentStr.repeat(indentLevel) + token);

      if (!isSelfClosing) {
        indentLevel++;
      }
      continue;
    }

    // Inner text content
    result.push(indentStr.repeat(indentLevel) + token);
  }

  return result.join('\n');
}

export function formatCss(css: string): string {
  if (!css.trim()) return '';

  let formatted = '';
  let indent = 0;
  const lines = css
    .replace(/\{/g, ' {\n')
    .replace(/\}/g, '\n}\n')
    .replace(/;/g, ';\n')
    .split('\n');

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.includes('}')) {
      indent = Math.max(0, indent - 1);
    }

    formatted += '  '.repeat(indent) + line + '\n';

    if (line.includes('{')) {
      indent++;
    }
  }

  return formatted.trim();
}
