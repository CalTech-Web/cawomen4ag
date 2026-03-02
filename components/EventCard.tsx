import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description?: string;
  featured?: boolean;
}

export default function EventCard({ title, date, location, description, featured = false }: EventCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden border ${featured ? "border-cwa-gold shadow-lg" : "border-gray-200 shadow-sm"} bg-white flex flex-col h-full transition-shadow duration-200 hover:shadow-lg`}>
      {featured && (
        <div className="bg-cwa-gold px-5 py-2">
          <span className="font-spartan font-bold text-cwa-dark text-xs uppercase tracking-widest">Featured Event</span>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {/* Date badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-cwa-purple/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <svg className="w-4 h-4 text-cwa-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-spartan font-semibold text-cwa-purple text-sm">{date}</span>
          </div>
        </div>

        <h3 className="font-spartan font-bold text-cwa-dark text-lg leading-snug mb-3">{title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-cwa-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600 text-sm font-sans">{location}</span>
        </div>

        {description && (
          <p className="text-gray-600 text-sm leading-relaxed flex-1 font-sans">{description}</p>
        )}
      </div>
    </div>
  );
}
