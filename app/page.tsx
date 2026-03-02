import Image from "next/image";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import EventCard from "@/components/EventCard";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const stats = [
  { value: "50+", label: "Years of Service" },
  { value: "1,500+", label: "Members Statewide" },
  { value: "19", label: "Chapters" },
  { value: "$330K+", label: "Scholarships Awarded" },
];

const programs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Legislative Advocacy",
    description:
      "Our members meet directly with state lawmakers in Sacramento and travel to Washington D.C. with American Agri Women to advocate for California agriculture at both the state and federal level.",
    href: "/programs#advocacy",
    accentColor: "purple" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Agricultural Education",
    description:
      "From AgVenture's 4-month deep-dive program to Agriculture in the Classroom and Supermarket Saturday, we bring agricultural education to communities across California.",
    href: "/programs#education",
    accentColor: "green" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "Scholarships",
    description:
      "We invest in the next generation of agricultural leaders through scholarships for FFA, 4-H, and college students. The Santa Maria Chapter alone has awarded over $330,000 in scholarships.",
    href: "/programs#scholarships",
    accentColor: "gold" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "CWA Foundation",
    description:
      "The CWA Foundation equips next-generation agricultural leaders with education, experiences, and networks. Providing scholarships and leadership programs for young women in agriculture.",
    href: "/foundation",
    accentColor: "blue" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "The Compass Newsletter",
    description:
      "Our official state publication, published four times per year, keeps members, ag organizations, elected officials, and appointed officials informed on CWA news and agricultural issues.",
    href: "/programs#compass",
    accentColor: "green" as const,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Membership",
    description:
      "Open to everyone who believes in a vibrant California agriculture. Our diverse membership includes farmers, ranchers, bankers, lawyers, accountants, marketing professionals, and consumers.",
    href: "/membership",
    accentColor: "purple" as const,
  },
];

const testimonials = [
  {
    quote:
      "We're proud to salute California Women for Agriculture for its great work in promoting our state's farmers and ranchers during its first 50 years. These women have spent countless hours over the years educating consumers and decision-makers alike about the importance of agriculture in the Golden State.",
    name: "Keith H.",
    title: "President and CEO",
    organization: "Fresno Madera Farm Credit",
  },
  {
    quote:
      "As a statewide organization, CWA helps tie together the broad and diverse sectors of California's farming community. Their members learn about different challenges farmers and ranchers have in different parts of the state, and their networking helps spread information about best practices in advocacy.",
    name: "Heather L.",
    title: "Relationship Manager",
    organization: "American AgCredit",
  },
  {
    quote:
      "CWA has done some great work in education, both children and adults. I'm thankful for the work they do and for getting to be a part of projects like AgVenture.",
    name: "Rebecca H.",
    title: "Executive Director",
    organization: "Lake County Farm Bureau",
  },
  {
    quote:
      "I am thankful for such organizations such as CWA that allow and support students like myself to continue higher education.",
    name: "CWA Scholarship Recipient",
    title: "Student",
    organization: "",
  },
];

const upcomingEvents = [
  {
    title: "September SWM and Ag Booster BBQ Fundraiser, Central District",
    date: "September 2025",
    location: "Central District",
    description:
      "CWA's September Statewide Meeting and annual Ag Booster BBQ Fundraiser hosted by the Central District.",
    featured: false,
  },
  {
    title: "November SWM and 50th Anniversary, La Quinta, CA Southern District",
    date: "November 2025",
    location: "La Quinta, CA",
    description:
      "CWA's November Statewide Meeting and 50th Anniversary celebration hosted by the Southern District.",
    featured: true,
  },
  {
    title: "CWA 2026 Annual Meeting, Convention and January SWM",
    date: "January 2026",
    location: "Stockton, CA",
    description:
      "CWA's 2026 Annual Meeting, Convention and January Statewide Meeting in Stockton, CA.",
    featured: false,
  },
];

const sponsors = [
  "AgWest Farm Credit",
  "American AgCredit",
  "CoBank",
  "Colusa-Glenn Farm Credit",
  "Fresno Madera Farm Credit",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Empowering California Agriculture Since 1975"
        title="When Women Speak Together, the World Listens Differently"
        description="California Women For Agriculture is a non-partisan, statewide organization uniting women in and for agriculture to advocate for the industry, educate the public, and invest in the next generation of agricultural leaders."
        primaryCta={{ label: "Join CWA", href: "/membership" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
        bgImage="/images/pexels-zen-chung-5529007.jpg"
      />

      {/* Stats */}
      <StatsBar stats={stats} />

      {/* Mission Section */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              Our Mission
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight mb-6">
              More Than Farming. A Movement.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5 font-sans">
              CWA was founded in 1975 in the Coachella Valley by women who understood that agriculture is California's foundation. Our name was chosen deliberately: we say "for" agriculture, not "in" agriculture, because this mission belongs to everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-sans">
              United, CWA advocates today for the economic sustainability of the diverse California agriculture community so future generations can continue to produce a healthy, diverse food supply.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
              <Button href="/programs" variant="outline">
                Our Programs
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/cawomen-join-us-1024x644.jpg"
                alt="California Women For Agriculture members"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cwa-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-cwa-gold text-cwa-dark rounded-xl px-6 py-4 shadow-xl">
              <p className="font-spartan font-extrabold text-2xl leading-none">50</p>
              <p className="font-spartan font-bold text-sm">Years Strong</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Programs */}
      <SectionWrapper bg="light" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
            Programs That Move Agriculture Forward
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="purple" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-3">
            Voices of CWA
          </p>
          <h2 className="font-spartan font-extrabold text-white text-4xl lg:text-5xl leading-tight">
            What Our Partners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* Events Preview */}
      <SectionWrapper bg="white" py="lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-2">
              Upcoming Events
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
              Upcoming Events
            </h2>
          </div>
          <Button href="/events" variant="outline">
            View All Events
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </SectionWrapper>

      {/* Sponsors */}
      <SectionWrapper bg="light" py="md">
        <div className="text-center mb-10">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-2">
            Our Sponsors
          </p>
          <h2 className="font-spartan font-bold text-cwa-dark text-2xl">
            Supported by Farm Credit for 20+ Years
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-spartan font-semibold text-cwa-dark text-sm text-center">{sponsor}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper bg="dark" py="lg">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-4">
            Be Part of the Change
          </p>
          <h2 className="font-spartan font-extrabold text-white text-4xl lg:text-5xl leading-tight mb-6">
            Ready to Make a Difference for California Agriculture?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-sans">
            Whether you are a farmer, rancher, consumer, or simply someone who believes in a thriving California agriculture, CWA has a place for you. Join 1,500+ members across 19 chapters statewide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/membership" variant="primary" size="lg">
              Join CWA Today
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
