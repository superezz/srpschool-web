import { siteConfig } from "@/lib/siteConfig";
import Icon from "@/components/Icon";

const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Campus", href: "#gallery" },
  { label: "Enquire", href: "#enquire" },
];

export default function Footer() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery
  )}&output=embed`;

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      {/* Map strip */}
      <div className="section grid grid-cols-1 gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 font-display text-lg font-extrabold text-ink-950">
              {siteConfig.shortName.slice(0, 2)}
            </span>
            <div>
              <p className="font-display text-xl font-bold text-white">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">
                {siteConfig.board} • {siteConfig.grades}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {siteConfig.fullName} — committed to nurturing confident, capable, and caring students
            from {siteConfig.location}.
          </p>

          <address className="mt-6 space-y-3 text-sm not-italic text-slate-300">
            <p className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              {siteConfig.addressFull}
            </p>
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
              className="flex items-center gap-3 hover:text-gold-300"
            >
              <Icon name="phone" className="h-4 w-4 text-gold-300" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-gold-300"
            >
              <Icon name="mail" className="h-4 w-4 text-gold-300" />
              {siteConfig.email}
            </a>
          </address>

          <div className="mt-6 flex items-center gap-3">
            {([
              ["facebook", siteConfig.social.facebook],
              ["instagram", siteConfig.social.instagram],
              ["youtube", siteConfig.social.youtube],
            ] as const).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-gold-400/40 hover:text-gold-300"
              >
                <Icon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-slate-400 transition-colors hover:text-gold-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="lg:col-span-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Find Us
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`${siteConfig.name} location map`}
              src={mapSrc}
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-slate-600">
            Demo site • Replace placeholder content before publishing.
          </p>
        </div>
      </div>
    </footer>
  );
}
