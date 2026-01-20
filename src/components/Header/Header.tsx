import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/contact', label: 'Contact' },
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white border-b border-secondary/30">
            <Link to="/" className="flex items-center gap-2">
                <img src="/assets/logos/logo.png" alt="Didactio" className="h-8 w-8" />
                <span className="font-sora font-semibold text-xl text-dark tracking-wide">DIDACTIO</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`font-inter text-sm transition-colors ${isActive(link.to)
                                ? 'text-accent font-semibold underline underline-offset-4'
                                : 'text-dark hover:text-accent'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href="/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-dark hover:text-accent transition-colors flex items-center gap-1.5"
                >
                    Dashboard
                    <img src="/assets/icons/export.png" alt="" className="h-3.5 w-3.5" />
                </a>
            </nav>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                    <div className="w-8 h-5 rounded-full bg-dark relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white"></div>
                    </div>
                </button>
                <Link
                    to="/login"
                    className="bg-accent text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
                >
                    Try it out
                </Link>
            </div>
        </header>
    )
}

export default Header
