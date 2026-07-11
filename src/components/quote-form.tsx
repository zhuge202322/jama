"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "error";

export function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, sourcePage: window.location.pathname }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ??
            "Your enquiry could not be sent. Please review the form or contact us on WhatsApp.",
        );
      }

      form.reset();
      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your enquiry could not be sent. Please contact us on WhatsApp.",
      );
    }
  }

  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          <span>Company / organisation *</span>
          <input autoComplete="organization" name="company" required type="text" />
        </label>
        <label>
          <span>Work email *</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>Phone / WhatsApp *</span>
          <input autoComplete="tel" name="phone" required type="tel" />
        </label>
        <label>
          <span>Event type *</span>
          <select defaultValue="" name="eventType" required>
            <option disabled value="">
              Select an event type
            </option>
            <option>Corporate event / MICE</option>
            <option>Brand activation / roadshow</option>
            <option>Wedding / private celebration</option>
            <option>Public or seasonal event</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Event date</span>
          <input name="eventDate" type="date" />
        </label>
        <label>
          <span>Venue / area *</span>
          <input name="venue" required type="text" />
        </label>
        <label>
          <span>Expected guests *</span>
          <select defaultValue="" name="expectedGuests" required>
            <option disabled value="">
              Choose an estimate
            </option>
            <option>Under 100</option>
            <option>100–299</option>
            <option>300–599</option>
            <option>600–999</option>
            <option>1,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          <span>Print format</span>
          <select defaultValue="Not sure yet" name="printSize">
            <option>Not sure yet</option>
            <option>A5</option>
            <option>A4</option>
            <option>A3</option>
          </select>
        </label>
        <label>
          <span>Preferred digital delivery</span>
          <select defaultValue="Not sure yet" name="delivery">
            <option>Not sure yet</option>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>QR download</option>
          </select>
        </label>
      </div>

      <label className="form-full">
        <span>Tell us about the event</span>
        <textarea
          maxLength={1800}
          name="message"
          placeholder="Share your theme, schedule, brand requirements or any questions."
          rows={6}
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>

      <label className="consent-row">
        <input name="privacyConsent" required type="checkbox" value="accepted" />
        <span>
          I agree that Lumina Voyage may use these details to respond to my
          enquiry, as described in the <a href="/privacy">privacy policy</a>.
        </span>
      </label>

      {status === "error" ? (
        <p className="form-error" role="alert">
          {message}
        </p>
      ) : null}

      <button
        className="button button-primary form-submit"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? (
          <LoaderCircle aria-hidden="true" className="spin" size={19} />
        ) : (
          <Send aria-hidden="true" size={18} />
        )}
        <span>{status === "submitting" ? "Sending enquiry" : "Send enquiry"}</span>
      </button>
    </form>
  );
}
