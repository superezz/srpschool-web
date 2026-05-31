import { siteConfig } from "@/lib/siteConfig";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function Results() {
  const { results } = siteConfig;

  return (
    <section id="results" className="section scroll-mt-24 py-20 sm:py-28">
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
        {/* decorative */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-royal-500/15 blur-3xl" />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="kicker">Proven Track Record</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {results.heading}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{results.sub}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <Icon name="trophy" className="h-5 w-5 text-gold-300" />
                Figures shown are placeholders — replace with verified board results.
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {results.highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 90}>
                  <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 text-center">
                    <p className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
                      {h.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-slate-300 sm:text-sm">{h.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
