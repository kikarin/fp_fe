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
    title: 'Firstpective_works1',
    tall: true,
    category: 'Firstpective_works1',
  },
  
  {
    id: 2,
    img: work2,
    title: 'Firstpective_works2',
    tall: false,
    category: 'Firstpective_works2',
  },
  
  
  {
    id: 3,
    img: work3,
    title: 'Firstpective_works3',
    tall: false,
    category: 'Firstpective_works3',
  },
  
  

  {
    id: 4,
    img: work4,
    title: 'Firstpective_works4',
    tall: false,
    category: 'Firstpective_works4',
  },
  
  
  {
    id: 5,
    img: work5,
    title: 'Firstpective_works5',
    tall: false,
    category: 'Firstpective_works5',
  },
  
  
  {
    id: 6,
    img: work6,
    title: 'Firstpective_works6',
    tall: true,
    category: 'Firstpective_works6',
  },
  
  
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-[#F9F9F9] border-y border-[#EEEEEE] py-24 max-w-[1100px] mx-auto px-8">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[18px] font-semibold text-[#ababab] uppercase">Works</span>
        <h2 className="text-[32px] font-bold text-[#111111] mt-2 leading-[1.2] tracking-tight">
          Work that{' '} <br></br>
          <span className="text-[#2F6BFF] italic">Makes a difference</span>
        </h2>
      </motion.div>

      {/* Masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="break-inside-avoid group relative rounded-[20px] overflow-hidden cursor-pointer"
            style={{ marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.15 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ height: project.tall ? 320 : 240 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[11px] font-semibold text-[#7AB7FF] uppercase tracking-wider">{project.category}</span>
              <h3 className="text-[17px] font-bold text-white mt-1">{project.title}</h3>
            </div>
            {/* Always-visible label on bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity">
              <span className="text-[11px] text-white/70">{project.category}</span>
              <p className="text-[14px] font-semibold text-white">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="text-[14px] font-semibold text-[#111] border border-[#E0E0E0] bg-white px-8 py-3 rounded-full hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-colors">
          View More
        </button>
      </motion.div>
    </section>
  )
}
