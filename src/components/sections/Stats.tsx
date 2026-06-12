'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { EASE } from '@/lib/animations'

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return value
}

function StatItem({ stat, delay }: { stat: (typeof STATS)[0]; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCountUp(stat.value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="text-center md:text-left min-w-0"
    >
      <div className="flex items-baseline gap-1 flex-wrap justify-center md:justify-start leading-none mb-2">
        <span className="font-display font-semibold text-off-white" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
          {count}
        </span>
        {stat.suffix && (
          <span className="font-display font-semibold text-lime" style={{ fontSize: 'clamp(14px, 1.8vw, 24px)' }}>
            {stat.suffix.trim()}
          </span>
        )}
      </div>
      <p className="text-muted text-sm font-light tracking-wide">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 max-w-3xl mx-auto">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
