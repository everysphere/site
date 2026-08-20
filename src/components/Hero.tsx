import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Hero() {
  const { headline, subtext, cta } = site.hero;

  return (
    <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[90px] pb-40 pt-32 text-center">
      <h1
        className="max-w-7xl animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
        style={displayFont}
      >
        {headline.map((segment, index) =>
          segment.muted ? (
            <em key={index} className="not-italic text-muted-foreground">
              {segment.text}
            </em>
          ) : (
            <span key={index}>{segment.text}</span>
          ),
        )}
      </h1>

      <p className="mt-8 max-w-2xl animate-fade-rise-delay text-base leading-relaxed text-muted-foreground sm:text-lg">
        {subtext}
      </p>

      <Button
        variant="glass"
        size="none"
        className="mt-12 animate-fade-rise-delay-2 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-all hover:scale-[1.03]"
      >
        {cta}
      </Button>
    </section>
  );
}
