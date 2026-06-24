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
  const [showTeaser, setShowTeaser] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowTeaser(true), 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Bonjour ! 👋 Je suis l\'assistant de JDesign. Comment puis-je vous aider ?',
      }])
    }
    if (open) { setShowTeaser(false); inputRef.current?.focus() }
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
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E4ED',
              boxShadow: '0 24px 60px -20px rgba(23,20,16,0.3)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid #ECEBF2' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs text-[#FFF8EE]"
                    style={{ backgroundColor: '#8B7CFF' }}
                  >
                    JD
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2"
                    style={{ borderColor: '#FFFFFF' }}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: '#1A1A2E' }}>Assistant JDesign</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="transition-colors p-1"
                style={{ color: '#9B98AC' }}
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
                        ? { backgroundColor: '#8B7CFF', color: '#FFF8EE' }
                        : { backgroundColor: '#F1F0F7', color: '#1A1A2E', border: '1px solid #ECEBF2' }
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
                    style={{ backgroundColor: '#F1F0F7', border: '1px solid #ECEBF2' }}
                  >
                    <div className="flex gap-1 items-center h-3">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: '#9B98AC', animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
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
                      className="text-left text-xs px-3 py-2 rounded-sm transition-colors"
                      style={{ border: '1px solid #ECEBF2', backgroundColor: 'transparent', color: '#5B5970' }}
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
              style={{ borderTop: '1px solid #ECEBF2' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
                placeholder="Votre message..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                style={{ color: '#1A1A2E' }}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-lime text-[#FFF8EE] disabled:opacity-40 transition-opacity flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulle d'accroche proactive */}
      <AnimatePresence>
        {showTeaser && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="relative max-w-[230px] rounded-sm px-4 py-3 pr-7 text-sm shadow-2xl cursor-pointer"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E4ED', color: '#1A1A2E' }}
            onClick={() => setOpen(true)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setShowTeaser(false) }}
              className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center transition-colors"
              style={{ color: '#9B98AC' }}
              aria-label="Fermer la suggestion"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <p className="leading-relaxed">👋 Je suis votre assistant, avez-vous besoin d&apos;aide ?</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`relative flex items-center justify-center shadow-lg bg-lime text-[#FFF8EE] ${
          open ? 'w-14 h-14 rounded-full' : 'h-14 px-5 rounded-full'
        }`}
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
            <motion.span
              key="chat-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-semibold whitespace-nowrap"
            >
              Besoin d&apos;aides, Par ici
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
