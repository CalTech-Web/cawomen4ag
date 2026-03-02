interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  organization?: string;
}

export default function TestimonialCard({ quote, name, title, organization }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Quote mark */}
      <div className="text-cwa-gold text-5xl font-serif leading-none mb-4 select-none">&ldquo;</div>
      <blockquote className="text-gray-700 leading-relaxed text-base font-sans flex-1 mb-6">
        {quote}
      </blockquote>
      <div className="border-t border-gray-100 pt-5">
        <p className="font-spartan font-bold text-cwa-dark text-base">{name}</p>
        {(title || organization) && (
          <p className="text-gray-500 text-sm mt-0.5">
            {[title, organization].filter(Boolean).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
