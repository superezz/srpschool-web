import Reveal from "@/components/Reveal";

type Props = {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({ kicker, title, subtitle, center }: Props) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
