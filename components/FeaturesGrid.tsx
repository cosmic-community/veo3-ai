import type { Feature } from '@/types'
import FeatureCard from '@/components/FeatureCard'

interface FeaturesGridProps {
  features: Feature[]
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One Agent. Every Format.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Turn a single idea or product photo into scroll-stopping video for every platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}