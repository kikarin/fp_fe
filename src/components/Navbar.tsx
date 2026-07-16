import { useState, useEffect } from 'react'

import Logo from '../assets/logo/Logo_1.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [backdrop, setBackdrop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
        setBackdrop(true)
      } else {
        setScrolled(false)
        setBackdrop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center ${backdrop ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'} md:px-60 px-8 max-w-full mx-auto transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="flex items-center gap-2">
        <img src={Logo} alt="FirstPective" className="w-40 h-7" />
      </div>

      <div className="flex-grow" />

      <div className="hidden md:flex items-center gap-8">
        {['Home', 'Ai Creative Boost', 'Solutions','Work', 'FAQ', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[14px] text-[#444444] hover:text-[#111111] transition-colors font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="hidden md:flex items-center gap-2 bg-[#2F6BFF] text-white text-[13px] font-semibold px-10 py-4 rounded-full hover:bg-[#111111] transition-colors ml-8">
        Connect
      </button>

      <button
        className="md:hidden text-[#111111]"
        onClick={() => setOpen(!open)}
      >
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-2xl mx-4 p-6 flex flex-col gap-4 md:hidden">
          {['Home', 'Ai Creative Boost', 'Solutions','Work', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] text-[#111111] font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-[#2F6BFF] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full w-full hover:bg-[#111111] transition-colors">
            Connect
          </button>
        </div>
      )}
    </nav>
  )
}
