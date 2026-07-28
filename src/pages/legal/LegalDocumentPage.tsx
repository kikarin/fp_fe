import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { legalDocuments } from '../../content/legal'
import { site } from '../../config/site'

export default function LegalDocumentPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const doc = legalDocuments[slug]

  useEffect(() => {
    if (doc) {
      document.title = `${doc.title} — ${site.name}`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', doc.description)
    }
  }, [doc])

  if (!doc) return null

  return (
    <article>
      <h1 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#111111] mb-4">{doc.title}</h1>
      {doc.intro ? (
        <p className="text-[14px] sm:text-[15px] text-[#666666] leading-[1.7] mb-8">{doc.intro}</p>
      ) : null}

      <div className="flex flex-col gap-8">
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#111111] mb-3">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-[14px] sm:text-[15px] text-[#666666] leading-[1.7] mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-2 list-disc pl-5 flex flex-col gap-2">
                {section.list.map((item) => (
                  <li key={item} className="text-[14px] sm:text-[15px] text-[#666666] leading-[1.7]">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-[#999999]">
        Questions? Contact us at{' '}
        <a href={`mailto:${site.email}`} className="text-[#2F6BFF] hover:underline">
          {site.email}
        </a>
        .
      </p>
    </article>
  )
}
