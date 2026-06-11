import { NextResponse } from 'next/server'
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/constants'

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        content: "Je ne suis pas disponible pour le moment. Contactez Jean-Denis directement à jeandenis.cuenin@hotmail.com ou au 07 82 75 59 24.",
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
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    })

    if (!res.ok) {
      throw new Error(`Anthropic API error: ${res.status}`)
    }

    const data = await res.json()
    const content = data.content?.[0]?.text ?? "Désolé, je n'ai pas pu générer une réponse."

    return NextResponse.json({ content })
  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({
      content: "Désolé, une erreur s'est produite. Contactez-nous directement à jeandenis.cuenin@hotmail.com.",
    })
  }
}
