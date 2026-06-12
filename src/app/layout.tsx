
import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ProgressBar from '@/components/ui/ProgressBar'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
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
    title: 'JDesign — Freelance Design & Développement Web',
    description:
      'Designer & développeur freelance. Sites vitrine à partir de 500€, livrés en 14 jours maximum.',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-base text-off-white font-sans antialiased overflow-x-hidden">
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
        <div id="progress-bar" />
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}
