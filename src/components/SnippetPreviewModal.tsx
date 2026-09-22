import { useState } from 'react';
import { X, Copy, Plus, Check, Code, Eye, RefreshCw } from 'lucide-react';
import { Snippet } from '../types';

interface SnippetPreviewModalProps {
  snippet: Snippet | null;
  onClose: () => void;
  onInsert: (snippet: Snippet, mode?: 'slot' | 'replace') => void;
}

export function SnippetPreviewModal({
  snippet,
  onClose,
  onInsert,
}: SnippetPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  if (!snippet) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const iframeSrcDoc = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #0d1117;
      color: #f8fafc;
      padding: 2rem 1.5rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 0;
    }
  </style>
</head>
<body class="antialiased">
  <div class="w-full max-w-4xl my-auto">
    ${snippet.html}
  </div>
</body>
</html>`;

  const isGrid = snippet.category === 'griglie';

  return (
    <div className="fixed inset-0 z-50 bg-[#11111b]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#1e1e2e] border border-[#313244] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 border-b border-[#313244] flex items-center justify-between gap-3 bg-[#181825]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase font-semibold border ${
                isGrid 
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/30' 
                  : 'bg-[#313244] text-[#89b4fa] border-[#45475a]'
              }`}>
                {snippet.category}
              </span>
              <h3 className="text-sm font-semibold text-[#cdd6f4]">{snippet.title}</h3>
            </div>
            <p className="text-xs text-[#a6adc8]">{snippet.description}</p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher: Anteprima vs Codice */}
            <div className="flex items-center bg-[#1e1e2e] p-0.5 rounded-xl border border-[#313244]">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition ${
                  activeTab === 'preview'
                    ? 'bg-[#313244] text-[#89b4fa] font-bold shadow-sm'
                    : 'text-[#a6adc8] hover:text-[#cdd6f4]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Anteprima</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition ${
                  activeTab === 'code'
                    ? 'bg-[#313244] text-[#89b4fa] font-bold shadow-sm'
                    : 'text-[#a6adc8] hover:text-[#cdd6f4]'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Codice</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-[#a6adc8] hover:text-white hover:bg-[#313244] transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-hidden bg-[#181825] relative min-h-[360px]">
          {activeTab === 'preview' ? (
            <iframe
              srcDoc={iframeSrcDoc}
              title={snippet.title}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full border-none"
            />
          ) : (
            <pre className="p-4 sm:p-6 text-xs font-mono text-[#cdd6f4] leading-relaxed overflow-auto h-full selection:bg-[#45475a]">
              <code>{snippet.html}</code>
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:px-6 border-t border-[#313244] flex flex-wrap items-center justify-between gap-3 bg-[#1e1e2e]">
          <div className="flex items-center gap-1.5">
            {snippet.tags.map(t => (
              <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181825] text-[#a6adc8] border border-[#313244]">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] hover:text-white text-xs font-mono transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                  <span className="text-[#a6e3a1]">Copiato!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copia HTML</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onInsert(snippet, 'replace');
                onClose();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#313244] hover:bg-[#45475a] text-[#89dceb] text-xs font-mono font-medium transition"
              title="Sostituisci l'intero canvas con questo blocco"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Sostituisci Canvas</span>
            </button>

            <button
              onClick={() => {
                onInsert(snippet, 'slot');
                onClose();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#89b4fa] hover:bg-[#b4befe] text-[#11111b] text-xs font-mono font-bold transition shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isGrid ? 'Usa questa Griglia' : 'Inserisci nello Slot'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
