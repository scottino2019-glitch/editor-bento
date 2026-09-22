import { useState, useMemo, useRef } from 'react';
import { 
  Search, 
  Plus, 
  Copy, 
  Eye, 
  Check, 
  Sparkles,
  LayoutGrid,
  Grid,
  Square,
  Compass,
  Box,
  Menu as MenuIcon,
  PanelBottom,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Info,
  ArrowUp
} from 'lucide-react';
import { Snippet, SnippetCategory } from '../types';
import { CATEGORY_LABELS } from '../data/snippets';

interface SnippetTopDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  snippets: Snippet[];
  onInsertSnippet: (snippet: Snippet, mode?: 'slot' | 'replace') => void;
  onPreviewSnippet: (snippet: Snippet) => void;
}

export function SnippetTopDropdown({
  isOpen,
  onClose,
  snippets,
  onInsertSnippet,
  onPreviewSnippet,
}: SnippetTopDropdownProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoriesBarRef = useRef<HTMLDivElement>(null);

  const scrollCategoriesLeft = () => {
    categoriesBarRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
  };

  const scrollCategoriesRight = () => {
    categoriesBarRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered snippets
  const filteredSnippets = useMemo(() => {
    return snippets.filter(snippet => {
      const matchesCategory = selectedCategory === 'all' || snippet.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        snippet.title.toLowerCase().includes(q) ||
        snippet.description.toLowerCase().includes(q) ||
        snippet.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [snippets, selectedCategory, searchQuery]);

  // Counts by category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: snippets.length };
    for (const snip of snippets) {
      counts[snip.category] = (counts[snip.category] || 0) + 1;
    }
    return counts;
  }, [snippets]);

  const handleCopySnippet = (snippet: Snippet) => {
    navigator.clipboard.writeText(snippet.html);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getCategoryIcon = (cat: SnippetCategory | string) => {
    switch (cat) {
      case 'griglie':
      case 'grid': return <Grid className="w-3.5 h-3.5" />;
      case 'card': return <Square className="w-3.5 h-3.5" />;
      case 'header': return <Compass className="w-3.5 h-3.5" />;
      case 'hero': return <Sparkles className="w-3.5 h-3.5" />;
      case 'frame': return <Box className="w-3.5 h-3.5" />;
      case 'menu': return <MenuIcon className="w-3.5 h-3.5" />;
      case 'footer': return <PanelBottom className="w-3.5 h-3.5" />;
      default: return <LayoutGrid className="w-3.5 h-3.5" />;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay per intercettare click esterni e isolare gli eventi di scroll */}
      <div 
        className="fixed inset-0 top-14 bg-black/60 backdrop-blur-xs z-30 transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
        aria-hidden="true"
      />

      <div 
        className="fixed top-14 left-0 right-0 bottom-2 sm:bottom-6 z-40 bg-[#181825] border-b border-[#313244] shadow-2xl flex flex-col min-h-0 overflow-hidden"
      >
        {/* Top Bar inside Dropdown */}
        <div className="px-4 py-3 border-b border-[#313244] flex flex-wrap items-center justify-between gap-3 bg-[#1e1e2e] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#313244] border border-[#45475a] flex items-center justify-center text-[#89b4fa]">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-[#cdd6f4]">Catalogo Frame & Moduli Bento</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#313244] text-[#89b4fa] font-mono">
                  {filteredSnippets.length} disponibili
                </span>
              </div>
              <p className="text-xs text-[#a6adc8]">
                Griglie responsive vuote a slot tratteggiati, frame fisici realistici (Tablet, Smartphone, Browser...) e card tattili
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-64 md:w-80">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#a6adc8] pointer-events-none" />
              <input
                type="text"
                placeholder="Cerca per nome, tag o struttura..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#181825] border border-[#313244] focus:border-[#89b4fa] rounded-xl pl-8 pr-7 py-1.5 text-xs text-[#cdd6f4] placeholder-[#6c7086] focus:outline-none font-mono transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#a6adc8] hover:text-[#cdd6f4] text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] text-xs transition font-mono"
              title="Chiudi catalogo snippet"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="hidden sm:inline">Chiudi</span>
            </button>
          </div>
        </div>

        {/* Info Banner per chiarire come vengono inseriti */}
        <div className="px-4 py-2 bg-[#1e1e2e]/70 border-b border-[#313244] flex items-center justify-between gap-2 text-xs font-mono text-[#a6adc8] shrink-0">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#89b4fa] shrink-0" />
            <span>
              <strong className="text-[#89b4fa]">Inserimento Intelligente:</strong> Clicca <strong className="text-white">"Inserisci nello Slot"</strong> per posizionare il blocco nel primo slot libero tratteggiato, oppure seleziona una riga nell'editor per incollare lì.
            </span>
          </div>
          <span className="text-[11px] text-[#a6adc8] shrink-0 hidden md:inline">
            Scorri in basso per visualizzare tutti gli snippet
          </span>
        </div>

        {/* Category Pills Bar with Left/Right Scroll Controls & Wheel Scroll */}
        <div className="px-2 sm:px-4 py-2 bg-[#181825] border-b border-[#313244] flex items-center gap-1.5 shrink-0">
          <button
            onClick={scrollCategoriesLeft}
            className="p-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] text-[#a6adc8] hover:text-[#cdd6f4] border border-[#313244] transition shrink-0 cursor-pointer"
            title="Scorri categorie a sinistra"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div 
            ref={categoriesBarRef}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
            className="flex-1 flex items-center gap-1.5 overflow-x-auto scroll-smooth py-1"
            style={{ scrollbarWidth: 'thin' }}
          >
            {Object.entries(CATEGORY_LABELS).map(([key, cat]) => {
              const isSelected = selectedCategory === key;
              const count = categoryCounts[key] || 0;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#89b4fa] text-[#11111b] border-[#89b4fa] font-bold shadow-sm'
                      : 'bg-[#1e1e2e] text-[#a6adc8] hover:text-[#cdd6f4] border-[#313244] hover:bg-[#313244]'
                  }`}
                >
                  {getCategoryIcon(key)}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-[#11111b]/20 text-[#11111b]' : 'bg-[#181825] text-[#6c7086]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={scrollCategoriesRight}
            className="p-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] text-[#a6adc8] hover:text-[#cdd6f4] border border-[#313244] transition shrink-0 cursor-pointer"
            title="Scorri categorie a destra"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of Snippet Cards (Con min-h-0 ed overflow-y-auto per scroll fluido garantito) */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 bg-[#181825]"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filteredSnippets.length === 0 ? (
            <div className="p-12 text-center text-[#6c7086] font-mono text-xs">
              Nessun modulo corrisponde ai criteri di ricerca. Prova a selezionare un'altra categoria o azzerare la ricerca.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
              {filteredSnippets.map(snippet => {
                const isCopied = copiedId === snippet.id;
                const isGrid = snippet.category === 'griglie';

                return (
                  <div
                    key={snippet.id}
                    className="rounded-2xl bg-[#1e1e2e] border border-[#313244] hover:border-[#89b4fa]/60 transition-all p-4 flex flex-col justify-between group shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Header: Title & Badges */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xs font-semibold text-[#cdd6f4] group-hover:text-[#89b4fa] transition leading-snug">
                          {snippet.title}
                        </h3>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 font-medium ${
                          isGrid 
                            ? 'bg-amber-400/15 border-amber-400/40 text-amber-300' 
                            : 'bg-[#181825] border-[#313244] text-[#89b4fa]'
                        }`}>
                          {snippet.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#a6adc8] leading-relaxed mb-3 line-clamp-2">
                        {snippet.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3.5">
                        {snippet.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181825] text-[#a6adc8] border border-[#313244]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 pt-3 border-t border-[#313244]">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            onInsertSnippet(snippet, 'slot');
                            onClose();
                          }}
                          className={`flex-1 flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition shadow-sm cursor-pointer ${
                            isGrid
                              ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold'
                              : 'bg-[#89b4fa] hover:bg-[#b4befe] text-[#11111b]'
                          }`}
                          title={isGrid ? 'Inserisci questa griglia vuota nel codice' : 'Inserisci questo blocco nel primo slot vuoto'}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isGrid ? 'Usa Griglia' : 'Inserisci nello Slot'}</span>
                        </button>

                        {isGrid && (
                          <button
                            onClick={() => {
                              onInsertSnippet(snippet, 'replace');
                              onClose();
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#89dceb] text-xs font-mono font-medium transition cursor-pointer"
                            title="Sostituisci l'intero canvas con questa griglia vuota"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => onPreviewSnippet(snippet)}
                          className="p-1.5 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] hover:text-white transition cursor-pointer"
                          title="Anteprima isolata dello snippet"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleCopySnippet(snippet)}
                          className="p-1.5 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] hover:text-white transition cursor-pointer"
                          title="Copia codice HTML negli appunti"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Bar con conteggio moduli e pulsante rapido Torna su */}
        <div className="px-4 py-2 bg-[#1e1e2e] border-t border-[#313244] flex items-center justify-between text-xs font-mono text-[#a6adc8] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{filteredSnippets.length}</span>
            <span>moduli pronti</span>
            <span className="hidden sm:inline text-[#6c7086]">•</span>
            <span className="hidden sm:inline text-[#6c7086]">Scorri in basso con mouse/touchpad per scoprire tutti i componenti</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 text-[11px] text-[#89b4fa] hover:text-[#b4befe] transition cursor-pointer font-bold"
              title="Scorri fino in cima alla lista"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Torna su</span>
            </button>
            <button
              onClick={onClose}
              className="px-2.5 py-1 rounded-lg bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] text-xs transition cursor-pointer"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
