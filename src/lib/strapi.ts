import { api, getMediaUrl, normalizeTags, type StrapiListResponse, type StrapiMedia } from './api'

export type ClientLogo = {
  id: number | string
  name: string
  src: string
  width: number
}

export type ServiceItem = {
  id: number | string
  number: string
  title: string
  description: string
  tags: string[]
}

export type FaqItem = {
  id: number | string
  question: string
  answer: string
}

export type WorkItem = {
  id: number | string
  title: string
  description: string
  img: string
}

type StrapiClient = {
  id: number
  documentId?: string
  name?: string
  width?: number
  logo?: StrapiMedia
  attributes?: {
    name?: string
    width?: number
    logo?: { data?: StrapiMedia } | StrapiMedia
  }
}

type StrapiService = {
  id: number
  documentId?: string
  number?: string
  title?: string
  description?: string
  tags?: unknown
  attributes?: {
    number?: string
    title?: string
    description?: string
    tags?: unknown
  }
}

type StrapiFaq = {
  id: number
  documentId?: string
  question?: string
  answer?: string
  attributes?: {
    question?: string
    answer?: string
  }
}

type StrapiWork = {
  id: number
  documentId?: string
  title?: string
  description?: string
  image?: StrapiMedia
  attributes?: {
    title?: string
    description?: string
    image?: { data?: StrapiMedia } | StrapiMedia
  }
}

function pickField<T>(item: Record<string, unknown>, key: string): T | undefined {
  const attrs = item.attributes as Record<string, unknown> | undefined
  return (item[key] ?? attrs?.[key]) as T | undefined
}

function resolveMedia(
  item: { attributes?: Record<string, unknown> },
  field: string,
  picked: unknown
): StrapiMedia {
  if (picked && typeof picked === 'object') {
    const p = picked as Record<string, unknown>
    if ('url' in p || 'formats' in p || 'attributes' in p) return picked as StrapiMedia
    if ('data' in p) return (p.data as StrapiMedia) || null
  }

  const nested = item.attributes?.[field]
  if (nested && typeof nested === 'object') {
    const n = nested as Record<string, unknown>
    if ('data' in n) return (n.data as StrapiMedia) || null
    if ('url' in n) return nested as StrapiMedia
  }

  return null
}

export async function fetchClients(): Promise<ClientLogo[]> {
  const { data } = await api.get<StrapiListResponse<StrapiClient>>('/clients', {
    params: { populate: 'logo', sort: 'id:asc' },
  })

  return (data.data || []).map((item) => {
    const raw = item as unknown as Record<string, unknown>
    const name = pickField<string>(raw, 'name') || 'Client'
    const width = pickField<number>(raw, 'width') || 120

    let logo: StrapiMedia = (pickField<StrapiMedia>(raw, 'logo') as StrapiMedia) || null
    logo = resolveMedia(item as { attributes?: Record<string, unknown> }, 'logo', logo)

    return {
      id: item.documentId || item.id,
      name,
      src: getMediaUrl(logo),
      width,
    }
  }).filter((c) => Boolean(c.src))
}

export async function fetchServices(): Promise<ServiceItem[]> {
  const { data } = await api.get<StrapiListResponse<StrapiService>>('/services', {
    params: { sort: 'id:asc' },
  })

  return (data.data || []).map((item) => {
    const raw = item as unknown as Record<string, unknown>
    return {
      id: item.documentId || item.id,
      number: pickField<string>(raw, 'number') || '',
      title: pickField<string>(raw, 'title') || '',
      description: pickField<string>(raw, 'description') || '',
      tags: normalizeTags(pickField(raw, 'tags')),
    }
  })
}

export async function fetchFaqs(): Promise<FaqItem[]> {
  const { data } = await api.get<StrapiListResponse<StrapiFaq>>('/faqs', {
    params: { sort: 'id:asc' },
  })

  return (data.data || []).map((item) => {
    const raw = item as unknown as Record<string, unknown>
    return {
      id: item.documentId || item.id,
      question: pickField<string>(raw, 'question') || '',
      answer: pickField<string>(raw, 'answer') || '',
    }
  })
}

export async function fetchWorks(): Promise<WorkItem[]> {
  const { data } = await api.get<StrapiListResponse<StrapiWork>>('/works', {
    params: {
      'populate[image]': true,
      sort: 'id:asc',
    },
  })

  return (data.data || []).map((item) => {
    const raw = item as unknown as Record<string, unknown>
    const image = resolveMedia(
      item as { attributes?: Record<string, unknown> },
      'image',
      pickField(raw, 'image')
    )

    return {
      id: item.documentId || item.id,
      title: pickField<string>(raw, 'title') || '',
      description: pickField<string>(raw, 'description') || '',
      img: getMediaUrl(image),
    }
  })
}
