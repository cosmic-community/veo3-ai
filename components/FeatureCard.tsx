import type { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const icon = getMetafieldValue(feature.metadata?.icon) || '✨'
  const description = getMetafieldValue(feature.metadata?.description)
  const image = feature.metadata?.feature_image

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all hover:border-fuchsia-500/50 hover:bg-zinc-900">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 blur-2xl" />

      {image?.imgix_url && (
        <div className="relative mb-5 overflow-hidden rounded-xl">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={feature.title}
            width={400}
            height={250}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="relative text-3xl">{icon}</div>
      <h3 className="relative mt-4 text-xl font-semibold text-white">{feature.title}</h3>
      {description && (
        <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      )}
    </div>
  )
}