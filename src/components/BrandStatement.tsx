import { motion } from 'framer-motion'
import bgSimsami from '../assets/simsami/BG_Simsami.jpg'
import iconSimsami from '../assets/simsami/icon_)Simsami.png'
import logo6 from '../assets/simsami/Logo_6.png' 

export default function BrandStatement() {
  return (
    <section className="bg-[#F9F9F9] border-y border-[#EEEEEE] py-28 px-8 max-w-[1100px] mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div 
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-semibold tracking-wider text-[#999999] uppercase">Our Belief</span>
          <h2 className="text-[36px] lg:text-[32px] font-semibold text-[#111111] leading-[1.2] tracking-tight">
            A brand isn't built in a<br />moment.<br />
            <span className="text-[#2F6BFF]">It's built in the space<br />between every moment.</span>
          </h2>
          <p className="text-[15px] text-[#333333] leading-[1.6] font-medium mt-2">
            Enduring brands are built on continuous storytelling —<br />and today, the best stories are shaped by both human<br />creativity and artificial intelligence.
          </p>
          <p className="text-[15px] text-[#333333] leading-[1.6] font-medium">
            We believe, create, and validate with AI, so every<br />communication we build is faster to produce, smarter in<br />direction, and proven before it reaches your audience.
          </p>
          <p className="text-[15px] text-[#333333] leading-[1.6] font-medium">
            A gradual process, made more precise. A permanent<br />impact, built with confidence.
          </p>
        </motion.div>

        {/* Right: Performance card */}
        <motion.div 
          className="flex justify-center lg:justify-end h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-full max-w-[420px] rounded-[32px] p-10 flex flex-col items-center relative overflow-hidden"
            style={{
              boxShadow: '0 12px 48px rgba(0,0,0,0.08)',
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgSimsami})` }}
            />

            {/* Content Container (z-10 to stay above bg) */}
            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <img src={logo6} alt="Simsami Logo" className="h-8 object-contain" />
              </div>
              
              <p className="text-[14px] text-[#0047BB] font-semibold text-center mb-8">
                AI Powered<br />Content Performance Simulation
              </p>

              {/* Speed Graphic */}
              <div className="w-48 mb-8 flex justify-center">
                <img src={iconSimsami} alt="Speed Simulation" className="w-full object-contain" />
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#111111] font-semibold text-center leading-[1.5] mb-8">
                Release content with confidence.<br />
                Streamline collaboration. And drive<br />
                precise outcomes.
              </p>

              {/* Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 w-full mb-8">
                {['Content Scoring', 'Sentiment Simulation', 'Brand Safety', 'Legal Safety'].map((tag) => (
                  <button 
                    key={tag} 
                    className="text-[12px] font-medium text-white bg-[#0047BB] hover:bg-[#00368c] transition-colors py-3 px-2 rounded-full w-full text-center"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Start Button */}
              <motion.button 
                className="bg-white text-[#111111] text-[13px] font-semibold py-3 px-8 rounded-full shadow-sm transition-colors"
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Simulation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
