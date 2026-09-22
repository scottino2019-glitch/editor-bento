/**
 * Trova e sostituisce in modo sicuro e completo il primo slot vuoto tratteggiato
 * (border-dashed) presente nell'HTML, preservando le classi col-span / row-span
 * e ripulendo completamente tutti i tag e i testi del segnaposto.
 */
export function replaceFirstDashedSlot(
  html: string,
  snippetHtml: string,
  snippetTitle: string
): { success: boolean; newHtml: string; remainingSlots: number } {
  // Trova l'inizio del primo div con border-dashed
  const dashedRegex = /<div\b[^>]*\bborder-dashed\b[^>]*>/i;
  const match = html.match(dashedRegex);
  if (!match || match.index === undefined) {
    return { success: false, newHtml: html, remainingSlots: 0 };
  }

  const slotOpenTagStart = match.index;
  const slotOpenTag = match[0];

  // Controlla se c'è un blocco commenti immediatamente precedente per questo slot (es: <!-- SLOT 1 ... -->)
  let replaceStart = slotOpenTagStart;
  const textBefore = html.slice(0, slotOpenTagStart);
  const commentMatch = textBefore.match(/(?:\s*<!--[\s\S]*?-->\s*)+$/);
  if (commentMatch && commentMatch.index !== undefined) {
    if (/slot/i.test(commentMatch[0])) {
      replaceStart = commentMatch.index;
    }
  }

  // Scansiona bilanciando i tag <div e </div> per trovare la chiusura esatta del contenitore dello slot
  let depth = 0;
  let slotEndIndex = -1;
  const divTagRegex = /<\/?div\b[^>]*>/gi;
  divTagRegex.lastIndex = slotOpenTagStart;

  let tagMatch: RegExpExecArray | null;
  while ((tagMatch = divTagRegex.exec(html)) !== null) {
    const tag = tagMatch[0];
    if (tag.startsWith('</')) {
      depth--;
      if (depth === 0) {
        slotEndIndex = divTagRegex.lastIndex;
        break;
      }
    } else {
      depth++;
    }
  }

  if (slotEndIndex === -1) {
    return { success: false, newHtml: html, remainingSlots: 0 };
  }

  // Estrai eventuali span di griglia (es. col-span-2, sm:col-span-2, lg:col-span-2, lg:row-span-2, ecc.)
  const classAttrMatch = slotOpenTag.match(/class=["']([^"']+)["']/i);
  const slotClasses = classAttrMatch ? classAttrMatch[1] : '';
  const spanClasses = (slotClasses.match(/\b(?:(?:sm:|md:|lg:|xl:)?(?:col-span-|row-span-)\S+)\b/g) || []).join(' ');

  let contentToInsert = snippetHtml.trim();

  // Se lo slot aveva una spaziatura a più colonne/righe, applicala al componente inserito
  if (spanClasses) {
    const rootDivMatch = contentToInsert.match(/^(\s*<!--[\s\S]*?-->\s*)*(<div\b[^>]*class=["'])([^"']*)(["'][\s\S]*)/i);
    if (rootDivMatch) {
      const existingClasses = rootDivMatch[3];
      if (!existingClasses.includes('col-span-') && !existingClasses.includes('row-span-')) {
        const commentPrefix = rootDivMatch[1] || '';
        const opening = rootDivMatch[2];
        const rest = rootDivMatch[4];
        contentToInsert = `${commentPrefix}${opening}${spanClasses} ${existingClasses}${rest}`;
      }
    } else {
      contentToInsert = `<div class="${spanClasses}">\n  ${contentToInsert}\n</div>`;
    }
  }

  const replacement = `<!-- ============================================== -->\n<!-- Modulo Inserito: ${snippetTitle} -->\n<!-- ============================================== -->\n${contentToInsert}`;

  const updatedHtml = html.slice(0, replaceStart) + replacement + html.slice(slotEndIndex);
  const remainingSlots = (updatedHtml.match(/border-dashed/g) || []).length;

  return { success: true, newHtml: updatedHtml, remainingSlots };
}
