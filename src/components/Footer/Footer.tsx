import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/assets/logos/logo-white.png" alt="Didactio" className="h-8 w-8" />
                        <span className="font-sora font-semibold text-xl">DIDACTIO</span>
                    </Link>
                    <p className="font-inter text-sm text-white/80 max-w-xs">
                        AI-powered web platform that creates personalized, didactic syllabi for almost any topic and educational level in minutes.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <img src="/assets/icons/x-twitter-brands-solid-full 1.png" alt="X" className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <img src="/assets/icons/instagram.png" alt="X" className="h-5 w-5" />
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <img src="/assets/icons/discord-brands-solid-full 1.png" alt="Discord" className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-sora font-semibold text-base mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Examples</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sora font-semibold text-base mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li><Link to="/pricing" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Pricing</Link></li>
                        <li><a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">FAQ</a></li>
                        <li><Link to="/contact" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sora font-semibold text-base mb-4">Didactio</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="font-inter text-sm text-white/80 hover:text-white transition-colors">About Us</a></li>
                        <li><Link to="/contact" className="font-inter text-sm text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center">
                <p className="font-inter text-sm text-white/60">Copyright @ 2025</p>
            </div>
        </footer>
    )
}

export default Footer
