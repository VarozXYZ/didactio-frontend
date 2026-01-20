import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<div className="p-8 font-sora text-2xl">Landing Page</div>} />
                    <Route path="/pricing" element={<div className="p-8 font-sora text-2xl">Pricing Page</div>} />
                    <Route path="/contact" element={<div className="p-8 font-sora text-2xl">Contact Page</div>} />
                    <Route path="/login" element={<div className="p-8 font-sora text-2xl">Login Page</div>} />
                </Routes>
            </main>
        </div>
    )
}

export default App
