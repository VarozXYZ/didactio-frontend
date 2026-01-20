function Hero() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
            <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
                    <img src="/assets/icons/wand-magic-sparkles-solid 1.png" alt="" className="h-4 w-4" />
                    <span className="font-inter text-sm text-dark">Now supporting latest AI models</span>
                </div>

                <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-6">
                    Create professional<br />courses in minutes
                </h1>

                <p className="font-inter text-base md:text-lg text-dark/70 max-w-xl mx-auto mb-8">
                    Didactio uses AI and pedagogical expertise to<br />
                    generate high-quality, structured learning<br />
                    content tailored to your needs.
                </p>

                <button className="bg-accent text-white font-inter font-medium text-base px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">
                    Start now, free
                </button>
            </div>
        </section>
    )
}

export default Hero
