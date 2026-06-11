'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PLANS } from '@/lib/constants'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime flex-shrink-0 mt-0.5">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tarifs" className="py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
            Tarifs
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Simple & transparent.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted max-w-lg mx-auto font-light">
            Sans engagement. Résiliation à tout moment. Hébergement & domaine inclus la 1ère année.
          </motion.p>
        </motion.div>

        {/* Plans */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center text-sm text-muted mt-10"
        >
          Résiliation à tout moment · Aucuns frais cachés · Hébergement & nom de domaine inclus la 1ère année
        </motion.p>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: (typeof PLANS)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative p-8 rounded-sm overflow-hidden flex flex-col"
      style={{
        backgroundColor: plan.recommended ? '#111115' : '#0D0D10',
        border: plan.recommended ? '1px solid rgba(197,241,53,0.3)' : '1px solid var(--border-subtle)',
      }}
    >
      {/* Recommended badge */}
      {plan.recommended && (
        <div
          className="absolute top-0 right-8 px-4 py-1.5 font-mono text-xs text-black font-medium"
          style={{ backgroundColor: '#C5F135', borderRadius: '0 0 4px 4px' }}
        >
          ⭐ Recommandé
        </div>
      )}

      {/* Top lime glow for recommended */}
      {plan.recommended && (
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(197,241,53,0.5), transparent)' }}
        />
      )}

      {/* Plan name */}
      <div className="mb-6 mt-2">
        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">Plan</p>
        <h3 className="font-display font-bold text-2xl text-off-white">{plan.name}</h3>
      </div>

      {/* Creation price */}
      <div
        className="p-4 rounded-sm mb-6"
        style={{ backgroundColor: '#1A1A20', border: '1px solid var(--border-subtle)' }}
      >
        <p className="text-xs text-muted mb-1">Création</p>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="font-display font-bold text-3xl text-off-white">{plan.creation}€</span>
          <span className="text-muted text-sm">· Livraison en {plan.delivery}</span>
        </div>
      </div>

      {/* Monthly price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="font-display font-bold text-off-white"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            {plan.monthly}€
          </span>
          <span className="text-muted text-sm">/ mois</span>
        </div>
        <p className="text-xs text-muted">sans engagement</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm text-muted">
            {CHECK}
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`block text-center py-3.5 rounded-sm font-semibold text-sm transition-all duration-300 ${
          plan.recommended
            ? 'bg-lime text-black hover:bg-[#d4ff3a]'
            : 'border text-off-white hover:bg-white/5'
        }`}
        style={!plan.recommended ? { borderColor: 'var(--border-subtle)' } : {}}
      >
        Démarrer avec {plan.name}
      </a>
    </motion.div>
  )
}
