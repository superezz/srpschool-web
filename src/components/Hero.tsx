import { siteConfig } from "@/lib/siteConfig";
import { quickEnquiryUrl, buildWhatsAppUrl } from "@/lib/whatsapp";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const { hero } = siteConfig;

  const visitUrl = buildWhatsAppUrl(
    `Hello ${siteConfig.name}, I'd like to book a campus visit. Please share available dates.`
  );

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Layered cinematic background. Replace the gradient layer with a real
          campus photo later: add an <img> / next/image with object-cover and
          keep the dark overlay below for text contrast. */}
      <div className="absolute inset-0 -z-20 bg-spotlight" />
      <div className="absolute inset-0 -z-20 animate-kenburns bg-[radial-gradient(40%_60%_at_70%_30%,rgba(124,140,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.5]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-950" />

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-32 -z-10 h-72 w-72 rounded-full bg-royal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" />

      <div className="section grid min-h-[100svh] grid-cols-1 items-center gap-12 pb-20 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-8">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              {hero.kicker}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {hero.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === hero.titleLines.length - 1 ? (
                    <span className="text-gradient-gold">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={quickEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                {hero.primaryCta}
              </a>
              <a href={visitUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {hero.secondaryCta}
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-gold-300" />
                {siteConfig.board} curriculum
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-gold-300" />
                {siteConfig.grades}
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-gold-300" />
                Safe transport
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: floating cinematic card */}
        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <div className="relative mx-auto max-w-md">
              {/* Main image placeholder card */}
              <div className="animate-float relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 shadow-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,140,255,0.35),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(242,189,77,0.25),transparent_50%)]" />
                <div className="absolute inset-0 grid place-items-center p-8 text-center">
                  <div>
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                      <Icon name="trophy" className="h-10 w-10 text-gold-300" />
                    </div>
                    <p className="mt-5 font-display text-2xl font-semibold text-white">
                      Nurturing future leaders
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Photo placeholder — drop a real campus / classroom image here.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat chip */}
              <div className="glass absolute -bottom-5 -left-5 hidden rounded-2xl px-5 py-4 shadow-card sm:block">
                <p className="font-display text-2xl font-bold text-gold-300">
                  {siteConfig.stats[2].value}
                </p>
                <p className="text-xs text-slate-300">{siteConfig.stats[2].label}</p>
              </div>

              {/* Floating admission chip */}
              <div className="glass absolute -right-4 top-6 hidden rounded-xl px-4 py-2 text-xs font-semibold text-gold-200 shadow-card sm:block">
                Admissions {siteConfig.admission.year} open
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
