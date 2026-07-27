# Lumina Voyage Website

Next.js marketing website for Lumina Voyage's newspaper photo booth and experiential event services in Singapore.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local`. Public contact and social links have client-provided defaults and can be overridden through the documented `NEXT_PUBLIC_*` variables. Production enquiry delivery uses Gmail SMTP and requires the documented `SMTP_*`, `CONTACT_TO_EMAIL`, and `EMAIL_FROM` variables.

### Production enquiry email

The contact form sends enquiries server-side through Gmail SMTP. To enable real
delivery, turn on two-step verification for the sending Google account and
create a 16-character Google App Password. Do not use the normal Gmail login
password.

Add these environment variables to the Vercel project for Production and
Preview:

```bash
CONTACT_TO_EMAIL=photo88@luminavoyagetech.com
EMAIL_FROM=Lumina Voyage Website <your-gmail-address@gmail.com>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your_16_character_google_app_password
```

Redeploy the project after saving the variables.

Gmail may replace the visible From address with the authenticated `SMTP_USER`.
Enquiries are sent to `CONTACT_TO_EMAIL`, and the visitor's email address is
set as the Reply-To address so the business can reply directly from its inbox.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The business and content baseline is documented in `LUMINA_VOYAGE_WEBSITE_SPEC.md`.
