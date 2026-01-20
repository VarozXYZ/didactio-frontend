import Hero from './sections/Hero'
import Features from './sections/Features'
import Showcase from './sections/Showcase'
import Testimonial from './sections/Testimonial'
import FAQ from './sections/FAQ'
import Newsletter from '../../components/Newsletter/Newsletter'

function Landing() {
    return (
        <div>
            <Hero />
            <Features />
            <Showcase />
            <Testimonial />
            <FAQ />
            <Newsletter />
        </div>
    )
}

export default Landing
