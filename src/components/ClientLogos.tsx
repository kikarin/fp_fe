import { Fragment } from 'react'
import { motion } from 'framer-motion'
import AllianzLogo from '../assets/klien/Firstpective_Cient_Artboard-1.png'
import BTNLogo from '../assets/klien/Firstpective_Cient_Artboard-2.png'
import BRILogo from '../assets/klien/Firstpective_Cient_Artboard-3.png'
import TBSLogo from '../assets/klien/Firstpective_Cient_Artboard-4.png'
import KimiaFarmaLogo from '../assets/klien/Firstpective_Cient_Artboard-5.png'
import WintermarLogo from '../assets/klien/Firstpective_Cient_Artboard-6.png'
import AncoraLogo from '../assets/klien/Firstpective_Cient_Artboard-7.png'

const logos = [
  { src: AllianzLogo, alt: 'Allianz', w: 140 },
  { src: BTNLogo, alt: 'BTN', w: 90 },
  { src: BRILogo, alt: 'BRI', w: 120 },
  { src: TBSLogo, alt: 'TBS', w: 110 },
  { src: KimiaFarmaLogo, alt: 'Kimia Farma', w: 150 },
  { src: WintermarLogo, alt: 'Wintermar', w: 160 },
  { src: AncoraLogo, alt: 'Ancora', w: 140 },
]

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

function LogoGrid({ perRow, colsClass }: { perRow: number; colsClass: string }) {
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
                key={logo.alt}
                className="flex items-center justify-center h-12 sm:h-16 md:h-20 px-2 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: `${logo.w}px` }}
                  className="max-w-[75%] sm:max-w-[85%] md:max-w-none max-h-10 sm:max-h-14 md:max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Garis antar baris — mengikuti jumlah row yang terbentuk */}
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

        {/* Mobile / tablet: 2 logo per baris */}
        <div className="md:hidden">
          <LogoGrid perRow={2} colsClass="grid-cols-2" />
        </div>

        {/* Desktop: 4 logo per baris (sisa di baris terakhir) */}
        <div className="hidden md:block">
          <LogoGrid perRow={4} colsClass="grid-cols-4" />
        </div>
      </motion.div>
    </section>
  )
}
