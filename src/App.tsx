import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Showcase from './components/Showcase'
import BrandStatement from './components/BrandStatement'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CTABanner from './components/CTABanner'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()
    let rafId: number

    function raf(time: number) {
      if (lenis) lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className=" min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Showcase />
      <BrandStatement />
      <Services />
      <Portfolio />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
