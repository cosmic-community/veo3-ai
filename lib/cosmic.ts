import { createBucketClient } from '@cosmicjs/sdk'
import type { SiteSettings, Feature, HowItWorksStep } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

type CosmicClient = typeof cosmic

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export function getHowItWorksSteps(value: unknown): HowItWorksStep[] {
  let parsed: unknown = value

  if (typeof value === 'string') {
    try {
      parsed = JSON.parse(value)
    } catch {
      return []
    }
  }

  if (!Array.isArray(parsed)) {
    return []
  }

  return parsed
    .filter((item): item is { title?: unknown; description?: unknown } => {
      return typeof item === 'object' && item !== null
    })
    .map((item) => ({
      title: getMetafieldValue(item.title) || 'Step',
      description: getMetafieldValue(item.description) || '',
    }))
}

export async function getSiteSettings(
  client: CosmicClient,
  usePreview: boolean
): Promise<SiteSettings | null> {
  try {
    const query = client.objects
      .findOne({ type: 'site-settings' })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)

    const { object } = usePreview ? await query.status('any') : await query

    if (!object) {
      return null
    }

    return object as SiteSettings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch site settings')
  }
}

export async function getFeatures(
  client: CosmicClient,
  usePreview: boolean
): Promise<Feature[]> {
  try {
    const query = client.objects
      .find({ type: 'features' })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)

    const { objects } = usePreview ? await query.status('any') : await query

    const features = (objects as Feature[]) || []

    return features.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 0
      const orderB = b.metadata?.display_order ?? 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch features')
  }
}