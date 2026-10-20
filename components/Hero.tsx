import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  siteSettings: SiteSettings | null
}

export default function Hero({ siteSettings }: HeroProps) {
  const headline =
    getMetafieldValue(siteSettings?.metadata?.hero_headline) ||
    'Describe It. Veo3 AI Creates It.'
  const subheadline =
    getMetafieldValue(siteSettings?.metadata?.hero_subheadline) ||
    'The AI video agent that writes the script, generates every shot, and edits the final cut for you.'
  const ctaText = getMetafieldValue(siteSettings?.metadata?.cta_text) || 'Get Started'
  const ctaUrl = getMetafieldValue(siteSettings?.metadata?.cta_url) || 'https://www.veo3ai.io/'
  const heroImage = siteSettings?.metadata?.hero_image

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-950 via-purple-950/40 to-zinc-950" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute top-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 text-center lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-transform hover:scale-105"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {heroImage?.imgix_url && (
          <div className="relative w-full max-w-5xl animate-float">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 via-purple-500/30 to-indigo-500/30 blur-2xl" />
            <img
              src={`${heroImage.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
              alt={headline}
              width={1000}
              height={600}
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  )
}