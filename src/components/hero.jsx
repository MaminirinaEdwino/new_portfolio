import image from "../assets/image.png";

export default function Hero() {
    return <section className="flex gap-1 h-screen">
        <section className="relative min-h-screen w-full bg-[#0a0f12] text-slate-100 overflow-hidden flex items-center justify-center font-sans">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#142520_1px,transparent_1px),linear-gradient(to_bottom,#142520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#4B8A74] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-900 rounded-full blur-[130px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4B8A74]/30 bg-[#0e1715] text-xs font-mono tracking-widest text-[#65A68E] uppercase animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-[#65A68E]"></span> System:// Active
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Maminirina Edwino<br />
                        <span className="bg-gradient-to-r from-[#65A68E] via-[#4B8A74] to-cyan-400 bg-clip-text text-transparent font-mono text-2xl md:text-4xl block mt-2">
                            Full-Stack Dev & Cyber Architect
                        </span>
                    </h1>

                    <p className="text-slate-400 max-w-xl text-base md:text-lg leading-relaxed">
                        Propulsion d'architectures web robustes et génération d'écosystèmes applicatifs optimisés.
                        Spécialisé dans le développement de solutions full-stack haute performance, du noyau système jusqu'aux interfaces réactives de demain.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                        <a href="#projects" className="relative group px-6 py-3 overflow-hidden rounded border border-[#4B8A74] font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(75,138,116,0.5)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4B8A74] to-[#2A5244] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10 text-white group-hover:text-white">Initialize_Portfolio</span>
                        </a>

                        <a href="#contact" className="px-6 py-3 rounded border border-slate-700 bg-slate-900/50 font-mono text-sm tracking-wider uppercase hover:bg-slate-800/80 transition-colors duration-200">
                            Secure_Contact
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#4B8A74]/20 to-transparent rounded-2xl blur-2xl transform scale-95 opacity-50 animate-pulse"></div>

                    <div className="relative p-2 rounded-2xl border border-slate-800 bg-[#0e1416]/80 backdrop-blur-sm shadow-2xl max-w-[400px] w-full">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#65A68E]"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-700"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-700"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#65A68E]"></div>

                        <img src={image} alt="Maminirina Edwino Avatar" className="rounded-xl w-full object-cover border border-slate-800" />
                    </div>
                </div>

            </div>

            <div className="absolute bottom-4 left-6 hidden md:block font-mono text-[10px] text-slate-600 tracking-widest">
                LATENCY: 12MS // DEPLOYED_V3.2
            </div>
        </section>        
    </section>
}