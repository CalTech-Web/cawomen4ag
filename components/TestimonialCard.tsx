interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  organization?: string;
}

export default function TestimonialCard({ quote, name, title, organization }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col h-full">
      <blockquote className="font-heading text-white/90 text-lg leading-relaxed italic flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-cwa-gold/20 flex items-center justify-center">
          <span className="font-heading font-bold text-cwa-gold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-sans font-semibold text-white text-sm">{name}</p>
          {(title || organization) && (
            <p className="text-white/50 text-xs mt-0.5">
              {[title, organization].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
