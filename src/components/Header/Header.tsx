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
        <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white">
            <Link to="/" className="flex items-center gap-2">
                <img src="/assets/logos/logo.png" alt="Didactio" className="h-8 w-8" />
                <span className="font-sora font-semibold text-xl text-dark">DIDACTIO</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`font-inter text-sm transition-colors ${isActive(link.to)
                                ? 'text-accent font-medium'
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
                    className="font-inter text-sm text-dark hover:text-accent transition-colors flex items-center gap-1"
                >
                    Dashboard
                    <img src="/assets/icons/export.png" alt="" className="h-3 w-3" />
                </a>
            </nav>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                    <div className="w-5 h-5 rounded-full bg-dark" />
                </button>
                <Link
                    to="/login"
                    className="bg-accent text-white font-inter font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
                >
                    Try it out
                </Link>
            </div>
        </header>
    )
}

export default Header
