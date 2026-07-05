import { Router, type Request, type Response } from "express";
import { Resend } from "resend";

const router = Router();

const defaultContactEmail = "ibrahim.mammad63@gmail.com";

router.post("/contact", async (req: Request, res: Response) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? defaultContactEmail;

  if (!apiKey || !toEmail) {
    if (process.env.NODE_ENV === "production") {
      res.status(500).json({ success: false, error: "Contact form is not configured on the server." });
      return;
    }

    console.info(
      {
        toEmail,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      },
      "Dev contact form submission received without Resend configured",
    );

    res.json({ success: true });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Portfolio Contact from ${name.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#0ea5e9;margin-bottom:4px;">New message from your portfolio</h2>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left:3px solid #0ea5e9;margin:0;padding:12px 16px;background:#f8fafc;border-radius:4px;">
            ${message.trim().replace(/\n/g, "<br>")}
          </blockquote>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
          <p style="color:#94a3b8;font-size:12px;">Sent via your portfolio contact form.</p>
        </div>
      `,
      replyTo: email.trim(),
    });

    if (error) {
      res.status(400).json({ success: false, error: error.message });
      return;
    }

    res.json({ success: true });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Failed to send message. Please try again.",
    });
  }
});

export default router;
