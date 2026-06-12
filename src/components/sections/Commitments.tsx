'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { COMMITMENTS, TRUST_BADGES } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Commitments() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className="py-28 lg:py-40"
      style={{ backgroundColor: '#171410', color: '#EFE9DC', borderRadius: '40px 40px 0 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-mono text-xs text-lime-bright tracking-widest uppercase mb-4">
            Mon engagement
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold leading-tight"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Pas juste un prestataire.
            <br />
            <em className="text-lime-bright font-medium">Un partenaire.</em>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {COMMITMENTS.map((item) => (
            <CommitmentCard key={item.title} item={item} />
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap"
        >
          {TRUST_BADGES.map((badge) => (
            <motion.div
              key={badge}
              variants={fadeUp}
              className="flex items-center gap-2 text-sm text-muted-dark"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-lime-bright flex-shrink-0">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CommitmentCard({ item }: { item: (typeof COMMITMENTS)[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative p-8 rounded-2xl overflow-hidden"
      style={{
        backgroundColor: 'rgba(239,233,220,0.04)',
        border: '1px solid var(--border-ink)',
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated lime corner */}
      <div
        className="absolute top-0 right-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-500"
        style={{
          background: 'linear-gradient(225deg, rgba(224,123,79,0.18) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-500"
        style={{
          background: 'linear-gradient(45deg, rgba(224,123,79,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Badge */}
      <span
        className="inline-block font-mono text-xs px-3 py-1 rounded-full mb-5"
        style={{
          color: '#E8A285',
          backgroundColor: 'rgba(224,123,79,0.12)',
          border: '1px solid rgba(224,123,79,0.3)',
        }}
      >
        {item.badge}
      </span>

      {/* Icon */}
      <p className="font-mono text-2xl text-lime-bright mb-4">{item.icon}</p>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-cream mb-3">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-muted-dark text-sm leading-relaxed font-light">
        {item.description}
      </p>
    </motion.div>
  )
}
