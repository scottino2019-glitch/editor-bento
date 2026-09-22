import React, { useEffect, useRef, useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RefreshCw, 
  Trash2, 
  ExternalLink,
  AlignCenter
} from 'lucide-react';
import { ViewportMode, PreviewTheme } from '../types';

interface LivePreviewProps {
  htmlCode: string;
  cssCode: string;
  viewport: ViewportMode;
  previewTheme: PreviewTheme;
  onRefresh?: () => void;
  onClear?: () => void;
  onOpenNewTab?: () => void;
  refreshTrigger?: number;
}

export function LivePreview({
  htmlCode,
  cssCode,
  viewport,
  previewTheme,
  onRefresh,
  onClear,
  onOpenNewTab,
  refreshTrigger = 0,
}: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Update iframe whenever HTML/CSS or refreshTrigger changes
  useEffect(() => {
    const handler = setTimeout(() => {
      updateIframe();
    }, 60);

    return () => clearTimeout(handler);
  }, [htmlCode, cssCode, refreshTrigger, previewTheme]);

  const updateIframe = () => {
    if (!iframeRef.current) return;

    const isLight = previewTheme === 'light';
    const canvasBg = isLight ? '#f8fafc' : '#0d1117';
    const canvasText = isLight ? '#0f172a' : '#f8fafc';

    // Generate isolated HTML payload with Tailwind CSS CDN script
    const srcDoc = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anteprima Bento</title>
  <!-- Tailwind CSS Engine -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
          }
        }
      }
    };
  </script>
  <style>
    /* Reset base & sincronizzazione con tema canvas */
    html, body {
      min-height: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: ${canvasBg};
      color: ${canvasText};
    }
    /* Centratura automatica e simmetrica per snippet o elementi isolati */
    .bento-centered-canvas {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem 1rem;
      box-sizing: border-box;
    }
    /* Stili CSS personalizzati */
    ${cssCode || ''}
  </style>
</head>
<body class="antialiased min-h-screen ${isLight ? 'bg-slate-50 text-slate-900' : 'bg-[#0d1117] text-slate-100'}">
  ${
    !htmlCode || htmlCode.trim() === ''
      ? `<div class="min-h-screen flex flex-col items-center justify-center p-6 text-center text-slate-400 font-mono text-xs space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-300 text-xl">
            ⊞
          </div>
          <p class="text-slate-200 font-bold text-sm">Canvas Vuoto e Pronto</p>
          <p class="text-slate-400 max-w-sm leading-relaxed">
            Apri <strong class="text-amber-400">"Blocchi Bento"</strong> in alto per inserire una <strong class="text-cyan-400">Griglia Vuota</strong>, oppure un Frame o una Card tattile!
          </p>
        </div>`
      : htmlCode.includes('min-h-screen')
      ? htmlCode
      : `<div class="bento-centered-canvas">
          <div class="w-full max-w-6xl mx-auto my-auto flex flex-col items-center justify-center">
            ${htmlCode}
          </div>
        </div>`
  }
</body>
</html>`;

    iframeRef.current.srcdoc = srcDoc;
  };

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    updateIframe();
    if (onRefresh) onRefresh();
    setTimeout(() => setIsRefreshing(false), 350);
  };

  // Determine viewport width styles
  const getViewportDimensions = () => {
    switch (viewport) {
      case 'mobile':
        return {
          wrapper: 'max-w-[380px] h-[92%] my-auto shadow-2xl border-2 border-[#45475a] rounded-[36px] overflow-hidden',
          label: 'Mobile (375px)',
          icon: <Smartphone className="w-4 h-4 text-[#89b4fa]" />
        };
      case 'tablet':
        return {
          wrapper: 'max-w-[768px] h-[95%] my-auto shadow-2xl border border-[#45475a] rounded-2xl overflow-hidden',
          label: 'Tablet (768px)',
          icon: <Tablet className="w-4 h-4 text-[#89b4fa]" />
        };
      case 'desktop':
      default:
        return {
          wrapper: 'w-full h-full rounded-xl border border-[#313244] shadow-lg overflow-hidden',
          label: 'Desktop (Centrato)',
          icon: <Monitor className="w-4 h-4 text-[#89b4fa]" />
        };
    }
  };

  // Canvas theme background
  const getCanvasBackground = () => {
    switch (previewTheme) {
      case 'light':
        return 'bg-[#e6e9ef]';
      case 'checkered':
        return 'bg-[#181825] bg-[linear-gradient(45deg,#313244_25%,transparent_25%),linear-gradient(-45deg,#313244_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#313244_75%),linear-gradient(-45deg,transparent_75%,#313244_75%)] [background-size:24px_24px] [background-position:0_0,0_12px,12px_-12px,-12px_0px]';
      case 'dark':
      default:
        return 'bg-[#11111b]';
    }
  };

  const vp = getViewportDimensions();

  return (
    <div className={`flex-1 flex flex-col h-full overflow-hidden select-none ${getCanvasBackground()}`}>
      {/* Preview Header Bar */}
      <div className="h-11 bg-[#1e1e2e] border-b border-[#313244] px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-[#cdd6f4] font-medium">
            {vp.icon}
            <span>{vp.label}</span>
          </span>
          <span className="text-[#45475a]">•</span>
          <span className="text-[#a6e3a1] bg-[#a6e3a1]/10 px-2 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a6e3a1]"></span>
            Anteprima Live
          </span>
          <span className="hidden md:flex items-center gap-1 text-[#6c7086] text-[10px]">
            <AlignCenter className="w-3 h-3 text-[#89b4fa]" />
            <span>Centrata</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Pulsante Aggiorna Dedicato */}
          <button
            onClick={handleManualRefresh}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#181825] hover:bg-[#313244] border border-[#313244] text-[#cdd6f4] hover:text-[#89b4fa] text-xs font-mono transition ${
              isRefreshing ? 'animate-spin text-[#89b4fa]' : ''
            }`}
            title="Ricarica istantaneamente l'anteprima (Aggiorna)"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Aggiorna</span>
          </button>

          {/* Pulsante Elimina Rapido */}
          {onClear && (
            <button
              onClick={onClear}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#181825] hover:bg-[#45202a] border border-[#313244] hover:border-[#f38ba8]/40 text-[#a6adc8] hover:text-[#f38ba8] text-xs font-mono transition"
              title="Elimina contenuto pagina"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Elimina</span>
            </button>
          )}

          {onOpenNewTab && (
            <button
              onClick={onOpenNewTab}
              className="p-1.5 rounded-xl bg-[#181825] hover:bg-[#313244] border border-[#313244] text-[#cdd6f4] hover:text-white transition"
              title="Apri a tutto schermo in nuova scheda"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Frame Container - Perfettamente centrato con padding calibrato */}
      <div className="flex-1 w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        <div className={`w-full transition-all duration-300 flex flex-col bg-[#0d1117] ${vp.wrapper}`}>
          {/* Mobile bezel Notch if in mobile view */}
          {viewport === 'mobile' && (
            <div className="h-6 bg-[#181825] border-b border-[#313244] flex items-center justify-center shrink-0">
              <div className="w-20 h-1.5 rounded-full bg-[#45475a]"></div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            title="Anteprima Live Bento"
            sandbox="allow-scripts allow-same-origin"
            className="w-full h-full border-none bg-inherit"
          />
        </div>
      </div>
    </div>
  );
}
