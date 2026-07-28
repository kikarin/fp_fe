import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchClients, type ClientLogo } from '../lib/strapi'
import AllianzLogo from '../assets/klien/Firstpective_Cient_Artboard-1.png'
import BTNLogo from '../assets/klien/Firstpective_Cient_Artboard-2.png'
import BRILogo from '../assets/klien/Firstpective_Cient_Artboard-3.png'
import TBSLogo from '../assets/klien/Firstpective_Cient_Artboard-4.png'
import KimiaFarmaLogo from '../assets/klien/Firstpective_Cient_Artboard-5.png'
import WintermarLogo from '../assets/klien/Firstpective_Cient_Artboard-6.png'
import AncoraLogo from '../assets/klien/Firstpective_Cient_Artboard-7.png'

const fallbackLogos: ClientLogo[] = [
  { id: 1, src: AllianzLogo, name: 'Allianz', width: 140 },
  { id: 2, src: BTNLogo, name: 'BTN', width: 90 },
  { id: 3, src: BRILogo, name: 'BRI', width: 120 },
  { id: 4, src: TBSLogo, name: 'TBS', width: 110 },
  { id: 5, src: KimiaFarmaLogo, name: 'Kimia Farma', width: 150 },
  { id: 6, src: WintermarLogo, name: 'Wintermar', width: 160 },
  { id: 7, src: AncoraLogo, name: 'Ancora', width: 140 },
]

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

function LogoGrid({
  logos,
  perRow,
  colsClass,
}: {
  logos: ClientLogo[]
  perRow: number
  colsClass: string
}) {
  const rows = chunk(logos, perRow)

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          <div
            className={`grid ${colsClass} items-center justify-items-center gap-x-2 sm:gap-x-4 py-5 sm:py-7 md:py-8`}
          >
            {row.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center h-12 sm:h-16 md:h-20 px-2 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  style={{ width: `${logo.width}px` }}
                  className="max-w-[75%] sm:max-w-[85%] md:max-w-none max-h-10 sm:max-h-14 md:max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {rowIndex < rows.length - 1 && (
            <div className="border-t border-[#E5E5E5]" />
          )}
        </Fragment>
      ))}
      <div className="border-t border-[#E5E5E5]" />
    </div>
  )
}

export default function ClientLogos() {
  const [logos, setLogos] = useState<ClientLogo[]>(fallbackLogos)

  useEffect(() => {
    let active = true
    fetchClients()
      .then((data) => {
        if (active && data.length > 0) setLogos(data)
      })
      .catch(() => {
        // keep fallback
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <motion.div
        className="page-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-[13px] sm:text-[15px] md:text-[16px] font-medium text-[#1a1a1a] mb-8 sm:mb-12 md:mb-16 px-2 leading-[1.5]">
          Trusted by corporations and listed companies across Indonesia
        </p>

        <div className="md:hidden">
          <LogoGrid logos={logos} perRow={2} colsClass="grid-cols-2" />
        </div>

        <div className="hidden md:block">
          <LogoGrid logos={logos} perRow={4} colsClass="grid-cols-4" />
        </div>
      </motion.div>
    </section>
  )
}
