import type { SiteSettings } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  siteSettings: SiteSettings | null
}

export default function Footer({ siteSettings }: FooterProps) {
  const siteName = getMetafieldValue(siteSettings?.metadata?.site_name) || 'Veo3 AI'
  const footerText = getMetafieldValue(siteSettings?.metadata?.footer_text) || siteName
  const footerLink =
    getMetafieldValue(siteSettings?.metadata?.footer_link) || 'https://www.veo3ai.io/'
  const disclaimer =
    getMetafieldValue(siteSettings?.metadata?.disclaimer) ||
    'Veo3 AI is an independent product and is not affiliated with Google.'

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <a
          href={footerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          {footerText}
        </a>
        <p className="max-w-2xl text-xs leading-relaxed text-zinc-500">{disclaimer}</p>
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}