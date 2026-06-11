
import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ProgressBar from '@/components/ui/ProgressBar'

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
    'Designer & développeur freelance. Sites vitrine à partir de 250€, livrés en 7 ou 15 jours. Suivi quotidien, sans engagement.',
  keywords: [
    'freelance design',
    'développement web',
    'site vitrine',
    'Next.js',
    'design UI/UX',
    'identité de marque',
    'France',
  ],
  authors: [{ name: 'Jean-Denis Cuenin', url: 'mailto:jeandenis.cuenin@hotmail.com' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'JDesign — Freelance Design & Développement Web',
    description:
      'Designer & développeur freelance. Sites vitrine à partir de 250€, livrés en 7 ou 15 jours.',
    siteName: 'JDesign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'JDesign' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDesign — Freelance Design & Développement Web',
    description:
      'Designer & développeur freelance. Sites vitrine à partir de 250€, livrés en 7 ou 15 jours.',
    images: ['/og-image.png'],
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
      </body>
    </html>
  )
}
