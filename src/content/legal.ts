import { site } from '../config/site'

export type LegalSection = {
  title: string
  paragraphs: string[]
  list?: string[]
}

export type LegalDocument = {
  title: string
  description: string
  intro?: string
  sections: LegalSection[]
}

export const legalDocuments: Record<string, LegalDocument> = {
  about: {
    title: 'About Us',
    description: `Learn about ${site.name}, a creative communication and production house serving corporate brands in Indonesia since 2012.`,
    intro: `${site.name} is a creative communication and production house based in Indonesia. We help corporate brands tell their stories through strategy, creative production, and AI-augmented workflows.`,
    sections: [
      {
        title: 'Who We Are',
        paragraphs: [
          `${site.name} combines human creativity with technology to deliver brand communication, video production, and content at scale. We have partnered with corporate Indonesia since 2012.`,
          `We are part of ${site.legalName}, alongside our brand incubation lab Futurist and our AI content performance platform Simsami.`,
        ],
      },
      {
        title: 'What We Do',
        paragraphs: ['Our core services include:'],
        list: [
          'Video production — commercial, corporate, and AI-augmented video',
          'Brand & marketing communication',
          'Corporate report design and production',
          'Internal communications',
          'AI-powered content performance simulation via Simsami',
        ],
      },
      {
        title: 'Our Approach',
        paragraphs: [
          'We believe enduring brands are built through continuous storytelling. Every project is shaped by both creative strategy and validation — so content is faster to produce, smarter in direction, and proven before it reaches your audience.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: `Get in touch with ${site.name} for inquiries, partnerships, and project discussions.`,
    sections: [
      {
        title: 'General Inquiry',
        paragraphs: [
          'For business inquiries, project proposals, or general questions, reach us through the channels below. We aim to respond within 1–2 business days.',
        ],
        list: [
          `Email: ${site.email}`,
          `Phone / WhatsApp: ${site.phone}`,
          `Website: ${site.domain}`,
        ],
      },
      {
        title: 'Business Hours',
        paragraphs: [
          'Our team operates Monday to Friday, 09:00–18:00 WIB (Western Indonesian Time), excluding public holidays.',
        ],
      },
      {
        title: 'Partnerships & Media',
        paragraphs: [
          'For partnership opportunities, media requests, or speaking engagements, please email us with the subject line indicating your inquiry type so we can route your message to the right team.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: `Privacy Policy for ${site.name} — how we collect, use, and protect your information.`,
    intro: `This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses, and protects information when you visit ${site.domain} or contact us. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: ['We may collect the following types of information:'],
        list: [
          'Contact details you provide (name, email, phone, company) when you reach out to us',
          'Technical data such as IP address, browser type, device information, and pages visited',
          'Cookies and similar technologies used for site functionality and analytics',
        ],
      },
      {
        title: 'How We Use Your Information',
        paragraphs: ['We use collected information to:'],
        list: [
          'Respond to inquiries and provide requested services',
          'Improve our website, content, and user experience',
          'Send relevant communications you have agreed to receive',
          'Comply with legal obligations and protect our rights',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Our website may use cookies and similar technologies to remember preferences and understand how visitors use the site. You can control cookies through your browser settings.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'We may use third-party services (such as analytics, hosting, or communication tools) that process data on our behalf. These providers are required to handle data securely and only for authorized purposes.',
        ],
      },
      {
        title: 'Data Retention',
        paragraphs: [
          'We retain personal information only as long as necessary for the purposes described in this policy, unless a longer retention period is required by law.',
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: [
          'Depending on applicable law, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at the email below.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`For privacy-related questions, contact us at ${site.email}.`],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    description: `Terms of Service for using the ${site.name} website.`,
    intro: `By accessing ${site.domain}, you agree to these Terms of Service. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Use of This Website',
        paragraphs: [
          'This website provides company information and a way to contact us. You agree to use it only for lawful purposes and not to disrupt, damage, or attempt unauthorized access to our systems.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'All content on this website — including text, graphics, logos, images, and videos — is owned by or licensed to us and protected by applicable intellectual property laws. You may not copy, reproduce, or distribute content without our prior written consent.',
        ],
      },
      {
        title: 'Disclaimer',
        paragraphs: [
          'Information on this website is provided for general purposes only. It does not constitute professional, legal, or financial advice. We make reasonable efforts to keep content accurate but do not guarantee completeness or timeliness.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.',
        ],
      },
      {
        title: 'Links to Third-Party Sites',
        paragraphs: [
          'Our website may link to external sites. We are not responsible for the content or privacy practices of those sites.',
        ],
      },
      {
        title: 'Governing Law',
        paragraphs: [
          'These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Indonesia.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: [
          'We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the revised terms.',
        ],
      },
    ],
  },
  'ai-disclaimer': {
    title: 'AI Disclaimer',
    description: `AI Disclaimer for ${site.name} and related AI-powered services including Simsami.`,
    intro: `${site.name} uses artificial intelligence tools in content creation, production workflows, and performance simulation. This disclaimer explains important limitations. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'AI-Assisted Content',
        paragraphs: [
          'Some content, visuals, or workflows on our website or in our services may be created or enhanced with AI tools. While we apply human review and brand standards, AI-generated outputs may contain inaccuracies or unintended variations.',
        ],
      },
      {
        title: 'No Guarantee of Accuracy',
        paragraphs: [
          'AI systems can produce content that appears confident but may be incorrect, incomplete, or outdated. Do not rely solely on AI-generated information for business, legal, or compliance decisions without independent verification.',
        ],
      },
      {
        title: 'Simsami Simulations',
        paragraphs: [
          'Simsami provides AI-powered content performance simulations. Results are predictive estimates based on models and data — not guarantees of actual audience response, engagement, or commercial outcomes.',
        ],
      },
      {
        title: 'Not Professional Advice',
        paragraphs: [
          'Nothing on this website or in our AI tools constitutes legal, financial, medical, or other professional advice. Consult qualified professionals for decisions requiring specialized expertise.',
        ],
      },
      {
        title: 'Human Oversight',
        paragraphs: [
          'We maintain human creative and strategic oversight in our production process. AI is used to augment — not replace — professional judgment and brand accountability.',
        ],
      },
    ],
  },
  'data-usage': {
    title: 'Data Usage Policy',
    description: `How ${site.name} collects and uses data, including in AI-powered services.`,
    intro: `This Data Usage Policy describes how we handle data in connection with our website and AI-related services. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Data We Process',
        paragraphs: ['We may process the following categories of data:'],
        list: [
          'Contact and inquiry data you submit voluntarily',
          'Website usage and analytics data',
          'Content and materials you provide for project engagements',
          'Simulation inputs submitted to AI tools such as Simsami',
        ],
      },
      {
        title: 'Purpose of Processing',
        paragraphs: ['We process data to:'],
        list: [
          'Deliver and improve our services',
          'Run AI simulations and content performance analysis',
          'Communicate with clients and prospects',
          'Maintain security and prevent misuse',
        ],
      },
      {
        title: 'AI and Machine Learning',
        paragraphs: [
          'AI tools may analyze text, metadata, or content samples to generate scores, recommendations, or simulations. We do not use client confidential materials to train public AI models without explicit agreement.',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We implement reasonable technical and organizational measures to protect data against unauthorized access, loss, or alteration. No method of transmission over the internet is 100% secure.',
        ],
      },
      {
        title: 'Data Sharing',
        paragraphs: [
          'We do not sell personal data. We may share data with trusted service providers who assist our operations, subject to confidentiality obligations, or when required by law.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`For questions about data usage, contact ${site.email}.`],
      },
    ],
  },
}
