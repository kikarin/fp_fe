import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Showcase from '../components/Showcase'
import BrandStatement from '../components/BrandStatement'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import CTABanner from '../components/CTABanner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Firstpective — Creative Communication & Production House'

    const lenis = new Lenis()
    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.hash])

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <Showcase />
        <BrandStatement />
        <Services />
        <Portfolio />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
