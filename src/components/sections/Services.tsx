'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'

const SERVICE_SVGS = [
  // UI/UX — grid of 4 dots
  <svg key="ux" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="10" height="10" rx="1" />
    <rect x="18" y="4" width="10" height="10" rx="1" />
    <rect x="4" y="18" width="10" height="10" rx="1" />
    <path d="M18 23h10M23 18v10" />
  </svg>,
  // Dev — code brackets
  <svg key="dev" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="11,8 4,16 11,24" />
    <polyline points="21,8 28,16 21,24" />
    <line x1="17" y1="6" x2="15" y2="26" />
  </svg>,
  // Brand — circle with rays
  <svg key="brand" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="6" />
    <line x1="16" y1="4" x2="16" y2="8" />
    <line x1="16" y1="24" x2="16" y2="28" />
    <line x1="4" y1="16" x2="8" y2="16" />
    <line x1="24" y1="16" x2="28" y2="16" />
    <line x1="7.5" y1="7.5" x2="10.3" y2="10.3" />
    <line x1="21.7" y1="21.7" x2="24.5" y2="24.5" />
    <line x1="24.5" y1="7.5" x2="21.7" y2="10.3" />
    <line x1="10.3" y1="21.7" x2="7.5" y2="24.5" />
  </svg>,
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
            Ce que je fais
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Ce que je propose :
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} icon={SERVICE_SVGS[i]} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  icon,
}: {
  service: (typeof SERVICES)[0]
  icon: React.ReactNode
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative p-8 rounded-sm overflow-hidden cursor-default"
      style={{
        backgroundColor: '#111115',
        border: '1px solid var(--border-subtle)',
      }}
    >
      {/* Lime glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'var(--lime-dim)' }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 text-muted group-hover:text-lime transition-colors duration-300"
        style={{ backgroundColor: '#1A1A20' }}
      >
        {icon}
      </div>

      {/* Symbol */}
      <p className="font-mono text-xs text-muted mb-3 tracking-wider">
        {service.icon}
      </p>

      {/* Title */}
      <h3 className="font-display font-bold text-xl mb-3 text-off-white group-hover:text-lime transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-6 font-light">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-1 rounded-full text-muted"
            style={{
              backgroundColor: '#1A1A20',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 60%, rgba(197,241,53,0.08) 100%)',
        }}
      />
    </motion.div>
  )
}
