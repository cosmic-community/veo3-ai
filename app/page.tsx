import { getCosmic } from '@/lib/cosmic-preview'
import { getSiteSettings, getFeatures } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const { cosmic, previewToken } = await getCosmic()

  const [siteSettings, features] = await Promise.all([
    getSiteSettings(cosmic, Boolean(previewToken)),
    getFeatures(cosmic, Boolean(previewToken)),
  ])

  return (
    <main className="min-h-screen">
      <Header siteSettings={siteSettings} />
      <Hero siteSettings={siteSettings} />
      <FeaturesGrid features={features} />
      <HowItWorks siteSettings={siteSettings} />
      <CTABanner siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </main>
  )
}