import type { NextConfig } from "next";

// Content-Security-Policy : autorise uniquement les sources nécessaires
// (le site + Google Analytics). 'unsafe-inline' reste requis pour les styles
// en ligne (React/animations) et le script d'init GA.
// React utilise eval() uniquement en mode développement ; jamais en production.
const devEval = process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${devEval} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "form-action 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy',         value: csp },
  { key: 'Strict-Transport-Security',       value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options',                 value: 'DENY' },
  { key: 'X-Content-Type-Options',          value: 'nosniff' },
  { key: 'Referrer-Policy',                 value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',              value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-XSS-Protection',                value: '1; mode=block' },
  { key: 'X-DNS-Prefetch-Control',          value: 'on' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      {
        source: '/img/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/video/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig;
