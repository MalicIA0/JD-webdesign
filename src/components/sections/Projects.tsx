'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projets" className="py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-extrabold leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Mes réalisations.
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-sm overflow-hidden cursor-pointer group"
      style={{
        backgroundColor: project.bg,
        border: '1px solid var(--border-subtle)',
        minHeight: 280,
      }}
    >
      {/* Decorative accent shapes */}
      <div
        className="absolute top-6 right-6 w-14 h-14 rounded-sm opacity-20"
        style={{ backgroundColor: project.accent }}
      />
      <div
        className="absolute top-10 right-10 w-6 h-6 rounded-sm opacity-15"
        style={{ backgroundColor: project.accent }}
      />

      {/* Content */}
      <div className="p-8 h-full flex flex-col justify-end" style={{ minHeight: 280 }}>
        <div className="mt-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: project.accent, opacity: 0.7 }}
          >
            {project.category}
          </p>
          <h3 className="font-display font-bold text-2xl text-off-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(250,250,248,0.6)' }}>
            {project.description}
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(9,9,11,0.75)', backdropFilter: 'blur(4px)' }}
      >
        <span
          className="font-medium text-sm px-6 py-3 rounded-sm"
          style={{
            backgroundColor: project.accent,
            color: project.accent === '#C5F135' ? '#000' : '#fff',
          }}
        >
          Voir le projet →
        </span>
      </motion.div>
    </motion.article>
  )
}
