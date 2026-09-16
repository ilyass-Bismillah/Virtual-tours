import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectType, budgetRange, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Virtual Tours <onboarding@resend.dev>", 
      to: ["delivered@resend.dev"],
      replyTo: email,
      subject: `New Project Inquiry: ${firstName} ${lastName} (${projectType || "General"})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>New Virtual Tour Lead</h2>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
          <p><strong>Budget Range:</strong> ${budgetRange || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f5; padding: 12px 16px; border-left: 4px solid #E05A36; border-radius: 4px;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}