import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import aiVideo from '../assets/ai/Vid AI_Fin_2.mp4'

const WA_NUMBER = '6281291578589'

const showcaseStats = [
  { value: 70, suffix: '%', label: 'Cost reduction vs traditional\nvideo production' },
  { value: 10, suffix: 'x', label: 'More content variations\nfrom a single brief' },
  { value: 73, suffix: '%', label: "Of viewers can't distinguish\nAI-assisted from traditional\nvideo" },
  { value: 36, suffix: '%', label: 'CAGR — the fastest growing\nsegment in corporate\ncontent 2026' },
]

export default function Showcase() {
  return (
    <section
      id="ai video"
      className="relative w-full min-h-[100svh] md:min-h-[700px] lg:h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20"
    >
      <video
        src={aiVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="page-container relative z-10 lg:top-42 sm:top-28 top-20">
      <motion.div
        className="w-full rounded-[12px] sm:rounded-[14px] px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:pt-10 md:pb-20 pb-10 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12"
        style={{
          background: 'rgba(235, 240, 245, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6">
          <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-wider text-[#111111] uppercase">
            AI Video Production
          </span>
          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[28px] font-semibold text-[#111111] leading-[1.25] tracking-tight">
            AI Video Production —
            <br className="hidden sm:block" />{' '}
            Corporate video, produced
            <br className="hidden sm:block" />{' '}
            at scale.
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#333333] leading-[1.6] max-w-[460px] font-medium">
            AI video production doesn't replace brand thinking — it amplifies it. We produce manifesto videos, company profiles, internal communications, and campaign content using AI-powered workflows that cut production time and cost without cutting brand integrity. Every output is tested through Simsami before it goes live.
          </p>
          <motion.a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin mendiskusikan project baru.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch sm:self-start bg-[#2F6BFF] text-white text-[13px] sm:text-[14px] font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-colors mt-1 sm:mt-2"
            whileHover={{ scale: 1.05, backgroundColor: '#1a55e8' }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </div>

        {/* Right Side */}
        <div className="flex-1 grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-10 items-start sm:items-center">
          {showcaseStats.map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-2 sm:gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <span className="text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-medium text-[#111111] leading-none tracking-tight">
                <CountUp end={s.value} duration={2.5} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
              </span>
              <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#333333] leading-[1.4] whitespace-pre-line font-medium max-w-[180px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
