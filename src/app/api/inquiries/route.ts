import { NextResponse } from "next/server";
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !to || !from) {
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
    <h1>New Lumina Voyage event enquiry</h1>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d7e2dc">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <h2>Event notes</h2>
    <p>${escapeHtml(data.message || "No additional notes").replace(/\n/g, "<br>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Event enquiry: ${data.company} · ${data.eventType}`,
      html,
    }),
  });

  if (!response.ok) {
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
