export const siteConfig = {
  name: "Lumina Voyage",
  legalName: "Lumina Voyage Tech Pte. Ltd.",
  description:
    "Custom photo booth experiences for corporate events, MICE, brand activations and celebrations in Singapore.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "photo88@luminavoyagetech.com",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "658148399",
  whatsappLabel: "65-8148399",
  address:
    "101 Cecil Street, #13-10, Tong Eng Building, Singapore 069533",
  instagram: "https://www.instagram.com/luminavoyagetech/",
  tiktok:
    process.env.NEXT_PUBLIC_TIKTOK_URL ??
    "https://www.tiktok.com/@luminavoyage",
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL ??
    "https://www.facebook.com/luminavoyagetech",
};

export const navItems = [
  { href: "/newspaper-photo-booth", label: "Photo Booth" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "For events" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
];

export const latestUpdates = [
  {
    label: "Location update",
    title: "Lumina Voyage across Singapore",
    description:
      "Find our photo booth experiences at Changi Airport, Westgate Mall, CityLink Mall, Tiong Bahru Plaza and Haji Lane.",
    href: "/#locations",
  },
  {
    label: "Edition spotlight",
    title: "Marina Bay and Jewel editions",
    description:
      "Explore two new Singapore-inspired newspaper layouts featuring destinations guests instantly recognise.",
    href: "/gallery",
  },
];

export const eventTypes = [
  {
    slug: "corporate-mice",
    title: "Corporate & MICE",
    shortTitle: "Corporate & MICE",
    description:
      "Give delegates a personalised takeaway that carries your event identity far beyond the venue.",
    detail:
      "Ideal for conferences, exhibitions, gala dinners, D&Ds and company celebrations where smooth guest flow and polished brand presentation matter.",
    accent: "forest",
  },
  {
    slug: "brand-activations",
    title: "Brand activations",
    shortTitle: "Brand activations",
    description:
      "Turn campaign messages into headline moments guests will photograph, share and keep.",
    detail:
      "Custom mastheads, campaign headlines, QR destinations and branded interfaces make the experience part of your activation, not an add-on.",
    accent: "orange",
  },
  {
    slug: "roadshows-public-events",
    title: "Roadshows & public events",
    shortTitle: "Roadshows",
    description:
      "Create a visible crowd-puller with an output that is immediate, personal and easy to share.",
    detail:
      "Suitable for mall activations, tourism experiences, festive programmes and public-facing events with repeatable templates and clear guest guidance.",
    accent: "teal",
  },
  {
    slug: "weddings-celebrations",
    title: "Weddings & celebrations",
    shortTitle: "Celebrations",
    description:
      "Make friends and family the story with a keepsake designed around your date, venue and personality.",
    detail:
      "A playful alternative to a conventional photo strip for weddings, anniversaries, birthdays and private parties.",
    accent: "cream",
  },
];

export const guestSteps = [
  {
    number: "01",
    title: "Step into frame",
    description:
      "Friendly on-screen guidance helps guests compose their shot quickly and confidently.",
  },
  {
    number: "02",
    title: "Make the front page",
    description:
      "Their photo is placed into the event's custom masthead, headline and editorial layout.",
  },
  {
    number: "03",
    title: "Collect the print",
    description:
      "A newspaper-style keepsake is produced on site, ready to hold, display and take home.",
  },
  {
    number: "04",
    title: "Share the moment",
    description:
      "A digital copy can be delivered through the sharing method agreed for the event.",
  },
];

export const projectSteps = [
  {
    number: "01",
    title: "Tell us about the event",
    description:
      "Share your date, venue, audience, brand guidelines and the result you want guests to remember.",
  },
  {
    number: "02",
    title: "Shape the story",
    description:
      "We design the masthead, headlines, layouts, interface and sharing journey around your brief.",
  },
  {
    number: "03",
    title: "Prepare and test",
    description:
      "The equipment, print output and event content are checked before the experience goes live.",
  },
  {
    number: "04",
    title: "Run the experience",
    description:
      "Our team supports setup and on-site delivery so guests can focus on enjoying the moment.",
  },
];

export const customisationItems = [
  {
    title: "Masthead & logo",
    description:
      "Build your event name or brand identity into the most recognisable part of the front page.",
  },
  {
    title: "Headlines & copy",
    description:
      "Use campaign messages, guest names, dates, locations and playful editorial details.",
  },
  {
    title: "Layouts & themes",
    description:
      "Create single or group formats, destination stories, festive editions and event-specific art direction.",
  },
  {
    title: "Digital journey",
    description:
      "Plan digital delivery, QR destinations and sharing messages around your event requirements.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: "Prints" | "Booths" | "Concepts";
  orientation: "portrait" | "landscape";
  note: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/haji-lane-sample.jpg",
    alt: "Haji Lane newspaper-style photo print with two guests",
    title: "Haji Lane Gazette",
    category: "Prints",
    orientation: "portrait",
    note: "Product sample",
  },
  {
    src: "/images/cny-sample.jpg",
    alt: "Chinese New Year themed newspaper photo print",
    title: "Lunar New Year edition",
    category: "Prints",
    orientation: "portrait",
    note: "Product sample",
  },
  {
    src: "/images/green-booths-photo.jpg",
    alt: "Two green and white Lumina Voyage newspaper photo booths",
    title: "Lumina Voyage booth",
    category: "Booths",
    orientation: "portrait",
    note: "Equipment view",
  },
  {
    src: "/images/yellow-booth-photo.jpg",
    alt: "Yellow newspaper photo booth with screen, camera and print opening",
    title: "On-site booth format",
    category: "Booths",
    orientation: "portrait",
    note: "Equipment reference",
  },
  {
    src: "/images/haji-lane-template.png",
    alt: "Editorial Haji Lane Singapore newspaper design template",
    title: "Destination editorial",
    category: "Concepts",
    orientation: "portrait",
    note: "Concept design",
  },
  {
    src: "/images/yellow-booth-render.png",
    alt: "Front view concept render of a newspaper photo booth",
    title: "Branded booth concept",
    category: "Concepts",
    orientation: "portrait",
    note: "Concept render",
  },
];

export const faqs = [
  {
    question: "What is a newspaper photo booth?",
    answer:
      "It is an on-site photo experience that turns each guest's portrait into a custom newspaper-style front page, with a physical print and an optional digital copy.",
  },
  {
    question: "What can be customised?",
    answer:
      "The masthead, headlines, colours, logos, supporting copy, layouts, event date, QR destination, booth interface and delivery message can be planned around your brief. The final scope is confirmed in your proposal.",
  },
  {
    question: "Which events is it suitable for?",
    answer:
      "The experience works well for corporate events, MICE, exhibitions, brand activations, gala dinners, roadshows, weddings and private celebrations.",
  },
  {
    question: "How quickly are prints produced?",
    answer:
      "Production speed depends on the selected format and event configuration. We will confirm the expected guest flow and print time when preparing your event plan.",
  },
  {
    question: "How do guests receive a digital copy?",
    answer:
      "Digital delivery can be configured around the event's needs. Available channels and any venue network requirements are confirmed before the event.",
  },
  {
    question: "Are setup and on-site support included?",
    answer:
      "We scope equipment delivery, setup, testing and on-site support for each event. Your quotation will state exactly what is included.",
  },
  {
    question: "What does the venue need to provide?",
    answer:
      "We will confirm the required footprint, access window, power point, internet connection and any table or queueing needs after reviewing the venue.",
  },
  {
    question: "How early should we enquire?",
    answer:
      "Contact us as soon as your event date is known, especially for large events or highly customised artwork. Availability is confirmed only when the booking is secured.",
  },
  {
    question: "Can guest photos be used for marketing?",
    answer:
      "Guest images are handled according to the agreed event purpose and our privacy terms. We do not use event images for marketing without the necessary permission.",
  },
];

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hello Lumina Voyage, I would like to enquire about a photo booth experience for an event.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
