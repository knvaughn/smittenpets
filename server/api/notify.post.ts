import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);

  if (!email) {
    throw createError({ statusCode: 400, message: "Email required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Smitten Pets" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Coming Soon Lead! 🐾",
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #0ABAB5;">
          <h2>New Signup for Smitten Pets</h2>
          <p>A potential client just signed up for updates:</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    throw createError({ statusCode: 500, message: "Email failed to send" });
  }
});
