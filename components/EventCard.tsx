interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description?: string;
  featured?: boolean;
  category?: string;
}

export default function EventCard({ title, date, location, description, featured = false }: EventCardProps) {
  return (
    <div className={`bg-white rounded-xl border overflow-hidden h-full flex flex-col transition-all duration-200 hover:border-cwa-purple/30 ${
      featured ? "border-cwa-gold/40" : "border-gray-100/80"
    }`}>
      <div className="p-7 flex-1 flex flex-col">
        <time className="font-heading text-cwa-purple text-lg font-semibold mb-2">{date}</time>
        <h3 className="font-heading font-semibold text-cwa-dark text-xl leading-snug mb-3">{title}</h3>
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm font-sans">{location}</span>
        </div>
        {description && <p className="text-gray-500 text-[15px] leading-relaxed flex-1">{description}</p>}
        {featured && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-cwa-gold font-sans font-semibold text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cwa-gold" />
            Featured Event
          </span>
        )}
      </div>
    </div>
  );
}
