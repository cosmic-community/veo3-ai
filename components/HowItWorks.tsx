import type { SiteSettings } from '@/types'
import { getMetafieldValue, getHowItWorksSteps } from '@/lib/cosmic'

interface HowItWorksProps {
  siteSettings: SiteSettings | null
}

export default function HowItWorks({ siteSettings }: HowItWorksProps) {
  const title =
    getMetafieldValue(siteSettings?.metadata?.how_it_works_title) || 'How It Works'
  const steps = getHowItWorksSteps(siteSettings?.metadata?.how_it_works_steps)

  if (steps.length === 0) {
    return null
  }

  return (
    <section className="relative border-y border-white/10 bg-zinc-900/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={`${step.title}-${index}`} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-lg font-bold text-white shadow-lg shadow-purple-500/30">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-[-20px] top-6 hidden h-px w-10 bg-gradient-to-r from-fuchsia-500/50 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}