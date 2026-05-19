export default function Skills() {
    return <section id="projects" class="relative min-h-screen w-full bg-[#0a0f12] text-slate-100 overflow-hidden py-20 font-sans border-t border-slate-900">
        <div class="absolute inset-0 bg-[radial-gradient(#142520_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-40 pointer-events-none"></div>

        <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#4B8A74] rounded-full blur-[160px] pointer-events-none animate-pulse-slow"></div>
        <div class="absolute inset-0 bg-[radial-gradient(#142520_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-40 pointer-events-none"></div>
        <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#4B8A74] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>

        <div class="relative z-10 container mx-auto px-6 max-w-6xl">

            <div class="mb-16 space-y-2 text-center lg:text-left">
                <div class="font-mono text-xs tracking-widest text-[#65A68E] uppercase">
                    [SECTION_03] // REPOSITORIES_AND_PROTOTYPES
                </div>
                <h2 class="text-3xl md:text-5xl font-black tracking-tight">
                    Projets_Déployés.<span class="text-[#4B8A74]">env</span>
                </h2>
                <div class="h-[2px] w-20 bg-gradient-to-r from-[#4B8A74] to-transparent mx-auto lg:mx-0 mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="relative group rounded-xl border border-slate-800 bg-[#0e1416]/60 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#4B8A74]/50 hover:shadow-[0_0_30px_rgba(75,138,116,0.15)]">
                    <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#4B8A74] to-transparent opacity-50"></div>

                    <div class="p-6 space-y-4">
                        <div class="flex justify-between items-center font-mono text-[10px] text-slate-500">
                            <span>ID: 0x747572626f</span>
                            <span class="text-emerald-400 flex items-center gap-1">
                                <span class="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span> STABLE
                            </span>
                        </div>

                        <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-[#65A68E] transition-colors duration-200">
                            TurboStack & TurboSPA
                        </h3>

                        <p class="text-slate-400 text-sm leading-relaxed">
                            Un outil de génération rapide d'API combiné à un framework custom écrit en Go. Compilé en WebAssembly pour des performances d'affichage instantanées et des architectures front-end ultra-légères.
                        </p>
                    </div>

                    <div class="p-6 pt-0 space-y-4">
                        <div class="flex flex-wrap gap-2 font-mono text-[10px]">
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Go (Golang)</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">WebAssembly</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[#65A68E]">Virtual DOM</span>
                        </div>

                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-[#65A68E] hover:text-white transition-colors duration-200 group/link">
                            <span>Inspect_Module</span>
                            <span class="transform transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>

                <div class="relative group rounded-xl border border-slate-800 bg-[#0e1416]/60 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#4B8A74]/50 hover:shadow-[0_0_30px_rgba(75,138,116,0.15)]">
                    <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#4B8A74] to-transparent opacity-50"></div>

                    <div class="p-6 space-y-4">
                        <div class="flex justify-between items-center font-mono text-[10px] text-slate-500">
                            <span>ID: 0x636f6d7072</span>
                            <span class="text-amber-400 flex items-center gap-1">
                                <span class="w-1 h-1 rounded-full bg-amber-400"></span> OPTIMIZING
                            </span>
                        </div>

                        <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-[#65A68E] transition-colors duration-200">
                            BitPacker Encoder
                        </h3>

                        <p class="text-slate-400 text-sm leading-relaxed">
                            Moteur de compression binaire écrit en Go. Implémente des algorithmes de codage de Huffman et d'arithmétique avec gestion fine du bit-packing pour l'optimisation des structures de fichiers volumineux.
                        </p>
                    </div>

                    <div class="p-6 pt-0 space-y-4">
                        <div class="flex flex-wrap gap-2 font-mono text-[10px]">
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Go</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-500">Binary Bit-Packing</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Algorithms</span>
                        </div>

                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-[#65A68E] hover:text-white transition-colors duration-200 group/link">
                            <span>Read_Documentation</span>
                            <span class="transform transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>

                <div class="relative group rounded-xl border border-slate-800 bg-[#0e1416]/60 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#4B8A74]/50 hover:shadow-[0_0_30px_rgba(75,138,116,0.15)]">
                    <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#4B8A74] to-transparent opacity-50"></div>

                    <div class="p-6 space-y-4">
                        <div class="flex justify-between items-center font-mono text-[10px] text-slate-500">
                            <span>ID: 0x616e64726f</span>
                            <span class="text-cyan-400 flex items-center gap-1">
                                <span class="w-1 h-1 rounded-full bg-cyan-400"></span> DEPLOYED
                            </span>
                        </div>

                        <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-[#65A68E] transition-colors duration-200">
                            DroidForge CLI
                        </h3>

                        <p class="text-slate-400 text-sm leading-relaxed">
                            Interface en ligne de commande (CLI) conçue en Go permettant de générer instantanément des squelettes d'applications Android, d'injecter des configurations et de patcher dynamiquement les fichiers d'activité Java/Kotlin.
                        </p>
                    </div>

                    <div class="p-6 pt-0 space-y-4">
                        <div class="flex flex-wrap gap-2 font-mono text-[10px]">
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">Go / Flag</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-400">Kotlin</span>
                            <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-orange-400">Java Android</span>
                        </div>

                        <a href="#" class="inline-flex items-center gap-2 font-mono text-xs text-[#65A68E] hover:text-white transition-colors duration-200 group/link">
                            <span>Execute_Binary</span>
                            <span class="transform transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                        </a>
                    </div>
                </div>

            </div>

            <div class="mt-12 p-4 rounded-lg bg-[#070b0d] border border-slate-900 font-mono text-xs text-slate-500 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    All systems operational. Listening to incoming queries...
                </span>
                <span class="hidden sm:inline">TOTAL_MODULES: 03</span>
            </div>

        </div>
    </section>

}