import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import AllianzLogo from '../assets/klien/Firstpective_Cient_Artboard-1.png'
import BTNLogo from '../assets/klien/Firstpective_Cient_Artboard-2.png'
import BRILogo from '../assets/klien/Firstpective_Cient_Artboard-3.png'
import TBSLogo from '../assets/klien/Firstpective_Cient_Artboard-4.png'
import KimiaFarmaLogo from '../assets/klien/Firstpective_Cient_Artboard-5.png'
import WintermarLogo from '../assets/klien/Firstpective_Cient_Artboard-6.png'
import AncoraLogo from '../assets/klien/Firstpective_Cient_Artboard-7.png'

const allLogos = [
  { src: AllianzLogo, alt: 'Allianz', w: 140 },
  { src: BTNLogo, alt: 'BTN', w: 100 },
  { src: BRILogo, alt: 'BRI', w: 120 },
  { src: TBSLogo, alt: 'TBS', w: 110 },
  { src: KimiaFarmaLogo, alt: 'Kimia Farma', w: 160 },
  { src: WintermarLogo, alt: 'Wintermar', w: 150 },
  { src: AncoraLogo, alt: 'Ancora', w: 140 },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-[#F9F9F9] border-y border-[#EEEEEE] overflow-hidden">
      <motion.div 
        className="max-w-[1100px] mx-auto px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-[16px] font-semibold mb-16">
          Trusted by corporations and listed companies across Indonesia
        </p>
      </motion.div>

      <div className="border-t border-[#DDDDDD] mx-10 mb-8 max-w-[1100px] xl:mx-auto"></div>

      <Marquee speed={40} gradient={false} className="py-4">
        {allLogos.map((logo, i) => (
          <div key={i} className="mx-12 lg:mx-20 flex justify-center items-center h-20">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: `${logo.w}px` }}
              className="
                opacity-70
                grayscale
                transition-all
                duration-500
                hover:opacity-100
                hover:grayscale-0
                hover:scale-110
                cursor-pointer
              "
            />
          </div>
        ))}
      </Marquee>

      <div className="border-t border-[#DDDDDD] mx-10 mt-8 max-w-[1100px] xl:mx-auto"></div>
    </section>
  )
}
