'use client'

import { useState } from 'react'
import { MARQUEE_ITEMS } from '@/lib/constants'

export default function MarqueeBand() {
  const [paused, setPaused] = useState(false)
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className="py-8 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Bandeau encre légèrement incliné */}
      <div
        className="py-4 overflow-hidden"
        style={{
          backgroundColor: '#171410',
          transform: 'rotate(-1.6deg) scale(1.02)',
        }}
      >
        <div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{
            animation: `marquee 28s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {items.map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display italic font-medium text-lg text-cream">
                {tech}
              </span>
              <span className="text-lime-bright text-sm">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
