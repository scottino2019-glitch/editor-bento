import { useState, useRef, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { SnippetTopDropdown } from './components/SnippetTopDropdown';
import { CodeEditor } from './components/CodeEditor';
import { LivePreview } from './components/LivePreview';
import { SnippetPreviewModal } from './components/SnippetPreviewModal';
import { ExportModal } from './components/ExportModal';
import { BENTO_SNIPPETS } from './data/snippets';
import { STARTER_TEMPLATES } from './data/templates';
import { formatHtml, formatCss } from './utils/codeFormatter';
import { replaceFirstDashedSlot } from './utils/slotReplacer';
import { Snippet, ViewportMode, PreviewTheme, ActiveTab, StarterTemplate } from './types';
import { Check } from 'lucide-react';

interface HistoryEntry {
  html: string;
  css: string;
}

export default function App() {
  const STORAGE_KEY_HTML = 'bento_studio_html_v14';
  const STORAGE_KEY_CSS = 'bento_studio_css_v14';

  // State
  const [htmlCode, setHtmlCode] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_HTML);
    return saved !== null ? saved : STARTER_TEMPLATES[0].html;
  });

  const [cssCode, setCssCode] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CSS);
    return saved !== null ? saved : (STARTER_TEMPLATES[0].css || '');
  });

  // History stack for Undo/Redo
  const [history, setHistory] = useState<HistoryEntry[]>([
    { html: STARTER_TEMPLATES[0].html, css: STARTER_TEMPLATES[0].css || '' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Editor and Viewport state
  const [activeTab, setActiveTab] = useState<ActiveTab>('html');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [previewTheme, setPreviewTheme] = useState<PreviewTheme>('dark');
  const [isSnippetMenuOpen, setIsSnippetMenuOpen] = useState(false);
  const [previewSnippet, setPreviewSnippet] = useState<Snippet | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  // Split view ratio on desktop (percentage width for left editor pane)
  const [splitRatio, setSplitRatio] = useState<number>(50);
  const isDraggingSplitRef = useRef(false);

  const editorRef = useRef<HTMLTextAreaElement | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const recordHistory = useCallback((newHtml: string, newCss: string) => {
    setHistory(prev => {
      const upToCurrent = prev.slice(0, historyIndex + 1);
      if (upToCurrent.length > 30) {
        upToCurrent.shift();
      }
      return [...upToCurrent, { html: newHtml, css: newCss }];
    });
    setHistoryIndex(prev => prev + 1);
  }, [historyIndex]);

  const handleHtmlChange = (newHtml: string) => {
    setHtmlCode(newHtml);
    localStorage.setItem(STORAGE_KEY_HTML, newHtml);
  };

  const handleCssChange = (newCss: string) => {
    setCssCode(newCss);
    localStorage.setItem(STORAGE_KEY_CSS, newCss);
  };

  // Debounced history
  useEffect(() => {
    const handler = setTimeout(() => {
      const current = history[historyIndex];
      if (!current || current.html !== htmlCode || current.css !== cssCode) {
        recordHistory(htmlCode, cssCode);
      }
    }, 600);

    return () => clearTimeout(handler);
  }, [htmlCode, cssCode]);

  // Undo / Redo
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const handleUndo = () => {
    if (!canUndo) return;
    const targetIdx = historyIndex - 1;
    const item = history[targetIdx];
    if (item) {
      setHtmlCode(item.html);
      setCssCode(item.css);
      setHistoryIndex(targetIdx);
      localStorage.setItem(STORAGE_KEY_HTML, item.html);
      localStorage.setItem(STORAGE_KEY_CSS, item.css);
      showToast('Azione annullata');
    }
  };

  const handleRedo = () => {
    if (!canRedo) return;
    const targetIdx = historyIndex + 1;
    const item = history[targetIdx];
    if (item) {
      setHtmlCode(item.html);
      setCssCode(item.css);
      setHistoryIndex(targetIdx);
      localStorage.setItem(STORAGE_KEY_HTML, item.html);
      localStorage.setItem(STORAGE_KEY_CSS, item.css);
      showToast('Azione ripristinata');
    }
  };

  // Aggiorna Anteprima
  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
    showToast('Anteprima aggiornata');
  };

  // Elimina / Cancella Tutto
  const handleClear = () => {
    // Svuota completamente l'HTML e il CSS (o imposta la tabula rasa)
    const emptyHtml = '';
    const emptyCss = '';
    handleHtmlChange(emptyHtml);
    handleCssChange(emptyCss);
    recordHistory(emptyHtml, emptyCss);
    showToast('Codice eliminato. Canvas ripulito.');
  };

  // Code Formatter
  const handleFormat = () => {
    try {
      const formattedHtml = formatHtml(htmlCode);
      const formattedCss = formatCss(cssCode);
      handleHtmlChange(formattedHtml);
      handleCssChange(formattedCss);
      recordHistory(formattedHtml, formattedCss);
      showToast('Codice formattato con successo');
    } catch {
      showToast('Impossibile formattare');
    }
  };

  // Template select
  const handleSelectTemplate = (tmpl: StarterTemplate) => {
    const css = tmpl.css || '';
    handleHtmlChange(tmpl.html);
    handleCssChange(css);
    recordHistory(tmpl.html, css);
    showToast(`Applicato: ${tmpl.name}`);
  };

  // Insert Snippet with smart slot target & replace support
  const handleInsertSnippet = (snippet: Snippet, mode: 'slot' | 'replace' = 'slot') => {
    let newHtml = htmlCode;
    const isGrid = snippet.category === 'griglie';

    // 1. If mode === 'replace' or current htmlCode is blank
    if (mode === 'replace' || !htmlCode || htmlCode.trim() === '') {
      if (isGrid && !snippet.html.includes('min-h-screen')) {
        newHtml = `<!-- Bento Studio - Layout a Griglia Centrato -->\n<div class="min-h-screen bg-[#0d1117] text-slate-100 font-sans p-4 sm:p-8 flex flex-col items-center">\n  <div class="w-full max-w-6xl mx-auto space-y-6 my-auto">\n    ${snippet.html}\n  </div>\n</div>`;
      } else {
        newHtml = snippet.html;
      }
      handleHtmlChange(newHtml);
      recordHistory(newHtml, cssCode);
      showToast(isGrid ? `Griglia vuota applicata!` : `Canvas sostituito con "${snippet.title}"!`);
      if (activeTab !== 'html') setActiveTab('html');
      return;
    }

    // 2. If user has text selection in the editor, replace selection
    if (
      editorRef.current &&
      editorRef.current.selectionStart !== undefined &&
      editorRef.current.selectionEnd !== undefined &&
      editorRef.current.selectionEnd > editorRef.current.selectionStart
    ) {
      const start = editorRef.current.selectionStart;
      const end = editorRef.current.selectionEnd;
      newHtml = htmlCode.slice(0, start) + snippet.html + htmlCode.slice(end);
      handleHtmlChange(newHtml);
      recordHistory(newHtml, cssCode);
      showToast(`Modulo inserito nell'area selezionata!`);
      if (activeTab !== 'html') setActiveTab('html');
      return;
    }

    // 3. If user placed their cursor inside the code (cursorPosition > 0)
    if (
      editorRef.current &&
      editorRef.current.selectionStart !== undefined &&
      editorRef.current.selectionStart > 0 &&
      cursorPosition > 0
    ) {
      const pos = editorRef.current.selectionStart;
      newHtml = htmlCode.slice(0, pos) + '\n' + snippet.html + '\n' + htmlCode.slice(pos);
      handleHtmlChange(newHtml);
      recordHistory(newHtml, cssCode);
      showToast(`Modulo inserito alla posizione del cursore!`);
      if (activeTab !== 'html') setActiveTab('html');
      return;
    }

    // 4. Smart Slot Insertion:
    // If the HTML has an empty slot placeholder (dashed slot with border-dashed)
    // Replace the entire slot container cleanly using the balanced tag replacer!
    if (!isGrid) {
      const slotResult = replaceFirstDashedSlot(newHtml, snippet.html, snippet.title);
      if (slotResult.success) {
        newHtml = slotResult.newHtml;
        handleHtmlChange(newHtml);
        recordHistory(newHtml, cssCode);
        const slotsMsg = slotResult.remainingSlots > 0 
          ? `✓ "${snippet.title}" inserito nello slot! (${slotResult.remainingSlots} slot rimasti)`
          : `✓ "${snippet.title}" inserito nell'ultimo slot!`;
        showToast(slotsMsg);
        if (activeTab !== 'html') setActiveTab('html');
        return;
      }
    }

    // 5. If no dashed slot is found, check if there is a <main ...> or <div class="...grid..."> and append inside before its closing tag!
    const gridCloseMatch = newHtml.match(/(<\/main>|<\/div>\s*<\/div>\s*<\/div>\s*$)/i);
    if (gridCloseMatch && gridCloseMatch.index !== undefined) {
      const idx = gridCloseMatch.index;
      newHtml = newHtml.slice(0, idx) + `\n      <!-- Nuovo Modulo: ${snippet.title} -->\n      ${snippet.html.split('\n').join('\n      ')}\n    ` + newHtml.slice(idx);
    } else {
      newHtml = `${newHtml}\n\n<!-- Nuovo Modulo: ${snippet.title} -->\n${snippet.html}`;
    }

    handleHtmlChange(newHtml);
    recordHistory(newHtml, cssCode);
    showToast(`✓ Modulo "${snippet.title}" aggiunto al layout!`);
    if (activeTab !== 'html') setActiveTab('html');
  };

  // Open Preview in New Tab
  const handleOpenNewTab = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anteprima Bento Studio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      background-color: #0d1117;
    }
    ${cssCode}
  </style>
</head>
<body class="antialiased min-h-screen text-neutral-100">
  ${htmlCode}
</body>
</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        handleFormat();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleRefresh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canUndo, canRedo, historyIndex, history]);

  // Mouse Dragging to resize Split Pane
  const handleMouseDownResize = () => {
    isDraggingSplitRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingSplitRef.current) return;
      const totalWidth = window.innerWidth;
      const newRatio = Math.min(Math.max((e.clientX / totalWidth) * 100, 20), 80);
      setSplitRatio(newRatio);
    };

    const handleMouseUp = () => {
      isDraggingSplitRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#181825] text-[#cdd6f4] overflow-hidden">
      {/* Top Navbar with Retractable Snippet Menu Trigger, Aggiorna and Elimina */}
      <Navbar
        onFormat={handleFormat}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={canUndo}
        canRedo={canRedo}
        onClear={handleClear}
        onRefresh={handleRefresh}
        onExport={() => setIsExportOpen(true)}
        onOpenNewTab={handleOpenNewTab}
        viewport={viewport}
        onViewportChange={setViewport}
        previewTheme={previewTheme}
        onPreviewThemeChange={setPreviewTheme}
        isSnippetMenuOpen={isSnippetMenuOpen}
        onToggleSnippetMenu={() => setIsSnippetMenuOpen(prev => !prev)}
        templates={STARTER_TEMPLATES}
        onSelectTemplate={handleSelectTemplate}
        snippetCount={BENTO_SNIPPETS.length}
      />

      {/* Retractable Top Dropdown for Snippets */}
      <SnippetTopDropdown
        isOpen={isSnippetMenuOpen}
        onClose={() => setIsSnippetMenuOpen(false)}
        snippets={BENTO_SNIPPETS}
        onInsertSnippet={handleInsertSnippet}
        onPreviewSnippet={setPreviewSnippet}
      />

      {/* Main Workspace Layout: Editor and Live Preview STRICTLY SIDE-BY-SIDE */}
      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-3.5rem)] overflow-hidden relative">
        {/* Left: Code Editor Pane */}
        <div 
          style={{ width: `${splitRatio}%` }}
          className="h-1/2 md:h-full flex flex-col min-w-[280px]"
        >
          <CodeEditor
            activeTab={activeTab}
            onTabChange={setActiveTab}
            htmlCode={htmlCode}
            cssCode={cssCode}
            onHtmlChange={handleHtmlChange}
            onCssChange={handleCssChange}
            onCursorChange={setCursorPosition}
            editorRef={editorRef}
          />
        </div>

        {/* Resizable Divider bar between Editor and Preview */}
        <div
          onMouseDown={handleMouseDownResize}
          className="hidden md:flex w-1.5 hover:w-2 bg-[#313244] hover:bg-[#89b4fa] transition-all cursor-col-resize items-center justify-center group shrink-0 z-10 select-none"
          title="Trascina per ridimensionare editor e anteprima"
        >
          <div className="w-0.5 h-8 rounded-full bg-[#585b70] group-hover:bg-[#11111b]" />
        </div>

        {/* Right: Live Preview Pane (Sempre visibile e sincronizzata in tempo reale) */}
        <div 
          style={{ width: `${100 - splitRatio}%` }}
          className="h-1/2 md:h-full flex flex-col min-w-[300px]"
        >
          <LivePreview
            htmlCode={htmlCode}
            cssCode={cssCode}
            viewport={viewport}
            previewTheme={previewTheme}
            onOpenNewTab={handleOpenNewTab}
            onClear={handleClear}
            onRefresh={handleRefresh}
            refreshTrigger={refreshTrigger}
          />
        </div>
      </main>

      {/* Snippet Preview Modal */}
      {previewSnippet && (
        <SnippetPreviewModal
          snippet={previewSnippet}
          onClose={() => setPreviewSnippet(null)}
          onInsert={handleInsertSnippet}
        />
      )}

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        htmlCode={htmlCode}
        cssCode={cssCode}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1e1e2e] text-[#cdd6f4] border border-[#45475a] shadow-2xl font-mono text-xs animate-in slide-in-from-bottom-2 duration-200">
          <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
