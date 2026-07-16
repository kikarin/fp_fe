import { motion } from 'framer-motion'
import work1 from '../assets/work/Firstpective_works1.jpg'
import work2 from '../assets/work/Firstpective_works2.jpg'
import work3 from '../assets/work/Firstpective_works3.jpg'
import work4 from '../assets/work/Firstpective_works4.jpg'
import work5 from '../assets/work/Firstpective_works5.jpg'
import work6 from '../assets/work/Firstpective_works6.jpg'

const projects = [
  {
    id: 1,
    img: work1,
    title: 'BTNers Magz',
    description:
      "BTNers Magz serves as the primary internal media platform and community hub for Bank BTN's workforce. By curating strategic insights from both internal and external sources, it delivers impactful narratives designed to reinforce vertical and horizontal alignment, ensuring a unified vision across all levels of the organization.",
  },
  {
    id: 2,
    img: work2,
    title: 'BTN Prioritas',
    description:
      'A lifestyle campaign for BTN Prioritas that highlights exclusive banking privileges — from airport transfer and medical check-ups to Visa debit benefits — crafted to elevate the premium customer experience.',
  },
  {
    id: 3,
    img: work3,
    title: 'Empowering Growth',
    description:
      'Corporate report design that translates financial performance into a clear, investor-ready narrative — balancing regulatory compliance with strong visual storytelling.',
  },
  {
    id: 4,
    img: work4,
    title: 'Stronger Fleet. Stronger Momentum',
    description:
      'Annual report production for Wintermar Offshore Marine Group, capturing operational strength and strategic momentum through bold editorial design and data visualization.',
  },
  {
    id: 5,
    img: work5,
    title: 'Integrity Talk',
    description:
      'An internal communications series for Bank BTN that brings leadership conversations to life — reinforcing culture, integrity, and organizational alignment across the workforce.',
  },
  {
    id: 6,
    img: work6,
    title: 'Brand Mascot',
    description:
      'Character and brand asset development that gives the brand a memorable visual identity — designed for campaign versatility across digital and offline touchpoints.',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-[#F9F9F9] border-y border-[#EEEEEE] py-16 sm:py-20 md:py-24">
      <div className="page-container">
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#ababab] uppercase">
            Works
          </span>
          <h2 className="text-[26px] sm:text-[30px] md:text-[32px] font-bold text-[#111111] mt-2 leading-[1.2] tracking-tight">
            Work that
            <br />
            <span className="text-[#2F6BFF] italic">Makes a difference</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative w-full aspect-video rounded-[10px] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center bg-black/55 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-400 overflow-y-auto">
                <h3 className="text-[16px] sm:text-[20px] md:text-[26px] font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] md:text-[13px] text-white/90 leading-[1.5] sm:leading-[1.6] max-w-[420px] font-medium line-clamp-5 sm:line-clamp-none">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="text-[13px] sm:text-[14px] font-semibold text-[#111] border border-[#E0E0E0] bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-colors w-full sm:w-auto max-w-[240px]">
            View More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
