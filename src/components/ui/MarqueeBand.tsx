'use client'

import { useRef, useState } from 'react'
import { MARQUEE_ITEMS } from '@/lib/constants'

export default function MarqueeBand() {
  const [paused, setPaused] = useState(false)
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className="py-6 overflow-hidden relative"
      style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #09090B, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #09090B, transparent)' }}
      />

      <div
        className="flex items-center gap-12 whitespace-nowrap"
        style={{
          animation: `marquee 24s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {items.map((tech, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-sans text-sm text-muted">
              {tech}
            </span>
            <span className="text-lime text-xs opacity-40">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
