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
      style={{ backgroundColor: '#0D0D10' }}
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
          <motion.p variants={fadeUp} className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
            Mon engagement
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold leading-tight"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            Pas juste un prestataire.
            <br />
            <span className="text-lime">Un partenaire.</span>
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
              className="flex items-center gap-2 text-sm text-muted"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-lime flex-shrink-0">
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
      className="group relative p-8 rounded-sm overflow-hidden"
      style={{
        backgroundColor: '#111115',
        border: '1px solid var(--border-subtle)',
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated lime corner */}
      <div
        className="absolute top-0 right-0 w-0 h-0 group-hover:w-16 group-hover:h-16 transition-all duration-500"
        style={{
          background: 'linear-gradient(225deg, rgba(197,241,53,0.15) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-500"
        style={{
          background: 'linear-gradient(45deg, rgba(197,241,53,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Badge */}
      <span
        className="inline-block font-mono text-xs px-3 py-1 rounded-full text-lime mb-5"
        style={{
          backgroundColor: 'var(--lime-dim)',
          border: '1px solid rgba(197,241,53,0.15)',
        }}
      >
        {item.badge}
      </span>

      {/* Icon */}
      <p className="font-mono text-2xl text-lime mb-4">{item.icon}</p>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-off-white mb-3">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed font-light">
        {item.description}
      </p>
    </motion.div>
  )
}
