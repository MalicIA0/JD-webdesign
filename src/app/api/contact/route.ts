import { NextResponse } from 'next/server'

// ── Rate limiting (5 requêtes / IP / 10 minutes) ──
const rateMap = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 5
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

// ── Échapper le HTML pour éviter le XSS dans l'email ──
function esc(str: string): string {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const ALLOWED_BUDGETS = ['300€', '450€', 'Autre']

export async function POST(request: Request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRate(ip)) {
    return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard.' }, { status: 429 })
  }

  try {
    const body = await request.json()
    const { name, email, budget, message, honeypot } = body

    if (honeypot) return NextResponse.json({ ok: true })

    // Validation
    if (!name || !email || !budget || !message)
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })

    if (typeof name !== 'string' || name.length > 100)
      return NextResponse.json({ error: 'Nom invalide' }, { status: 400 })

    if (!EMAIL_RE.test(email) || email.length > 254)
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })

    if (!ALLOWED_BUDGETS.includes(budget))
      return NextResponse.json({ error: 'Budget invalide' }, { status: 400 })

    if (message.length < 20 || message.length > 2000)
      return NextResponse.json({ error: 'Message invalide (20–2000 caractères)' }, { status: 400 })

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY not set — email not sent')
      return NextResponse.json({ ok: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'JDesign Contact <onboarding@resend.dev>',
      to: 'jdwebdesign64@hotmail.com',
      replyTo: email,
      subject: `[JDesign] Nouveau message de ${esc(name)} — Budget: ${esc(budget)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #09090B; color: #FAFAF8; border-radius: 8px;">
          <h2 style="color: #C5F135; margin-top: 0;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #71717A; width: 120px;">Nom</td><td style="padding: 8px 0;">${esc(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${esc(email)}" style="color: #C5F135;">${esc(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #71717A;">Budget</td><td style="padding: 8px 0;">${esc(budget)}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 20px 0;" />
          <p style="color: #71717A; margin-bottom: 8px;">Message :</p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${esc(message)}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
