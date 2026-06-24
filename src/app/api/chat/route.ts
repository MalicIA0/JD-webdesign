import { NextResponse } from 'next/server'
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/constants'

// ── Rate limiting (20 messages / IP / 10 minutes) ──
const rateMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 20
const RATE_WINDOW = 10 * 60 * 1000

function checkRate(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

const MAX_MESSAGES = 10
const MAX_MSG_LENGTH = 500

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRate(ip)) {
    return NextResponse.json({ content: "Trop de messages. Merci de réessayer dans quelques minutes." })
  }

  try {
    const { messages } = await request.json()

    if (!Array.isArray(messages) || messages.length === 0)
      return NextResponse.json({ content: "Message invalide." })

    // Limiter l'historique et la taille de chaque message
    const safeMessages = messages
      .slice(-MAX_MESSAGES)
      .filter((m: { role: string; content: string }) =>
        m.role === 'user' || m.role === 'assistant'
      )
      .map((m: { role: string; content: string }) => ({
        role: m.role,
        content: String(m.content).slice(0, MAX_MSG_LENGTH),
      }))

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        content: "Je ne suis pas disponible pour le moment. Contactez-nous directement à jdwebdesign64@hotmail.com ou au 07 82 75 59 24.",
      })
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: CHATBOT_SYSTEM_PROMPT,
        messages: safeMessages,
      }),
    })

    if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`)

    const data = await res.json()
    const content = data.content?.[0]?.text ?? "Désolé, je n'ai pas pu générer une réponse."

    return NextResponse.json({ content })
  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({
      content: "Désolé, une erreur s'est produite. Contactez-nous directement à jdwebdesign64@hotmail.com.",
    })
  }
}
