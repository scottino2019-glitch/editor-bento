import { useState } from 'react';
import { X, Download, Copy, Check, FileCode, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlCode: string;
  cssCode: string;
}

export function ExportModal({
  isOpen,
  onClose,
  htmlCode,
  cssCode,
}: ExportModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const fullDocument = `<!DOCTYPE html>
<html lang="it" class="h-full">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pagina Bento Personalizzata</title>
  <!-- Tailwind CSS Engine -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
          }
        }
      }
    };
  </script>
  <style>
    /* Reset base */
    html, body {
      min-height: 100%;
      margin: 0;
      padding: 0;
    }
    /* Stili CSS Personalizzati */
    ${cssCode}
  </style>
</head>
<body class="antialiased min-h-screen bg-[#11111b] text-[#cdd6f4]">
${htmlCode}
</body>
</html>`;

  const handleDownload = () => {
    const blob = new Blob([fullDocument], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pagina-bento.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (content: string, type: string) => {
    navigator.clipboard.writeText(content);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#11111b]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#1e1e2e] border border-[#313244] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 border-b border-[#313244] flex items-center justify-between bg-[#181825]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#313244] border border-[#45475a] flex items-center justify-center text-[#89b4fa]">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#cdd6f4]">Esporta la tua Pagina Bento</h3>
              <p className="text-xs text-[#a6adc8]">Scarica il file .html pronto all'uso o copia negli appunti</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#a6adc8] hover:text-white hover:bg-[#313244] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 bg-[#181825]">
          {/* Main Download Card */}
          <div className="p-5 rounded-2xl bg-[#1e1e2e] border border-[#313244] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileCode className="w-4 h-4 text-[#a6e3a1]" />
                <h4 className="text-xs font-mono font-semibold text-[#cdd6f4]">File HTML Standalone Completo</h4>
              </div>
              <p className="text-xs text-[#a6adc8] max-w-sm leading-relaxed">
                Include il motore Tailwind CSS, tutti i tuoi blocchi bento e gli stili personalizzati. Funziona immediatamente offline o su qualsiasi server.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#89b4fa] hover:bg-[#b4befe] text-[#11111b] text-xs font-mono font-bold transition shadow-md whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Scarica .html</span>
            </button>
          </div>

          {/* Copy Options */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6c7086] block">Opzioni di Copia</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                onClick={() => handleCopy(fullDocument, 'full')}
                className="p-3.5 rounded-2xl bg-[#1e1e2e] border border-[#313244] hover:border-[#89b4fa] flex flex-col justify-between text-left transition group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-[#cdd6f4]">Tutto il File</span>
                  {copiedType === 'full' ? (
                    <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#6c7086] group-hover:text-[#89b4fa]" />
                  )}
                </div>
                <span className="text-[11px] text-[#a6adc8]">HTML + Tailwind + CSS</span>
              </button>

              <button
                onClick={() => handleCopy(htmlCode, 'html')}
                className="p-3.5 rounded-2xl bg-[#1e1e2e] border border-[#313244] hover:border-[#89b4fa] flex flex-col justify-between text-left transition group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-[#cdd6f4]">Solo HTML</span>
                  {copiedType === 'html' ? (
                    <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#6c7086] group-hover:text-[#89b4fa]" />
                  )}
                </div>
                <span className="text-[11px] text-[#a6adc8]">I blocchi e le classi</span>
              </button>

              <button
                onClick={() => handleCopy(cssCode, 'css')}
                className="p-3.5 rounded-2xl bg-[#1e1e2e] border border-[#313244] hover:border-[#89b4fa] flex flex-col justify-between text-left transition group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-[#cdd6f4]">Solo CSS</span>
                  {copiedType === 'css' ? (
                    <Check className="w-3.5 h-3.5 text-[#a6e3a1]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#6c7086] group-hover:text-[#89b4fa]" />
                  )}
                </div>
                <span className="text-[11px] text-[#a6adc8]">Regole extra</span>
              </button>
            </div>
          </div>

          {/* Quick Tip */}
          <div className="p-3.5 rounded-xl bg-[#1e1e2e] border border-[#313244] flex items-start gap-2.5 text-xs text-[#a6adc8]">
            <CheckCircle2 className="w-4 h-4 text-[#a6e3a1] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Tutti gli snippet utilizzano Tailwind CSS standard senza dipendenze proprietarie. Puoi aprirlo ovunque con doppio clic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
