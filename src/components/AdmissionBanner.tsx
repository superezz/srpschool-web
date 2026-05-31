import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

export default function AdmissionBanner() {
  if (!siteConfig.admission.open) return null;

  const applyUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I want to apply for admission ${siteConfig.admission.year}. Please share the process and fee details.`
  );

  const items = [
    siteConfig.admission.headline,
    siteConfig.admission.offerNote,
    `${siteConfig.grades} • ${siteConfig.board}`,
    "Limited seats — enquire today",
  ];

  return (
    <section className="relative z-10 border-y border-gold-400/20 bg-gradient-to-r from-gold-500/10 via-gold-400/5 to-gold-500/10">
      <div className="section flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between">
        {/* Marquee */}
        <div className="relative w-full overflow-hidden sm:max-w-[70%]">
          <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
            {[...items, ...items].map((text, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-200"
              >
                <Icon name="star" className="h-4 w-4 text-gold-400" />
                {text}
              </span>
            ))}
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ink-950 to-transparent" />
        </div>

        <a
          href={applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Apply for {siteConfig.admission.year}
        </a>
      </div>
    </section>
  );
}
