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
    title: "48th Annual AG Booster BBQ",
    date: "September 7, 2025",
    location: "Fresno, CA",
    description:
      "Our flagship annual fundraiser brings the agricultural community together for an evening of food, celebration, and support for CWA's education and advocacy programs. All proceeds benefit CWA's statewide programs.",
    featured: false,
    category: "Fundraiser",
  },
  {
    title: "September Statewide Meeting",
    date: "September 2025",
    location: "TBD (in-person and virtual)",
    description:
      "CWA's fall statewide meeting open to all members. Attend in person or join virtually. Agenda includes legislative updates, program reports, and chapter news from across California.",
    featured: false,
    category: "Meeting",
  },
  {
    title: "50th Anniversary Golden Weekend Celebration",
    date: "November 7-9, 2025",
    location: "Embassy Suites, La Quinta, CA",
    description:
      "A landmark three-day celebration marking CWA's 50th anniversary. Join founding members, current leaders, and the entire CWA family for a Golden Weekend honoring five decades of empowering California agriculture. The celebration included a tribute to founding member Cherry Ishimatsu, who celebrated her 100th birthday.",
    featured: true,
    category: "Anniversary",
  },
  {
    title: "Convention and Annual Meeting: Agriculture: California's Gold",
    date: "January 9-11, 2026",
    location: "Manteca, CA",
    description:
      "CWA's annual convention and statewide meeting. The theme for 2026 is \"Agriculture: California's Gold.\" Join members from across the state for elections, legislative briefings, program showcases, awards, and networking.",
    featured: false,
    category: "Convention",
  },
  {
    title: "May Legislative Days",
    date: "May 4-5, 2026",
    location: "Sacramento, CA",
    description:
      "CWA's annual two-day advocacy event at the State Capitol. Members meet directly with California legislators to advocate for the agricultural industry. Ten scholarships are awarded during this event. Attendance scholarships available through the CWA Foundation.",
    featured: false,
    category: "Advocacy",
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
        title="Join Us at These Upcoming Events"
        description="From fundraisers to the State Capitol, CWA events are where advocacy meets community. Members across California's 19 chapters gather to advocate, celebrate, and connect."
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
                  <span className="font-spartan font-bold text-cwa-dark text-xs uppercase tracking-widest">
                    50th Anniversary Featured Event
                  </span>
                </div>
              )}
              <div className="p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-spartan font-bold uppercase tracking-wide px-3 py-1 rounded-full ${
                          categoryColors[event.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {event.category}
                      </span>
                      <div className="flex items-center gap-2 text-cwa-purple">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-spartan font-semibold text-sm">{event.date}</span>
                      </div>
                    </div>
                    <h3 className="font-spartan font-bold text-cwa-dark text-2xl leading-snug mb-3">
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

      {/* Stay Informed */}
      <SectionWrapper bg="light" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-spartan font-extrabold text-cwa-dark text-3xl mb-4">
            Never Miss a CWA Event
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
            Subscribe to The Compass Newsletter to receive quarterly event announcements, legislative updates, and CWA news delivered directly to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/membership" variant="primary">
              Become a Member
            </Button>
            <Button href="/contact" variant="outline">
              Contact for Event Info
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Scholarship CTA */}
      <SectionWrapper bg="purple" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-3">
            Capitol Advocacy Scholarship
          </p>
          <h2 className="font-spartan font-extrabold text-white text-3xl mb-4">
            First-Time Attendee Scholarship Available
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-6 font-sans">
            Are you a CWA member who has never attended CWA's State Capitol Advocacy Event? The CWA Foundation offers a $300 scholarship to help defray lodging and travel costs to attend May Legislative Days in Sacramento.
          </p>
          <Button href="/foundation" variant="primary">
            Learn About the Foundation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
