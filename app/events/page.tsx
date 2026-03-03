import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import EventCard from "@/components/EventCard";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join California Women For Agriculture at upcoming events including the March Statewide Meeting in Carpinteria, May Legislative Days, and more.",
};

const events = [
  {
    title: "March Statewide Meeting: Rooted in the Valley",
    date: "March 6-8, 2026",
    location: "Carpinteria, CA",
    description:
      "From Mountain Farms to Coastal Fields. Tours, lunch, dinner, and SWM hosted by the Carpinteria/Santa Barbara Chapter.",
    featured: true,
    category: "Meeting",
  },
  {
    title: "May Legislative Days",
    date: "May 4-5, 2026",
    location: "Sacramento, CA",
    description:
      "CWA's annual two-day legislative event in Sacramento, meeting directly with state lawmakers to advocate for California agriculture. Includes 10 scholarship presentations.",
    featured: false,
    category: "Advocacy",
  },
  {
    title: "September SWM and Ag Booster BBQ Fundraiser",
    date: "September 2026",
    location: "TBD",
    description:
      "CWA's September Statewide Meeting and the annual Ag Booster BBQ Fundraiser. Location and details to be announced.",
    featured: false,
    category: "Meeting",
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

      {/* Featured Event: March SWM */}
      <SectionWrapper bg="white" py="lg">
        <FadeIn>
          <div className="rounded-2xl border-2 border-cwa-gold bg-white overflow-hidden shadow-lg">
            <div className="bg-cwa-gold px-6 py-3">
              <span className="font-heading font-semibold text-cwa-dark text-sm uppercase tracking-widest">
                Featured Event
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <p className="font-sans font-semibold text-cwa-purple text-xs uppercase tracking-widest mb-3">
                  March 6-8, 2026
                </p>
                <h2 className="font-heading font-semibold text-cwa-dark text-3xl leading-tight mb-2">
                  Rooted in the Valley
                </h2>
                <p className="font-heading text-cwa-dark/70 text-lg italic mb-6">
                  From Mountain Farms to Coastal Fields
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm mb-2">Schedule</h3>
                    <ul className="space-y-1.5 text-gray-600 text-sm font-sans">
                      <li><strong>3/6:</strong> Welcome Social & Swag Pick Up (No Host)</li>
                      <li><strong>3/7:</strong> Tours & Lunch ($25) | Dinner ($50) | Executive Meeting</li>
                      <li><strong>3/8:</strong> SWM In Person ($50) | SWM Virtual/Zoom ($15)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm mb-2">Hotel</h3>
                    <p className="text-gray-600 text-sm font-sans">
                      Holiday Inn Express & Suites<br />
                      5606 Carpinteria Avenue, Carpinteria, CA 93013<br />
                      (805) 566-9499
                    </p>
                    <p className="text-gray-500 text-sm font-sans mt-1">
                      $169.99/night (1 King or 2 Queens)<br />
                      Reserve by phone: 888-409-8300, Group Block ID: 315174
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm mb-2">Host Chapter</h3>
                    <p className="text-gray-600 text-sm font-sans">
                      Carpinteria/Santa Barbara Chapter<br />
                      <a href="mailto:carpinteriacwa@gmail.com" className="text-cwa-purple hover:underline">carpinteriacwa@gmail.com</a> | (805) 331-5377
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative bg-cwa-cream flex items-center justify-center p-6 lg:p-8">
                <Image
                  src="/images/CWA-State-Meeting-Registration-Flyer.jpg.webp"
                  alt="March 2026 Statewide Meeting Registration Flyer"
                  width={500}
                  height={700}
                  className="rounded-lg shadow-md w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* All Events */}
      <SectionWrapper bg="light" py="lg">
        <div className="mb-8">
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl">All Upcoming Events</h2>
        </div>
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
