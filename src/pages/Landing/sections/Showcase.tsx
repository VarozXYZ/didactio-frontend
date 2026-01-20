function Showcase() {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-sora font-bold text-3xl text-dark text-center mb-4">
                    Trusted by educators worldwide
                </h2>
                <p className="font-inter text-base text-dark/70 text-center mb-12">
                    Discover what our users think about our platform
                </p>

                <div className="flex justify-center">
                    <img
                        src="/assets/props/showcase-section.png"
                        alt="Didactio platform showcase"
                        className="w-full max-w-4xl rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Showcase
