import { NextRequest, NextResponse } from "next/server"

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

    // For now, we'll log the submission and return success
    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    console.log("Contact form submission:")
    console.log("To: athiradas@greymahout.com")
    console.log("Subject:", emailSubject)
    console.log("Body:", emailBody)

    // To integrate with Resend (recommended), uncomment and add RESEND_API_KEY:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Grey Mahout <contact@greymahout.com>',
      to: 'athiradas@greymahout.com',
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    })
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    )
  }
}
