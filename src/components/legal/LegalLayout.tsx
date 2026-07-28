import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { legalRoutes, site } from '../../config/site'

type LegalLayoutProps = {
  logoSrc: string
  logoAlt?: string
  variant?: 'light' | 'dark'
}

export default function LegalLayout({ logoSrc, logoAlt = site.name, variant = 'light' }: LegalLayoutProps) {
  const { pathname } = useLocation()
  const isDark = variant === 'dark'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div
      className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-[#F8FAFC] text-[#111111]'}`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <header
        className={`border-b ${isDark ? 'border-white/10 bg-black/90' : 'border-[#EEEEEE] bg-white/90'} backdrop-blur-sm sticky top-0 z-50`}
      >
        <div className="page-container flex h-16 sm:h-[4.5rem] items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <img src={logoSrc} alt={logoAlt} className="h-7 sm:h-8 w-auto object-contain" decoding="async" />
          </Link>
          <Link
            to="/"
            className={`text-[13px] font-semibold transition-colors ${isDark ? 'text-white/70 hover:text-white' : 'text-[#666666] hover:text-[#2F6BFF]'}`}
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="page-container py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          <aside>
            <p className={`text-[11px] font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-white/40' : 'text-[#999999]'}`}>
              Legal
            </p>
            <nav className="flex flex-col gap-2" aria-label="Legal pages">
              {legalRoutes.map((item) => {
                const active = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[13px] sm:text-[14px] font-medium py-1.5 transition-colors ${
                      active
                        ? isDark
                          ? 'text-brand'
                          : 'text-[#2F6BFF]'
                        : isDark
                          ? 'text-white/60 hover:text-white'
                          : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>

          <main id="main-content" className="min-w-0">
            <Outlet />
          </main>
        </div>
      </div>

      <footer className={`border-t py-8 ${isDark ? 'border-white/10 bg-black' : 'border-[#EEEEEE] bg-white'}`}>
        <div className="page-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px] text-white/50">
          <p className={isDark ? 'text-white/40' : 'text-[#999999]'}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className={isDark ? 'text-white/40' : 'text-[#999999]'}>{site.legalName}</p>
        </div>
      </footer>
    </div>
  )
}
