import { useState, useRef, useEffect } from 'react';
import { 
  Undo, 
  Redo, 
  Wand2, 
  Download, 
  Trash2, 
  RotateCw,
  Monitor, 
  Tablet, 
  Smartphone, 
  Moon, 
  Sun, 
  Grid3X3, 
  ExternalLink,
  Layers,
  FolderOpen,
  ChevronDown,
  Sparkles,
  Check
} from 'lucide-react';
import { ViewportMode, PreviewTheme, StarterTemplate } from '../types';

interface NavbarProps {
  onFormat: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onClear: () => void;
  onRefresh: () => void;
  onExport: () => void;
  onOpenNewTab: () => void;
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  previewTheme: PreviewTheme;
  onPreviewThemeChange: (theme: PreviewTheme) => void;
  isSnippetMenuOpen: boolean;
  onToggleSnippetMenu: () => void;
  templates: StarterTemplate[];
  onSelectTemplate: (template: StarterTemplate) => void;
  snippetCount: number;
}

export function Navbar({
  onFormat,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClear,
  onRefresh,
  onExport,
  onOpenNewTab,
  viewport,
  onViewportChange,
  previewTheme,
  onPreviewThemeChange,
  isSnippetMenuOpen,
  onToggleSnippetMenu,
  templates,
  onSelectTemplate,
  snippetCount,
}: NavbarProps) {
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);
  const templateMenuRef = useRef<HTMLDivElement>(null);

  // Close template menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (templateMenuRef.current && !templateMenuRef.current.contains(e.target as Node)) {
        setIsTemplateMenuOpen(false);
      }
    };
    if (isTemplateMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTemplateMenuOpen]);

  const handleTemplateClick = (tmpl: StarterTemplate) => {
    onSelectTemplate(tmpl);
    setIsTemplateMenuOpen(false);
  };

  return (
    <header className="h-14 border-b border-[#313244] bg-[#1e1e2e] px-3 md:px-5 flex items-center justify-between gap-3 select-none z-50 shrink-0 relative">
      {/* Left Section: Logo + Snippet Dropdown Button + Modelli Dropdown */}
      <div className="flex items-center gap-2.5">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mr-1">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#89b4fa] via-[#b4befe] to-[#cba6f7] flex items-center justify-center text-[#11111b] font-black text-sm shadow-md">
            ⊞
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold tracking-tight text-[#cdd6f4]">Bento<span className="text-[#89b4fa]">Studio</span></span>
          </div>
        </div>

        {/* Retractable Snippets Menu Toggle (in alto a scomparsa) */}
        <button
          onClick={onToggleSnippetMenu}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all border shadow-sm ${
            isSnippetMenuOpen
              ? 'bg-[#89b4fa] text-[#11111b] border-[#89b4fa] font-bold shadow-md'
              : 'bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] border-[#45475a]'
          }`}
          title="Catalogo Frame, Sagome e Widget Bento"
        >
          <Layers className="w-4 h-4 text-inherit" />
          <span className="font-semibold">Frame & Widget</span>
          <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
            isSnippetMenuOpen ? 'bg-[#11111b] text-[#89b4fa]' : 'bg-[#181825] text-[#a6adc8]'
          }`}>
            {snippetCount}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSnippetMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="h-5 w-[1px] bg-[#313244] hidden md:block" />

        {/* Dropdown Layout & Modelli con stato React onClick esplicito */}
        <div className="relative" ref={templateMenuRef}>
          <button 
            onClick={() => setIsTemplateMenuOpen(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition ${
              isTemplateMenuOpen
                ? 'bg-[#313244] text-white border-[#89b4fa]'
                : 'bg-[#181825] hover:bg-[#313244] border-[#313244] text-[#cdd6f4]'
            }`}
            title="Scegli un modello iniziale"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#89b4fa]" />
            <span>Modelli</span>
            <ChevronDown className={`w-3 h-3 text-[#6c7086] transition-transform duration-200 ${isTemplateMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isTemplateMenuOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-[#1e1e2e] border border-[#45475a] shadow-2xl p-2 z-[999] animate-in fade-in-50 zoom-in-95 duration-150">
              <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#a6adc8] border-b border-[#313244] mb-1 font-bold">
                Seleziona un modello
              </div>
              <div className="space-y-1">
                {templates.map(tmpl => (
                  <button
                    key={tmpl.id}
                    onClick={() => handleTemplateClick(tmpl)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#313244] transition flex flex-col gap-1 group border border-transparent hover:border-[#45475a]"
                  >
                    <span className="text-xs font-semibold text-[#cdd6f4] group-hover:text-[#89b4fa]">
                      {tmpl.name}
                    </span>
                    <span className="text-[11px] text-[#a6adc8] leading-tight">
                      {tmpl.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Aggiorna Anteprima */}
        <button
          onClick={onRefresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181825] hover:bg-[#313244] border border-[#313244] text-xs font-mono text-[#cdd6f4] hover:text-[#89b4fa] transition"
          title="Aggiorna e ricarica l'anteprima (Ctrl+R)"
        >
          <RotateCw className="w-3.5 h-3.5 text-[#89b4fa]" />
          <span className="hidden lg:inline">Aggiorna</span>
        </button>

        {/* Elimina / Cancella Tutto */}
        <button
          onClick={onClear}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181825] hover:bg-[#45202a] border border-[#313244] hover:border-[#f38ba8]/50 text-xs font-mono text-[#a6adc8] hover:text-[#f38ba8] transition"
          title="Elimina tutto il codice e riparti da zero"
        >
          <Trash2 className="w-3.5 h-3.5 text-[#f38ba8]" />
          <span className="hidden lg:inline">Elimina</span>
        </button>

        {/* Formatta Codice */}
        <button
          onClick={onFormat}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181825] hover:bg-[#313244] border border-[#313244] text-xs font-mono text-[#cdd6f4] hover:text-white transition"
          title="Formatta e indenta il codice HTML e CSS (Ctrl+S)"
        >
          <Wand2 className="w-3.5 h-3.5 text-[#f9e2af]" />
          <span className="hidden xl:inline">Formatta</span>
        </button>

        {/* Undo / Redo */}
        <div className="hidden lg:flex items-center gap-0.5 bg-[#181825] p-0.5 rounded-xl border border-[#313244]">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="p-1.5 rounded-lg text-[#a6adc8] hover:text-white hover:bg-[#313244] disabled:opacity-30 disabled:pointer-events-none transition"
            title="Annulla modifica (Ctrl+Z)"
          >
            <Undo className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="p-1.5 rounded-lg text-[#a6adc8] hover:text-white hover:bg-[#313244] disabled:opacity-30 disabled:pointer-events-none transition"
            title="Ripeti modifica (Ctrl+Y)"
          >
            <Redo className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right Section: Viewport + Theme + Export */}
      <div className="flex items-center gap-2">
        {/* Viewport Selectors */}
        <div className="flex items-center p-0.5 rounded-xl bg-[#181825] border border-[#313244]">
          <button
            onClick={() => onViewportChange('desktop')}
            className={`p-1.5 rounded-lg text-xs transition ${
              viewport === 'desktop'
                ? 'bg-[#313244] text-[#89b4fa] font-bold shadow-sm'
                : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Desktop Fluido (100%)"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewportChange('tablet')}
            className={`p-1.5 rounded-lg text-xs transition ${
              viewport === 'tablet'
                ? 'bg-[#313244] text-[#89b4fa] font-bold shadow-sm'
                : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Tablet (768px)"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewportChange('mobile')}
            className={`p-1.5 rounded-lg text-xs transition ${
              viewport === 'mobile'
                ? 'bg-[#313244] text-[#89b4fa] font-bold shadow-sm'
                : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Mobile (375px)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Theme Sfondi Anteprima */}
        <div className="hidden sm:flex items-center p-0.5 rounded-xl bg-[#181825] border border-[#313244]">
          <button
            onClick={() => onPreviewThemeChange('dark')}
            className={`p-1.5 rounded-lg text-xs transition ${
              previewTheme === 'dark' ? 'bg-[#313244] text-[#89b4fa]' : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Sfondo Anteprima Scuro"
          >
            <Moon className="w-4 h-4" />
          </button>
          <button
            onClick={() => onPreviewThemeChange('light')}
            className={`p-1.5 rounded-lg text-xs transition ${
              previewTheme === 'light' ? 'bg-[#313244] text-[#f9e2af]' : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Sfondo Anteprima Chiaro"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={() => onPreviewThemeChange('checkered')}
            className={`p-1.5 rounded-lg text-xs transition ${
              previewTheme === 'checkered' ? 'bg-[#313244] text-[#cba6f7]' : 'text-[#a6adc8] hover:text-[#cdd6f4]'
            }`}
            title="Sfondo Griglia Trasparente"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
        </div>

        {/* Nuova Scheda */}
        <button
          onClick={onOpenNewTab}
          className="p-1.5 rounded-xl bg-[#181825] hover:bg-[#313244] border border-[#313244] text-[#cdd6f4] hover:text-white transition"
          title="Apri anteprima in nuova scheda"
        >
          <ExternalLink className="w-4 h-4" />
        </button>

        {/* Esporta Pagina HTML */}
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#89b4fa] hover:bg-[#b4befe] text-[#11111b] text-xs font-mono font-bold transition shadow-md"
          title="Esporta e scarica file HTML completo"
        >
          <Download className="w-4 h-4" />
          <span>Esporta</span>
        </button>
      </div>
    </header>
  );
}
