import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
    const location = useLocation()
    const isAuthRoute = location.pathname === '/login' || location.pathname === '/register'

    return (
        <div className={`mx-auto bg-white min-h-screen flex flex-col ${isAuthRoute ? '' : 'items-center'}`}>
            {!isAuthRoute && <Header />}
            <main className={isAuthRoute ? 'flex-1 w-full' : 'flex-1 w-full flex flex-col items-center'}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
            {!isAuthRoute && <Footer />}
        </div>
    )
}

export default App
