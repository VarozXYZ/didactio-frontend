function Testimonial() {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-sora font-bold text-3xl md:text-4xl text-dark text-center mb-4">
                    Trusted by educators worldwide
                </h2>
                <p className="font-inter text-base text-dark/60 text-center mb-16">
                    Discover what our users think about our platform
                </p>

                <div className="bg-[#F5F5F5] rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="shrink-0">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-accent/20 rounded-full"></div>
                                <img
                                    src="/assets/props/testimonial-woman.png"
                                    alt="Sarah Johnson"
                                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <img key={i} src="/assets/icons/Star.png" alt="" className="w-5 h-5" />
                                ))}
                            </div>

                            <blockquote className="font-inter text-lg md:text-xl text-dark leading-relaxed mb-6">
                                "Didactio has revolutionized the way I prepare my courses. What used to take me weeks now takes just minutes. The AI understands exactly what my students need and creates perfectly structured syllabi. The quality is outstanding, and my students have noticed the improvement in my course materials."
                            </blockquote>

                            <div>
                                <p className="font-sora font-semibold text-lg text-dark">Sarah Johnson</p>
                                <p className="font-inter text-sm text-dark/60">Professor of Computer Science, MIT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
