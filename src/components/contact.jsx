export default function Contact() {
    return <section id="contact" class="relative min-h-screen w-full bg-[#0a0f12] text-slate-100 overflow-hidden py-20 font-sans border-t border-slate-900 flex items-center justify-center">

        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,37,32,0.05)_1px,transparent_1px)] bg-[size:3rem_100%] pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2A5244] rounded-full blur-[180px] opacity-15 pointer-events-none"></div>

        <div class="relative z-10 container mx-auto px-6 max-w-4xl">

            <div class="mb-12 space-y-2 text-center">
                <div class="font-mono text-xs tracking-widest text-[#65A68E] uppercase">
                    [SECTION_05] // SECURE_COMMS_CHANNEL
                </div>
                <h2 class="text-3xl md:text-5xl font-black tracking-tight">
                    Initialiser_Liaison.<span class="text-[#4B8A74]">net</span>
                </h2>
                <p class="text-slate-400 font-mono text-xs md:text-sm max-w-md mx-auto mt-2">
                    Canal de communication chiffré de bout en bout. Laissez une empreinte de données.
                </p>
                <div class="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#4B8A74] to-transparent mx-auto mt-4"></div>
            </div>

            <div class="relative rounded-xl border border-slate-800 bg-[#0e1416]/90 backdrop-blur-md shadow-2xl overflow-hidden">

                <div class="bg-[#070b0d] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-500">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
                        <span class="ml-2 font-semibold text-slate-400">comms_handler.sh</span>
                    </div>
                    <div class="text-[10px] tracking-wider text-[#4B8A74]">ENC: AES-256</div>
                </div>

                <form class="p-6 md:p-8 space-y-6">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2 font-mono text-xs">
                            <label for="name" class="text-slate-400 block uppercase tracking-wider">INPUT_IDENTITY :</label>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[#65A68E]">&gt;</span>
                                <input type="text" id="name" required placeholder="Ex: Jean Dupont"
                                    class="w-full pl-8 pr-4 py-3 rounded bg-[#070b0d] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#4B8A74] focus:ring-1 focus:ring-[#4B8A74] transition-all" />
                            </div>
                        </div>

                        <div class="space-y-2 font-mono text-xs">
                            <label for="email" class="text-slate-400 block uppercase tracking-wider">RETURN_ROUTE (EMAIL) :</label>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[#65A68E]">&gt;</span>
                                <input type="email" id="email" required placeholder="Ex: contact@domain.com"
                                    class="w-full pl-8 pr-4 py-3 rounded bg-[#070b0d] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#4B8A74] focus:ring-1 focus:ring-[#4B8A74] transition-all" />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2 font-mono text-xs">
                        <label for="subject" class="text-slate-400 block uppercase tracking-wider">PACKET_OBJECT :</label>
                        <div class="relative">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[#65A68E]">&gt;</span>
                            <input type="text" id="subject" required placeholder="Ex: Proposition de projet / Recrutement"
                                class="w-full pl-8 pr-4 py-3 rounded bg-[#070b0d] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#4B8A74] focus:ring-1 focus:ring-[#4B8A74] transition-all" />
                        </div>
                    </div>

                    <div class="space-y-2 font-mono text-xs">
                        <label for="message" class="text-slate-400 block uppercase tracking-wider">PAYLOAD_DATA (MESSAGE) :</label>
                        <div class="relative">
                            <textarea id="message" required rows="5" placeholder="Saisissez vos instructions ou votre message ici..."
                                class="w-full p-4 rounded bg-[#070b0d] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#4B8A74] focus:ring-1 focus:ring-[#4B8A74] transition-all resize-none"></textarea>
                        </div>
                    </div>

                    <div class="pt-2 flex justify-end">
                        <button type="submit" class="w-full sm:w-auto relative group px-8 py-3.5 overflow-hidden rounded border border-[#4B8A74] font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(75,138,116,0.4)]">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4B8A74] to-[#2A5244] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span class="relative z-10 text-white flex items-center justify-center gap-2">
                                <span>[EXECUTE_SUBMIT]</span> &rarr;
                            </span>
                        </button>
                    </div>

                </form>
            </div>

            <footer class="mt-20 pt-8 border-t border-slate-900 text-center space-y-4 font-mono text-[11px] text-slate-500">
                <div class="flex justify-center gap-6 text-xs">
                    <a href="#" class="hover:text-[#65A68E] transition-colors">GitHub</a>
                    <a href="#" class="hover:text-[#65A68E] transition-colors">LinkedIn</a>
                    <a href="#" class="hover:text-[#65A68E] transition-colors">Terminal_Logs</a>
                </div>
                <div>
                    &copy; 2026 Maminirina Edwino. All rights reserved. // Powered by TurboStack & Wasm.
                </div>
            </footer>

        </div>
    </section>
}