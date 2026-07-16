import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import background from '../assets/bg/bg-hero.png'

const services = [
  {
    number: '01',
    title: 'Video Production',
    description: 'Corporate video produced at scale — from commercial campaigns to AI-powered content series — maintaining brand consistency across every format, every channel, every time.',
    tags: ['Commercial Video', 'AI Video', 'Content Video', 'Company Profile', 'Manifesto'],
  },
  {
    number: '02',
    title: 'Brand & Marketing',
    description: 'End-to-end campaign production and strategic communications — from concept to placement, with AI simulation validating performance before every launch.',
    tags: ['Campaign Development', 'AI Content Simulation', 'Digital Presence', 'Creative Production', 'Media Relation & Training'],
  },
  {
    number: '03',
    title: 'Corporate Report',
    description: 'Full editorial design and production aligned with the latest OJK regulatory framework (POJK). From financial data visualization to narrative storytelling, we produce reports that satisfy regulators and build investor confidence simultaneously.',
    tags: ['Annual Report', 'Sustainability Report'],
  },
  {
    number: '04',
    title: 'Internal Communications',
    description: 'Aligning your people with your brand — internal publications, culture programs, and employee engagement content produced with the same quality as your external output.',
    tags: ['Internal Publication', 'Culture Communication Program', 'Training Material', 'Employee Engagement'],
  },
]

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-400, 200])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={containerRef} id="solutions" className="relative py-28 overflow-hidden bg-[#7895B2]">
      {/* Background Image Setup */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <img 
          src={background} 
          alt="Background" 
          className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[1550px] max-w-none pointer-events-none select-none rotate-90 opacity-80"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="max-w-[1100px] relative z-10 mx-auto px-8">
        <motion.div 
          className="mb-10 flex flex-col gap-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-semibold tracking-wider text-white/90 uppercase">Our Solutions</span>
          <h2 className="text-[32px] lg:text-[38px] font-bold text-white leading-[1.2] tracking-tight">
            One Partner,<br />
            <span className="italic">Four Corporate Needs.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="rounded-[20px] p-8 flex flex-col bg-white shadow-sm hover:shadow-xl transition-shadow cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-[14px] font-medium text-[#999999] mb-2">{service.number}</span>
              <h3 className="text-[26px] font-semibold text-[#2F6BFF] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[13px] text-[#333333] leading-[1.6] font-medium mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[#2F6BFF] bg-[#EAF3FF] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
