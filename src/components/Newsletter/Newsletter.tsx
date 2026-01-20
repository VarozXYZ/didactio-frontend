function Newsletter() {
    return (
        <section className="bg-dark py-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="font-sora font-semibold text-xl text-white">Join our newsletter</h3>
                    <p className="font-inter text-sm text-white/70 mt-1">Be the first to know about our new features</p>
                </div>
                <div className="flex items-center w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 md:w-80 px-4 py-3 rounded-l-lg font-inter text-sm text-dark bg-white outline-none"
                    />
                    <button className="bg-accent p-3 rounded-r-lg hover:bg-accent/90 transition-colors">
                        <img src="/assets/icons/paper-plane-solid-full 1.png" alt="Subscribe" className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
