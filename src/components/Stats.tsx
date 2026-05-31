import { siteConfig } from "@/lib/siteConfig";
import Reveal from "@/components/Reveal";

export default function Stats() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {siteConfig.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
