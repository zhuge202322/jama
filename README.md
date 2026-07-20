# Lumina Voyage Website

Next.js marketing website for Lumina Voyage's newspaper photo booth and experiential event services in Singapore.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local`. Public contact and social links have client-provided defaults and can be overridden through the documented `NEXT_PUBLIC_*` variables. Production enquiry delivery requires `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `EMAIL_FROM`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The business and content baseline is documented in `LUMINA_VOYAGE_WEBSITE_SPEC.md`.
