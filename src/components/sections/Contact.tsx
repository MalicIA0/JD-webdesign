'use client'

import { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { fadeUp, staggerContainer, EASE } from '@/lib/animations'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '@/lib/constants'

type FormData = {
  name: string
  email: string
  budget: '300€' | '450€' | 'Autre'
  message: string
  honeypot: string
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [loading, setLoading] = useState(false)

  const [selectedBudget, setSelectedBudget] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        toast.success('Message envoyé ! Je vous réponds sous 24h.')
        reset()
        setSelectedBudget('')
      } else {
        toast.error("Erreur lors de l'envoi. Réessayez ou écrivez directement.")
      }
    } catch {
      toast.error("Erreur réseau. Réessayez ou écrivez directement.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 lg:py-40" style={{ backgroundColor: '#0D0D10' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            ref={ref}
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              Votre prochain
              <br />
              projet part d'ici.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted leading-relaxed mb-10 font-light">
              Vous avez une idée ? Je suis disponible pour de nouveaux projets.
              Réponse garantie en moins de 12h.
            </motion.p>

            {/* Direct contact */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-lime/10"
                  style={{ backgroundColor: '#1A1A20', border: '1px solid var(--border-subtle)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="1.5" className="group-hover:stroke-lime transition-colors">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-muted text-sm group-hover:text-off-white transition-colors">{EMAIL}</span>
              </a>

              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-lime/10"
                  style={{ backgroundColor: '#1A1A20', border: '1px solid var(--border-subtle)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="1.5" className="group-hover:stroke-lime transition-colors">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <span className="text-muted text-sm group-hover:text-off-white transition-colors">{PHONE}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Honeypot */}
            <input
              type="text"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              {...register('honeypot')}
            />

            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Nom *
              </label>
              <input
                type="text"
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 rounded-sm text-sm text-off-white bg-transparent placeholder-muted outline-none transition-colors focus:border-lime"
                style={{
                  backgroundColor: '#111115',
                  border: `1px solid ${errors.name ? 'rgba(239,68,68,0.5)' : 'var(--border-subtle)'}`,
                }}
                {...register('name', { required: 'Votre nom est requis' })}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="jean@exemple.fr"
                className="w-full px-4 py-3 rounded-sm text-sm text-off-white bg-transparent placeholder-muted outline-none transition-colors focus:border-lime"
                style={{
                  backgroundColor: '#111115',
                  border: `1px solid ${errors.email ? 'rgba(239,68,68,0.5)' : 'var(--border-subtle)'}`,
                }}
                {...register('email', {
                  required: 'Votre email est requis',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' },
                })}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Budget */}
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-3">
                Budget *
              </label>
              <input type="hidden" {...register('budget', { required: true })} />
              <div className="flex flex-wrap gap-3">
                {(['300€', '450€', 'Autre'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setSelectedBudget(opt); setValue('budget', opt) }}
                    className="font-mono text-sm px-4 py-2 rounded-full border transition-all duration-200"
                    style={
                      selectedBudget === opt
                        ? { backgroundColor: '#C5F135', color: '#000', borderColor: '#C5F135' }
                        : { color: '#71717A', borderColor: 'var(--border-subtle)', backgroundColor: 'transparent' }
                    }
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Décrivez votre projet en quelques mots..."
                className="w-full px-4 py-3 rounded-sm text-sm text-off-white bg-transparent placeholder-muted outline-none resize-none transition-colors focus:border-lime"
                style={{
                  backgroundColor: '#111115',
                  border: `1px solid ${errors.message ? 'rgba(239,68,68,0.5)' : 'var(--border-subtle)'}`,
                }}
                {...register('message', {
                  required: 'Un message est requis',
                  minLength: { value: 20, message: 'Au moins 20 caractères' },
                })}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 py-4 bg-lime text-black font-semibold rounded-sm hover:bg-[#d4ff3a] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.3" />
                    <path d="M12 3a9 9 0 019 9" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
