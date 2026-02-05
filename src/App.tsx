import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'

function App() {
    return (
        <div className="mx-auto bg-white min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex-1 w-full flex flex-col items-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
