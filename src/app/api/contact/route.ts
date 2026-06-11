import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, budget, message, honeypot } = body

    if (honeypot) {
      return NextResponse.json({ ok: true }) // silently ignore spam
    }

    if (!name || !email || !budget || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    if (message.length < 20) {
      return NextResponse.json({ error: 'Message trop court' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY not set — email not sent')
      return NextResponse.json({ ok: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'JDesign Contact <onboarding@resend.dev>',
      to: 'jeandenis.cuenin@hotmail.com',
      replyTo: email,
      subject: `[JDesign] Nouveau message de ${name} — Budget: ${budget}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #09090B; color: #FAFAF8; border-radius: 8px;">
          <h2 style="color: #C5F135; margin-top: 0;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717A; width: 120px;">Nom</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717A;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C5F135;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717A;">Budget</td>
              <td style="padding: 8px 0;">${budget}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 20px 0;" />
          <p style="color: #71717A; margin-bottom: 8px;">Message :</p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
