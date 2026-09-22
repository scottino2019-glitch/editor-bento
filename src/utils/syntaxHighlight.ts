/**
 * Ultra-fast, lightweight syntax highlighter for HTML & CSS.
 * Produces clean HTML spans with distinct colors:
 * - Tags: bright cyan/blue (#89dceb / #74c7ec / #89b4fa)
 * - Attribute names: yellow/orange (#fab387 / #f9e2af)
 * - Attribute values: green (#a6e3a1)
 * - Tailwind class names: emerald/cyan highlights
 * - Comments: soft gray italic (#6c7086)
 * - CSS selectors, properties, values, units
 */

export function highlightHtml(code: string): string {
  if (!code) return '';

  // Escape basic HTML entities to avoid unrendered tags
  // We will tokenize HTML syntax with regex
  const htmlRegex = /(<!--[\s\S]*?-->)|(<\/?[a-zA-Z0-9:-]+)|(\s+[a-zA-Z0-9_:-]+(?==))|(=(?:'[^']*'|"[^"]*"))|([>|\/?>])|([^<]+)/g;

  return code.replace(htmlRegex, (match, comment, tag, attrName, attrVal, tagEnd, text) => {
    if (comment) {
      return `<span style="color: #6c7086; font-style: italic;">${escapeHtml(comment)}</span>`;
    }
    if (tag) {
      const isClosing = tag.startsWith('</');
      const tagName = isClosing ? tag.slice(2) : tag.slice(1);
      const prefix = isClosing ? '&lt;/' : '&lt;';
      return `<span style="color: #89b4fa;">${prefix}</span><span style="color: #89dceb; font-weight: 600;">${escapeHtml(tagName)}</span>`;
    }
    if (attrName) {
      return `<span style="color: #fab387;">${escapeHtml(attrName)}</span>`;
    }
    if (attrVal) {
      // Attribute value like ="..."
      // Check if it's class="..." to give Tailwind classes vivid styling
      const isClassAttr = match.includes('class=') || match.includes('className=');
      const valContent = attrVal.slice(1); // include equals
      const quoteChar = valContent.charAt(1);
      const innerVal = valContent.slice(2, -1);

      return `<span style="color: #cdd6f4;">=</span><span style="color: #a6e3a1;">${escapeHtml(quoteChar)}</span><span style="color: ${isClassAttr ? '#a6e3a1' : '#a6e3a1'};">${escapeHtml(innerVal)}</span><span style="color: #a6e3a1;">${escapeHtml(quoteChar)}</span>`;
    }
    if (tagEnd) {
      return `<span style="color: #89b4fa;">${escapeHtml(tagEnd)}</span>`;
    }
    if (text) {
      return `<span style="color: #cdd6f4;">${escapeHtml(text)}</span>`;
    }
    return escapeHtml(match);
  });
}

export function highlightCss(code: string): string {
  if (!code) return '';

  const cssRegex = /(\/\*[\s\S]*?\*\/)|([.#][a-zA-Z0-9_-]+)|([a-zA-Z-]+(?=\s*:))|(:)|([^{};]+(?=;|\}))|([{};])/g;

  return code.replace(cssRegex, (match, comment, selector, property, colon, value, brace) => {
    if (comment) {
      return `<span style="color: #6c7086; font-style: italic;">${escapeHtml(comment)}</span>`;
    }
    if (selector) {
      return `<span style="color: #fab387; font-weight: 600;">${escapeHtml(selector)}</span>`;
    }
    if (property) {
      return `<span style="color: #89dceb;">${escapeHtml(property)}</span>`;
    }
    if (colon) {
      return `<span style="color: #cdd6f4;">:</span>`;
    }
    if (value) {
      return `<span style="color: #a6e3a1;">${escapeHtml(value)}</span>`;
    }
    if (brace) {
      return `<span style="color: #cba6f7; font-weight: 600;">${escapeHtml(brace)}</span>`;
    }
    return escapeHtml(match);
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
