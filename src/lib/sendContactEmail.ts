import nodemailer from "nodemailer";

/**
 * SMTP via nodemailer. Required in .env / .env.local:
 * EMAIL_USER, EMAIL_PASS, EMAIL_FROM
 *
 * Submissions are delivered to EMAIL_USER (same inbox used to send).
 *
 * Optional: SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 587), SMTP_SECURE
 * Gmail usually needs "From" to match the account or a Gmail "Send mail as" alias.
 */
export async function sendContactEmail(subject: string, text: string): Promise<void> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM;

  if (!user?.trim() || !pass?.trim() || !from?.trim()) {
    console.info("[contact] Email env not configured; message body:\n", text);
    return;
  }

  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const secureExplicit = process.env.SMTP_SECURE;
  const secure =
    secureExplicit === "true" ||
    secureExplicit === "1" ||
    port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: user.trim(),
      pass: pass.replace(/\s+/g, "").trim(),
    },
  });

  await transporter.sendMail({
    from: from.trim(),
    to: user.trim(),
    subject,
    text,
  });
}
