function Hero() {
    return (
        <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[#E8F5E9] rounded-full px-4 py-2 mb-8">
                    <img src="/assets/icons/wand-magic-sparkles-solid 1.png" alt="" className="h-4 w-4" />
                    <span className="font-inter text-sm text-dark">Now supporting latest AI models</span>
                </div>

                <h1 className="font-sora font-bold text-5xl md:text-6xl text-dark leading-tight mb-6">
                    Create professional<br />courses in minutes
                </h1>

                <p className="font-inter text-lg text-dark/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Didactio uses AI and pedagogical expertise to<br className="hidden md:block" />
                    generate high-quality, structured learning<br className="hidden md:block" />
                    content tailored to your needs.
                </p>

                <button className="bg-accent text-white font-inter font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors shadow-sm">
                    Start now, free
                </button>
            </div>

            <div className="max-w-5xl mx-auto mt-16">
                <div className="bg-white rounded-2xl shadow-xl border border-secondary/50 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-secondary/30">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28CA41]"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="bg-secondary/30 rounded px-3 py-1 text-xs text-dark/50 font-inter">didact.io</div>
                        </div>
                    </div>
                    <div className="p-4">
                        <img src="/assets/props/showcase-section.png" alt="Didactio Interface" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
