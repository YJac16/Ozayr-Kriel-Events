import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { About } from './components/About'
import { WhyChoose } from './components/WhyChoose'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { InstagramStrip } from './components/InstagramStrip'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <WhyChoose />
        <HowItWorks />
        <Testimonials />
        <InstagramStrip />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
