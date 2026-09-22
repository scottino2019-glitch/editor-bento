import { useState, useMemo } from 'react';
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
  X
} from 'lucide-react';
import { Snippet, SnippetCategory } from '../types';
import { CATEGORY_LABELS } from '../data/snippets';

interface SnippetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  snippets: Snippet[];
  onInsertSnippet: (snippet: Snippet) => void;
  onPreviewSnippet: (snippet: Snippet) => void;
}

export function SnippetDrawer({
  isOpen,
  onClose,
  snippets,
  onInsertSnippet,
  onPreviewSnippet,
}: SnippetDrawerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopy = (snippet: Snippet, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(snippet.html);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'griglie': return <Grid className="w-3.5 h-3.5" />;
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
    <aside 
      className="w-80 md:w-96 border-r border-neutral-800 bg-neutral-950 flex flex-col h-full z-20 shrink-0 select-none shadow-xl"
      aria-label="Libreria Snippet Bento"
    >
      {/* Drawer Header */}
      <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-300">
            ▦
          </div>
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">Libreria Bento</h2>
            <p className="text-[11px] text-neutral-500 font-mono">{filteredSnippets.length} snippet disponibili</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition"
          title="Chiudi libreria"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-neutral-800/80">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Cerca snippet, griglia, card..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-600 font-mono transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Slider / Filter */}
      <div 
        onWheel={(e) => {
          if (e.deltaY !== 0) {
            e.currentTarget.scrollLeft += e.deltaY;
          }
        }}
        className="p-2 border-b border-neutral-800/80 flex items-center gap-1 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {Object.entries(CATEGORY_LABELS).map(([key, cat]) => {
          const isSelected = selectedCategory === key;
          const count = categoryCounts[key] || 0;
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition ${
                isSelected
                  ? 'bg-neutral-100 text-neutral-900 font-medium'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              {getCategoryIcon(key)}
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1 rounded ${isSelected ? 'bg-neutral-300 text-neutral-900' : 'bg-neutral-850 text-neutral-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Snippet Items List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {filteredSnippets.length === 0 ? (
          <div className="p-8 text-center text-neutral-500 text-xs font-mono">
            Nessuno snippet trovato per i filtri selezionati.
          </div>
        ) : (
          filteredSnippets.map(snippet => (
            <div
              key={snippet.id}
              className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-neutral-950 text-[10px] font-mono text-neutral-400 border border-neutral-800/60 uppercase">
                    {snippet.category}
                  </span>
                  <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition">
                    <button
                      onClick={(e) => handleCopy(snippet, e)}
                      className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition"
                      title="Copia codice snippet"
                    >
                      {copiedId === snippet.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => onPreviewSnippet(snippet)}
                      className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition"
                      title="Vedi anteprima isolata"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xs font-medium text-neutral-200 group-hover:text-white transition mb-1">
                  {snippet.title}
                </h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2 mb-3">
                  {snippet.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-neutral-500">
                  Tailwind / HTML
                </span>
                <button
                  onClick={() => onInsertSnippet(snippet)}
                  className="flex items-center gap-1 px-3 py-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 hover:text-white text-xs font-mono transition border border-neutral-700/70 shadow-sm"
                  title="Aggiungi questo snippet alla tua pagina"
                >
                  <Plus className="w-3 h-3 text-indigo-400" />
                  <span>Inserisci</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Info Box */}
      <div className="p-3 border-t border-neutral-800 bg-neutral-950/90 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
        <span>Codice Puro // No AI</span>
        <span className="text-emerald-400">● 100% Tailwind</span>
      </div>
    </aside>
  );
}
