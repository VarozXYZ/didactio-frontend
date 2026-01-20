import Hero from './sections/Hero'
import Features from './sections/Features'
import Testimonial from './sections/Testimonial'
import FAQ from './sections/FAQ'
import Newsletter from '../../components/Newsletter/Newsletter'

function Landing() {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonial />
            <FAQ />
            <Newsletter />
        </div>
    )
}

export default Landing
