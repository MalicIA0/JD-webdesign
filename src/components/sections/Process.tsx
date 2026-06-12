'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section
      className="py-28 lg:py-40"
      ref={containerRef}
    >
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
            Comment ça marche
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Votre projet,
            <br />
            <em className="text-muted font-medium">étape par étape.</em>
          </motion.h2>
        </motion.div>

        {/* Timeline track */}
        <div className="hidden lg:block relative mb-12">
          <div
            className="absolute top-1/2 left-0 right-0 h-px"
            style={{ backgroundColor: 'var(--border-subtle)' }}
          />
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-lime origin-left"
            style={{ width: progressWidth }}
          />
          <div className="relative grid grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.4, ease: EASE }}
                className="flex justify-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold z-10"
                  style={{
                    backgroundColor: '#BC4A24',
                    color: '#FFF8EE',
                    border: '2px solid #BC4A24',
                  }}
                >
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.step} variants={fadeUp}>
              {/* Mobile step number */}
              <div className="lg:hidden flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: 'var(--lime-dim)', color: '#BC4A24', border: '1px solid rgba(188,74,36,0.3)' }}
                >
                  {step.step}
                </div>
                <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
              </div>

              <p className="font-mono text-xs text-muted mb-2 tracking-wider hidden lg:block">
                {step.step}
              </p>
              <h3 className="font-display font-semibold text-xl text-off-white mb-3">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
