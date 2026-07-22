import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchWorks, type WorkItem } from '../lib/strapi'

export default function Portfolio() {
  const [projects, setProjects] = useState<WorkItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetchWorks()
      .then((data) => {
        if (!active) return
        setProjects(data)
      })
      .catch((err) => {
        if (import.meta.env.DEV) {
          console.error('Failed to fetch works from Strapi:', err)
        }
        if (active) setProjects([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="w-full aspect-video rounded-[10px] bg-[#E8E8E8] animate-pulse"
              />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-[14px] text-[#666666] py-10">
            Belum ada karya yang dipublish.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group relative w-full aspect-video rounded-[10px] overflow-hidden cursor-pointer bg-[#ddd]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
                  />
                ) : null}

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center bg-black/55 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-400 overflow-y-auto">
                  <h3 className="text-[16px] sm:text-[20px] md:text-[26px] font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  {project.description ? (
                    <p className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] md:text-[13px] text-white/90 leading-[1.5] sm:leading-[1.6] max-w-[420px] font-medium line-clamp-5 sm:line-clamp-none">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {projects.length > 6 && (
          <motion.div
            className="flex justify-center mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="text-[13px] sm:text-[14px] font-semibold text-[#111] border border-[#E0E0E0] bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:border-[#2F6BFF] hover:text-[#2F6BFF] transition-colors w-full sm:w-auto max-w-[240px]">
              See More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
