import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Who is Firstpective?',
    a: 'Firstpective is a creative communication company specializing in corporate content production across Indonesia. We combine human creativity with AI-augmented workflows to produce content at scale.',
  },
  {
    q: 'What services does Firstpective offer for corporate companies?',
    a: 'We offer four core services: Video Production, Brand & Marketing, Corporate Report design and production, and Internal Communications. Each service is designed for the specific needs of corporate clients.',
  },
  {
    q: 'What types of companies does Firstpective work with?',
    a: 'We work primarily with listed companies, large-scale corporations, financial institutions, and government-linked enterprises across Indonesia. Our clients span banking, healthcare, energy, and FMCG sectors.',
  },
  {
    q: 'What is Simsomi and how does it work?',
    a: 'Simsomi is our proprietary AI content performance platform. It allows teams to simulate how content will perform before publishing — scoring messaging, brand safety, and audience alignment to reduce risk.',
  },
  {
    q: 'Does Firstpective produce commercial video and AI video for corporations?',
    a: 'Yes. We produce everything from traditional commercial shoots to AI-augmented video at scale. Our video pipeline is built for high-volume output without sacrificing brand consistency.',
  },
  {
    q: 'How is Firstpective different from a regular production house?',
    a: 'We integrate strategy, AI tooling, and execution under one roof. Unlike traditional production houses, we validate content performance before delivery and offer end-to-end brand consistency across all formats.',
  },
  {
    q: 'How do we start working with Firstpective?',
    a: 'Simply reach out via our contact form or email. We begin with a discovery session to understand your brand objectives, then propose a tailored scope and timeline for your first project.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="border border-[#EEEEEE] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="w-full flex items-center justify-between px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-left gap-3 sm:gap-4"
        onClick={onToggle}
      >
        <span className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111111] leading-[1.4]">
          {q}
        </span>
        <motion.span
          className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#111]"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={14} strokeWidth={2.5} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 sm:px-5 md:px-6"
          >
            <p className="text-[13px] sm:text-[14px] text-[#666666] leading-[1.7] pb-4 sm:pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-[#F9F9F9] border-y border-[#EEEEEE]">
      <div className="page-container">
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.15em] text-[#2F6BFF] uppercase">
            FAQ
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-[#111111] mt-2 leading-[1.2] tracking-tight">
            Frequently Asked Questions
            <br />
            <span className="text-[#2F6BFF]">About Firstpective</span>
          </h2>
        </motion.div>
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
