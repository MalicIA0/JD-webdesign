import type { Metadata, Viewport } from 'next'
import { Sora, Inter, JetBrains_Mono, Dancing_Script, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Sora n'est plus utilisée que pour l'avatar "JD" du chatbot (font-bold) ;
// un seul poids est charge pour ne pas gaspiller de bande passante.
const sora = Sora({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Utilisée uniquement pour le texte "JD" du préchargeur (font-weight:700).
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JDesign — Freelance Design & Développement Web',
  description:
    'Designer & développeur freelance. Sites vitrine à partir de 500€, livrés en 14 jours maximum. Suivi quotidien, réponse garantie en moins de 12h.',
  keywords: [
    'freelance web designer',
    'développeur web freelance',
    'création site vitrine',
    'site internet pas cher',
    'design UI/UX',
    'identité de marque',
    'freelance France',
    'site web 500€',
  ],
  authors: [{ name: 'Jean-Denis Cuenin', url: 'https://jd-webdesign-nine.vercel.app' }],
  metadataBase: new URL('https://jd-webdesign-nine.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jd-webdesign-nine.vercel.app',
    title: 'JDesign — Et si on vous reconnaissait, par votre site ?',
    description:
      'Freelance spécialisé en design et développement web. Création de sites internets élégants, uniques, fonctionnels.',
    siteName: 'JDesign',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDesign — Freelance Design & Développement Web',
    description:
      'Designer & développeur freelance. Sites vitrine à partir de 500€, livrés en 14 jours maximum.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05060D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} ${dancingScript.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
