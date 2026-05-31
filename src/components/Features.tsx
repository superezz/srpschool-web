import { siteConfig } from "@/lib/siteConfig";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export default function Features() {
  return (
    <section id="why" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        kicker="Why Parents Choose Us"
        title={
          <>
            A school built around <span className="text-gradient-gold">your child&apos;s growth</span>
          </>
        }
        subtitle="Everything we do is designed to help children learn with confidence, stay safe, and grow into well-rounded individuals."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 90}>
            <article className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30 hover:shadow-card sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-400/20 to-royal-500/20 text-gold-300 ring-1 ring-white/10 transition-colors group-hover:text-gold-200">
                <Icon name={f.icon as never} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
