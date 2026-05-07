import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "FORME Agency API is live" });
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, project } = req.body;
    console.log(`Received inquiry from ${name} (${email}): ${project}`);
    
    // Check if email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Email credentials not found in environment. Inquiry logged to console but not sent.");
      return res.json({ 
        success: true, 
        message: "Inquiry received (Development Mode: Set EMAIL_USER/EMAIL_PASS to receive emails)" 
      });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name} | FORME Agency`,
      text: `
        New project inquiry from FORME Agency website:
        
        Name: ${name}
        Email: ${email}
        
        Details:
        ${project}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #050505;">
          <h1 style="font-size: 24px; border-bottom: 2px solid #050505; padding-bottom: 10px;">New Inquiry</h1>
          <p style="margin-top: 20px;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 30px; background: #f8f8f8; padding: 20px; border-radius: 4px;">
            <p style="margin-top: 0; font-weight: bold;">Project Details:</p>
            <p style="white-space: pre-wrap;">${project}</p>
          </div>
          <p style="font-size: 10px; color: #555; margin-top: 40px; text-transform: uppercase; letter-spacing: 2px;">
            Sent from FORME Agency Website
          </p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Inquiry received and email notification sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Still return success to user so they don't see an error, but log it server-side
      res.json({ 
        success: true, 
        message: "Inquiry received (Server error sending notification, but logged to console)" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
