import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { DifferentialsSection } from '@/components/differentials-section'
import { CoverageSection } from '@/components/coverage-section'
import { ClientsSection } from '@/components/clients-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <CoverageSection />
        <ClientsSection />
      </main>
      <SiteFooter />
    </>
  )
}
