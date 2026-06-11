import { Toaster } from 'sonner'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MarqueeBand from '@/components/ui/MarqueeBand'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Commitments from '@/components/sections/Commitments'
import Pricing from '@/components/sections/Pricing'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Chatbot from '@/components/ui/Chatbot'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'JDesign',
  description: 'Freelance design & développement web. Création de sites vitrine élégants, uniques et fonctionnels.',
  url: 'https://jd-webdesign-nine.vercel.app',
  telephone: '+33782755924',
  email: 'jdwebdesign64@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  priceRange: '300€–450€',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Site vitrine Économique' },
        price: '300',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Site vitrine Pro' },
        price: '450',
        priceCurrency: 'EUR',
      },
    ],
  },
  sameAs: [],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: '#111115',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#FAFAF8',
          },
        }}
      />
      <Nav />
      <main>
        <Hero />
        <MarqueeBand />
        <Services />
        <Stats />
        <Commitments />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
