import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export default function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-24 py-20 sm:py-28">
      {/* soft section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(91,108,255,0.12),transparent_70%)]" />

      <div className="section">
        <SectionHeading
          kicker="Academics • Nursery to Class 12"
          title={
            <>
              One campus for the <span className="text-gradient-royal">whole journey</span>
            </>
          }
          subtitle="A connected learning path from the very first day of school to board examinations — no need to change schools as your child grows."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {siteConfig.programs.map((p, i) => {
            const url = buildWhatsAppUrl(
              `Hello ${siteConfig.name}, I'd like admission details for ${p.name} (${p.grades}).`
            );
            return (
              <Reveal key={p.name} delay={(i % 2) * 100}>
                <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-royal-400/40">
                  <div className="absolute right-6 top-6 font-display text-6xl font-bold text-white/5 transition-colors group-hover:text-white/10">
                    0{i + 1}
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-royal-400/30 bg-royal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-royal-400">
                    {p.grades}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>

                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-slate-200">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-gold-300" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
                  >
                    Enquire about {p.name}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
