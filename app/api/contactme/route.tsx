import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, location, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}
Location: ${location}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}