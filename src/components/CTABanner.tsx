import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgCTA from '../assets/bg/bg-hero.png'

export default function CTABanner() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 400])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={containerRef} className="relative py-18 px-8 overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <img src={bgCTA} alt="bgCTA" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2450px] pointer-events-none select-none" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-[1100px] mx-auto text-center flex flex-col items-center gap-6 py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-[48px] lg:text-[44px] font-semibold text-[#111111] leading-[1.15] tracking-tight">
          Your brand communicates{' '} <br />
          <span className="text-[#2F6BFF] italic">every day.</span>
        </h2>
        <p className="text-[18px] font-semibold">
          We make sure it says the right thing — <br />consistently, over time. Let&apos;s start with a <br />conversation.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <motion.button 
            className="bg-[#2F6BFF] text-white text-[14px] font-semibold px-10 py-4 rounded-full transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: "#1a55e8" }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
          <motion.button 
            className="bg-white text-[#111111] text-[14px] font-semibold px-10 py-4 rounded-full border border-[#E0E0E0] hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
