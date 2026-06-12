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
  priceRange: '500€–800€',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Site vitrine Économique' },
        price: '500',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Site vitrine Pro' },
        price: '800',
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
            backgroundColor: '#FAF7F0',
            border: '1px solid rgba(23,20,16,0.10)',
            color: '#171410',
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
