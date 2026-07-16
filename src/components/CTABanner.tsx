import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgCTA from '../assets/bg/bg-hero.png'

export default function CTABanner() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 400])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src={bgCTA}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[600px] md:w-[1000px] lg:w-[1500px] max-w-none pointer-events-none select-none"
        />
      </motion.div>

      <motion.div
        className="page-container relative z-10 text-center flex flex-col items-center gap-4 sm:gap-5 md:gap-6 py-14 sm:py-16 md:py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[44px] font-semibold text-[#111111] leading-[1.2] tracking-tight px-2">
          Your brand communicates{' '}
          <br className="hidden sm:block" />
          <span className="text-[#2F6BFF] italic">every day.</span>
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-[1.5] px-2 max-w-[540px]">
          We make sure it says the right thing — consistently, over time. Let&apos;s start with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2 w-full sm:w-auto px-2 sm:px-0">
          <motion.button
            className="bg-[#2F6BFF] text-white text-[13px] sm:text-[14px] font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-colors w-full sm:w-auto"
            whileHover={{ scale: 1.05, backgroundColor: '#1a55e8' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
          <motion.button
            className="bg-white text-[#111111] text-[13px] sm:text-[14px] font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-[#E0E0E0] hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-colors w-full sm:w-auto"
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
