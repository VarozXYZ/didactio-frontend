import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

type AuthMode = 'login' | 'register'

type AuthScreenProps = {
    mode: AuthMode
}

function SocialButton({ label, iconSrc }: { label: string; iconSrc: string }) {
    return (
        <button
            type="button"
            aria-label={label}
            className="h-13 w-full cursor-pointer rounded-sm border border-dark/15 bg-white px-5 font-sora text-xl font-semibold text-dark/95 shadow-sm transition-colors hover:bg-dark/3"
        >
            <span className="flex items-center justify-center">
                <img src={iconSrc} alt="" className="h-9 w-auto max-w-[170px] object-contain" />
            </span>
        </button>
    )
}

function AuthScreen({ mode }: AuthScreenProps) {
    const isLogin = mode === 'login'
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const title = isLogin ? 'Welcome back' : 'Create your account'
    const subtitle = isLogin
        ? 'Sign in to access the dashboard.'
        : 'Sign up to start building smarter curricula in minutes.'

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <section className="grid min-h-screen w-full lg:grid-cols-[1.05fr_1fr]">
            <aside className="relative min-h-[330px] overflow-hidden bg-accent">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(50,48,48,0.24)_2px,transparent_2px)] [background-size:46px_46px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/20" />

                <div className="relative z-10 flex h-full flex-col justify-center px-8 py-14 sm:px-12 lg:px-16">
                    <div className="mb-24 inline-flex">
                        <img src="/assets/logos/logo-horizontal.png" alt="Didactio" className="h-[58px] w-auto" />
                    </div>

                    <h1 className="max-w-[550px] font-sora text-5xl font-bold leading-[1.18] text-dark">
                        Design smarter curricula in seconds
                    </h1>
                </div>
            </aside>

            <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-10">
                <div className="w-full max-w-[560px] py-4">
                    <header>
                        <h2 className="font-sora text-5xl font-bold text-dark">{title}</h2>
                        <p className="mt-4 font-inter text-xl text-dark/65">{subtitle}</p>
                    </header>

                    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <SocialButton label="Google" iconSrc="/assets/brands/google.png" />
                        <SocialButton label="Microsoft" iconSrc="/assets/brands/microsoft.png" />
                    </div>

                    <div className="my-12 flex items-center gap-5">
                        <div className="h-px flex-1 bg-dark/35" />
                        <span className="font-inter text-lg text-dark/60">Or continue with</span>
                        <div className="h-px flex-1 bg-dark/35" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {!isLogin && (
                            <label className="block">
                                <span className="font-sora text-xl font-semibold text-dark">Full name</span>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Jane Doe"
                                    className="mt-4 h-13 w-full rounded-sm border border-dark/15 bg-white px-4 font-inter text-xl text-dark outline-none transition-shadow placeholder:text-dark/40 focus:ring-2 focus:ring-accent/50"
                                />
                            </label>
                        )}

                        <label className="block">
                            <span className="font-sora text-xl font-semibold text-dark">Email address</span>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="name@example.com"
                                className="mt-4 h-13 w-full rounded-sm border border-dark/15 bg-white px-4 font-inter text-xl text-dark outline-none transition-shadow placeholder:text-dark/40 focus:ring-2 focus:ring-accent/50"
                            />
                        </label>

                        <label className="block">
                            <span className="font-sora text-xl font-semibold text-dark">Password</span>
                            <div className="relative mt-4">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                                    placeholder="Enter your password"
                                    className="h-13 w-full rounded-sm border border-dark/15 bg-white px-4 pr-12 font-inter text-xl text-dark outline-none transition-shadow placeholder:text-dark/40 focus:ring-2 focus:ring-accent/50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((value) => !value)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer font-inter text-sm text-dark/45 hover:text-dark/75"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </label>

                        {!isLogin && (
                            <label className="block">
                                <span className="font-sora text-xl font-semibold text-dark">Confirm password</span>
                                <div className="relative mt-4">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        placeholder="Confirm your password"
                                        className="h-13 w-full rounded-sm border border-dark/15 bg-white px-4 pr-12 font-inter text-xl text-dark outline-none transition-shadow placeholder:text-dark/40 focus:ring-2 focus:ring-accent/50"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((value) => !value)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer font-inter text-sm text-dark/45 hover:text-dark/75"
                                        aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                                    >
                                        {showConfirmPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </label>
                        )}

                        {isLogin ? (
                            <div className="flex justify-end">
                                <a href="#" className="font-inter text-lg font-semibold text-accent hover:text-accent/80">
                                    Forgot password?
                                </a>
                            </div>
                        ) : (
                            <p className="font-inter text-base text-dark/60">
                                By creating an account, you agree to our terms and privacy policy.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-4 h-13 w-full cursor-pointer rounded-sm bg-accent font-sora text-xl font-semibold text-white shadow-card transition-colors hover:bg-accent/90"
                        >
                            {isLogin ? 'Log In' : 'Create account'}
                        </button>
                    </form>

                    <p className="mt-10 text-center font-inter text-lg text-dark/65">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <Link
                            to={isLogin ? '/register' : '/login'}
                            className="font-semibold text-accent hover:text-accent/80"
                        >
                            {isLogin ? 'Register' : 'Log in'}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AuthScreen
