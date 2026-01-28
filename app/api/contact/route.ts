import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, interest, message } = body

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format the email content
    const emailSubject = `New Contact Form Submission from ${name}`
    const emailBody = `
New contact form submission from Grey Mahout website:

Name: ${name}
Email: ${email}
Company/Role: ${company || "Not provided"}
Interest: ${interest}

Message:
${message}

---
This message was sent from the Grey Mahout contact form.
    `.trim()

    // Send email using Resend
    // TODO: Change to athiradas@greymahout.com once domain is verified in Resend
    const { error } = await resend.emails.send({
      from: "Grey Mahout <onboarding@resend.dev>",
      to: "athirad@sas.upenn.edu",
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    )
  }
}
