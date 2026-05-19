export default function About() {
    return <section id="about" className="relative min-h-screen w-full bg-[#0a0f12] text-slate-100 overflow-hidden flex items-center justify-center py-20 font-sans">
        <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4B8A74]/30 to-transparent pointer-events-none animate-scanline"></div>

        <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,37,32,0.1)_1px,transparent_1px)] bg-[size:100%_0.5rem] pointer-events-none"></div>

        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2A5244] rounded-full blur-[180px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,37,32,0.1)_1px,transparent_1px)] bg-[size:100%_0.5rem] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2A5244] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">

            <div className="mb-16 space-y-2 text-center lg:text-left">
                
                <div className="font-mono text-xs tracking-widest text-[#65A68E] uppercase">
                    [SECTION_02] // IDENTITY_QUERY
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                    Dossier_Séquentiel.<span className="text-[#4B8A74]">log</span>
                </h2>
                <div className="h-[2px] w-20 bg-gradient-to-r from-[#4B8A74] to-transparent mx-auto lg:mx-0 mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                <div className="lg:col-span-7 space-y-6">
                    <div className="relative p-6 rounded-xl border border-slate-800 bg-[#0e1416]/90 backdrop-blur-md shadow-xl">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#4B8A74]"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#4B8A74]"></div>

                        <div className="font-mono text-xs text-slate-500 mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                            <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500/70"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500/70"></span>
                            <span className="ml-2">core_manifesto.md</span>
                        </div>

                        <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
                            <p>
                                <span className="text-[#65A68E] font-mono">&gt;</span> Passionné par l'ingénierie logicielle et les architectures systèmes, j'envisage le code comme un outil de modélisation du futur. Mon approche combine la rigueur du développement <span className="text-white font-semibold">Full-Stack</span> et l'exploration de solutions technologiques hautement optimisées.
                            </p>
                            <p>
                                <span className="text-[#65A68E] font-mono">&gt;</span> Qu'il s'agisse de concevoir des backends robustes, de manipuler des structures de données complexes ou d'architecturer des interfaces web ultra-rapides, mon objectif reste le même : pousser les limites de la performance et de l'interactivité.
                            </p>
                            <p>
                                <span className="text-[#65A68E] font-mono">&gt;</span> Au-delà du développement classNameique, je m'intéresse de près aux infrastructures de données massives, aux environnements Linux et à la convergence entre la création numérique et la logique pure.
                            </p>
                        </div>
                    </div>

                    <div className="border-l-4 border-[#4B8A74] pl-4 italic text-slate-400 font-mono text-xs md:text-sm">
                        "Le code n'est pas seulement une suite d'instructions, c'est l'infrastructure invisible sur laquelle se construit demain."
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-6">

                    <div className="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/50 backdrop-blur-sm">
                        <h3 className="font-mono text-sm font-bold tracking-wider uppercase text-[#65A68E] mb-4 flex items-center gap-2">
                            <span>📊</span> Caractéristiques_Système
                        </h3>

                        <div className="font-mono text-xs space-y-3">
                            <div className="flex justify-between border-b border-slate-800/60 pb-2">
                                <span className="text-slate-500">NOM_DE_CODE:</span>
                                <span className="text-slate-200 font-bold">Maminirina Edwino</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800/60 pb-2">
                                <span className="text-slate-500">RÔLE_PRINCIPAL:</span>
                                <span className="text-[#65A68E]">Full-Stack Developer</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800/60 pb-2">
                                <span className="text-slate-500">ENV_PREF:</span>
                                <span className="text-slate-200">Linux UNIX_Core</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800/60 pb-2">
                                <span className="text-slate-500">FOCUS_RECHERCHE:</span>
                                <span className="text-cyan-400">High-Performance & Security</span>
                            </div>
                            <div className="flex justify-between pb-1">
                                <span className="text-slate-500">DISPONIBILITÉ:</span>
                                <span className="inline-flex items-center gap-1 text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> READY_FOR_DEPLOY
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/50 backdrop-blur-sm space-y-4">
                        <h3 className="font-mono text-sm font-bold tracking-wider uppercase text-[#65A68E]">
                            <span>⚡</span> Modules_Core
                        </h3>

                        <div className="space-y-3 font-mono text-xs">
                            <div className="space-y-1">
                                <div className="flex justify-between text-slate-400">
                                    <span>Backend_Architecture</span>
                                    <span className="text-[#65A68E]">90%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                                    <div className="h-full bg-gradient-to-r from-[#2A5244] to-[#4B8A74] rounded-full w-[90%]"></div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-slate-400">
                                    <span>Frontend_Interfaces</span>
                                    <span className="text-[#65A68E]">85%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                                    <div className="h-full bg-gradient-to-r from-[#2A5244] to-[#4B8A74] rounded-full w-[85%]" ></div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-slate-400">
                                    <span>Data_Optimization</span>
                                    <span className="text-[#65A68E]">80%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                                    <div className="h-full bg-gradient-to-r from-[#2A5244] to-[#4B8A74] rounded-full w-[80%]" ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
}