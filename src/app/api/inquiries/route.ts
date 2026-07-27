import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(140),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(7).max(40),
  eventType: z.string().trim().min(2).max(100),
  eventDate: z.string().trim().max(30).optional().default("Not confirmed"),
  venue: z.string().trim().min(2).max(180),
  expectedGuests: z.string().trim().min(2).max(50),
  printSize: z.string().trim().max(50).optional().default("Not sure yet"),
  delivery: z.string().trim().max(50).optional().default("Not sure yet"),
  message: z.string().trim().max(1800).optional().default(""),
  privacyConsent: z.literal("accepted"),
  sourcePage: z.string().trim().max(200).optional().default("/contact"),
  website: z.string().max(0).optional().default(""),
});

const requestLog = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const SMTP_TIMEOUT_MS = 10_000;
const DEFAULT_CONTACT_EMAIL = "photo88@luminavoyagetech.com";

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function cleanSubjectPart(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function getRecipients() {
  return (process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_EMAIL)
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function getMailConfig() {
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number.parseInt(process.env.SMTP_PORT ?? "465", 10);
  const secure = (process.env.SMTP_SECURE ?? "true") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipients = getRecipients();

  if (!user || !pass || !Number.isInteger(port) || recipients.length === 0) {
    return null;
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    recipients,
    from: process.env.EMAIL_FROM ?? `Lumina Voyage Website <${user}>`,
  };
}

export async function POST(request: Request) {
  const clientKey =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous";

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        message:
          "Too many enquiries were sent from this connection. Please wait a few minutes or contact us on WhatsApp.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The enquiry could not be read. Please reload and try again." },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message:
          "Please complete all required fields with valid contact and event details.",
      },
      { status: 400 },
    );
  }

  const mailConfig = getMailConfig();

  if (!mailConfig) {
    return NextResponse.json(
      {
        message:
          "Online enquiry delivery is not configured yet. Please contact Lumina Voyage by email or WhatsApp.",
      },
      { status: 503 },
    );
  }

  const data = parsed.data;
  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone],
    ["Event type", data.eventType],
    ["Event date", data.eventDate || "Not confirmed"],
    ["Venue", data.venue],
    ["Expected guests", data.expectedGuests],
    ["Print format", data.printSize],
    ["Digital delivery", data.delivery],
    ["Source page", data.sourcePage],
  ];

  const html = `
    <div style="margin:0;background:#f5f7f5;padding:32px 16px;color:#132e29;font-family:Arial,sans-serif">
      <div style="margin:0 auto;max-width:680px;border:1px solid #d7e2dc;background:#ffffff;padding:32px">
        <p style="margin:0 0 8px;color:#0f6659;font-size:13px;font-weight:700;text-transform:uppercase">Lumina Voyage website</p>
        <h1 style="margin:0 0 24px;font-size:28px">New event enquiry</h1>
        <table cellpadding="10" cellspacing="0" style="width:100%;border-collapse:collapse;border:1px solid #d7e2dc">
          ${rows
            .map(
              ([label, value]) =>
                `<tr><th align="left" style="width:34%;border-bottom:1px solid #d7e2dc;background:#f5f7f5">${escapeHtml(label)}</th><td style="border-bottom:1px solid #d7e2dc">${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <h2 style="margin:28px 0 10px;font-size:20px">Event notes</h2>
        <p style="margin:0;line-height:1.6">${escapeHtml(data.message || "No additional notes").replace(/\n/g, "<br>")}</p>
        <p style="margin:28px 0 0;color:#61706c;font-size:13px">Reply to this email to contact ${escapeHtml(data.name)} at ${escapeHtml(data.email)}.</p>
      </div>
    </div>
  `;

  const text = [
    "New Lumina Voyage event enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Event notes:",
    data.message || "No additional notes",
    "",
    `Reply to: ${data.name} <${data.email}>`,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass,
    },
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout: SMTP_TIMEOUT_MS,
    socketTimeout: SMTP_TIMEOUT_MS,
  });

  try {
    const result = await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.recipients,
      replyTo: {
        name: data.name,
        address: data.email,
      },
      subject: `Event enquiry: ${cleanSubjectPart(data.company)} · ${cleanSubjectPart(data.eventType)}`,
      html,
      text,
    });

    if (result.accepted.length === 0) {
      throw new Error("The SMTP server did not accept any recipients.");
    }
  } catch (error) {
    const smtpError = error as {
      code?: string;
      command?: string;
      message?: string;
      responseCode?: number;
    };
    console.error("SMTP enquiry delivery failed", {
      code: smtpError.code,
      command: smtpError.command,
      responseCode: smtpError.responseCode,
      error: error instanceof Error ? error.message : "Unknown email error",
    });
    return NextResponse.json(
      {
        message:
          "The enquiry service is temporarily unavailable. Please try again or contact us on WhatsApp.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
