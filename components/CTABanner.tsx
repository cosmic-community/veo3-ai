import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CTABannerProps {
  siteSettings: SiteSettings | null
}

export default function CTABanner({ siteSettings }: CTABannerProps) {
  const ctaText = getMetafieldValue(siteSettings?.metadata?.cta_text) || 'Get Started'
  const ctaUrl = getMetafieldValue(siteSettings?.metadata?.cta_url) || 'https://www.veo3ai.io/'

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/20 to-indigo-600/20 px-8 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Your Next Video Starts With a Sentence.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
          Describe the video you want. Veo3 AI writes the script, shoots every scene, and
          delivers the final edit.
        </p>
        <div className="mt-8 flex justify-center">
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
    </section>
  )
}