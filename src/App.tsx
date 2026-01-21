import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className="mx-auto bg-white min-h-screen flex flex-col items-center pt-8 px-8">
            <Header />
            <main className="flex-1 w-full max-w-[1440px]">
            </main>
            <Footer />
        </div>
    )
}

export default App
