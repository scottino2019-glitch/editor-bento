import React, { useRef, useEffect, useMemo, useState } from 'react';
import { FileCode2, Palette, Copy, Check, Eye, Type, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';
import { highlightHtml, highlightCss } from '../utils/syntaxHighlight';

interface CodeEditorProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  htmlCode: string;
  cssCode: string;
  onHtmlChange: (code: string) => void;
  onCssChange: (code: string) => void;
  onCursorChange?: (pos: number) => void;
  editorRef?: React.RefObject<HTMLTextAreaElement | null>;
}

export function CodeEditor({
  activeTab,
  onTabChange,
  htmlCode,
  cssCode,
  onHtmlChange,
  onCssChange,
  onCursorChange,
  editorRef,
}: CodeEditorProps) {
  const localHtmlRef = useRef<HTMLTextAreaElement>(null);
  const localCssRef = useRef<HTMLTextAreaElement>(null);
  const preHtmlRef = useRef<HTMLPreElement>(null);
  const preCssRef = useRef<HTMLPreElement>(null);
  const htmlLineGutterRef = useRef<HTMLDivElement>(null);
  const cssLineGutterRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base'); // 'base' = 14px, 'lg' = 16px, 'sm' = 13px

  const activeTextareaRef = activeTab === 'html' ? (editorRef || localHtmlRef) : localCssRef;
  const currentCode = activeTab === 'html' ? htmlCode : cssCode;

  // Memoized syntax highlighted code
  const highlightedCode = useMemo(() => {
    if (activeTab === 'html') {
      return highlightHtml(htmlCode);
    }
    return highlightCss(cssCode);
  }, [activeTab, htmlCode, cssCode]);

  // Calculate lines for gutter
  const lineCount = (currentCode.match(/\n/g) || []).length + 1;
  const linesArray = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  // Sync scroll between textarea, syntax highlight pre, and line numbers gutter
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const gutter = activeTab === 'html' ? htmlLineGutterRef.current : cssLineGutterRef.current;
    const pre = activeTab === 'html' ? preHtmlRef.current : preCssRef.current;

    if (gutter) {
      gutter.scrollTop = target.scrollTop;
    }
    if (pre) {
      pre.scrollTop = target.scrollTop;
      pre.scrollLeft = target.scrollLeft;
    }
  };

  // Track cursor position
  const handleSelectOrKeyUp = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    if (onCursorChange) {
      onCursorChange(target.selectionStart);
    }
  };

  // Support Tab key (indent 2 spaces instead of losing focus)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const updated = currentCode.substring(0, start) + '  ' + currentCode.substring(end);

      if (activeTab === 'html') {
        onHtmlChange(updated);
      } else {
        onCssChange(updated);
      }

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        if (onCursorChange) onCursorChange(start + 2);
      }, 0);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'lg':
        return {
          font: 'text-[15px] leading-[24px]',
          lineHeight: '24px',
        };
      case 'sm':
        return {
          font: 'text-[12.5px] leading-[20px]',
          lineHeight: '20px',
        };
      case 'base':
      default:
        return {
          font: 'text-[14px] leading-[22px]',
          lineHeight: '22px',
        };
    }
  };

  const fsConfig = getFontSizeClasses();

  return (
    <div className="flex flex-col h-full bg-[#181825] border-r border-[#313244] overflow-hidden select-none">
      {/* Editor Tab Bar & Controls */}
      <div className="h-11 bg-[#1e1e2e] border-b border-[#313244] flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTabChange('html')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition ${
              activeTab === 'html'
                ? 'bg-[#313244] text-[#89b4fa] border border-[#45475a] shadow-sm font-semibold'
                : 'text-[#a6adc8] hover:text-[#cdd6f4] hover:bg-[#313244]/50'
            }`}
          >
            <FileCode2 className="w-4 h-4 text-[#89b4fa]" />
            <span>index.html</span>
            <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-[#181825] text-[#a6adc8] font-mono">
              {(htmlCode.match(/\n/g) || []).length + 1}
            </span>
          </button>

          <button
            onClick={() => onTabChange('css')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition ${
              activeTab === 'css'
                ? 'bg-[#313244] text-[#89dceb] border border-[#45475a] shadow-sm font-semibold'
                : 'text-[#a6adc8] hover:text-[#cdd6f4] hover:bg-[#313244]/50'
            }`}
          >
            <Palette className="w-4 h-4 text-[#89dceb]" />
            <span>style.css</span>
            <span className="text-[10px] text-[#6c7086] font-mono hidden sm:inline">
              (Opzionale)
            </span>
          </button>
        </div>

        {/* Font Size & Copy Actions */}
        <div className="flex items-center gap-1.5">
          {/* Font Size Selector */}
          <div className="flex items-center bg-[#181825] p-0.5 rounded-xl border border-[#313244]">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 rounded-lg text-[11px] font-mono transition ${
                fontSize === 'sm' ? 'bg-[#313244] text-white' : 'text-[#6c7086] hover:text-[#cdd6f4]'
              }`}
              title="Font Piccolo (12.5px)"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 rounded-lg text-[11px] font-mono font-bold transition ${
                fontSize === 'base' ? 'bg-[#313244] text-white' : 'text-[#6c7086] hover:text-[#cdd6f4]'
              }`}
              title="Font Medio Confortevole (14px)"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 rounded-lg text-[11px] font-mono font-black transition ${
                fontSize === 'lg' ? 'bg-[#313244] text-white' : 'text-[#6c7086] hover:text-[#cdd6f4]'
              }`}
              title="Font Grande e Nitido (15px)"
            >
              A+
            </button>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] border border-[#313244] text-[#cdd6f4] hover:text-white text-xs font-mono transition"
            title="Copia codice di questo tab"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                <span className="text-[#a6e3a1] text-xs font-semibold">Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#89b4fa]" />
                <span className="text-xs hidden sm:inline">Copia</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Body with Gutter and Dual-Layer Syntax Highlight */}
      <div className="flex-1 relative flex overflow-hidden font-mono bg-[#1e1e2e]">
        {/* Line Numbers Gutter */}
        <div
          ref={activeTab === 'html' ? htmlLineGutterRef : cssLineGutterRef}
          className={`w-14 bg-[#181825] py-4 text-right pr-3 select-none text-[#585b70] border-r border-[#313244] overflow-hidden shrink-0 font-mono ${fsConfig.font}`}
          aria-hidden="true"
        >
          {linesArray.map(n => (
            <div key={n} style={{ height: fsConfig.lineHeight }}>{n}</div>
          ))}
        </div>

        {/* Code Canvas Area (Highlight Layer under transparent Textarea) */}
        <div className="flex-1 h-full relative overflow-hidden bg-[#1e1e2e]">
          {/* Syntax Highlighted Colored Preview (behind textarea) */}
          <pre
            ref={activeTab === 'html' ? preHtmlRef : preCssRef}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: highlightedCode + '\n ' }}
            className={`absolute inset-0 p-4 m-0 pointer-events-none whitespace-pre overflow-hidden font-mono ${fsConfig.font} text-[#cdd6f4]`}
            style={{
              tabSize: 2,
              letterSpacing: 'normal',
            }}
          />

          {/* Foreground Transparent Textarea for true native editing, selection and undo */}
          <textarea
            ref={activeTextareaRef}
            value={currentCode}
            onChange={e => {
              if (activeTab === 'html') {
                onHtmlChange(e.target.value);
              } else {
                onCssChange(e.target.value);
              }
            }}
            onScroll={handleScroll}
            onSelect={handleSelectOrKeyUp}
            onKeyUp={handleSelectOrKeyUp}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            placeholder={
              activeTab === 'html'
                ? "<!-- Incolla o inserisci snippet bento per comporre la tua pagina... -->"
                : "/* Inserisci qui le tue classi o regole CSS personalizzate (Tailwind è già attivo) */"
            }
            className={`absolute inset-0 w-full h-full p-4 m-0 resize-none font-mono ${fsConfig.font} bg-transparent text-transparent caret-[#89b4fa] selection:bg-[#45475a]/70 selection:text-transparent focus:outline-none focus:ring-0 overflow-auto whitespace-pre`}
            style={{
              tabSize: 2,
              letterSpacing: 'normal',
            }}
          />
        </div>
      </div>

      {/* Editor Status Bar with Syntax Legend & Stats */}
      <div className="h-7 bg-[#181825] border-t border-[#313244] px-3.5 flex items-center justify-between text-xs font-mono text-[#a6adc8] shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#89b4fa]"></span>
            <span className="text-[#cdd6f4] font-medium">{activeTab === 'html' ? 'HTML5 + Tailwind' : 'CSS3 Personalizzato'}</span>
          </div>
          <span className="text-[#45475a]">•</span>
          <span className="text-[#a6adc8]">{currentCode.length} caratteri</span>
          <span className="text-[#45475a] hidden sm:inline">•</span>
          <div className="hidden md:flex items-center gap-2 text-[11px]">
            <span className="text-[#89dceb] font-medium">&lt;tag&gt;</span>
            <span className="text-[#fab387]">attributo</span>
            <span className="text-[#a6e3a1]">"valore"</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a6e3a1] animate-pulse"></span>
          <span className="text-[#a6e3a1] text-[11px] font-medium hidden sm:inline">Anteprima istantanea</span>
        </div>
      </div>
    </div>
  );
}
