import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  const body = await req.json();
  const { userName, userEmail, userMessage } = body;

  // Configure transporter (using Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // comes from .env.local
      pass: process.env.GMAIL_APP_PASSWORD, // comes from .env.local
    },
  });

  try {
    await transporter.sendMail({
  from: process.env.GMAIL_USER,   // ✅ must match your Gmail user
  replyTo: userEmail,             // ✅ lets you reply to the sender
  to: process.env.GMAIL_USER,     // your inbox
  subject: `New message from ${userName}`,
  text: userMessage,
  html: `<p><strong>Name:</strong> ${userName}</p>
         <p><strong>Email:</strong> ${userEmail}</p>
         <p><strong>Message:</strong> ${userMessage}</p>`,
});


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
