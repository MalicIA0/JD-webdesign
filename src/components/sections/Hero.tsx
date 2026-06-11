'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from '@/lib/animations'
import { EMAIL_HREF, PHONE_HREF } from '@/lib/constants'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })

const WORDS = ['Design', 'Code', 'Craft', 'Vision']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js background */}
      <HeroScene />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #09090B 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-2 mb-8"
        >
          <span
            className="inline-block w-2 h-2 rounded-full bg-lime"
            style={{ animation: 'pulse-lime 2s ease-in-out infinite' }}
          />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Freelance en design &amp; développement web
          </span>
        </motion.div>

        {/* Heading */}
        <div className="max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display font-extrabold leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 7vw, 112px)' }}
          >
            <span className="text-off-white block">Et si on vous reconnaissait,</span>
            <span className="text-off-white block">par votre site ?</span>
            <span className="flex items-baseline gap-4">
              <span
                className="text-lime inline-block overflow-hidden"
                style={{ minWidth: '4ch' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[wordIndex]}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="inline-block"
                  >
                    {WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-lime">.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="text-muted text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            Freelance spécialisé en design et développement web. Création
            de sites internets — élégants, uniques, fonctionnels, une seconde vitrine accessible en un clic.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-lime text-black font-semibold rounded-sm hover:bg-[#d4ff3a] transition-colors duration-200 active:scale-[0.98]"
            >
              Démarrer un projet (devis gratuit)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border text-off-white font-medium rounded-sm hover:bg-white/5 transition-colors duration-200"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              Voir mes services
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
