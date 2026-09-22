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

  // Tokenize HTML with full support for unclosed and closed quotes, attributes, and tags
  const htmlRegex = /(<!--[\s\S]*?-->)|(<\/?[a-zA-Z0-9:-]+)|(\s+[a-zA-Z0-9_:-]+(?==|\s|>|\/))|(=(?:'[^']*'?|"[^"]*"?|[^\s>]+))|([>|\/?>])|([^<]+)/g;

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
      // Attribute value starting with '='
      const rest = attrVal.slice(1);
      const quote = rest.charAt(0);

      if (quote === '"' || quote === "'") {
        const hasClosingQuote = rest.length > 1 && rest.endsWith(quote);
        const valueInside = hasClosingQuote ? rest.slice(1, -1) : rest.slice(1);
        const closingQuote = hasClosingQuote ? quote : '';

        return `<span style="color: #cdd6f4;">=</span><span style="color: #a6e3a1;">${escapeHtml(quote)}</span><span style="color: #a6e3a1;">${escapeHtml(valueInside)}</span>${closingQuote ? `<span style="color: #a6e3a1;">${escapeHtml(closingQuote)}</span>` : ''}`;
      }

      // Unquoted attribute value
      return `<span style="color: #cdd6f4;">=</span><span style="color: #a6e3a1;">${escapeHtml(rest)}</span>`;
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

  const cssRegex = /(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|([.#][a-zA-Z0-9_-]+)|([a-zA-Z-]+(?=\s*:))|(:)|([^{};]+(?=;|\}))|([{};])/g;

  return code.replace(cssRegex, (match, comment, str, selector, property, colon, value, brace) => {
    if (comment) {
      return `<span style="color: #6c7086; font-style: italic;">${escapeHtml(comment)}</span>`;
    }
    if (str) {
      return `<span style="color: #a6e3a1;">${escapeHtml(str)}</span>`;
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
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
