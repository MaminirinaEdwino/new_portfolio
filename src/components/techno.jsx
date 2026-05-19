export default function Techno() {
    return <>
        <section id="tech-stack" class="relative min-h-screen w-full bg-[#0a0f12] text-slate-100 overflow-hidden py-20 font-sans border-t border-slate-900">

            <div class="absolute -right-20 top-1/4 w-[600px] h-[600px] border border-[#4B8A74]/5 rounded-full pointer-events-none"></div>
            <div class="absolute -right-20 top-1/4 w-[400px] h-[400px] border border-[#4B8A74]/10 rounded-full pointer-events-none"></div>
            <div class="absolute -right-20 top-1/4 w-[200px] h-[200px] border border-[#4B8A74]/5 rounded-full pointer-events-none"></div>
            <div class="absolute top-1/2 right-10 w-[300px] h-[300px] bg-cyan-900 rounded-full blur-[140px] opacity-10 pointer-events-none"></div>

            <div class="relative z-10 container mx-auto px-6 max-w-6xl">

                <div class="mb-16 space-y-2 text-center lg:text-left">
                    <div class="font-mono text-xs tracking-widest text-[#65A68E] uppercase">
                        [SECTION_04] // TECH_STACK_INDEX
                    </div>
                    <h2 class="text-3xl md:text-5xl font-black tracking-tight">
                        Arsenal_Technique.<span class="text-[#4B8A74]">libs</span>
                    </h2>
                    <div class="h-[2px] w-20 bg-gradient-to-r from-[#4B8A74] to-transparent mx-auto lg:mx-0 mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div class="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/40 backdrop-blur-sm space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 class="font-mono text-sm font-bold tracking-wider text-[#65A68E] uppercase">
                                01 // Core_Langs
                            </h3>
                            <span class="text-xs font-mono text-slate-600">🧠</span>
                        </div>

                        <ul class="space-y-2 font-mono text-xs text-slate-300">
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Go (Golang)</span>
                                <span class="text-emerald-400 text-[10px]">MAIN_CORE</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>JavaScript / TS</span>
                                <span class="text-slate-500 text-[10px]">ASYNC</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Java / Kotlin</span>
                                <span class="text-slate-500 text-[10px]">MOBILE</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>C / C++</span>
                                <span class="text-cyan-400 text-[10px]">SYS_LEVEL</span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/40 backdrop-blur-sm space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 class="font-mono text-sm font-bold tracking-wider text-[#65A68E] uppercase">
                                02 // Engine_Back
                            </h3>
                            <span class="text-xs font-mono text-slate-600">⚙️</span>
                        </div>

                        <ul class="space-y-2 font-mono text-xs text-slate-300">
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>REST / GraphQL APIs</span>
                                <span class="text-emerald-400 text-[10px]">READY</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Node.js / Express</span>
                                <span class="text-slate-500 text-[10px]">RUNTIME</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>WebSockets</span>
                                <span class="text-cyan-400 text-[10px]">REAL_TIME</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>gRPC / Protocol Buffers</span>
                                <span class="text-slate-500 text-[10px]">RPC</span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/40 backdrop-blur-sm space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 class="font-mono text-sm font-bold tracking-wider text-[#65A68E] uppercase">
                                03 // Client_Side
                            </h3>
                            <span class="text-xs font-mono text-slate-600">💻</span>
                        </div>

                        <ul class="space-y-2 font-mono text-xs text-slate-300">
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>TurboSPA Framework</span>
                                <span class="text-amber-400 text-[10px]">CUSTOM</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Tailwind CSS</span>
                                <span class="text-emerald-400 text-[10px]">UTILITY</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>WebAssembly (Wasm)</span>
                                <span class="text-cyan-400 text-[10px]">COMPILED</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>React / Next.js</span>
                                <span class="text-slate-500 text-[10px]">FRAMEWORK</span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 rounded-xl border border-slate-800 bg-[#0e1416]/40 backdrop-blur-sm space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <h3 class="font-mono text-sm font-bold tracking-wider text-[#65A68E] uppercase">
                                04 // Data_&_Ops
                            </h3>
                            <span class="text-xs font-mono text-slate-600">⚡</span>
                        </div>

                        <ul class="space-y-2 font-mono text-xs text-slate-300">
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Linux (Fedora / Debian)</span>
                                <span class="text-emerald-400 text-[10px]">HOST_OS</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>SQL / NoSQL (Postgres)</span>
                                <span class="text-slate-500 text-[10px]">DATA_STORE</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Docker Containers</span>
                                <span class="text-cyan-400 text-[10px]">ISOLATED</span>
                            </li>
                            <li class="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/60">
                                <span>Git / Version Control</span>
                                <span class="text-slate-500 text-[10px]">BRANCH_MGR</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="mt-8 p-4 rounded-xl border border-slate-800 bg-[#0e1416]/20 font-mono text-[11px] text-slate-400 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                    <span class="text-[#65A68E] font-bold">📡 EN_COURS_D_ANALYSE :</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Network Diagnostic (ARP)</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Huffman Compression Engine</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Algorave Audio (SuperCollider/Sardine)</span>
                </div>

            </div>
        </section>
    </>
}