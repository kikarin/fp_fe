import { motion } from 'framer-motion'
import { Headset, Mail } from 'lucide-react'
import logo from '../assets/logo/Logo_white.png'
import logoFuturist from '../assets/logo/Logo_3.png'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white py-20 px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 max-w-[1030px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {/* Col 1: Brand */}
          <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={logo} alt="FirstPective" className="h-8 object-contain object-left mb-2" />
            <p className="text-[13px] text-white/60 leading-[1.6] max-w-[280px]">
              Fresh Perspective to stay relevant.<br />
              Production house & communication for<br />
              corporate Indonesia.
            </p>
            
            <div className="mt-8 flex flex-col gap-3">
              <span className="text-[12px] text-white/40">Part of :</span>
              <img src={logoFuturist} alt="Futurist" className="h-10 object-contain object-left" />
              <span className="text-[11px] text-white/50 tracking-wide">PT FUTURIST CIRCLE INDONESIA</span>
            </div>
            <p className="pt-24 text-[12px] text-white/40">FirstPective 2026</p>

          </motion.div>

          {/* Col 2: Solution */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-[16px] font-semibold text-white mb-6">Solution</h4>
            <ul className="flex flex-col gap-4">
              {['Video Production', 'Brand & Marketing', 'Corporate Report', 'Internal Communications'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Company */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-[16px] font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Solutions', 'AI Creative Boost', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: General Inquiry */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-[16px] font-semibold text-white mb-6">General Inquiry</h4>
            <ul className="flex flex-col gap-5 mb-8">
              <li className="flex items-center gap-3">
                <Headset size={18} className="text-white/60" />
                <span className="text-[13px] text-white/60">+62 812 9157 8589</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white/60" />
                <span className="text-[13px] text-white/60">connect@firstpective.co.id</span>
              </li>
            </ul>
            
            <a href="#" className="inline-flex items-center justify-between w-full bg-white/20 hover:bg-white/30 transition-colors rounded-full px-6 py-3 mb-8">
              <span className="text-[13px] font-medium text-white">Connect via WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            <p className="text-[12px] text-white/50 leading-[1.6] mb-6">
              Follow us to get an insightful information<br />
              & data about marketing, business,<br />
              creativity, and design.
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666z M17.338 6.157a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/>
                </svg>
                <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">firstpective.biz</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">firstpective.biz</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

    </footer>
  )
}
