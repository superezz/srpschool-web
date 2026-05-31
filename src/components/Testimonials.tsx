import { siteConfig } from "@/lib/siteConfig";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export default function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(242,189,77,0.1),transparent_70%)]" />
      <div className="section">
        <SectionHeading
          center
          kicker="Loved by Parents"
          title={
            <>
              What our <span className="text-gradient-gold">families say</span>
            </>
          }
          subtitle="Real stories of trust, growth, and care. (Placeholder quotes — replace with genuine parent testimonials.)"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <div className="flex gap-1 text-gold-300">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 font-display text-sm font-bold text-ink-950">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-slate-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
