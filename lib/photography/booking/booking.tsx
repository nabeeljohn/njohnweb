'use server';

import nodemailer from "nodemailer";

export async function submitBooking(prevState: {success:boolean}, formData: FormData) {
    try {

        const booking = {
            name: formData.get("name")?.toString() ?? "",
            contact: formData.get("contact")?.toString() ?? "",
            date: formData.get("date")?.toString() ?? "",
            venue: formData.get("venue")?.toString() ?? "",
            details: formData.get("details")?.toString() ?? "",
        };

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Simulate delay (e.g., 3 seconds)
        //await delay(3000);

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_TO,
            subject: `Booking request from ${booking.name}`,
            html: `
                <h2>New Booking Request</h2>
                <p><b>Name:</b> ${booking.name}</p>
                <p><b>Contact:</b> ${booking.contact}</p>
                <p><b>Date:</b> ${booking.date}</p>
                <p><b>Venue:</b> ${booking.venue}</p>
                <p><b>Details:</b><br>${booking.details}</p>
                `,
        });

        return { success: true };
    }
    catch (error) {
        console.error(error);
        return { success: false }
    }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}