import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/site'
import logo from '../assets/logo/Logo_1.png'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `Page Not Found — ${site.name}`
  }, [])

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-5 text-center"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <img src={logo} alt={site.name} className="h-8 mb-8 object-contain" decoding="async" />
      <p className="text-[13px] font-semibold uppercase tracking-wider text-[#2F6BFF] mb-3">404</p>
      <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111111] mb-3">Page not found</h1>
      <p className="text-[14px] sm:text-[15px] text-[#666666] max-w-md mb-8 leading-relaxed">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-[#2F6BFF] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#1a55e8] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
