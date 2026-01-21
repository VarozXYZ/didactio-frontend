import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
    return (
        <div className="mx-auto bg-white min-h-screen flex flex-col items-center">
            <Header />
            <main className="flex-1 w-full flex flex-col items-center">
                <Hero />
            </main>
            <Footer />
        </div>
    )
}

export default App
