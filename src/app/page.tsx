import AuroraSite from '@/components/AuroraSite'
import Chatbot from '@/components/ui/Chatbot'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'JDesign',
  description: 'Freelance design & développement web. Création de sites vitrine élégants, uniques et fonctionnels.',
  url: 'https://jd-webdesign-nine.vercel.app',
  telephone: '+33782755924',
  email: 'jdwebdesign64@hotmail.com',
  founder: { '@type': 'Person', name: 'Jean-Denis Cuenin' },
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
      <AuroraSite />
      <Chatbot />
    </>
  )
}
