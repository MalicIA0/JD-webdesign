import Link from 'next/link'
import Image from 'next/image'
import { BRAND, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="py-12 mt-0"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="JD Web Design"
              width={600}
              height={400}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-muted">
            <a href={PHONE_HREF} className="hover:text-off-white transition-colors">
              {PHONE}
            </a>
            <a href={EMAIL_HREF} className="hover:text-off-white transition-colors break-all text-center">
              {EMAIL}
            </a>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-lime transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-lime transition-colors"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-lime transition-colors"
                aria-label="Behance"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.83 1.891 1.887 1.891.803 0 1.304-.421 1.498-1h4.371zm-5.21-4c-.12-1.062-.738-1.663-1.697-1.663-.946 0-1.679.617-1.84 1.663h3.537zM6.5 7.5c1.27 0 2.016.548 2.016 1.525 0 .773-.428 1.32-1.152 1.588C8.3 10.896 9 11.604 9 12.85 9 14.452 7.958 15 6.5 15H2V7.5h4.5zm-.463 2.75H3.8v1.5h2.237c.537 0 .9-.237.9-.75s-.363-.75-.9-.75zm.213 3.25H3.8v1.75h2.45c.6 0 1.05-.3 1.05-.875S6.85 13.5 6.25 13.5z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-muted text-center">
              © 2025 {BRAND} · Jean-Denis Cuenin · Fait avec précision en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
