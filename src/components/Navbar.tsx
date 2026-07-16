import { useState, useEffect } from 'react'
import Logo from '../assets/logo/Logo_1.png'

const navItems = ['About Us', 'AI Video', 'AI Creative Boost', 'Solutions', 'Work', 'FAQ']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/80 backdrop-blur-[3px]' : 'bg-transparent'
      }`}
    >
      <div
        className={`page-container flex items-center transition-all duration-300 ${
          scrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-6 md:py-8'
        }`}
      >
        <a href="#about us" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={Logo} alt="FirstPective" className="w-32 sm:w-36 md:w-40 h-auto" />
        </a>

        <div className="flex-grow" />

        {/* Desktop links — lg+ agar md tidak overflow */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] xl:text-[14px] text-[#444444] hover:text-[#111111] transition-colors font-medium whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="hidden lg:flex items-center gap-2 bg-[#2F6BFF] text-white text-[13px] font-semibold px-8 xl:px-10 py-3.5 xl:py-4 rounded-full hover:bg-[#111111] transition-colors ml-6 xl:ml-8 shrink-0">
          Connect
        </button>

        {/* Mobile / tablet hamburger */}
        <button
          className="lg:hidden text-[#111111] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div className="lg:hidden border-t border-[#EEEEEE] bg-white max-h-[calc(100svh-4rem)] overflow-y-auto">
          <div className="page-container pb-6 pt-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[15px] sm:text-[16px] text-[#111111] font-medium py-3 border-b border-[#F0F0F0]"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 bg-[#2F6BFF] text-white text-[13px] font-semibold px-5 py-3.5 rounded-full w-full hover:bg-[#111111] transition-colors">
              Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
