import { motion } from 'framer-motion'
import bgSimsami from '../assets/simsami/BG_Simsami.jpg'
import iconSimsami from '../assets/simsami/icon_)Simsami.png'
import logo6 from '../assets/simsami/Logo_6.png'

export default function BrandStatement() {
  return (
    <section
      id="ai creative boost"
      className="bg-[#F9F9F9] border-y border-[#EEEEEE] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-5 md:gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-wider text-[#999999] uppercase">
            Our Belief
          </span>
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[32px] font-semibold text-[#111111] leading-[1.25] tracking-tight">
            A brand isn't built in a moment.
            <br />
            <span className="text-[#2F6BFF]">
              It's built in the space
              <br className="hidden sm:block" />{' '}
              between every moment.
            </span>
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#333333] leading-[1.6] font-medium mt-1 sm:mt-2">
            Enduring brands are built on continuous storytelling — and today, the best stories are shaped by both human creativity and artificial intelligence.
          </p>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#333333] leading-[1.6] font-medium">
            We believe, create, and validate with AI, so every communication we build is faster to produce, smarter in direction, and proven before it reaches your audience.
          </p>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#333333] leading-[1.6] font-medium">
            A gradual process, made more precise. A permanent impact, built with confidence.
          </p>
        </motion.div>

        {/* Right: Performance card */}
        <motion.div
          className="flex justify-center lg:justify-end h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full max-w-[420px] rounded-[14px] p-6 sm:p-8 md:p-10 flex flex-col items-center relative overflow-hidden">
            <div
              className="absolute inset-0 z-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${bgSimsami})` }}
            />

            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="flex items-center gap-3 mb-2">
                <img src={logo6} alt="Simsami Logo" loading="lazy" decoding="async" className="h-7 sm:h-8 object-contain" />
              </div>

              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#1B6CED] font-semibold text-center mb-6 sm:mb-8">
                AI Powered
                <br />
                Content Performance Simulation
              </p>

              <div className="w-36 sm:w-44 md:w-48 mb-6 sm:mb-8 flex justify-center">
                <img src={iconSimsami} alt="Speed Simulation" loading="lazy" decoding="async" className="w-full object-contain" />
              </div>

              <p className="text-[12px] sm:text-[13px] text-[#111111] font-semibold text-center leading-[1.5] mb-6 sm:mb-8 px-1">
                Release content with confidence.
                <br />
                Streamline collaboration. And drive
                <br />
                precise outcomes.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full mb-6 sm:mb-8">
                {['Content Scoring', 'Sentiment Simulation', 'Brand Safety', 'Legal Safety'].map((tag) => (
                  <button
                    key={tag}
                    className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-white bg-[#0047BB] hover:bg-[#00368c] transition-colors py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-full w-full text-center"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <motion.a
                href={`https://simsami.com`}
                rel="noopener noreferrer"
                className="bg-white text-[#111111] text-[12px] sm:text-[13px] font-semibold py-3 px-6 sm:px-8 rounded-full transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Simulation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
