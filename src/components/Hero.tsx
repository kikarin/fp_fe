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
    <section id="home" className="relative min-h-screen flex overflow-hidden pt-32">
      <motion.img
        src={Background}
        alt="Background"
        style={{ y, scale }}
        className="
            absolute
            left-1/2
            -top-90
            -translate-x-[50%]
            w-[3400px]
            max-w-none
            pointer-events-none
            select-none
        "
      />
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
        {/* Left: Copy */}
        <motion.div 
          className="flex flex-col gap-6 pt-15"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[13px] font-semibold uppercase">
            Creative Communication & Productions house·Indonesia
          </p>
          <h1 className="text-[24px] lg:text-[28px] font-semibold leading-[1.2] tracking-tight pb-8">
            Every brand tells a story.<br />
            We execute yours with a fresh<br />
            perspective and absolute clarity.
          </h1>
          <p className="text-[16px] font-semibold leading-[1.2]">
            A creative communication company for corporations across Indonesia. We produce what your brand needs to be heard — consistently, at volume, and prove it by A/B testing before reaching your audience.
          </p>
          <p className='text-[11px] pt-1 font-semibold leading-[1.2]'>
            Commercial Video Production · AI Video Production · Digital Content Development & Production ·Brand & Marketing Kit · Internal Communication
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button className="bg-[#2F6BFF] text-white text-[14px] font-semibold px-10 py-4 rounded-full hover:bg-[#1a55e8] transition-colors">
              Start a Project
            </button>
            <button className="text-[14px] font-semibold text-[#111111] px-10 py-4 rounded-full bg-gray-300 hover:bg-white transition-colors">
              See Our Work
            </button>
          </div>
          {/* Trust indicators */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&auto=format',
              ].map((src, i) => (
                <img key={i} src={src} alt="client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <p className="text-[13px] text-[#666666]">
              <span className="font-semibold text-[#111111]">50+ brands</span> trust us for their content
            </p>
          </div>
        </motion.div>

        {/* Right: 2x2 Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
            >
              <span className="pb-2 text-[72px] font-semibold leading-none tracking-tight">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </span>
              <p className="pt-6 text-[12px] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
