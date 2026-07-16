import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import aiVideo from '../assets/ai/Vid AI_Fin_2.mp4'

const showcaseStats = [
  { value: 70, suffix: '%', label: 'Cost reduction vs traditional\nvideo production' },
  { value: 10, suffix: 'x', label: 'More content variations\nfrom a single brief' },
  { value: 73, suffix: '%', label: 'Of viewers can\'t distinguish\nAI-assisted from traditional\nvideo' },
  { value: 36, suffix: '%', label: 'CAGR — the fastest growing\nsegment in corporate\ncontent 2026' },
]

export default function Showcase() {
  return (
    <section id="ai creative boost" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Video */}
      <video
        src={aiVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <motion.div 
        className="relative z-10 w-[900px] max-w-[1100px] rounded-[28px] px-8 lg:px-10 py-8 lg:py-10 flex flex-col lg:flex-row gap-10 lg:gap-12 top-34"
        style={{
          background: 'rgba(235, 240, 245, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-[13px] font-bold tracking-wider text-[#111111] uppercase">
            AI Video Production
          </span>
          <h2 className="text-[34px] lg:text-[28px] font-semibold text-[#111111] leading-[1.2] tracking-tight">
            AI Video Production —<br />
            Corporate video, produced<br />
            at scale.
          </h2>
          <p className="text-[14px] text-[#333333] leading-[1.6] max-w-[460px] font-medium">
            AI video production doesn't replace brand thinking — it amplifies it. We produce manifesto videos, company profiles, internal communications, and campaign content using AI-powered workflows that cut production time and cost without cutting brand integrity. Every output is tested through Simsami before it goes live.
          </p>
          <motion.button 
            className="self-start bg-[#2F6BFF] text-white text-[14px] font-semibold px-10 py-4 rounded-full transition-colors mt-2"
            whileHover={{ scale: 1.05, backgroundColor: "#1a55e8" }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-10 items-center">
          {showcaseStats.map((s, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.15) }}
            >
              <span className="text-[54px] lg:text-[64px] font-medium text-[#111111] leading-none tracking-tight">
                <CountUp end={s.value} duration={2.5} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
              </span>
              <p className="text-[12px] text-[#333333] leading-[1.4] whitespace-pre-line font-medium max-w-[180px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
