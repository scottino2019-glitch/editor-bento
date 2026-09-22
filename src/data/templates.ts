import { StarterTemplate } from '../types';

export const STARTER_TEMPLATES: StarterTemplate[] = [
  {
    id: 'starter-empty-bento-4col',
    name: 'Griglia Bento 4 Colonne Vuota (Layout Pulito & Centrato con 5 Slot)',
    description: 'Layout base perfettamente centrato con header e griglia Bento a 4 colonne con 5 slot vuoti tratteggiati (1 col, 2 col panoramico, 1 col, 2 col medio, 2 col medio). Pronto per accogliere i tuoi blocchi!',
    css: '',
    html: `<!-- ========================================================================= -->
<!-- BENTO STUDIO: GRIGLIA BENTO 4 COLONNE VUOTA (LAYOUT PULITO & CENTRATO)    -->
<!-- ========================================================================= -->
<div class="min-h-screen bg-[#0d1117] text-slate-100 font-sans p-4 sm:p-8 selection:bg-amber-400 selection:text-slate-950 flex flex-col items-center">
  <div class="w-full max-w-6xl mx-auto space-y-8 my-auto">

    <!-- BARRA SUPERIORE HEADER -->
    <header class="w-full bg-[#161b22] text-white rounded-3xl p-5 border-2 border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
          ★
        </div>
        <div>
          <h1 class="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            Bento Workspace <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono border border-amber-400/30 font-bold">GRIGLIA VUOTA</span>
          </h1>
          <p class="text-xs font-mono text-slate-400">
            5 Slot Segnaposto Pronti per i Tuoi Frame e Card
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 font-mono text-xs">
        <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          📐 4 Colonne Responsive
        </span>
      </div>
    </header>

    <!-- ======================================================================= -->
    <!-- GRIGLIA BENTO A 4 COLONNE VUOTA CON SLOT TRATTEGGIATI                    -->
    <!-- Incolla o inserisci i tuoi widget all'interno di uno degli slot sottostanti! -->
    <!-- ======================================================================= -->
    <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">

      <!-- ===================================================================== -->
      <!-- SLOT 1 (1 Colonna): Ideale per Saggio Editoriale, Indice o Profilo    -->
      <!-- ===================================================================== -->
      <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[230px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
          ⊞
        </div>
        <span class="font-bold text-slate-200 group-hover:text-amber-300 transition">SLOT 1 • 1 COLONNA</span>
        <span class="text-[11px] text-slate-400 mt-1">Incolla qui: Saggio Editoriale, Post-it o Scheda Autore</span>
      </div>

      <!-- ===================================================================== -->
      <!-- SLOT 2 (2 Colonne Panoramico): Ideale per Fotografia o Media 16:9      -->
      <!-- ===================================================================== -->
      <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[230px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
          ▭
        </div>
        <span class="font-bold text-slate-200 group-hover:text-cyan-300 transition">SLOT 2 • 2 COLONNE (PANORAMICO)</span>
        <span class="text-[11px] text-slate-400 mt-1">Incolla qui: Passe-partout Fotografico o Media 16:9</span>
      </div>

      <!-- ===================================================================== -->
      <!-- SLOT 3 (1 Colonna): Ideale per Citazione o Matrice                    -->
      <!-- ===================================================================== -->
      <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[230px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
          ⊞
        </div>
        <span class="font-bold text-slate-200 group-hover:text-amber-300 transition">SLOT 3 • 1 COLONNA</span>
        <span class="text-[11px] text-slate-400 mt-1">Incolla qui: Citazione Terracotta, Taccuino o Matrice</span>
      </div>

      <!-- ===================================================================== -->
      <!-- SLOT 4 (2 Colonne): Ideale per Finestra Browser o Terminale Codice    -->
      <!-- ===================================================================== -->
      <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[230px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-emerald-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
          ▭
        </div>
        <span class="font-bold text-slate-200 group-hover:text-emerald-300 transition">SLOT 4 • 2 COLONNE (MEDIO)</span>
        <span class="text-[11px] text-slate-400 mt-1">Incolla qui: Finestra Browser 16:9 o Terminale Codice CRT</span>
      </div>

      <!-- ===================================================================== -->
      <!-- SLOT 5 (2 Colonne): Ideale per Due Colonne o Tabella Specifiche       -->
      <!-- ===================================================================== -->
      <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-3xl min-h-[230px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-purple-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
          ▭
        </div>
        <span class="font-bold text-slate-200 group-hover:text-purple-300 transition">SLOT 5 • 2 COLONNE (MEDIO)</span>
        <span class="text-[11px] text-slate-400 mt-1">Incolla qui: Card Dual-Tone o Tabella Specifiche Blueprint</span>
      </div>

    </main>

  </div>
</div>`
  },
  {
    id: 'starter-empty-bento-3col-hero',
    name: 'Griglia Bento 3 Colonne Vuota (Hero Slot 2x2 + 2 Laterali + Banner)',
    description: 'Layout asimmetrico ad alto impatto vuoto: grande slot Hero vetrina a sinistra, 2 slot impilati a destra e 1 slot banner in basso.',
    css: '',
    html: `<!-- ========================================================================= -->
<!-- BENTO STUDIO: GRIGLIA BENTO 3 COLONNE VUOTA CON HERO SLOT                  -->
<!-- ========================================================================= -->
<div class="min-h-screen bg-[#0d1117] text-slate-100 font-sans p-4 sm:p-8 flex flex-col items-center">
  <div class="w-full max-w-6xl mx-auto space-y-8 my-auto">

    <!-- HEADER MINIMALE -->
    <header class="flex items-center justify-between border-b-2 border-slate-800 pb-4">
      <div class="flex items-center gap-2.5">
        <span class="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
        <h2 class="text-lg font-black font-mono tracking-tight text-white uppercase">
          Griglia 3 Colonne con Hero Slot
        </h2>
      </div>
      <span class="text-xs font-mono text-slate-400">Wireframe Vuoto</span>
    </header>

    <!-- GRIGLIA 3 COLONNE -->
    <main class="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">

      <!-- SLOT HERO 2x2 -->
      <div class="lg:col-span-2 lg:row-span-2 p-8 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[420px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-14 h-14 rounded-2xl bg-slate-800 text-amber-300 flex items-center justify-center text-2xl mb-3 shadow-md">
          ★
        </div>
        <span class="text-sm font-bold text-slate-200">SLOT HERO PRINCIPALE (2 COLONNE × 2 RIGHE)</span>
        <span class="text-xs text-slate-400 mt-1 max-w-sm">Ideale per: Sezione Hero Introduttiva o Passe-partout Fotografico</span>
      </div>

      <!-- SLOT LATERALE 1 -->
      <div class="p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[195px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-9 h-9 rounded-xl bg-slate-800 text-cyan-300 flex items-center justify-center text-base mb-2">
          ⊞
        </div>
        <span class="font-bold text-slate-200">SLOT LATERALE 1</span>
        <span class="text-[10px] text-slate-400 mt-1">Ideale per: Saggio Editoriale Carta Avorio o Post-it</span>
      </div>

      <!-- SLOT LATERALE 2 -->
      <div class="p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[195px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-9 h-9 rounded-xl bg-slate-800 text-emerald-300 flex items-center justify-center text-base mb-2">
          ⊞
        </div>
        <span class="font-bold text-slate-200">SLOT LATERALE 2</span>
        <span class="text-[10px] text-slate-400 mt-1">Ideale per: Scheda Autore Bosco o Taccuino a Righe</span>
      </div>

      <!-- SLOT BANNER INFERIORE -->
      <div class="lg:col-span-3 p-6 border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-3xl min-h-[160px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/40 transition group cursor-pointer">
        <div class="w-10 h-10 rounded-2xl bg-slate-800 text-purple-300 flex items-center justify-center text-lg mb-2">
          ▭▭
        </div>
        <span class="font-bold text-slate-200">SLOT BANNER INFERIORE (3 COLONNE INTERE)</span>
        <span class="text-[10px] text-slate-400 mt-1">Ideale per: Finestra Browser 16:9, Lavagna Parole Chiave o Footer</span>
      </div>

    </main>

  </div>
</div>`
  },
  {
    id: 'starter-tactile-bento-frames-hub',
    name: 'Bento Hub Tattile d\'Esempio con Oggetti & Frame Reali',
    description: 'Esempio pre-compilato con Frame Smartphone 9:16 con Dynamic Island, Finestra Browser 16:9, Quaderno ad anelli metallici 3D, Polaroid con washi tape, Post-it con spilla e Calendario cobalto.',
    css: '',
    html: `<!-- ================================================================= -->
<!-- BENTO HUB TATTILE D'ESEMPIO (SMARTPHONE, BROWSER, POST-IT, CALENDARIO) -->
<!-- ================================================================= -->
<div class="min-h-screen bg-[#dce3eb] text-slate-900 font-sans p-4 sm:p-8 flex flex-col items-center selection:bg-amber-400 selection:text-slate-950">
  <div class="w-full max-w-6xl mx-auto space-y-8 my-auto">

    <!-- HEADER BENTO STUDIO -->
    <header class="w-full bg-[#0c1220] text-white rounded-3xl p-5 border-b-4 border-amber-400 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
          ★
        </div>
        <div>
          <h1 class="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            Bento Hub <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono border border-amber-400/40 font-bold">FRAME REALI</span>
          </h1>
          <p class="text-[11px] font-mono text-cyan-300 uppercase tracking-wider font-bold">
            Smartphone • Browser • Quaderno • Polaroid • Post-it
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 font-mono text-xs">
        <span class="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black shadow-sm">
          🌟 Hub Completo
        </span>
      </div>
    </header>

    <!-- GRIGLIA COMPONENTI -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
      
      <!-- STICKER POST-IT CON SPILLA 📌 -->
      <div class="relative p-5 bg-[#fefce8] text-slate-900 border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] rotate-[-1.5deg] hover:rotate-0 transition-transform flex flex-col justify-between min-h-[210px]">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl select-none z-10 filter drop-shadow">
          📌
        </div>
        <div class="flex items-center justify-between pt-1 relative z-10">
          <span class="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-300/90 px-2 py-0.5 rounded border border-amber-400 font-mono">
            FRASE DEL GIORNO
          </span>
          <span class="text-xs font-mono font-bold text-amber-900">#01</span>
        </div>
        <div class="my-2 relative z-10">
          <h4 class="text-sm font-bold text-slate-900 leading-snug">
            "Un viaggio di mille miglia comincia con un solo passo."
          </h4>
          <p class="text-[11px] text-amber-900 font-mono mt-1">Laozi · Massima</p>
        </div>
        <div class="text-[10px] font-mono text-amber-950 font-bold flex justify-between items-center border-t border-amber-300/80 pt-2 relative z-10">
          <span>Saggezza</span>
          <button class="bg-amber-400 text-amber-950 font-black px-2 py-0.5 rounded border border-amber-900/30 shadow-xs cursor-pointer">Ascolta 🔊</button>
        </div>
      </div>

      <!-- CALENDARIO COBALTO ASIMMETRICO (2 COLONNE) -->
      <div class="col-span-1 sm:col-span-2 relative overflow-hidden p-5 bg-blue-600 text-white border-2 border-slate-950 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between min-h-[210px]">
        <div class="flex items-center justify-between border-b border-blue-500/60 pb-1.5 shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-[9px] font-mono font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              ★ CALENDARIO
            </span>
            <span class="text-xs font-black text-white">Settembre 2026</span>
          </div>
          <span class="text-blue-200 text-xs font-mono">Oggi 21</span>
        </div>
        <div class="grid grid-cols-7 text-center text-[9px] font-bold text-blue-200 pt-1 font-mono">
          <span>L</span><span>M</span><span>M</span><span>G</span><span>V</span>
          <span class="text-amber-300">S</span><span class="text-amber-300">D</span>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center text-xs font-bold py-1 leading-tight flex-1">
          <span class="text-white/40">28</span><span class="text-white/40">29</span><span class="text-white/40">30</span><span class="text-white/40">31</span>
          <span class="rounded hover:bg-white/20 cursor-pointer">1</span>
          <span class="rounded hover:bg-white/20 cursor-pointer text-amber-300">2</span>
          <span class="rounded hover:bg-white/20 cursor-pointer text-amber-300">3</span>
          <span class="rounded hover:bg-white/20 cursor-pointer">4</span>
          <span class="rounded hover:bg-white/20 cursor-pointer">5</span>
          <span class="rounded-full bg-rose-500 text-white font-black shadow-xs ring-2 ring-white/50 cursor-pointer">21</span>
          <span class="rounded hover:bg-white/20 cursor-pointer">22</span>
          <span class="rounded hover:bg-white/20 cursor-pointer">23</span>
          <span class="rounded hover:bg-white/20 cursor-pointer text-amber-300">24</span>
          <span class="rounded hover:bg-white/20 cursor-pointer text-amber-300">25</span>
        </div>
        <div class="flex items-center justify-between border-t border-blue-500/60 pt-1 text-[10px] font-mono text-blue-200">
          <span class="font-bold text-amber-300">● 100% Sincronizzato</span>
          <span>Bento Studio</span>
        </div>
      </div>

      <!-- POLAROID CON WASHI TAPE -->
      <div class="relative p-4 bg-white border-2 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between items-center rotate-1 hover:rotate-0 transition-transform min-h-[210px] group">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-300 text-amber-950 text-[10px] font-mono font-black px-4 py-0.5 -rotate-2 shadow-xs border border-amber-400 z-20 whitespace-nowrap uppercase tracking-wider">
          ★ POLAROID
        </div>
        <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 mt-2 shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=80" 
            alt="Foto Polaroid" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
          />
        </div>
        <div class="pt-2 text-center font-mono w-full">
          <div class="text-xs font-black text-slate-900">STUDIO ARCHITECTURE</div>
        </div>
      </div>

      <!-- FRAME SMARTPHONE 9:16 (2 COLONNE IN BASSO) -->
      <div class="col-span-1 sm:col-span-2">
        <div class="relative w-full max-w-[320px] mx-auto bg-slate-950 p-3.5 rounded-[3rem] border-4 border-slate-800 shadow-2xl flex flex-col justify-between min-h-[380px]">
          <div class="flex items-center justify-between px-3 pt-1 pb-2 text-[10px] font-mono text-slate-400 select-none">
            <span class="font-bold text-white">09:41</span>
            <div class="w-16 h-3.5 bg-black rounded-full flex items-center justify-end px-2 border border-slate-800/80">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <span class="font-bold">5G</span>
          </div>
          <div class="flex-1 w-full bg-slate-900 rounded-[2.2rem] p-4 text-white flex flex-col justify-between overflow-hidden shadow-inner border border-slate-800">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
              <span class="text-[10px] font-mono font-bold text-amber-400">APP FEED</span>
              <span class="text-xs">🔔</span>
            </div>
            <div class="my-auto text-center space-y-2 py-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                ★
              </div>
              <h4 class="text-sm font-black text-white">Frame Smartphone</h4>
              <p class="text-xs text-slate-400">Cornice 9:16 con Dynamic Island</p>
            </div>
            <button class="w-full py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl cursor-pointer">Azione Mobile ➔</button>
          </div>
          <div class="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-2 mb-0.5"></div>
        </div>
      </div>

      <!-- FRAME BROWSER 16:9 (2 COLONNE IN BASSO) -->
      <div class="col-span-1 sm:col-span-2">
        <div class="w-full bg-[#181825] border-2 border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[380px]">
          <div class="bg-[#1e1e2e] px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#f38ba8] inline-block shadow-xs"></span>
              <span class="w-3 h-3 rounded-full bg-[#f9e2af] inline-block shadow-xs"></span>
              <span class="w-3 h-3 rounded-full bg-[#a6e3a1] inline-block shadow-xs"></span>
            </div>
            <div class="flex-1 max-w-xs bg-[#11111b] border border-[#313244] rounded-xl px-3 py-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#a6adc8]">
              <span class="text-emerald-400 text-[10px]">🔒</span>
              <span class="text-[#89b4fa]">bento.studio</span>
            </div>
            <div class="text-xs font-mono text-slate-500">16:9</div>
          </div>
          <div class="flex-1 p-6 bg-[#11111b] text-white flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span class="text-xs font-mono text-cyan-400 font-bold">PORTALE DESKTOP</span>
              <span class="text-xs font-mono text-emerald-400">Attivo</span>
            </div>
            <div class="my-auto py-4 text-center space-y-2">
              <h3 class="text-xl font-black text-white">Finestra Browser Reale</h3>
              <p class="text-xs text-slate-400 max-w-sm mx-auto">
                Cornice macOS con semafori colorati e barra URL protetta.
              </p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs font-mono text-slate-500">
              <span>Stato: 200 OK</span>
              <span class="text-emerald-400">Desktop View</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>`
  }
];
