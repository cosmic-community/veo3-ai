import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeaderProps {
  siteSettings: SiteSettings | null
}

export default function Header({ siteSettings }: HeaderProps) {
  const siteName = getMetafieldValue(siteSettings?.metadata?.site_name) || 'Veo3 AI'
  const ctaText = getMetafieldValue(siteSettings?.metadata?.cta_text) || 'Get Started'
  const ctaUrl = getMetafieldValue(siteSettings?.metadata?.cta_url) || 'https://www.veo3ai.io/'

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-2xl">🎬</span>
          <span className="text-lg font-bold tracking-tight text-white">{siteName}</span>
        </a>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
        >
          {ctaText}
        </a>
      </div>
    </header>
  )
}