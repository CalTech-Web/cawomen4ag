import Image from "next/image";
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
  if (!compact) {
    return (
      <section className="relative w-full min-h-screen flex items-end">
        {bgImage && (
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {!bgImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-cwa-dark via-cwa-purple to-cwa-dark" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-cwa-dark via-cwa-dark/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 lg:pb-28 pt-40 w-full">
          {subtitle && (
            <p className="font-sans font-semibold text-cwa-gold text-xs uppercase tracking-[0.25em] mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] mb-6 max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-sans font-light">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-5">
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
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center text-center">
      {bgImage && (
        <>
          <Image src={bgImage} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-cwa-dark/90 to-cwa-purple/80" />
        </>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-cwa-dark to-cwa-purple" />
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-65">
        {subtitle && (
          <p className="font-sans font-semibold text-cwa-gold text-xs uppercase tracking-[0.25em] mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-white/75 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-sans">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" size="md">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="md">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
