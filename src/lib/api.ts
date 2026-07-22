import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

if (!baseURL) {
  throw new Error(
    'VITE_API_URL is required. Set it in .env (e.g. http://localhost:1337/api or https://api.firstpective.com/api).',
  )
}

if (import.meta.env.PROD && !String(baseURL).startsWith('https://')) {
  throw new Error('VITE_API_URL must use https:// in production builds.')
}

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type StrapiListResponse<T> = {
  data: T[]
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

/** Media shape dari Strapi v5 (flattened) atau v4 (attributes) */
export type StrapiMedia = {
  url?: string
  formats?: Record<string, { url?: string }>
  attributes?: {
    url?: string
    formats?: Record<string, { url?: string }>
  }
} | null

function apiOriginHost(): string | null {
  try {
    return new URL(String(baseURL).replace(/\/api\/?$/, '/')).hostname
  } catch {
    return null
  }
}

function allowedMediaHosts(): Set<string> {
  const fromEnv = String(import.meta.env.VITE_MEDIA_HOSTS || '')
    .split(',')
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean)

  const hosts = new Set<string>([
    ...fromEnv,
    'res.cloudinary.com',
    'localhost',
    '127.0.0.1',
  ])

  const apiHost = apiOriginHost()
  if (apiHost) hosts.add(apiHost.toLowerCase())

  return hosts
}

function isAllowedMediaUrl(absoluteUrl: string): boolean {
  try {
    const u = new URL(absoluteUrl)
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return false
    return allowedMediaHosts().has(u.hostname.toLowerCase())
  } catch {
    return false
  }
}

export function getMediaUrl(media: StrapiMedia | unknown): string {
  if (!media || typeof media !== 'object') return ''

  const unwrapped = Array.isArray(media)
    ? media[0]
    : 'data' in media && (media as { data?: unknown }).data !== undefined
      ? (media as { data: unknown }).data
      : media

  if (!unwrapped || typeof unwrapped !== 'object') return ''

  const m = unwrapped as {
    url?: string
    formats?: Record<string, { url?: string }>
    attributes?: {
      url?: string
      formats?: Record<string, { url?: string }>
    }
  }

  const url =
    m.url ||
    m.attributes?.url ||
    m.formats?.large?.url ||
    m.formats?.medium?.url ||
    m.formats?.small?.url ||
    m.formats?.thumbnail?.url ||
    m.attributes?.formats?.large?.url ||
    m.attributes?.formats?.medium?.url ||
    m.attributes?.formats?.small?.url ||
    ''

  if (!url) return ''

  // Reject protocol-relative and non-http(s) schemes
  if (url.startsWith('//') || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) {
    if (!(url.startsWith('http://') || url.startsWith('https://'))) return ''
    return isAllowedMediaUrl(url) ? url : ''
  }

  const apiBase = String(baseURL).replace(/\/api\/?$/, '')
  const absolute = `${apiBase}${url.startsWith('/') ? url : `/${url}`}`
  return isAllowedMediaUrl(absolute) ? absolute : ''
}

export function normalizeTags(tags: unknown): string[] {
  if (!tags) return []
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => {
        if (typeof tag === 'string') return tag
        if (tag && typeof tag === 'object') {
          const obj = tag as Record<string, unknown>
          if (typeof obj.label === 'string') return obj.label
          if (typeof obj.name === 'string') return obj.name
          if (typeof obj.text === 'string') return obj.text
        }
        return null
      })
      .filter((t): t is string => Boolean(t))
  }
  if (typeof tags === 'string') {
    try {
      return normalizeTags(JSON.parse(tags))
    } catch {
      return tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    }
  }
  return []
}
