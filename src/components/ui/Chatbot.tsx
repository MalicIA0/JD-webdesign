'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '@/lib/animations'

type Message = { role: 'user' | 'assistant'; content: string }

const QUICK_REPLIES = [
  'Quels sont vos tarifs ?',
  'Délais de livraison ?',
  'Prendre contact',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Bonjour ! 👋 Je suis l\'assistant de JDesign. Comment puis-je vous aider ?',
      }])
    }
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.content ?? "Désolé, une erreur s'est produite." },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Désolé, je ne peux pas répondre pour le moment. Contactez-moi directement." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex flex-col rounded-sm overflow-hidden shadow-2xl"
            style={{
              width: 340,
              maxHeight: 520,
              backgroundColor: '#111115',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs text-black"
                    style={{ backgroundColor: '#C5F135' }}
                  >
                    JD
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2"
                    style={{ borderColor: '#111115' }}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-off-white">Assistant JDesign</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-off-white transition-colors p-1"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[82%] px-3 py-2 rounded-sm text-sm leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? { backgroundColor: '#C5F135', color: '#000' }
                        : { backgroundColor: '#1A1A20', color: '#FAFAF8', border: '1px solid var(--border-subtle)' }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-sm"
                    style={{ backgroundColor: '#1A1A20', border: '1px solid var(--border-subtle)' }}
                  >
                    <div className="flex gap-1 items-center h-3">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted"
                          style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick replies (only at start) */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-col gap-2 mt-1">
                  {QUICK_REPLIES.map((r) => (
                    <button
                      key={r}
                      onClick={() => send(r)}
                      className="text-left text-xs px-3 py-2 rounded-sm text-muted hover:text-off-white transition-colors"
                      style={{ border: '1px solid var(--border-subtle)', backgroundColor: 'transparent' }}
                    >
                      {r} →
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 p-3"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
                placeholder="Votre message..."
                className="flex-1 bg-transparent text-sm text-off-white placeholder-muted outline-none"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="flex items-center justify-center w-8 h-8 rounded-sm bg-lime text-black disabled:opacity-40 transition-opacity flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full bg-lime text-black flex items-center justify-center shadow-lg"
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {/* Online badge */}
        <span
          className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-bg-base"
          style={{ animation: 'pulse-lime 2s ease-in-out infinite' }}
        />

        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
