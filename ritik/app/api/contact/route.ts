import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json()

    // ─── Basic validation ────────────────────────────────────────────────────
    if (![firstName, lastName, email, subject, message].every(Boolean)) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid e-mail address." }, { status: 400 })
    }

    // ─── Pick inbox according to environment ─────────────────────────────────
    const isProd = process.env.NODE_ENV === "production"
    const toInbox = isProd ? process.env.RESEND_PROD_INBOX : process.env.RESEND_TEST_INBOX

    if (!toInbox) {
      return NextResponse.json({ error: "Recipient inbox env vars not configured." }, { status: 500 })
    }

    // ─── From address must belong to a verified domain ──────────────────────
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"

    // ─── 1) send notification to you ────────────────────────────────────────
    const { error: sendErr } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toInbox],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="white-space:pre-wrap;"><strong>Message:</strong><br>${message}</p>
      `,
    })

    if (sendErr) {
      console.error("Resend error (notify):", sendErr)
      return NextResponse.json({ error: "Mail service rejected the request." }, { status: 502 })
    }

    // ─── 2) auto-reply to the visitor (optional – you can delete) ───────────
    await resend.emails.send({
      from: `Ritik <${fromEmail}>`,
      to: [email],
      subject: "Thanks for contacting me!",
      text: `Hi ${firstName},\n\nThanks for reaching out — I'll get back to you shortly.\n\n— Ritik`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Unhandled contact error:", err)
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 })
  }
}
