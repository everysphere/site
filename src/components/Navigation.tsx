import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Navigation() {
  const { brand, nav } = site;

  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-8 py-6">
      <a
        href="#"
        className="text-3xl tracking-tight text-foreground"
        style={displayFont}
      >
        {brand.name}
        {brand.mark ? <sup className="text-xs">{brand.mark}</sup> : null}
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={
              link.active
                ? "text-sm text-foreground transition-colors"
                : "text-sm text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button
        variant="glass"
        size="none"
        className="rounded-full px-6 py-2.5 text-sm text-foreground transition-all hover:scale-[1.03]"
      >
        {nav.cta}
      </Button>
    </nav>
  );
}
