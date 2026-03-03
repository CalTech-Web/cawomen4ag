import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join California Women For Agriculture at upcoming events including the AG Booster BBQ, 50th Anniversary Golden Weekend, annual convention, and May Legislative Days.",
};

const events = [
  {
    title: "September SWM and Ag Booster BBQ Fundraiser, Central District",
    date: "September 2025",
    location: "Central District",
    description:
      "CWA's September Statewide Meeting and the annual Ag Booster BBQ Fundraiser hosted by the Central District.",
    featured: false,
    category: "Meeting",
  },
  {
    title: "November SWM and 50th Anniversary, La Quinta, CA Southern District",
    date: "November 2025",
    location: "La Quinta, CA",
    description:
      "CWA's November Statewide Meeting and 50th Anniversary celebration hosted by the Southern District in La Quinta, CA.",
    featured: true,
    category: "Anniversary",
  },
  {
    title: "AAW 50th Annual Convention, La Quinta",
    date: "La Quinta, CA",
    location: "La Quinta, CA",
    description:
      "The American Agri Women 50th Annual Convention in La Quinta.",
    featured: false,
    category: "Convention",
  },
  {
    title: "CWA 2026 Annual Meeting, Convention and January SWM, Stockton, CA",
    date: "January 2026",
    location: "Stockton, CA",
    description:
      "CWA's 2026 Annual Meeting, Convention and January Statewide Meeting held in Stockton, CA.",
    featured: false,
    category: "Convention",
  },
];

const categoryColors: Record<string, string> = {
  Fundraiser: "bg-cwa-gold/10 text-yellow-700",
  Meeting: "bg-cwa-blue/20 text-blue-800",
  Anniversary: "bg-cwa-purple/10 text-cwa-purple",
  Convention: "bg-cwa-green/10 text-cwa-green",
  Advocacy: "bg-red-50 text-red-700",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        subtitle="Events"
        title="Upcoming Events"
        compact
      />

      {/* Events Grid */}
      <SectionWrapper bg="white" py="lg">
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className={`rounded-xl border ${
                event.featured
                  ? "border-cwa-gold shadow-lg"
                  : "border-gray-200 shadow-sm"
              } bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200`}
            >
              {event.featured && (
                <div className="bg-cwa-gold px-6 py-2">
                  <span className="font-heading font-semibold text-cwa-dark text-xs uppercase tracking-widest">
                    50th Anniversary Featured Event
                  </span>
                </div>
              )}
              <div className="p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-sans font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                          categoryColors[event.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {event.category}
                      </span>
                      <div className="flex items-center gap-2 text-cwa-purple">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-sans font-semibold text-sm">{event.date}</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-cwa-dark text-2xl leading-snug mb-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-cwa-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600 text-sm font-sans">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-sans">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper bg="light" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl mb-4">
            Questions About Events?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
            Contact the CWA state office for more information about upcoming events and statewide meetings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/membership" variant="outline">
              Become a Member
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
