import { siteConfig } from "@/lib/siteConfig";

/**
 * Build a click-to-chat WhatsApp URL with a pre-filled message.
 * Works on both mobile and desktop (wa.me). No backend required — the parent's
 * own WhatsApp opens with the message ready to send to the school.
 */
export function buildWhatsAppUrl(message: string): string {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** A generic enquiry opener used by header / hero buttons. */
export function quickEnquiryUrl(): string {
  return buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I would like to know more about admissions for ${siteConfig.admission.year}.`
  );
}
