import { motion } from 'framer-motion'
import { Headset, Mail } from 'lucide-react'
import logo from '../assets/logo/Logo_white.png'
import logoFuturist from '../assets/logo/Logo_3.png'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white py-12 sm:py-16 md:py-20">
      <motion.div
        className="page-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {/* Col 1: Brand */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="FirstPective" className="h-7 sm:h-8 object-contain object-left mb-1 sm:mb-2" />
          <p className="text-[12px] sm:text-[13px] text-white/60 leading-[1.6] max-w-[280px]">
            Fresh Perspective to stay relevant.
            <br />
            Creative Communication & Production House
          </p>

          <div className="mt-4 sm:mt-8 flex flex-col gap-3">
            <span className="text-[12px] text-white/40">Part of :</span>
            <img src={logoFuturist} alt="Futurist" className="h-9 sm:h-10 object-contain object-left" />
            <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wide">
              PT FUTURIST CIRCLE INDONESIA
            </span>
          </div>
          <p className="pt-6 sm:pt-12 lg:pt-24 text-[12px] text-white/40">FirstPective 2026</p>
        </motion.div>

        {/* Col 2: Solution */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 sm:mb-6">Solution</h4>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {['Video Production', 'Brand & Marketing', 'Corporate Report', 'Internal Communications'].map((item) => (
              <li key={item}>
                <a href="#solutions" className="text-[12px] sm:text-[13px] text-white/60 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 3: Company */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 sm:mb-6">Company</h4>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {[
              { label: 'About Us', href: '#about us' },
              { label: 'AI Video', href: '#ai video' },
              { label: 'AI Creative Boost', href: '#ai creative boost' },
              { label: 'Solutions', href: '#solutions' },
              { label: 'Works', href: '#work' },
              { label: 'FAQ', href: '#faq' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-[12px] sm:text-[13px] text-white/60 hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Col 4: General Inquiry */}
        <motion.div
          className="sm:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mb-4 sm:mb-6">General Inquiry</h4>
          <ul className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
            <li className="flex items-center gap-3">
              <Headset size={18} className="text-white/60 shrink-0" />
              <span className="text-[12px] sm:text-[13px] text-white/60">+62 812 9157 8589</span>
            </li>
            <li className="flex items-center gap-3 min-w-0">
              <Mail size={18} className="text-white/60 shrink-0" />
              <span className="text-[12px] sm:text-[13px] text-white/60 break-all">
                connect@firstpective.co.id
              </span>
            </li>
          </ul>

          <a
            href="https://wa.me/6281291578589"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full max-w-md bg-white/20 hover:bg-white/30 transition-colors rounded-full px-5 sm:px-6 py-3 mb-6 sm:mb-8"
          >
            <span className="text-[12px] sm:text-[13px] font-medium text-white">Connect via WhatsApp</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>

          <p className="text-[11px] sm:text-[12px] text-white/50 leading-[1.6] mb-5 sm:mb-6 max-w-md">
            Follow us to get an insightful information & data about marketing, business, creativity, and design.
          </p>

          <ul className="flex flex-col gap-3 sm:gap-4">
            <li className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white shrink-0">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666z M17.338 6.157a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
              </svg>
              <a href="https://www.instagram.com/firstpective.biz/" className="text-[12px] sm:text-[13px] text-white/60 hover:text-white transition-colors">
                firstpective.biz
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a href="https://www.linkedin.com/company/firstpectivebiz/" className="text-[12px] sm:text-[13px] text-white/60 hover:text-white transition-colors">
              FirstPective
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  )
}
