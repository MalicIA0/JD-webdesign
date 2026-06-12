'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" className="text-lime" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % TESTIMONIALS.length)
    }, 4500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="py-28 lg:py-40">
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
            Ils témoignent
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Ce qu'ils en <em className="text-lime font-medium">disent</em>.
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden" style={{ minHeight: 200 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: '#FAF7F0',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: '0 2px 6px rgba(23,20,16,0.05)',
                }}
              >
                <Stars count={TESTIMONIALS[active].rating} />

                <blockquote className="text-off-white text-lg leading-relaxed mb-6 font-light italic">
                  "{TESTIMONIALS[active].quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-[#FFF8EE] mb-2"
                    style={{ backgroundColor: '#BC4A24' }}
                  >
                    {TESTIMONIALS[active].name[0]}
                  </div>
                  <p className="font-medium text-off-white text-sm">{TESTIMONIALS[active].name}</p>
                  <p className="text-muted text-xs">{TESTIMONIALS[active].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setPaused(true) }}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 h-2 bg-lime' : 'w-2 h-2 bg-muted/30 hover:bg-muted/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
