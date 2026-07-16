import { motion, useScroll, useTransform } from 'framer-motion'
import CountUp from 'react-countup'
import Background from '../assets/bg/bg.jpeg'

const stats = [
  { value: 2012, prefix: '', suffix: '', label: 'Year we started partnering with corporate Indonesia' },
  { value: 50, prefix: '', suffix: '+', label: 'Corporate client served across sectors' },
  { value: 386, prefix: '', suffix: '', label: 'Projects delivered on brief and on deadline' },
  { value: 1267, prefix: '', suffix: '', label: 'Marketing simulations powered by AI' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 150])
  const scale = useTransform(scrollY, [0, 900], [1, 1.7])

  return (
    <section id="about us" className="relative min-h-screen flex overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <motion.img
        src={Background}
        alt="Background"
        style={{ y, scale }}
        className="
            absolute
            left-1/2
            -top-40 sm:-top-60 md:-top-80 lg:-top-90
            -translate-x-[50%]
            w-[1800px] sm:w-[2200px] md:w-[2800px] lg:w-[3400px]
            max-w-none
            pointer-events-none
            select-none
        "
      />
      <div className="page-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center py-10 sm:py-12 md:py-16">
        {/* Left: Copy */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 pt-4 sm:pt-8 md:pt-15"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase tracking-wide">
            Creative Communication & Productions house·Indonesia
          </p>
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold leading-[1.25] tracking-tight pb-4 sm:pb-6 md:pb-8">
            Every brand tells a story.
            <br className="hidden sm:block" />{' '}
            We execute yours with a fresh
            <br className="hidden sm:block" />{' '}
            perspective and absolute clarity.
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[1.45]">
            A creative communication company for corporations across Indonesia. We produce what your brand needs to be heard — consistently, at volume, and prove it by AI before reaching your audience.
          </p>
          <p className="text-[10px] sm:text-[11px] pt-1 font-semibold leading-[1.4] text-[#333]">
            Commercial Video Production · AI Video Production · Digital Content Development & Production · Brand & Marketing Kit · Internal Communication
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mt-2">
            <button className="bg-[#2F6BFF] text-white text-[13px] sm:text-[14px] font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full hover:bg-[#1a55e8] transition-colors w-full sm:w-auto">
              Start a Project
            </button>
            <button className="text-[13px] sm:text-[14px] font-semibold text-[#111111] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gray-300 hover:bg-white transition-colors w-full sm:w-auto">
              See Our Work
            </button>
          </div>
        </motion.div>

        {/* Right: 2x2 Stats grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-3 sm:p-4 md:p-6 flex flex-col gap-1 sm:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <span className="pb-1 sm:pb-2 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold leading-none tracking-tight">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </span>
              <p className="pt-2 sm:pt-4 md:pt-6 text-[10px] sm:text-[11px] md:text-[12px] font-semibold leading-[1.4]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
