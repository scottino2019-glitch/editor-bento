import { Snippet } from '../types';

export const BENTO_SNIPPETS: Snippet[] = [
  // =========================================================================
  // 1. GRIGLIE STRUTTURALI (TUTTE 100% VUOTE CON SLOT SEGNAPOSTO TRATTEGGIATI)
  // =========================================================================
  {
    id: 'grid-bento-4col-empty',
    title: 'Griglia Bento 4 Colonne Vuota (5 Slot Bilanciati)',
    category: 'griglie',
    description: 'Struttura responsive a 4 colonne con 5 slot vuoti tratteggiati: 1 slot singolo, 1 slot panoramico (2 col), 1 slot singolo e 2 slot medi inferiori. Nessun contenuto prefabbricato.',
    tags: ['griglie', 'vuota', '4 colonne', 'slot', 'wireframe', 'placeholder', 'bilanciata'],
    html: `<!-- ============================================================= -->
<!-- GRIGLIA BENTO 4 COLONNE VUOTA (5 SLOT SEGNAPOSTO TRATTEGGIATI) -->
<!-- ============================================================= -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">

  <!-- SLOT 1 (1 Colonna): Incolla qui il tuo widget singolo -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[220px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-amber-300 transition">SLOT 1 • 1 COLONNA</span>
    <span class="text-[10px] text-slate-500 mt-1">Perfetto per: Card Metrica, Checklist o Profilo Utente</span>
  </div>

  <!-- SLOT 2 (2 Colonne Panoramico): Incolla qui calendari o banner -->
  <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[220px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
      ▭
    </div>
    <span class="font-bold text-slate-300 group-hover:text-cyan-300 transition">SLOT 2 • 2 COLONNE (PANORAMICO)</span>
    <span class="text-[10px] text-slate-500 mt-1">Perfetto per: Vetrina Funzionalità, Media 16:9 o Call to Action</span>
  </div>

  <!-- SLOT 3 (1 Colonna): Incolla qui il tuo widget singolo -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[220px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-amber-300 transition">SLOT 3 • 1 COLONNA</span>
    <span class="text-[10px] text-slate-500 mt-1">Perfetto per: Stato Interattivo, Citazione o Notifiche Recenti</span>
  </div>

  <!-- SLOT 4 (2 Colonne): Incolla qui card media o browser 16:9 -->
  <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[220px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-emerald-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
      ▭
    </div>
    <span class="font-bold text-slate-300 group-hover:text-emerald-300 transition">SLOT 4 • 2 COLONNE (MEDIO)</span>
    <span class="text-[10px] text-slate-500 mt-1">Perfetto per: Finestra Browser 16:9, Terminale Codice</span>
  </div>

  <!-- SLOT 5 (2 Colonne): Incolla qui terminale o statistiche -->
  <div class="col-span-1 sm:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-3xl min-h-[220px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-purple-300 group-hover:bg-slate-700 flex items-center justify-center text-lg mb-2 transition">
      ▭
    </div>
    <span class="font-bold text-slate-300 group-hover:text-purple-300 transition">SLOT 5 • 2 COLONNE (MEDIO)</span>
    <span class="text-[10px] text-slate-500 mt-1">Perfetto per: Tabella Specifiche, Nuvola Tag o Card CTA</span>
  </div>

</div>`
  },
  {
    id: 'grid-bento-3col-hero-empty',
    title: 'Griglia Bento 3 Colonne Vuota (Hero 2x2 + 2 Laterali + Banner)',
    category: 'griglie',
    description: 'Layout asimmetrico ad alto impatto: grande slot Hero 2x2 a sinistra, 2 slot impilati a destra e 1 slot banner orizzontale a piena larghezza in basso. Completamente vuoto.',
    tags: ['griglie', 'vuota', '3 colonne', 'hero', 'asimmetrica', 'layout'],
    html: `<!-- =============================================================== -->
<!-- GRIGLIA BENTO 3 COLONNE VUOTA CON GRANDE SLOT HERO A SINISTRA -->
<!-- =============================================================== -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">

  <!-- SLOT HERO (2 Colonne x 2 Righe): Grande spazio vetrina -->
  <div class="lg:col-span-2 lg:row-span-2 p-8 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[420px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700 flex items-center justify-center text-2xl mb-3 transition">
      ★
    </div>
    <span class="text-sm font-bold text-slate-200 group-hover:text-amber-300 transition">SLOT HERO PRINCIPALE (2 COLONNE × 2 RIGHE)</span>
    <span class="text-xs text-slate-400 mt-1 max-w-sm">Ideale per: Hero Banner Vetrina, Frame Dispositivo o Showcase Principale</span>
  </div>

  <!-- SLOT LATERALE SUPERIORE (1 Colonna) -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[195px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 group-hover:text-cyan-300 flex items-center justify-center text-base mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-cyan-300 transition">SLOT LATERALE 1</span>
    <span class="text-[10px] text-slate-500 mt-0.5">Ideale per: Post-it o Badge ID</span>
  </div>

  <!-- SLOT LATERALE INFERIORE (1 Colonna) -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[195px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 group-hover:text-emerald-300 flex items-center justify-center text-base mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-emerald-300 transition">SLOT LATERALE 2</span>
    <span class="text-[10px] text-slate-500 mt-0.5">Ideale per: Termometro o To-Do list</span>
  </div>

  <!-- SLOT BANNER PIENA LARGHEZZA (3 Colonne) -->
  <div class="lg:col-span-3 p-6 border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-3xl min-h-[160px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-purple-300 flex items-center justify-center text-lg mb-2 transition">
      ▭▭
    </div>
    <span class="font-bold text-slate-300 group-hover:text-purple-300 transition">SLOT BANNER BASE (3 COLONNE INTERE)</span>
    <span class="text-[10px] text-slate-500 mt-1">Ideale per: Finestra Browser 16:9, Barra Navigazione o Footer</span>
  </div>

</div>`
  },
  {
    id: 'grid-bento-mosaic-empty',
    title: 'Griglia Bento Mosaico Vuota (Slot Verticale Alto + 3 Orizzontali)',
    category: 'griglie',
    description: 'Mosaico sfalsato vuoto: colonna sinistra alta (row-span-2) per dispositivi verticali come smartphone o quaderni, e 3 slot orizzontali a destra. Nessun testo o card pre-inserita.',
    tags: ['griglie', 'vuota', 'mosaico', 'verticale', 'smartphone', 'sfalsata'],
    html: `<!-- =============================================================== -->
<!-- GRIGLIA BENTO MOSAICO VUOTA CON SLOT VERTICALE ALTO A SINISTRA -->
<!-- =============================================================== -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

  <!-- SLOT VERTICALE ALTO (1 Colonna x 2 Righe) -->
  <div class="lg:row-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-rose-400 rounded-3xl min-h-[440px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-12 h-16 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-rose-300 border border-slate-700 flex items-center justify-center text-xl mb-3 transition">
      📱
    </div>
    <span class="font-bold text-slate-200 group-hover:text-rose-300 transition">SLOT VERTICALE ALTO (9:16)</span>
    <span class="text-[10px] text-slate-400 mt-1 max-w-[180px]">Ideale per: Frame Smartphone 9:16 o Quaderno ad Anelli</span>
  </div>

  <!-- SLOT SUPERIORE MEDIO (2 Colonne) -->
  <div class="sm:col-span-1 lg:col-span-2 p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[205px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 group-hover:text-cyan-300 flex items-center justify-center text-lg mb-2 transition">
      ▭
    </div>
    <span class="font-bold text-slate-300 group-hover:text-cyan-300 transition">SLOT ORIZZONTALE MEDIO 1</span>
    <span class="text-[10px] text-slate-500 mt-0.5">Ideale per: Calendario o Cassetta Retrò</span>
  </div>

  <!-- SLOT INFERIORE QUADRATO (1 Colonna) -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[205px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 group-hover:text-amber-300 flex items-center justify-center text-base mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-amber-300 transition">SLOT QUADRATO</span>
    <span class="text-[10px] text-slate-500 mt-0.5">Ideale per: Polaroid o Post-it</span>
  </div>

  <!-- SLOT INFERIORE SECONDO (1 Colonna) -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[205px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <div class="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 group-hover:text-emerald-300 flex items-center justify-center text-base mb-2 transition">
      ⊞
    </div>
    <span class="font-bold text-slate-300 group-hover:text-emerald-300 transition">SLOT QUADRATO</span>
    <span class="text-[10px] text-slate-500 mt-0.5">Ideale per: To-Do list o Flashcard</span>
  </div>

</div>`
  },
  {
    id: 'grid-bento-2x2-empty',
    title: 'Griglia Bento 2x2 Quadrata Vuota (4 Slot Identici Equilibrati)',
    category: 'griglie',
    description: 'Matrice simmetrica di 4 slot identici di uguali proporzioni (2x2), ideale per dashboard pulite, cataloghi a 4 sezioni o bacheche minimaliste.',
    tags: ['griglie', 'vuota', '2x2', 'quadrata', 'simmetrica', 'equilibrata'],
    html: `<!-- =============================================================== -->
<!-- GRIGLIA BENTO 2x2 QUADRATA VUOTA (4 SLOT IDENTICI EQUILIBRATI) -->
<!-- =============================================================== -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

  <!-- SLOT 1 • QUADRANTE SUPERIORE SINISTRO -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-3xl min-h-[240px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <span class="w-10 h-10 rounded-2xl bg-slate-800 text-amber-300 flex items-center justify-center text-lg mb-2">01</span>
    <span class="font-bold text-slate-200">SLOT 01 (QUADRANTE NORD-OVEST)</span>
    <span class="text-[10px] text-slate-500 mt-1">Incolla qui la prima card o widget</span>
  </div>

  <!-- SLOT 2 • QUADRANTE SUPERIORE DESTRO -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-3xl min-h-[240px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <span class="w-10 h-10 rounded-2xl bg-slate-800 text-cyan-300 flex items-center justify-center text-lg mb-2">02</span>
    <span class="font-bold text-slate-200">SLOT 02 (QUADRANTE NORD-EST)</span>
    <span class="text-[10px] text-slate-500 mt-1">Incolla qui la seconda card o widget</span>
  </div>

  <!-- SLOT 3 • QUADRANTE INFERIORE SINISTRO -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-emerald-400 rounded-3xl min-h-[240px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <span class="w-10 h-10 rounded-2xl bg-slate-800 text-emerald-300 flex items-center justify-center text-lg mb-2">03</span>
    <span class="font-bold text-slate-200">SLOT 03 (QUADRANTE SUD-OVEST)</span>
    <span class="text-[10px] text-slate-500 mt-1">Incolla qui la terza card o widget</span>
  </div>

  <!-- SLOT 4 • QUADRANTE INFERIORE DESTRO -->
  <div class="p-6 border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-3xl min-h-[240px] flex flex-col items-center justify-center text-center font-mono text-xs bg-slate-900/30 transition group cursor-pointer">
    <span class="w-10 h-10 rounded-2xl bg-slate-800 text-purple-300 flex items-center justify-center text-lg mb-2">04</span>
    <span class="font-bold text-slate-200">SLOT 04 (QUADRANTE SUD-EST)</span>
    <span class="text-[10px] text-slate-500 mt-1">Incolla qui la quarta card o widget</span>
  </div>

</div>`
  },

  // =========================================================================
  // 2. FRAME DISPOSITIVI REALI & OGGETTI TATTILI (FISICI, CURATI E CARINI)
  // =========================================================================
  {
    id: 'frame-tablet-widescreen',
    title: 'Frame Tablet Touchscreen Widescreen (16:10 / 4:3 Alluminio & OS)',
    category: 'frame',
    description: 'Cornice realistica per tablet widescreen / iPad con chassis in alluminio satinato scuro, fotocamera frontale con riflesso ottico, status bar tablet 09:41, display retina interno con layout a due colonne e barra home indicator.',
    tags: ['frame', 'tablet', 'ipad', 'touchscreen', 'widescreen', 'mockup', 'alluminio', '4:3'],
    html: `<!-- Frame Tablet Widescreen 16:10 / 4:3 con Fotocamera & Alluminio Satinato -->
<div class="relative w-full max-w-[540px] mx-auto bg-slate-950 p-4 sm:p-5 rounded-[2.5rem] border-4 border-slate-800 shadow-2xl flex flex-col justify-between min-h-[380px]">
  <!-- Bordo Superiore Tablet con Fotocamera Frontale Centrata -->
  <div class="flex items-center justify-between px-4 pb-2.5 text-[10px] font-mono text-slate-400 select-none border-b border-slate-800/80">
    <div class="flex items-center gap-2">
      <span class="font-bold text-white">09:41</span>
      <span class="text-slate-500">Mar 22 Settembre</span>
    </div>

    <!-- Sensore Fotocamera Frontale Tablet con Riflesso Ottico -->
    <div class="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
      <span class="w-1 h-1 rounded-full bg-cyan-400/80"></span>
    </div>

    <div class="flex items-center gap-2 text-[10px]">
      <span class="text-slate-400">Wi-Fi ●●●</span>
      <span class="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded text-[9px]">94% 🔋</span>
    </div>
  </div>

  <!-- Schermo Interno Retina Display -->
  <div class="flex-1 w-full bg-slate-900 rounded-[1.8rem] p-4 text-white flex flex-col justify-between overflow-hidden shadow-inner border border-slate-800/90 my-2.5">
    <!-- Header Workspace Interno del Tablet -->
    <div class="flex items-center justify-between border-b border-slate-800 pb-2.5">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
        <span class="text-xs font-mono font-bold text-slate-200">WORKSPACE // TABLET OS</span>
      </div>
      <span class="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/30">
        MODALITÀ AFFIANCATA
      </span>
    </div>

    <!-- Layout a 2 Colonne interno al Tablet -->
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 my-auto py-3 items-center">
      <!-- Colonna Sinistra: Strumenti & File -->
      <div class="sm:col-span-5 bg-slate-950/80 rounded-2xl p-3 border border-slate-800 space-y-2 font-mono text-xs">
        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pannello Rapido</div>
        <div class="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
          <span class="text-slate-300">📁 Modello Bento</span>
          <span class="text-amber-400 font-bold">Attivo</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
          <span class="text-slate-300">🎨 Palette Tattile</span>
          <span class="text-emerald-400 font-bold">100%</span>
        </div>
      </div>

      <!-- Colonna Destra: Contenuto Principale -->
      <div class="sm:col-span-7 bg-slate-950/80 rounded-2xl p-3.5 border border-slate-800 flex flex-col justify-between space-y-2">
        <div>
          <span class="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">CANVAS TABLET</span>
          <h4 class="text-sm font-bold text-white mt-1.5">Interfaccia Proporzionata 4:3</h4>
          <p class="text-[11px] text-slate-400 leading-relaxed mt-1">
            Visualizza prototipi, dashboard o fogli di lavoro con una cornice fisica ergonomica per tablet.
          </p>
        </div>
        <button class="w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs rounded-xl shadow-md transition cursor-pointer">
          Interagisci con il Display ➔
        </button>
      </div>
    </div>

    <!-- Dock Inferiore del Tablet -->
    <div class="pt-2 border-t border-slate-800/80 flex items-center justify-center gap-3">
      <div class="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs cursor-pointer shadow-xs">📝</div>
      <div class="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs cursor-pointer shadow-xs">📊</div>
      <div class="w-7 h-7 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-bold cursor-pointer shadow-xs">★</div>
      <div class="w-7 h-7 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs cursor-pointer shadow-xs">⚙️</div>
    </div>
  </div>

  <!-- Barra Home Indicator Inferiore del Tablet -->
  <div class="w-36 h-1 bg-slate-600 rounded-full mx-auto mt-1 mb-0.5"></div>
</div>`
  },
  {
    id: 'frame-smartphone-notch',
    title: 'Frame Smartphone 9:16 (Dynamic Island, Status Bar & Home Bar)',
    category: 'frame',
    description: 'Cornice fisica realistica per smartphone moderno con Dynamic Island, orario 09:41, icone di rete 5G, schermo interno e indicatore di scorrimento home in basso.',
    tags: ['frame', 'smartphone', 'iphone', 'mockup', 'mobile', '9:16', 'dynamic island'],
    html: `<!-- Frame Smartphone 9:16 con Dynamic Island -->
<div class="relative w-full max-w-[320px] mx-auto bg-slate-950 p-3.5 rounded-[3rem] border-4 border-slate-800 shadow-2xl flex flex-col justify-between min-h-[460px]">
  <!-- Bordo Superiore: Status Bar & Dynamic Island -->
  <div class="flex items-center justify-between px-3 pt-1 pb-2 text-[10px] font-mono text-slate-400 select-none">
    <span class="font-bold text-white">09:41</span>
    <!-- Dynamic Island Nera al Centro -->
    <div class="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 border border-slate-800/80">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
    </div>
    <div class="flex items-center gap-1 text-[9px]">
      <span>5G</span>
      <span class="font-bold">100%</span>
    </div>
  </div>

  <!-- Schermo Interno Display -->
  <div class="flex-1 w-full bg-slate-900 rounded-[2.2rem] p-4 text-white flex flex-col justify-between overflow-hidden shadow-inner border border-slate-800">
    <div class="flex items-center justify-between border-b border-slate-800 pb-2">
      <span class="text-[10px] font-mono font-bold text-amber-400">APP FEED</span>
      <span class="text-xs">🔔</span>
    </div>

    <div class="my-auto text-center space-y-2 py-4">
      <div class="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto shadow-md">
        ★
      </div>
      <h4 class="text-sm font-black text-white">Contenuto Mobile</h4>
      <p class="text-xs text-slate-400 leading-relaxed">
        Incornicia le tue viste per smartphone in un vero dispositivo.
      </p>
    </div>

    <button class="w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition cursor-pointer">
      Azione Principale ➔
    </button>
  </div>

  <!-- Home Indicator Inferiore -->
  <div class="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5 mb-1"></div>
</div>`
  },
  {
    id: 'frame-browser-window',
    title: 'Frame Finestra Browser Desktop 16:9 (Semafori macOS & Barra URL)',
    category: 'frame',
    description: 'Cornice di finestra browser desktop con i 3 classici pulsanti semaforo colorati (rosso, giallo, verde), pulsanti avanti/indietro e barra URL con lucchetto di sicurezza.',
    tags: ['frame', 'browser', 'finestra', 'macos', 'desktop', 'semafori', 'url'],
    html: `<!-- Frame Finestra Browser Desktop 16:9 -->
<div class="w-full bg-[#181825] border-2 border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[340px]">
  <!-- Barra Superiore macOS -->
  <div class="bg-[#1e1e2e] px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
    <!-- 3 Pulsanti Semaforo macOS -->
    <div class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full bg-[#f38ba8] inline-block shadow-xs cursor-pointer"></span>
      <span class="w-3 h-3 rounded-full bg-[#f9e2af] inline-block shadow-xs cursor-pointer"></span>
      <span class="w-3 h-3 rounded-full bg-[#a6e3a1] inline-block shadow-xs cursor-pointer"></span>
    </div>

    <!-- Barra URL al Centro con Lucchetto -->
    <div class="flex-1 max-w-md bg-[#11111b] border border-[#313244] rounded-xl px-3 py-1 flex items-center justify-center gap-1.5 text-xs font-mono text-[#a6adc8]">
      <span class="text-emerald-400 text-[10px]">🔒</span>
      <span class="text-[#cdd6f4]">https://</span>
      <span class="text-[#89b4fa]">bento.studio</span>
      <span class="text-[#6c7086]">/preview</span>
    </div>

    <div class="text-xs font-mono text-slate-500">16:9</div>
  </div>

  <!-- Schermo Interno della Finestra Browser -->
  <div class="flex-1 p-6 bg-[#11111b] text-white flex flex-col justify-between">
    <div class="flex items-center justify-between border-b border-slate-800/80 pb-3">
      <span class="text-xs font-mono text-cyan-400 font-bold">PORTALE APPLICATIVO</span>
      <span class="text-xs font-mono text-slate-500">v2.4 Ready</span>
    </div>

    <div class="my-auto py-4 text-center space-y-2">
      <h3 class="text-xl font-black text-white">Area di Lavoro Web</h3>
      <p class="text-xs text-slate-400 max-w-md mx-auto">
        Incolla qui la tua dashboard o pagina web incorniciata in un browser desktop.
      </p>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-500">
      <span>Stato: 200 OK</span>
      <span class="text-emerald-400">Connessione Sicura SSL</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'frame-ring-binder-notebook',
    title: 'Frame Quaderno ad Anelli Metallici 3D & Carta Quadrettata',
    category: 'frame',
    description: 'Quaderno tattile con fori e 4 anelli metallici 3D sporgenti a sinistra, trama a quadretti chiara e linguetta evidenziata.',
    tags: ['frame', 'quaderno', 'anelli', 'tattile', 'carta', 'appunti', 'notebook'],
    html: `<!-- Frame Quaderno ad Anelli Metallici 3D -->
<div class="relative pl-6">
  <!-- 4 Anelli Metallici 3D Sporgenti a Sinistra -->
  <div class="absolute left-1 top-10 flex flex-col gap-10 z-20 pointer-events-none">
    <div class="w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-800 shadow-md"></div>
    <div class="w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-800 shadow-md"></div>
    <div class="w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-800 shadow-md"></div>
    <div class="w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-800 shadow-md"></div>
  </div>

  <!-- Foglio del Quaderno a Quadretti -->
  <div class="relative p-6 bg-[#fffdf0] text-slate-900 border-2 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between min-h-[300px]">
    <div class="flex items-center justify-between border-b-2 border-amber-900/15 pb-2">
      <span class="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-200 text-amber-950 px-2 py-0.5 rounded">
        PAGINA #01 // APPUNTI
      </span>
      <span class="text-xs font-mono text-slate-500 font-bold">21 SET</span>
    </div>

    <div class="my-3 space-y-2">
      <h3 class="text-lg font-black text-slate-950 font-serif">Note di Progetto</h3>
      <p class="text-xs text-slate-700 leading-relaxed font-sans">
        Quaderno ad anelli con foglio a consistenza cartacea. Ideale per frasi guida, annotazioni di design o idee veloci.
      </p>
    </div>

    <div class="pt-3 border-t-2 border-amber-900/15 flex items-center justify-between text-xs font-mono text-slate-600">
      <span>4 Punti Verificati</span>
      <span class="text-amber-900 font-bold hover:underline cursor-pointer">Sfoglia Pagina ➔</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'frame-polaroid-washi',
    title: 'Frame Polaroid con Washi Tape Dorato & Didascalia 📸',
    category: 'frame',
    description: 'Foto polaroid vintage con nastro adesivo giallo/oro inclinato in alto, foto quadrata, dettagli ottici 35mm e didascalia dattiloscritta.',
    tags: ['frame', 'polaroid', 'foto', 'washi tape', 'vintage', 'fotografia'],
    html: `<!-- Frame Polaroid con Washi Tape Dorato -->
<div class="relative p-4 bg-white border-2 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between items-center rotate-1 hover:rotate-0 transition-transform min-h-[320px] group">
  <!-- Washi Tape Giallo Inclinato Sopra -->
  <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-300 text-amber-950 text-[10px] font-mono font-black px-4 py-0.5 -rotate-2 shadow-xs border border-amber-400 z-20 whitespace-nowrap uppercase tracking-wider">
    ★ POLAROID WASHI TAPE
  </div>

  <!-- Foto Quadrata Polaroid -->
  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 mt-2 shadow-inner">
    <img 
      src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=80" 
      alt="Scatto Polaroid" 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
    />
    <span class="absolute bottom-2 right-2 px-2 py-0.5 bg-slate-950/85 text-[9px] font-mono text-white rounded-md">
      35mm · f/1.8
    </span>
  </div>

  <!-- Didascalia Polaroid Dattiloscritta -->
  <div class="pt-3 pb-1 text-center font-mono w-full">
    <div class="text-xs font-black text-slate-900">STUDIO ARCHITECTURE</div>
    <div class="text-[10px] text-slate-500 mt-0.5">Tokyo · Collezione 2026</div>
  </div>
</div>`
  },
  {
    id: 'frame-sticky-note-pin',
    title: 'Frame Post-it Quadrettato con Spilla 📌 3D a Rilievo',
    category: 'frame',
    description: 'Foglietto giallo memo con trama a quadretti sottili, spilla rossa a rilievo 3D con ombra realistica e pulsante per ascolto audio.',
    tags: ['frame', 'post-it', 'spilla', 'memo', 'appunti', 'giallo', 'tattile'],
    html: `<!-- Frame Post-it con Spilla 📌 3D -->
<div class="relative p-5 bg-[#fefce8] text-slate-900 border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] rotate-[-1.5deg] hover:rotate-0 transition-transform flex flex-col justify-between min-h-[220px]">
  <!-- Spilla 📌 3D Centrata Sopra -->
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
    <h4 class="text-base font-bold text-slate-900 leading-snug">
      "Un viaggio di mille miglia comincia con un solo passo."
    </h4>
    <p class="text-[11px] text-amber-900 font-mono mt-1">
      Laozi · Massima tradizionale
    </p>
  </div>

  <div class="text-[10px] font-mono text-amber-950 font-bold flex justify-between items-center border-t border-amber-300/80 pt-2 relative z-10">
    <span>Saggezza Quotidiana</span>
    <button class="bg-amber-400 hover:bg-amber-300 text-amber-950 font-black px-2 py-0.5 rounded border border-amber-900/30 shadow-xs cursor-pointer">
      Ascolta 🔊
    </button>
  </div>
</div>`
  },

  // =========================================================================
  // 3. CARD CON FORME MATERICHE DISTINTE & COLORI DIVERSIFICATI (NON COMMERCIALI)
  // =========================================================================
  {
    id: 'card-notebook-spiral-lined',
    title: 'Card Quaderno con Spirale Metallica 3D & Righe con Margine Rosso 📓',
    category: 'card',
    description: 'Vero quaderno ad anelli con fori e spirale metallica tridimensionale a sinistra, foglio avorio a righe azzurre sottili, linea verticale di margine rosso e spazio libero per note.',
    tags: ['card', 'quaderno', 'spirale', 'carta', 'righe', 'margine', 'tattile', 'avorio'],
    html: `<!-- Card Quaderno con Spirale Metallica & Righe con Margine Rosso -->
<div class="relative w-full h-full min-h-[260px] pl-6 py-2 select-none group font-sans">
  <!-- Spirale Metallica 3D con Fori a Sinistra -->
  <div class="absolute left-1.5 top-6 bottom-6 flex flex-col justify-between z-20 pointer-events-none">
    <div class="flex items-center">
      <div class="w-3 h-3 rounded-full bg-stone-800 shadow-inner -mr-1.5 border border-stone-900"></div>
      <div class="w-7 h-3 rounded-full bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-600"></div>
    </div>
    <div class="flex items-center">
      <div class="w-3 h-3 rounded-full bg-stone-800 shadow-inner -mr-1.5 border border-stone-900"></div>
      <div class="w-7 h-3 rounded-full bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-600"></div>
    </div>
    <div class="flex items-center">
      <div class="w-3 h-3 rounded-full bg-stone-800 shadow-inner -mr-1.5 border border-stone-900"></div>
      <div class="w-7 h-3 rounded-full bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-600"></div>
    </div>
    <div class="flex items-center">
      <div class="w-3 h-3 rounded-full bg-stone-800 shadow-inner -mr-1.5 border border-stone-900"></div>
      <div class="w-7 h-3 rounded-full bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-600"></div>
    </div>
    <div class="flex items-center">
      <div class="w-3 h-3 rounded-full bg-stone-800 shadow-inner -mr-1.5 border border-stone-900"></div>
      <div class="w-7 h-3 rounded-full bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 shadow-md border border-stone-600"></div>
    </div>
  </div>

  <!-- Foglio del Quaderno a Righe con Margine Rosso -->
  <div class="relative w-full h-full p-5 sm:p-6 bg-[#fffef9] text-stone-800 rounded-3xl border-2 border-[#e7dec8] shadow-[6px_6px_0px_0px_rgba(28,25,23,0.15)] flex flex-col justify-between overflow-hidden">
    <!-- Linea di Margine Verticale Rossa Tipica dei Quaderni -->
    <div class="absolute left-10 top-0 bottom-0 w-0.5 bg-rose-400/70 pointer-events-none"></div>

    <!-- Testata del Foglio con Data & Etichetta Adesiva -->
    <div class="relative z-10 pl-6 flex items-center justify-between border-b border-stone-300/80 pb-2">
      <span class="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 font-mono text-[10px] font-bold border border-amber-300/80 uppercase tracking-wider">
        PAGINA #07 // APPUNTI
      </span>
      <span class="text-[11px] font-mono text-stone-500">22 Settembre</span>
    </div>

    <!-- Corpo a Righe con Testo Ispirazionale Libero -->
    <div class="relative z-10 pl-6 my-auto py-3 space-y-2">
      <h3 class="text-lg sm:text-xl font-bold text-stone-900 font-serif tracking-tight leading-snug">
        Osservazioni sullo Spazio & la Materia
      </h3>
      <p class="text-xs text-stone-600 leading-relaxed font-normal">
        Ogni idea ha bisogno di un foglio su cui sedimentare. La forma non segue solo la funzione, ma la memoria tattile di chi osserva e compone.
      </p>
    </div>

    <!-- Chiusura Foglio -->
    <div class="relative z-10 pl-6 pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
      <span>Quaderno Misto • Righe sottili</span>
      <span class="text-amber-900 font-bold hover:underline cursor-pointer">Volta Pagina ➔</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'card-manila-folder-dossier',
    title: 'Card Cartella d\'Archivio Manila con Linguetta (Tab), Graffetta & Timbro 📁',
    category: 'card',
    description: 'Cartellina fisica stile cartoncino manila caldo con linguetta superiore sagomata sporgente, graffetta fermacarte cromata 3D, timbro circolare impresso e fascicolo interno.',
    tags: ['card', 'cartella', 'manila', 'tab', 'graffetta', 'timbro', 'archivio', 'dossier'],
    html: `<!-- Card Cartella d'Archivio Manila con Tab & Graffetta -->
<div class="relative w-full h-full min-h-[260px] pt-4 select-none group font-sans">
  <!-- Linguetta Sagomata Sporgente Superiore (Tab della Cartella) -->
  <div class="absolute top-0 left-6 h-6 px-4 bg-[#deb881] text-[#4a2e10] font-mono text-[10px] font-bold uppercase tracking-wider rounded-t-xl border-t-2 border-x-2 border-[#b89156] flex items-center gap-1.5 shadow-xs z-10">
    <span>📁</span>
    <span>FASCICOLO // ATLANTE</span>
  </div>

  <!-- Graffetta Metallica Cromata 3D Incastrata sul Bordo Superiore -->
  <div class="absolute top-1 right-8 z-20 pointer-events-none drop-shadow-md">
    <div class="w-4 h-9 rounded-full border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-400 shadow-sm"></div>
  </div>

  <!-- Corpo Principale della Cartellina Manila -->
  <div class="relative w-full h-full p-5 sm:p-6 bg-[#ecd5ab] text-[#3e2712] rounded-3xl rounded-tl-sm border-2 border-[#b89156] shadow-[6px_6px_0px_0px_rgba(74,46,16,0.18)] flex flex-col justify-between overflow-hidden">
    <!-- Timbro Vintage ad Anello Circolare Impresso sullo Sfondo -->
    <div class="absolute right-4 bottom-3 w-24 h-24 rounded-full border-2 border-dashed border-[#8c5d2c]/30 flex items-center justify-center -rotate-12 pointer-events-none select-none">
      <span class="text-[9px] font-mono font-bold text-[#8c5d2c]/40 tracking-widest uppercase text-center">
        ARCHIVIO<br/>LIBERO<br/>2026
      </span>
    </div>

    <!-- Intestazione del Dossier -->
    <div class="flex items-center justify-between border-b border-[#cbb084] pb-2 relative z-10">
      <span class="text-xs font-mono font-black text-[#5c3a17] uppercase tracking-wider">
        RACCORLITORE SEZIONE 03
      </span>
      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#deb881] text-[#3e2712] border border-[#b89156] font-bold">
        DOC. N° 418
      </span>
    </div>

    <!-- Contenuto del Fascicolo -->
    <div class="my-auto py-3 space-y-1.5 relative z-10">
      <h3 class="text-lg sm:text-xl font-bold text-[#2d1b09] font-serif tracking-tight leading-snug">
        Raccolta Documentale & Frammenti
      </h3>
      <p class="text-xs text-[#52391e] leading-relaxed font-normal">
        Una cartellina dedicata a raccogliere materiali eterogenei: schizzi, riferimenti bibliografici, note di lavoro e campioni visivi senza costrizioni prefissate.
      </p>
    </div>

    <!-- Barra Inferiore con Dettagli della Cartella -->
    <div class="pt-2 border-t border-[#cbb084] flex items-center justify-between text-[11px] font-mono text-[#5c3a17] relative z-10">
      <span>12 Schede inserite</span>
      <span class="font-bold hover:underline cursor-pointer text-[#2d1b09]">Apri Cartella ➔</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'card-multimedia-video-player',
    title: 'Card Video Frame Multimediale con Controlli di Riproduzione & Testo 🎬',
    category: 'card',
    description: 'Card cinematografica scura con vano video 16:9, pulsante Play circolare con alone luminoso, barra di avanzamento temporale, badge risoluzione 4K e testo descrittivo.',
    tags: ['card', 'video', 'player', 'media', 'cinema', 'multimedia', 'controlli', 'testo'],
    html: `<!-- Card Video Player 16:9 con Controlli & Testo -->
<div class="w-full h-full min-h-[270px] p-5 bg-[#0e1117] text-white border-2 border-slate-800 hover:border-amber-400/70 rounded-3xl flex flex-col justify-between transition-all font-sans group shadow-xl">
  <!-- Finestra Player Video 16:9 con Anteprima & Controlli -->
  <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shrink-0">
    <img 
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop&q=80" 
      alt="Anteprima Video Orizzonti Naturali" 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
      loading="lazy"
      referrerpolicy="no-referrer"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    <!-- Pulsante Play Circolare al Centro -->
    <div class="absolute inset-0 flex items-center justify-center">
      <button class="w-12 h-12 rounded-full bg-white/20 hover:bg-amber-400 text-white hover:text-slate-950 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110 cursor-pointer">
        <span class="text-base ml-1">▶</span>
      </button>
    </div>

    <!-- Badge Video Superiore -->
    <div class="absolute top-2 left-2 flex items-center gap-2">
      <span class="px-2 py-0.5 rounded-md bg-black/70 text-amber-300 border border-amber-400/40 text-[9px] font-mono font-bold backdrop-blur-xs">
        4K // 60 FPS
      </span>
      <span class="px-2 py-0.5 rounded-md bg-black/70 text-slate-300 border border-white/20 text-[9px] font-mono backdrop-blur-xs">
        AUDIO HI-RES
      </span>
    </div>

    <!-- Barra di Riproduzione Inferiore con Timecode -->
    <div class="absolute bottom-2 inset-x-2 flex items-center gap-2 text-[10px] font-mono text-slate-300">
      <span class="text-amber-300 font-bold">04:18</span>
      <div class="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
        <div class="w-2/5 h-full bg-amber-400 rounded-full"></div>
      </div>
      <span>16:45</span>
    </div>
  </div>

  <!-- Scomparto Testo & Note del Video -->
  <div class="my-auto pt-3 pb-1 space-y-1">
    <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
      Flussi d'Acqua & Morfologia del Territorio
    </h3>
    <p class="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2">
      Studio documentario sul movimento geologico e la persistenza dei bacini fluviali attraverso le stagioni.
    </p>
  </div>

  <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
    <span>Riprese in esterna // 2026</span>
    <span class="text-amber-400 hover:text-amber-300 font-bold cursor-pointer transition">Guarda Completo ↗</span>
  </div>
</div>`
  },
  {
    id: 'card-editorial-photo-story',
    title: 'Card Cornice Fotografica Verde Bosco & Passe-partout Asimmetrico 🖼️',
    category: 'card',
    description: 'Cornice da galleria d\'arte verde bosco e smeraldo profondo con passe-partout asimmetrico, fotografia d\'architettura in bianco e nero/toni caldi e testo tipografico serif.',
    tags: ['card', 'fotografia', 'immagine', 'verde', 'bosco', 'smeraldo', 'galleria', 'passepartout'],
    html: `<!-- Card Cornice Fotografica Verde Bosco con Passe-partout -->
<div class="w-full h-full min-h-[260px] p-5 bg-[#0a2319] text-emerald-50 border-2 border-emerald-600/40 hover:border-emerald-400/80 rounded-3xl flex flex-col justify-between transition-all font-sans group shadow-lg">
  <!-- Riquadro Fotografico Incorniciato -->
  <div class="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-950 border-2 border-emerald-800/60 shrink-0">
    <img 
      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80" 
      alt="Architettura e Spazio Negativo" 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
      referrerpolicy="no-referrer"
    />
    <span class="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#061811]/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
      LASTA OTTICA #14
    </span>
  </div>

  <div class="my-auto py-2.5 space-y-1">
    <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">STUDIO VISIVO</span>
    <h3 class="text-base font-bold text-white font-serif tracking-tight leading-snug">
      Luce Radente & Volumi Monolitici
    </h3>
    <p class="text-xs text-emerald-200/80 leading-relaxed font-normal">
      Il contrasto ottico tra superfici grezze e tagli luminosi crea una scansione ritmica all'interno della scena.
    </p>
  </div>

  <div class="pt-2.5 border-t border-emerald-900/60 flex items-center justify-between text-[11px] font-mono text-emerald-400">
    <span>Collezione Archivio</span>
    <span class="text-emerald-200 hover:text-white font-bold cursor-pointer transition">Ingrandisci ↗</span>
  </div>
</div>`
  },
  {
    id: 'card-perforated-ticket-stub',
    title: 'Card Biglietto d\'Ingresso / Ticket con Perforazione & Strappo Laterale 🎟️',
    category: 'card',
    description: 'Card a forma di biglietto vintage in terracotta/arancio caldo con intagli semicircolari laterali, linea di strappo tratteggiata, barcode verticale e matrice numerata.',
    tags: ['card', 'biglietto', 'ticket', 'strappo', 'perforazione', 'arancio', 'terracotta', 'vintage'],
    html: `<!-- Card Biglietto d'Accesso con Strappo Perforato -->
<div class="relative w-full h-full min-h-[220px] bg-[#c85a2b] text-amber-50 rounded-3xl border-2 border-[#8f3914] shadow-[6px_6px_0px_0px_rgba(80,30,10,0.25)] flex flex-col md:flex-row overflow-hidden font-sans select-none">
  <!-- Intagli Semicircolari Laterali (Tacche del Biglietto) -->
  <div class="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0d1117] border border-[#8f3914] z-20"></div>
  <div class="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0d1117] border border-[#8f3914] z-20"></div>

  <!-- Corpo Principale del Biglietto (Sinistra 70%) -->
  <div class="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-2 border-b md:border-b-0 md:border-r-2 border-dashed border-amber-200/50">
    <div class="flex items-center justify-between text-xs font-mono">
      <span class="px-2.5 py-0.5 rounded-full bg-amber-950/40 text-amber-200 text-[10px] font-bold tracking-wider uppercase border border-amber-300/30">
        TESSERA AD INGRESSO LIBERO
      </span>
      <span class="text-amber-200 text-[11px] font-bold">N° 08492</span>
    </div>

    <div class="my-auto space-y-1">
      <h3 class="text-lg sm:text-xl font-black text-white font-serif tracking-tight leading-snug">
        Esposizione Permanente di Forme & Strutture
      </h3>
      <p class="text-xs text-amber-100/90 leading-relaxed font-normal">
        Valido per l'accesso a tutte le sezioni tematiche, archivi visivi e laboratori aperti.
      </p>
    </div>

    <div class="pt-2 flex items-center justify-between text-[11px] font-mono text-amber-200">
      <span>Padiglione Centrale • Settore A</span>
      <span class="text-white font-bold cursor-pointer hover:underline">Verifica Tagliando ➔</span>
    </div>
  </div>

  <!-- Matrice Staccabile Laterale (Destra 30%) -->
  <div class="w-full md:w-36 bg-[#a74317] p-4 flex flex-row md:flex-col items-center justify-between text-center font-mono shrink-0">
    <div class="space-y-0.5 text-left md:text-center">
      <div class="text-[9px] uppercase tracking-widest text-amber-300 font-bold">MATRICE</div>
      <div class="text-xs font-black text-white">STACCO</div>
    </div>

    <!-- Codice a Barre Vettoriale -->
    <div class="flex items-end gap-1 h-8 text-amber-200 my-auto">
      <span class="w-0.5 h-8 bg-white"></span>
      <span class="w-1.5 h-8 bg-white"></span>
      <span class="w-0.5 h-5 bg-white"></span>
      <span class="w-1 h-8 bg-white"></span>
      <span class="w-0.5 h-6 bg-white"></span>
      <span class="w-1.5 h-8 bg-white"></span>
      <span class="w-0.5 h-8 bg-white"></span>
    </div>

    <div class="text-[9px] text-amber-200/80">SERIE 2026</div>
  </div>
</div>`
  },
  {
    id: 'card-pocket-notebook-strap',
    title: 'Card Taccuino da Tasca Bordò con Fascia Elastica Verticale & Cucitura 📖',
    category: 'card',
    description: 'Copertina morbida in cuoio bordò/vinaccia, cucitura a vista, etichetta dattiloscritta in ottone e fascia elastica nera di chiusura verticale a rilievo.',
    tags: ['card', 'taccuino', 'bordo', 'vinaccia', 'elastico', 'tasca', 'moleskine', 'cuoio'],
    html: `<!-- Card Taccuino da Tasca Bordò con Fascia Elastica -->
<div class="relative w-full h-full min-h-[240px] p-6 bg-[#3d131f] text-rose-50 border-2 border-[#682438] rounded-3xl shadow-[6px_6px_0px_0px_rgba(30,5,10,0.3)] flex flex-col justify-between transition-all font-sans select-none overflow-hidden group">
  <!-- Fascia Elastica Verticale Nera di Chiusura a Destra con Ombra -->
  <div class="absolute right-7 top-0 bottom-0 w-4 bg-[#14060a] border-x border-[#2c0d16] shadow-[-3px_0_6px_rgba(0,0,0,0.5),3px_0_6px_rgba(0,0,0,0.5)] z-20 pointer-events-none group-hover:scale-x-105 transition-transform"></div>

  <!-- Bordo Cucito Superiore con Filo Dorato -->
  <div class="border-b border-dashed border-rose-400/40 pb-2.5 flex items-center justify-between text-xs font-mono pr-8">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-rose-400"></span>
      <span class="font-bold text-rose-200 uppercase tracking-widest text-[10px]">TACCUINO DA TASCA</span>
    </div>
    <span class="text-[10px] text-rose-300/80">VOL. II</span>
  </div>

  <div class="my-auto py-3 space-y-1.5 pr-8">
    <h3 class="text-lg sm:text-xl font-bold text-white font-serif tracking-tight leading-snug">
      Pensieri Furtivi & Frammenti
    </h3>
    <p class="text-xs text-rose-100/80 leading-relaxed font-normal">
      Uno spazio intimo per raccogliere intuizioni rapide da consultare in viaggio. Le idee più durature nascono spesso lontano dalla scrivania.
    </p>
  </div>

  <div class="pt-2.5 border-t border-rose-400/30 flex items-center justify-between text-[11px] font-mono text-rose-300 pr-8">
    <span>Copertina Rilegata</span>
    <span class="text-rose-100 font-bold hover:underline cursor-pointer">Sfoglia Note ➔</span>
  </div>
</div>`
  },
  {
    id: 'card-romanesque-arch-window',
    title: 'Card Finestra ad Arco Romanico Sagomato con Mosaico & Tipografia Serif 🏛️',
    category: 'card',
    description: 'Profilo sagomato con arco a tutto sesto superiore, cromie ocra sabbia e pietra calda, rilievo scolpito, medaglione centrale e tipografia elegante.',
    tags: ['card', 'arco', 'romanico', 'architettura', 'sagomata', 'pietra', 'ocra', 'serif'],
    html: `<!-- Card Finestra ad Arco Romanico Sagomato -->
<div class="w-full h-full min-h-[280px] p-6 bg-[#f7f2e7] text-[#332a1e] rounded-t-[3.5rem] rounded-b-3xl border-2 border-[#d6c7af] shadow-[6px_6px_0px_0px_rgba(51,42,30,0.12)] flex flex-col justify-between transition-all font-sans select-none text-center">
  <!-- Arco Sagomato Decorativo con Medaglione -->
  <div class="pt-2 flex flex-col items-center">
    <div class="w-12 h-12 rounded-full bg-[#e8dac1] border-2 border-[#b8a487] flex items-center justify-center text-xl text-[#6b5536] shadow-inner mb-2">
      ✦
    </div>
    <span class="text-[10px] font-mono uppercase tracking-widest font-black text-[#8c7450]">
      PORTALE D'ARMONIA
    </span>
  </div>

  <div class="my-auto py-2 space-y-2">
    <h3 class="text-xl font-bold text-[#2b2216] font-serif tracking-tight leading-snug">
      L'Arco Come Simbolo di Tensione & Misura
    </h3>
    <p class="text-xs text-[#594935] leading-relaxed max-w-sm mx-auto font-normal">
      La curva accoglie le forze verticali e le ridistribuisce all'esterno, creando un'apertura protetta in cui la luce filtra con calma e solennità.
    </p>
  </div>

  <div class="pt-3 border-t border-[#dfd2be] flex items-center justify-between text-[11px] font-mono text-[#786345]">
    <span>Geometria Classica</span>
    <span class="font-bold hover:underline cursor-pointer text-[#2b2216]">Esplora Proporzioni ➔</span>
  </div>
</div>`
  },
  {
    id: 'card-wax-seal-parchment',
    title: 'Card Pergamena Anticata con Sigillo di Ceralacca Rosso Rubino 📜',
    category: 'card',
    description: 'Carta pergamena calda con trama anticata, nastro diagonale d\'angolo bordato, sigillo di ceralacca rosso rubino a rilievo e testo d\'autore.',
    tags: ['card', 'pergamena', 'ceralacca', 'sigillo', 'nastro', 'lettera', 'tattile', 'rosso'],
    html: `<!-- Card Pergamena con Sigillo di Ceralacca Rosso Rubino -->
<div class="relative w-full h-full min-h-[250px] p-6 bg-[#fcf8ee] text-[#2b2416] rounded-3xl border-2 border-[#dfd2b5] shadow-[6px_6px_0px_0px_rgba(43,36,22,0.15)] flex flex-col justify-between font-sans overflow-hidden select-none">
  <!-- Sigillo di Ceralacca Rosso Rubino 3D in Alto a Destra -->
  <div class="absolute top-4 right-4 z-20 flex items-center justify-center">
    <div class="w-11 h-11 rounded-full bg-[#961c28] border-2 border-[#73121c] shadow-[0_4px_10px_rgba(150,28,40,0.4)] flex items-center justify-center text-amber-200 font-serif font-black text-sm ring-2 ring-[#bd2737]/60">
      ❖
    </div>
  </div>

  <!-- Nastro Diagonale d'Angolo in Alto a Sinistra -->
  <div class="absolute -top-6 -left-6 w-20 h-10 bg-amber-200/80 -rotate-45 border-b border-amber-300 shadow-2xs pointer-events-none"></div>

  <!-- Testata della Pergamena -->
  <div class="flex items-center justify-between border-b border-[#dfd2b5] pb-2 text-xs font-mono pr-12">
    <span class="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
      DOCUMENTO AUTENTICATO
    </span>
    <span class="text-[11px] text-stone-500">Anno 2026</span>
  </div>

  <!-- Testo in Corsivo Tipografico -->
  <div class="my-auto py-3 space-y-1.5 pr-4">
    <h3 class="text-lg font-bold text-[#1f190e] font-serif tracking-tight leading-snug">
      L'Elogio della Calma & della Cura
    </h3>
    <p class="text-xs text-[#544733] italic leading-relaxed font-serif">
      "Non c'è fretta alcuna nel pensiero che intende durare: ogni parola posata su questa superficie porta con sé il peso del tempo e la dignità del silenzio."
    </p>
  </div>

  <div class="pt-2 border-t border-[#dfd2b5] flex items-center justify-between text-[11px] font-mono text-[#6e5d43]">
    <span>Firma dell'Estensore</span>
    <span class="font-bold hover:underline cursor-pointer text-[#1f190e]">Verifica Autentica ➔</span>
  </div>
</div>`
  },
  {
    id: 'card-dark-cyan-split-media',
    title: 'Card Notturna Blu Cobalto & Ciano Elettrico a Due Campi 🌌',
    category: 'card',
    description: 'Card ad alto contrasto notturno con doppia campitura blu cobalto e nero minerale, badge ciano luminescente e grafica a onde di frequenza.',
    tags: ['card', 'blu', 'cobalto', 'ciano', 'notturna', 'onde', 'frequenze', 'moderna'],
    html: `<!-- Card Notturna Blu Cobalto & Ciano Elettrico -->
<div class="w-full h-full min-h-[250px] p-6 bg-gradient-to-br from-[#0a192f] via-[#050e1d] to-[#02060d] text-cyan-50 border-2 border-cyan-500/40 hover:border-cyan-400 rounded-3xl flex flex-col justify-between transition-all font-sans shadow-xl">
  <div class="flex items-center justify-between border-b border-cyan-900/50 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
      <span class="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
        Segnali & Frequenze
      </span>
    </div>
    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700">
      CANALE 08
    </span>
  </div>

  <div class="my-auto py-3 space-y-2">
    <!-- Visualizzatore a Onde Vettoriali Ciano -->
    <div class="flex items-center gap-1 h-6 text-cyan-400/80 my-1">
      <span class="w-1 h-2 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-4 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-6 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-3 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-5 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-2 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-6 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-4 bg-cyan-400 rounded-full"></span>
      <span class="w-1 h-1 bg-cyan-400 rounded-full"></span>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
      Onde di Propagazione & Risonanza Ottica
    </h3>
    <p class="text-xs text-slate-300 leading-relaxed font-normal">
      La trasmissione di stimoli visivi e sonori attraverso supporti continui permette di sincronizzare ritmi compositivi anche a grande distanza.
    </p>
  </div>

  <div class="pt-2.5 border-t border-cyan-900/50 flex items-center justify-between text-[11px] font-mono text-cyan-400">
    <span>Spettro continuo</span>
    <span class="text-cyan-200 hover:text-white font-bold cursor-pointer transition">Sintonizza ➔</span>
  </div>
</div>`
  },
  {
    id: 'card-botanical-herbarium-press',
    title: 'Card Erbario Botanico su Carta Kraft con Campione & Washi Tape 🌿',
    category: 'card',
    description: 'Stile erbario su cartoncino kraft grezzo con nastro washi tape adesivo semitrasparente, campione botanico illustrato e classificazione tassonomica in latino.',
    tags: ['card', 'erbario', 'botanica', 'natura', 'kraft', 'foglia', 'tattile', 'campione'],
    html: `<!-- Card Erbario Botanico su Carta Kraft con Washi Tape -->
<div class="relative w-full h-full min-h-[250px] p-6 bg-[#d9c4a5] text-[#362719] border-2 border-[#aa916d] rounded-3xl shadow-[6px_6px_0px_0px_rgba(54,39,25,0.18)] flex flex-col justify-between font-sans select-none overflow-hidden group">
  <!-- Nastro Adesivo Washi Tape Centrale in Alto -->
  <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-white/70 border border-stone-400/40 rounded-xs shadow-2xs rotate-1 z-10"></div>

  <div class="flex items-center justify-between border-b border-[#ba9f7b] pb-2 text-xs font-mono">
    <span class="text-[10px] font-black uppercase tracking-wider text-[#362719] bg-[#ebd8be] px-2 py-0.5 rounded border border-[#aa916d]">
      CAMPIONE N° 27 // HERBARIUM
    </span>
    <span class="text-[11px] text-[#5e4732]">Raccolta di Campo</span>
  </div>

  <div class="my-auto py-3 flex items-center gap-4">
    <!-- Icona / Campione Foglia Stilizzato -->
    <div class="w-12 h-12 rounded-2xl bg-[#ebd8be] border border-[#aa916d] flex items-center justify-center text-2xl shrink-0 shadow-inner group-hover:scale-110 transition-transform">
      🌿
    </div>
    <div class="space-y-1">
      <div class="text-[11px] font-serif italic text-[#5c442e]">Ginkgo biloba L.</div>
      <h3 class="text-base font-bold text-[#24190f] font-serif tracking-tight leading-snug">
        Memoria Vegetale & Forme Ventaglio
      </h3>
      <p class="text-xs text-[#473421] leading-relaxed font-normal">
        Struttura venata biforcata rimasta immutata per milioni di anni, testimone silenzioso di equilibri organici.
      </p>
    </div>
  </div>

  <div class="pt-2 border-t border-[#ba9f7b] flex items-center justify-between text-[11px] font-mono text-[#5c442e]">
    <span>Conservazione a Secco</span>
    <span class="font-bold hover:underline cursor-pointer text-[#24190f]">Scheda Botanica ➔</span>
  </div>
</div>`
  },

  // =========================================================================
  // 4. HEADER DI SEZIONE & TESTATE (INCLUSI HEADER COLORATI SAGOMATI)
  // =========================================================================
  {
    id: 'header-creative-colorblock-terracotta',
    title: 'Header Colorato a Blocchi Sagomati Terracotta, Senape & Cobalto 🎨',
    category: 'header',
    description: 'Header vivace ed espressivo con blocchi cromatici caldi (terracotta, ocra dorata, blu cobalto), silhouette sagomata asimmetrica, badge a rombo e navigazione a pillole a contrasto.',
    tags: ['header', 'colorato', 'terracotta', 'senape', 'cobalto', 'sagomato', 'espressivo'],
    html: `<!-- Header Colorato a Blocchi Sagomati Terracotta & Senape -->
<header class="w-full bg-[#c25e2e] text-amber-50 rounded-3xl p-4 sm:p-5 border-2 border-[#8f3914] shadow-[6px_6px_0px_0px_rgba(80,30,10,0.3)] flex flex-col md:flex-row items-center justify-between gap-4 font-sans select-none">
  <div class="flex items-center gap-3.5 w-full md:w-auto justify-between md:justify-start">
    <div class="flex items-center gap-3">
      <!-- Simbolo Geometrico Senape Dorato -->
      <div class="w-11 h-11 rounded-2xl bg-[#eab308] text-amber-950 flex items-center justify-center font-black text-xl shadow-md border-2 border-amber-300 rotate-2">
        ✦
      </div>
      <div>
        <div class="text-base sm:text-lg font-black text-white font-serif tracking-tight flex items-center gap-2">
          Atelier delle Forme
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-950/40 text-amber-200 font-mono font-bold border border-amber-300/40">EDIZIONE 2026</span>
        </div>
        <div class="text-[11px] font-mono text-amber-200/90">
          Laboratorio Visivo & Strutture Libere
        </div>
      </div>
    </div>

    <!-- Indicatore Cromatico Mobile -->
    <span class="md:hidden px-2.5 py-1 rounded-full bg-[#1e3a8a] text-cyan-200 text-[10px] font-mono font-bold border border-cyan-400/40">
      APERTO
    </span>
  </div>

  <!-- Menu Links a Pillole Colorate con Contrasti Vivaci -->
  <nav class="flex items-center gap-1.5 sm:gap-2 font-mono text-xs overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
    <a href="#" class="px-3.5 py-1.5 rounded-xl bg-[#eab308] text-amber-950 font-black shadow-xs border border-amber-300">
      Archivio
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl bg-[#a74317] text-white hover:bg-amber-900/60 transition border border-amber-400/30">
      Riflessioni
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl bg-[#a74317] text-white hover:bg-amber-900/60 transition border border-amber-400/30">
      Quaderni
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl bg-[#a74317] text-white hover:bg-amber-900/60 transition border border-amber-400/30">
      Indice
    </a>
  </nav>

  <div class="flex items-center gap-2.5 w-full md:w-auto justify-end font-mono text-xs">
    <button class="w-full md:w-auto px-4 py-2 rounded-xl bg-[#1e3a8a] hover:bg-[#172554] text-cyan-100 font-bold border border-cyan-400/50 shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5">
      <span>✦</span>
      <span>Consulta Collezione ➔</span>
    </button>
  </div>
</header>`
  },
  {
    id: 'header-arch-banner-emerald-gold',
    title: 'Header Colorato ad Arco & Nastro Bicolore Smeraldo & Ocra 🏛️',
    category: 'header',
    description: 'Header sagomato elegante verde bosco e smeraldo profondo con finiture dorate ad arco, medaglione centrale e navigazione raffinata.',
    tags: ['header', 'colorato', 'smeraldo', 'verde', 'oro', 'arco', 'decorativo'],
    html: `<!-- Header Colorato ad Arco Verde Smeraldo & Oro -->
<header class="w-full bg-gradient-to-r from-[#062c1d] via-[#093e29] to-[#062c1d] text-emerald-50 rounded-3xl p-4 sm:p-5 border-2 border-emerald-500/50 shadow-[6px_6px_0px_0px_rgba(6,44,29,0.4)] flex flex-col md:flex-row items-center justify-between gap-4 font-sans select-none">
  <div class="flex items-center gap-3 w-full md:w-auto">
    <div class="w-10 h-10 rounded-full bg-[#fef08a] text-[#14532d] flex items-center justify-center font-serif font-black text-lg shadow-md border-2 border-emerald-400">
      ❦
    </div>
    <div>
      <h2 class="text-base sm:text-lg font-serif font-bold text-white tracking-tight flex items-center gap-2">
        Cronache del Paesaggio
        <span class="text-[9px] px-2 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 font-mono border border-emerald-600">STUDI APERTI</span>
      </h2>
      <p class="text-[11px] font-mono text-emerald-300/80">Archivio Botanico & Morfologico</p>
    </div>
  </div>

  <nav class="flex items-center gap-2 font-mono text-xs">
    <span class="px-3 py-1.5 rounded-xl bg-emerald-900/90 text-yellow-300 font-bold border border-yellow-400/40">
      Quaderno Botanico
    </span>
    <span class="px-3 py-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800/50 transition cursor-pointer">
      Cartografia
    </span>
    <span class="px-3 py-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800/50 transition cursor-pointer">
      Rilevazioni
    </span>
  </nav>

  <div class="flex items-center gap-2 font-mono text-xs w-full md:w-auto justify-end">
    <button class="w-full md:w-auto px-4 py-2 bg-[#fef08a] hover:bg-yellow-300 text-emerald-950 font-black rounded-xl border border-yellow-400 transition cursor-pointer shadow-xs">
      Sfoglia Volume ➔
    </button>
  </div>
</header>`
  },
  {
    id: 'header-navbar-generic-app',
    title: 'Header Web App con Link di Navigazione & Pulsante Azione ✦',
    category: 'header',
    description: 'Header universale per applicazioni e siti con simbolo geometrico, link di navigazione orizzontale, indicatore di stato del sistema e pulsante di azione.',
    tags: ['header', 'navigazione', 'navbar', 'menu', 'logo', 'tattile', 'struttura'],
    html: `<!-- Header Web App Moderno Universale -->
<header class="w-full bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-4">
  <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
    <div class="flex items-center gap-2.5">
      <div class="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-md border border-amber-300">
        ❖
      </div>
      <div>
        <div class="text-base font-bold text-white tracking-tight flex items-center gap-2">
          Applicazione <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700">v2.4</span>
        </div>
        <div class="text-[11px] font-mono text-slate-400">
          Piattaforma di Gestione
        </div>
      </div>
    </div>

    <!-- Badge Mobile Online -->
    <div class="md:hidden flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span> ATTIVO
    </div>
  </div>

  <!-- Menu Links Orizzontali -->
  <nav class="flex items-center gap-1 sm:gap-2 font-mono text-xs">
    <a href="#" class="px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 font-bold border border-slate-700">
      Dashboard
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 transition">
      Progetti
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 transition">
      Risorse
    </a>
    <a href="#" class="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 transition">
      Impostazioni
    </a>
  </nav>

  <div class="flex items-center gap-3 font-mono text-xs w-full md:w-auto justify-end">
    <span class="hidden md:flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold mr-1">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span> SISTEMA ATTIVO
    </span>
    <button class="w-full md:w-auto px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-xs transition cursor-pointer">
      + Nuova Voce ➔
    </button>
  </div>
</header>`
  },
  {
    id: 'header-doc-portal-breadcrumbs',
    title: 'Header Portale con Breadcrumbs, Versione & Cerca Rapido 🔍',
    category: 'header',
    description: 'Header per portali, documentazione o dashboard interne con percorso a briciole di pane (breadcrumbs), campo di ricerca rapida e link di supporto.',
    tags: ['header', 'breadcrumbs', 'portale', 'ricerca', 'documentazione', 'generico'],
    html: `<!-- Header Portale con Breadcrumbs & Cerca Rapido -->
<header class="w-full bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-4">
  <div class="space-y-1 w-full md:w-auto">
    <!-- Breadcrumbs Trail -->
    <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
      <span class="hover:text-white cursor-pointer">Portale</span>
      <span class="text-slate-600">/</span>
      <span class="hover:text-white cursor-pointer">Sezioni</span>
      <span class="text-slate-600">/</span>
      <span class="text-amber-300 font-bold">Panoramica Generale</span>
    </div>
    <h2 class="text-lg font-bold text-white tracking-tight">
      Area di Lavoro & Documentazione
    </h2>
  </div>

  <div class="flex items-center gap-3 w-full md:w-auto font-mono text-xs justify-end">
    <div class="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 flex-1 md:flex-none">
      <span class="text-slate-500 mr-2 text-xs">🔍</span>
      <input type="text" placeholder="Cerca nel portale..." class="bg-transparent text-white text-xs focus:outline-none w-full md:w-48 placeholder:text-slate-500" />
      <span class="hidden sm:inline text-[9px] bg-slate-800 text-slate-400 px-1 rounded border border-slate-700">⌘K</span>
    </div>

    <button class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition cursor-pointer shrink-0">
      Aiuto & FAQ
    </button>
  </div>
</header>`
  },

  // =========================================================================
  // 5. HERO BANNER (HERO A GIORNALE, HERO A LIBRO APERTO & SEZIONI INTRODUTTIVE)
  // =========================================================================
  {
    id: 'hero-broadsheet-newspaper',
    title: 'Hero a Giornale di Prima Pagina (Newspaper Broadsheet) 📰',
    category: 'hero',
    description: 'Hero a forma di prima pagina di quotidiano: testata monumentale d\'epoca ("LA CRONACA DELLE IDEE"), datazione e numero di edizione tra doppi filetti, 3 colonne con filetti divisori d\'inchiostro, grande capolettera floreale e fotografia con passe-partout.',
    tags: ['hero', 'giornale', 'quotidiano', 'broadsheet', 'stampa', 'editoriale', 'vintage', 'inchiostro'],
    html: `<!-- Hero a Giornale di Prima Pagina (Newspaper Broadsheet) -->
<div class="w-full p-6 sm:p-10 bg-[#f4efe4] text-[#1c1917] border-2 border-[#d3c7b2] rounded-3xl shadow-[8px_8px_0px_0px_rgba(28,25,23,0.18)] font-serif select-none">
  <!-- Testata Monumentale del Giornale -->
  <div class="text-center pb-4 border-b-4 border-[#1c1917] space-y-1">
    <div class="text-[10px] sm:text-xs font-mono tracking-widest text-[#57534e] uppercase font-bold">
      QUOTIDIANO INDIPENDENTE DI ARTE, PENSIERO & STRUTTURE VISIVE
    </div>
    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1c1917] uppercase py-1">
      La Cronaca delle Idee
    </h1>
    <div class="text-xs italic text-[#78716c]">
      "Veritas et Forma • Fondato per la libera consultazione delle forme"
    </div>
  </div>

  <!-- Riga di Datazione, Edizione e Prezzo tra Doppi Filetti Tipografici -->
  <div class="my-3 py-1.5 border-y-2 border-[#1c1917] flex flex-wrap items-center justify-between text-[11px] font-mono font-bold text-[#44403c] uppercase">
    <span>ANNO CXII • N° 247</span>
    <span>ROMA • LUNEDÌ 22 SETTEMBRE 2026</span>
    <span>EDIZIONE STRAORDINARIA • COPIA DI LETTURA</span>
  </div>

  <!-- Impaginazione a 3 Colonne con Filetti Divisori Sottili -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-3">
    <!-- Articolo Principale di Fondo (7 Colonne) -->
    <div class="lg:col-span-7 space-y-3 lg:border-r-2 border-[#d3c7b2] lg:pr-6">
      <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b45309] bg-amber-200/60 px-2 py-0.5 rounded inline-block border border-amber-300">
        EDITORIALE DI PRIMA PAGINA
      </div>

      <h2 class="text-2xl sm:text-3xl font-black text-[#1c1917] leading-tight tracking-tight">
        La Rinascita della Materia Tattile nell'Epoca dei Supporti Digitali
      </h2>

      <!-- Paragrafo con Capolettera Gigante -->
      <div class="text-xs sm:text-sm text-[#292524] leading-relaxed text-justify font-normal space-y-2">
        <p>
          <span class="float-left text-5xl font-serif font-black leading-none mr-2.5 mt-0.5 text-[#1c1917] bg-[#e7dec8] px-2 py-1 rounded border border-[#c4b59d]">Q</span>
          uando ogni schermo si appiattisce sull'omogeneità dei pixel, il bisogno umano di orientarsi attraverso volumi, pieghe e texture diviene un'urgenza estetica. Non cerchiamo contenitori che si somiglino tutti, ma spazi con una fisionomia propria: quaderni da sfogliare, cartelline da aprire con curiosità, fogli che conservano il sapore del tempo.
        </p>
        <p class="text-xs text-[#57534e]">
          L'equilibrio visivo non nasce dalla fredda ripetizione, ma dalla sapiente tensione tra pesi e sfumature. Una griglia vive quando ogni blocco racconta una storia differente.
        </p>
      </div>

      <div class="pt-2 flex items-center justify-between text-[11px] font-mono text-[#78716c]">
        <span>Articolo a firma di S. B.</span>
        <span class="font-bold text-[#1c1917] hover:underline cursor-pointer">Continua a Pagina 03 ➔</span>
      </div>
    </div>

    <!-- Colonna Visiva & Notizia Civetta (5 Colonne) -->
    <div class="lg:col-span-5 space-y-4 flex flex-col justify-between">
      <!-- Riquadro Fotografico da Stampa d'Incisione con Passe-partout -->
      <div class="p-3 bg-[#e8dfcf] border-2 border-[#1c1917] rounded-2xl shadow-xs space-y-2">
        <div class="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#292524] border border-[#1c1917]">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&auto=format&fit=crop&q=80" 
            alt="Composizione d'Archivio Quotidiano" 
            class="w-full h-full object-cover filter contrast-125 sepia-25"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </div>
        <p class="text-[10px] font-mono text-[#57534e] leading-snug">
          FIG. 1 — Il torchio tipografico e la distribuzione dei pesi compositivi all'interno della pagina classica.
        </p>
      </div>

      <!-- Notizia Civetta a Fondo Colonna -->
      <div class="p-3.5 bg-[#eae2d3] border-l-4 border-[#1c1917] rounded-r-xl space-y-1">
        <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-[#78716c]">DALL'ARCHIVIO CENTRALE</span>
        <h3 class="text-sm font-bold text-[#1c1917] leading-snug">
          Ritrovati i manoscritti inediti sulla geometria delle proporzioni
        </h3>
        <p class="text-[11px] text-[#44403c] leading-relaxed">
          Una serie di appunti redatti a mano dimostra come l'armonia derivi dalla variazione controllata delle forme.
        </p>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'hero-open-book-spread',
    title: 'Hero a Libro Aperto a Due Pagine con Segnalibro a Nastro 📖',
    category: 'hero',
    description: 'Volume rilegato aperto su un piano con copertina esterna in cuoio scuro, piega e costola centrale con gradiente d\'ombra realistico, nastro segnalibro in raso rosso carminio pendente dal dorso, pagina sinistra e pagina destra con numerazione 84 / 85.',
    tags: ['hero', 'libro', 'volume', 'segnalibro', 'pergamena', 'pagine', 'letterario', 'cuoio'],
    html: `<!-- Hero a Libro Aperto a Due Pagine con Segnalibro a Nastro -->
<div class="relative w-full p-3 sm:p-5 bg-[#2c1a11] rounded-[2.5rem] border-4 border-[#1c100a] shadow-[10px_10px_0px_0px_rgba(28,16,10,0.35)] select-none font-serif">
  <!-- Nastro Segnalibro in Raso Rosso Carminio che Sporge dall'Alto e dal Basso -->
  <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-10 bg-[#991b1b] rounded-t-sm shadow-md border-x border-[#7f1d1d] z-30 pointer-events-none"></div>
  <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-7 h-8 bg-[#991b1b] shadow-lg border-x border-[#7f1d1d] z-30 pointer-events-none rounded-b-md">
    <!-- Taglio a V del Nastro Segnalibro -->
    <div class="w-full h-full flex items-end justify-center">
      <div class="w-2 h-2 bg-[#2c1a11] rotate-45 transform translate-y-1"></div>
    </div>
  </div>

  <!-- Pagine Aperte del Libro (Sinistra + Destra) -->
  <div class="relative w-full bg-[#fcfaf2] text-[#2c2417] rounded-[2rem] border-2 border-[#dcd1bb] grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-inner">
    <!-- Ombra della Piegatura / Costola Centrale del Dorso -->
    <div class="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-14 bg-gradient-to-r from-black/25 via-black/40 to-black/25 pointer-events-none z-20"></div>

    <!-- Pagina Sinistra (Verso) -->
    <div class="p-6 sm:p-10 flex flex-col justify-between space-y-4 border-b md:border-b-0 md:border-r border-[#e8dfcc] relative">
      <!-- Intestazione Pagina Sinistra -->
      <div class="flex items-center justify-between border-b border-[#e5dcce] pb-2 text-xs font-mono text-[#786a55]">
        <span>CAPITOLO IV // FORME LIBERE</span>
        <span>TOMO PRIMO</span>
      </div>

      <div class="my-auto py-2 space-y-3">
        <div class="text-[11px] font-mono uppercase tracking-widest text-[#92400e] font-bold">
          DELLA MATERIA & DELLA MEMORIA
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-[#1e170d] leading-snug tracking-tight">
          Il Libro Aperto Come Spazio di Sosta & Scelta
        </h2>
        <p class="text-xs sm:text-sm text-[#473c2c] leading-relaxed italic text-justify">
          "Un volume che giace aperto sopra un tavolo non è soltanto un oggetto: è un invito ad interrompere la fretta del giorno, a toccare con lo sguardo la grana sottile delle superfici che non hanno bisogno di gridare per farsi ricordare."
        </p>
      </div>

      <!-- Piè di Pagina Sinistra con Numero -->
      <div class="pt-3 border-t border-[#e5dcce] flex items-center justify-between text-xs font-mono text-[#786a55]">
        <span>84</span>
        <span class="italic font-serif text-[11px]">Volta la pagina per proseguire</span>
      </div>
    </div>

    <!-- Pagina Destra (Recto) -->
    <div class="p-6 sm:p-10 flex flex-col justify-between space-y-4 relative">
      <!-- Intestazione Pagina Destra -->
      <div class="flex items-center justify-between border-b border-[#e5dcce] pb-2 text-xs font-mono text-[#786a55]">
        <span>NOTE COMPOSITIVE</span>
        <span>ATLANTE 2026</span>
      </div>

      <div class="my-auto py-2 space-y-3 text-xs sm:text-sm text-[#382f22] leading-relaxed text-justify">
        <p>
          Le campiture chiare e le proporzioni simmetriche delle due pagine riflettono l'armonia antica dei codici rinascimentali. A ciascun lato corrisponde un contrappeso: a sinistra il principio teorico, a destra l'osservazione applicata.
        </p>
        <p class="text-xs text-[#63543f]">
          Nessuna funzione tecnica prestabilita vincola questo libro: può raccogliere un saggio letterario, il diario di bordo di una traversata, o un'antologia di appunti grafici.
        </p>

        <div class="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs">
          <button class="px-4 py-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-amber-100 font-bold rounded-xl shadow-xs transition cursor-pointer">
            Leggi il Capitolo ➔
          </button>
          <button class="px-3.5 py-2 bg-[#efe7d3] hover:bg-[#e4dac0] text-[#3d3221] font-bold rounded-xl border border-[#d6c7af] transition cursor-pointer">
            Indice dei Volumi
          </button>
        </div>
      </div>

      <!-- Piè di Pagina Destra con Numero -->
      <div class="pt-3 border-t border-[#e5dcce] flex items-center justify-between text-xs font-mono text-[#786a55]">
        <span class="italic font-serif text-[11px]">Segnalibro inserito</span>
        <span>85</span>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'hero-editorial-intro-banner',
    title: 'Hero Sezione Introduttiva con Titolo, Descrizione & Indice Moduli 📖',
    category: 'hero',
    description: 'Hero universale per siti, portali e progetti editoriali con titolo primario ad alto contrasto, descrizione estesa, 2 pulsanti di navigazione e indicatori delle sezioni del sito.',
    tags: ['hero', 'banner', 'introduzione', 'titolo', 'indice', 'generico', 'editoriale'],
    html: `<!-- Hero Sezione Introduttiva Universale -->
<div class="relative w-full p-6 sm:p-10 bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
  <div class="max-w-3xl space-y-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold">
      <span class="w-2 h-2 rounded-full bg-amber-400"></span> AREA INTRODUTTIVA
    </div>

    <h2 class="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
      Esplora la Struttura e i Contenuti del Progetto
    </h2>

    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
      Una panoramica organizzata per consultare facilmente documenti, riferimenti concettuali e risorse visive all'interno di una griglia modulare coerente.
    </p>

    <!-- Bottoni di Navigazione Neutri -->
    <div class="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
      <button class="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl border border-amber-300 shadow-xs transition cursor-pointer">
        Esplora i Contenuti ➔
      </button>
      <button class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition cursor-pointer">
        Consulta l'Indice Generale
      </button>
    </div>

    <!-- Indicatori Descrittivi delle Sezioni -->
    <div class="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 font-mono">
      <div>
        <div class="text-lg sm:text-2xl font-black text-white">12</div>
        <div class="text-[10px] text-slate-400">Moduli Strutturali</div>
      </div>
      <div>
        <div class="text-lg sm:text-2xl font-black text-amber-300">04</div>
        <div class="text-[10px] text-slate-400">Aree Tematiche</div>
      </div>
      <div>
        <div class="text-lg sm:text-2xl font-black text-cyan-400">2026</div>
        <div class="text-[10px] text-slate-400">Ultima Revisione</div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'hero-split-bento-overview',
    title: 'Hero Panoramica Asimmetrica con Griglia 2x2 dei Quadranti Tematici ✦',
    category: 'hero',
    description: 'Layout asimmetrico con introduzione al progetto a sinistra e griglia bento 2x2 dei 4 ambiti principali a destra (Architettura, Riferimenti, Metodologia, Note).',
    tags: ['hero', 'panoramica', 'split', 'asimmetrico', 'griglia', 'generico'],
    html: `<!-- Hero Panoramica Asimmetrica a Quadranti -->
<div class="w-full p-6 sm:p-8 bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
  <div class="lg:col-span-7 space-y-4">
    <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800">
      QUADRO GENERALE
    </span>

    <h2 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
      Composizione Modulare per la Visualizzazione di Idee e Dati
    </h2>

    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-sans">
      Sezioni pensate per presentare temi complessi attraverso blocchi leggibili, bilanciati ed esteticamente rigorosi.
    </p>

    <div class="pt-1 flex items-center gap-3 font-mono text-xs">
      <button class="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition cursor-pointer">
        Inizia la Lettura ➔
      </button>
      <span class="text-slate-400 text-[11px]">Aggiornato periodicamente</span>
    </div>
  </div>

  <!-- Bento Grid 2x2 dei 4 Quadranti Tematici -->
  <div class="lg:col-span-5 grid grid-cols-2 gap-3 font-mono text-xs">
    <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
      <div class="text-amber-400 text-base">📐</div>
      <div class="font-bold text-white text-xs">Architettura</div>
      <div class="text-[10px] text-slate-400">Assetto e proporzioni</div>
    </div>

    <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
      <div class="text-cyan-400 text-base">📚</div>
      <div class="font-bold text-white text-xs">Riferimenti</div>
      <div class="text-[10px] text-slate-400">Fonti e approfondimenti</div>
    </div>

    <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
      <div class="text-emerald-400 text-base">🔬</div>
      <div class="font-bold text-white text-xs">Metodologia</div>
      <div class="text-[10px] text-slate-400">Approccio rigoroso</div>
    </div>

    <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl space-y-1">
      <div class="text-rose-400 text-base">🗂️</div>
      <div class="font-bold text-white text-xs">Archivio</div>
      <div class="text-[10px] text-slate-400">Cronologia revisioni</div>
    </div>
  </div>
</div>`
  },

  // =========================================================================
  // 6. MENU & BARRE FILTRI (INCLUSO IL MENU A CARTELLE SOVRAPPOSTE)
  // =========================================================================
  {
    id: 'menu-folder-tabs-system',
    title: 'Menù a Cartelle da Archivio con Linguette Sagomate Sfalsate Colorate 🗂️',
    category: 'menu',
    description: 'Menù di navigazione con vere cartelle d\'archivio sovrapposte: 4 linguette/tab sagomate sporgenti in alto con 4 colori distinti (Manila ocra, Terracotta bruciata, Salvia bosco, Blu carta da zucchero), graffetta e scomparti.',
    tags: ['menu', 'cartelle', 'tabs', 'schede', 'manila', 'terracotta', 'colorato', 'archivio'],
    html: `<!-- Menù a Cartelle da Archivio Sovrapposte -->
<div class="w-full select-none font-sans">
  <!-- 4 Linguette (Tabs) delle Cartelle Sporgenti in Alto con Colori Diversi -->
  <div class="flex items-end gap-1.5 pl-4 sm:pl-8 overflow-x-auto -mb-0.5 relative z-10 font-mono text-xs">
    <!-- Tab 1: Manila Ocra (Attiva) -->
    <button class="px-4 py-2 bg-[#ecd5ab] text-[#3e2712] font-black rounded-t-2xl border-t-2 border-x-2 border-[#b89156] shadow-xs flex items-center gap-1.5 cursor-pointer">
      <span>📁</span>
      <span>Fascicolo A // Note</span>
    </button>

    <!-- Tab 2: Terracotta Bruciata -->
    <button class="px-4 py-1.5 bg-[#c85a2b] text-amber-100 hover:text-white font-bold rounded-t-xl border-t-2 border-x-2 border-[#8f3914] flex items-center gap-1.5 cursor-pointer transition opacity-90 hover:opacity-100">
      <span>📂</span>
      <span>Fascicolo B // Bozzetti</span>
    </button>

    <!-- Tab 3: Verde Salvia Bosco -->
    <button class="px-4 py-1.5 bg-[#1e4435] text-emerald-100 hover:text-white font-bold rounded-t-xl border-t-2 border-x-2 border-[#122e23] flex items-center gap-1.5 cursor-pointer transition opacity-90 hover:opacity-100">
      <span>🌿</span>
      <span>Fascicolo C // Erbario</span>
    </button>

    <!-- Tab 4: Blu Carta da Zucchero -->
    <button class="px-4 py-1.5 bg-[#1e3a5f] text-cyan-100 hover:text-white font-bold rounded-t-xl border-t-2 border-x-2 border-[#12243d] flex items-center gap-1.5 cursor-pointer transition opacity-90 hover:opacity-100">
      <span>🌊</span>
      <span>Fascicolo D // Mappe</span>
    </button>
  </div>

  <!-- Corpo Aperto della Cartella Attiva (Manila Caldo) -->
  <div class="w-full p-4 sm:p-5 bg-[#ecd5ab] text-[#3e2712] rounded-3xl rounded-tl-sm border-2 border-[#b89156] shadow-[6px_6px_0px_0px_rgba(74,46,16,0.18)] flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-3 w-full md:w-auto">
      <div class="w-9 h-9 rounded-xl bg-[#deb881] border border-[#b89156] flex items-center justify-center text-base font-bold shadow-inner">
        🗂️
      </div>
      <div>
        <div class="text-xs font-mono font-bold text-[#5c3a17] uppercase tracking-wider">
          ARCHIVIO CARTELLA SELEZIONATA
        </div>
        <div class="text-sm font-bold text-[#2d1b09]">
          Note di Progetto, Frammenti & Strutture
        </div>
      </div>
    </div>

    <!-- Sottosezioni & Azioni all'Interno della Cartella -->
    <div class="flex items-center gap-2 font-mono text-xs w-full md:w-auto justify-end overflow-x-auto">
      <span class="px-3 py-1.5 rounded-xl bg-[#deb881] text-[#3e2712] border border-[#b89156] font-bold">
        Tutti i Fogli (18)
      </span>
      <span class="px-3 py-1.5 rounded-xl bg-[#f5e7cd] text-[#5c3a17] hover:bg-[#e4d1af] transition cursor-pointer">
        Bozze Recenti
      </span>
      <button class="px-3.5 py-1.5 rounded-xl bg-[#3e2712] hover:bg-[#251608] text-amber-100 font-bold transition cursor-pointer shrink-0">
        + Inserisci Foglio
      </button>
    </div>
  </div>
</div>`
  },
  {
    id: 'menu-segmented-pill-tabs',
    title: 'Barra Navigazione a Schede Segmentate con Badge di Stato 🗂️',
    category: 'menu',
    description: 'Menu a pillole segmentate moderne con scheda attiva in rilievo, contatori numerici per ciascuna sezione e indicatore di sincronizzazione.',
    tags: ['menu', 'schede', 'tabs', 'segmentate', 'pillole', 'navigazione', 'generico'],
    html: `<!-- Barra Navigazione a Schede Segmentate -->
<div class="w-full bg-[#161b22] border-2 border-slate-800 rounded-2xl p-2.5 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
  <div class="flex items-center gap-1.5 overflow-x-auto">
    <button class="px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black shadow-xs flex items-center gap-1.5 cursor-pointer">
      <span>Tutte le Voci</span>
      <span class="text-[10px] bg-amber-500/40 text-slate-950 px-1.5 py-0.2 rounded-md font-bold">128</span>
    </button>
    <button class="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer">
      <span>In Lavorazione</span>
      <span class="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded-md">14</span>
    </button>
    <button class="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer">
      <span>Completati</span>
      <span class="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded-md">92</span>
    </button>
    <button class="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer">
      <span>Archiviati</span>
      <span class="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded-md">22</span>
    </button>
  </div>

  <div class="flex items-center gap-2 text-slate-400 text-[11px]">
    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
    <span class="hidden sm:inline">Aggiornato adesso</span>
  </div>
</div>`
  },
  {
    id: 'menu-search-action-bar',
    title: 'Barra Strumenti con Ricerca, Filtro Categorie & Azioni Rapide ⚙️',
    category: 'menu',
    description: 'Barra operativa con input di ricerca testuale, menu a tendina/pillola per filtrare lo stato e pulsanti per esportare o creare un nuovo record.',
    tags: ['menu', 'toolbar', 'strumenti', 'ricerca', 'filtri', 'azioni', 'generico'],
    html: `<!-- Barra Strumenti con Ricerca & Azioni Rapide -->
<div class="w-full bg-[#161b22] border-2 border-slate-800 rounded-2xl p-2.5 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
  <div class="flex items-center gap-2 flex-1 max-w-md">
    <div class="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 w-full">
      <span class="text-slate-500 mr-2">🔍</span>
      <input type="text" placeholder="Cerca elementi per nome o ID..." class="bg-transparent text-white text-xs focus:outline-none w-full placeholder:text-slate-500" />
    </div>
  </div>

  <div class="flex items-center gap-2">
    <div class="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 flex items-center gap-1.5 cursor-pointer hover:border-slate-600 transition">
      <span>Stato: Tutti</span>
      <span class="text-[10px] text-slate-500">▼</span>
    </div>

    <button class="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-xs transition cursor-pointer flex items-center gap-1">
      <span>+</span>
      <span>Aggiungi</span>
    </button>
  </div>
</div>`
  },

  // =========================================================================
  // 7. FOOTER
  // =========================================================================
  {
    id: 'footer-multi-column-modern',
    title: 'Footer Multi-Colonna Completo con Link Utili & Stato Server 🏛️',
    category: 'footer',
    description: 'Footer universale per siti e piattaforme con descrizione sintetica, 3 colonne di collegamenti (Prodotto, Risorse, Legale), copyright e indicatore di operatività.',
    tags: ['footer', 'multi-colonna', 'navigazione', 'copyright', 'links', 'generico'],
    html: `<!-- Footer Multi-Colonna Completo -->
<footer class="w-full bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] space-y-6 mt-6 font-mono text-xs">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
    <div class="md:col-span-5 space-y-3 font-sans">
      <div class="flex items-center gap-2 text-base font-bold text-white font-mono">
        <span class="w-7 h-7 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs">
          ❖
        </span>
        Piattaforma Web Modulare
      </div>
      <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
        Interfaccia versatile e accessibile progettata per strutturare contenuti, pannelli di controllo e presentazioni digitali con massima reattività.
      </p>
      <div class="pt-1 flex items-center gap-3 text-slate-400 font-mono text-xs">
        <span class="hover:text-amber-300 cursor-pointer">GitHub</span>
        <span>•</span>
        <span class="hover:text-amber-300 cursor-pointer">Documentazione</span>
        <span>•</span>
        <span class="hover:text-amber-300 cursor-pointer">Supporto</span>
      </div>
    </div>

    <div class="md:col-span-7 grid grid-cols-3 gap-4">
      <div class="space-y-2.5">
        <div class="font-bold text-amber-300 uppercase tracking-wider text-[11px]">Architettura</div>
        <ul class="space-y-1.5 text-slate-400">
          <li><a href="#" class="hover:text-white transition">Panoramica</a></li>
          <li><a href="#" class="hover:text-white transition">Composizione Griglie</a></li>
          <li><a href="#" class="hover:text-white transition">Specifiche Modulari</a></li>
          <li><a href="#" class="hover:text-white transition">Archivio Versioni</a></li>
        </ul>
      </div>

      <div class="space-y-2.5">
        <div class="font-bold text-cyan-300 uppercase tracking-wider text-[11px]">Risorse</div>
        <ul class="space-y-1.5 text-slate-400">
          <li><a href="#" class="hover:text-white transition">Guide Pratiche</a></li>
          <li><a href="#" class="hover:text-white transition">Documentazione</a></li>
          <li><a href="#" class="hover:text-white transition">Esempi di Codice</a></li>
          <li><a href="#" class="hover:text-white transition">Community</a></li>
        </ul>
      </div>

      <div class="space-y-2.5">
        <div class="font-bold text-emerald-300 uppercase tracking-wider text-[11px]">Note Legali</div>
        <ul class="space-y-1.5 text-slate-400">
          <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white transition">Termini d'Uso</a></li>
          <li><a href="#" class="hover:text-white transition">Cookie Policy</a></li>
          <li><a href="#" class="hover:text-white transition">Sicurezza</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-emerald-400 font-bold">TUTTI I SISTEMI OPERATIVI</span>
    </div>
    <div>
      © 2026 Tutti i diritti riservati. Rilasciato sotto licenza open source.
    </div>
  </div>
</footer>`
  },
  {
    id: 'footer-compact-credits',
    title: 'Footer Compatto con Note di Pubblicazione & Link di Navigazione 📜',
    category: 'footer',
    description: 'Footer snello a banner orizzontale con intestazione descrittiva, note di licenza, indicatore di revisione e link essenziali di chiusura.',
    tags: ['footer', 'compatto', 'crediti', 'licenza', 'navigazione', 'generico'],
    html: `<!-- Footer Compatto con Note & Crediti -->
<footer class="w-full bg-[#161b22] text-white border-2 border-slate-800 rounded-3xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] space-y-4 mt-6 font-mono text-xs">
  <div class="flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="space-y-1 text-center md:text-left">
      <div class="font-bold text-white text-sm flex items-center justify-center md:justify-start gap-2">
        <span class="text-amber-400 font-black">❖</span> Progetto & Portale Modulare
      </div>
      <p class="text-[11px] text-slate-400 font-sans">
        Documentazione libera e componenti di layout strutturati per il web.
      </p>
    </div>

    <div class="flex items-center gap-2 text-slate-400 text-xs">
      <span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px]">
        Versione 2.4 (2026)
      </span>
      <span class="px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold">
        Licenza MIT
      </span>
    </div>
  </div>

  <div class="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
    <div>
      Distribuito senza scopi commerciali. Tutti i marchi citati appartengono ai rispettivi proprietari.
    </div>
    <div class="flex items-center gap-3">
      <a href="#" class="hover:text-slate-300 transition">Guida</a>
      <span>•</span>
      <a href="#" class="hover:text-slate-300 transition">Termini</a>
      <span>•</span>
      <a href="#" class="hover:text-slate-300 transition">Crediti</a>
    </div>
  </div>
</footer>`
  }
];

export const CATEGORY_LABELS: Record<string, { label: string; icon: string }> = {
  all: { label: 'Tutti i Blocchi', icon: 'LayoutGrid' },
  card: { label: 'Card Tattili (Quaderno, Cartella, Video, Biglietto, Arco, Taccuino, Erbario)', icon: 'Square' },
  hero: { label: 'Hero (A Giornale Broadsheet, A Libro Aperto, Introduttiva, Quadranti)', icon: 'Sparkles' },
  menu: { label: 'Menù (A Cartelle da Archivio Sovrapposte, Schede Segmentate, Barra Strumenti)', icon: 'Menu' },
  header: { label: 'Header (Colorati Terracotta/Senape, Arco Smeraldo, Web App, Portale)', icon: 'Compass' },
  frame: { label: 'Frame (Smartphone, Browser, Tablet, Quaderno, Polaroid)', icon: 'Box' },
  griglie: { label: 'Griglie Vuote (4 Col, 3 Col, Mosaico, 2x2)', icon: 'Grid' },
  footer: { label: 'Footer (Multi-Colonna Completo, Compatto con Crediti)', icon: 'PanelBottom' }
};
