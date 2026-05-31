import { siteConfig } from "@/lib/siteConfig";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export default function Gallery() {
  return (
    <section id="gallery" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        kicker="Life at Campus"
        title={
          <>
            A glimpse of our <span className="text-gradient-gold">vibrant campus</span>
          </>
        }
        subtitle="Replace these tiles with real photos of your building, classrooms, events, and students to bring the page to life."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {siteConfig.gallery.map((g, i) => (
          <Reveal
            key={g.note}
            delay={(i % 3) * 80}
            className={i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}
          >
            <figure
              className={`group relative h-full min-h-[10rem] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${g.tone} ${
                i === 0 ? "sm:min-h-[16rem] lg:min-h-[24rem]" : "sm:min-h-[12rem]"
              }`}
            >
              {/* placeholder pattern */}
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center opacity-40 transition-opacity group-hover:opacity-60">
                <Icon name="sparkles" className="h-10 w-10 text-white/70" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4 text-sm font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                {g.note}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
