
import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ProgressBar from '@/components/ui/ProgressBar'
import { Analytics } from '@vercel/analytics/next'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'JDesign — Freelance Design & Développement Web',
  description:
    'Designer & développeur freelance. Sites vitrine à partir de 300€, livrés en 14 jours maximum. Suivi quotidien, réponse garantie en moins de 12h.',
  keywords: [
    'freelance web designer',
    'développeur web freelance',
    'création site vitrine',
    'site internet pas cher',
    'design UI/UX',
    'identité de marque',
    'freelance France',
    'site web 300€',
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
      'Designer & développeur freelance. Sites vitrine à partir de 300€, livrés en 14 jours maximum.',
    siteName: 'JDesign',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDesign — Freelance Design & Développement Web',
    description:
      'Designer & développeur freelance. Sites vitrine à partir de 300€, livrés en 14 jours maximum.',
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
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-base text-off-white font-sans antialiased overflow-x-hidden">
        <div id="progress-bar" />
        <ProgressBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
