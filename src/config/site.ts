export const site = {
  name: 'Firstpective',
  legalName: 'PT Futurist Circle Indonesia',
  domain: 'https://firstpective.co.id',
  email: 'connect@firstpective.co.id',
  phone: '+62 812 9157 8589',
  phoneHref: 'https://wa.me/6281291578589',
  tagline: 'Creative Communication & Production House',
  updated: 'July 28, 2026',
} as const

export const legalRoutes = [
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/ai-disclaimer', label: 'AI Disclaimer' },
  { path: '/data-usage', label: 'Data Usage Policy' },
] as const
