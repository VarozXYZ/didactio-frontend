function Testimonial() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="relative">
                        <img
                            src="/assets/props/testimonial-woman-eclipse.png"
                            alt=""
                            className="absolute -z-10 -top-4 -left-4 w-full h-full object-contain"
                        />
                        <img
                            src="/assets/props/testimonial-woman.png"
                            alt="Sarah Johnson"
                            className="w-64 h-64 rounded-full object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4].map((i) => (
                                <img key={i} src="/assets/icons/Star.png" alt="" className="w-5 h-5" />
                            ))}
                            <img src="/assets/icons/Star (1).png" alt="" className="w-5 h-5" />
                        </div>

                        <blockquote className="font-inter text-lg text-dark mb-6">
                            "Didactio has revolutionized the way I prepare my courses. What used to take me weeks now takes just minutes. The AI understands exactly what my students need and creates perfectly structured syllabi. The quality is outstanding, and my students have noticed the improvement in my course materials."
                        </blockquote>

                        <div>
                            <p className="font-sora font-semibold text-dark">Sarah Johnson</p>
                            <p className="font-inter text-sm text-dark/60">Professor of Computer Science, MIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
