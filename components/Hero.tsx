import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgImage?: string;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  bgImage,
  compact = false,
}: HeroProps) {
  return (
    <div
      className={`relative w-full ${compact ? "min-h-[40vh]" : "min-h-[80vh]"} flex items-center overflow-hidden`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cwa-dark/95 via-cwa-purple/85 to-cwa-green/60" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cwa-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cwa-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`${compact ? "py-16" : "py-24 lg:py-32"} max-w-3xl`}>
          {subtitle && (
            <p className="font-spartan font-semibold text-cwa-gold text-sm sm:text-base uppercase tracking-widest mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="font-spartan font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-sans">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
