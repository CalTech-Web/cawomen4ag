import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join California Women For Agriculture. Open to everyone who supports a vibrant California agriculture. Student memberships start at $26.50/year.",
};

const tiers = [
  {
    name: "Student",
    price: "$26.50",
    period: "per year",
    description: "Perfect for FFA, 4-H, and college students pursuing careers in agriculture.",
    features: [
      "Full membership access",
      "Compass Newsletter subscription",
      "Event invitations and discounts",
      "Scholarship eligibility",
      "Chapter membership",
      "Member networking opportunities",
    ],
    cta: "Join as Student",
    highlighted: false,
    color: "green",
  },
  {
    name: "Regular",
    price: "$41.50",
    period: "per year",
    description: "For professionals, advocates, and anyone who believes in California agriculture.",
    features: [
      "Full membership access",
      "Compass Newsletter subscription",
      "Event invitations and discounts",
      "Voting rights at meetings",
      "Chapter membership",
      "Legislative advocacy participation",
      "Member networking opportunities",
    ],
    cta: "Join as Regular Member",
    highlighted: true,
    color: "purple",
  },
  {
    name: "Silver Donor",
    price: "$501",
    period: "to $1,000",
    description: "For dedicated supporters who want to make a greater impact for California agriculture.",
    features: [
      "All Regular Member benefits",
      "Recognition in The Compass Newsletter",
      "Priority event seating",
      "Silver Donor recognition",
      "Enhanced organization visibility",
    ],
    cta: "Become a Silver Donor",
    highlighted: false,
    color: "blue",
  },
  {
    name: "Platinum Donor",
    price: "$2,000+",
    period: "per year",
    description: "For organizations and individuals committed to the future of California agriculture.",
    features: [
      "All Silver Donor benefits",
      "Premium event sponsorship recognition",
      "Featured in organization materials",
      "Platinum Donor recognition",
      "Leadership-level visibility",
      "Direct impact on CWA programs",
    ],
    cta: "Become a Platinum Donor",
    highlighted: false,
    color: "gold",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Statewide Network",
    description: "Connect with 1,500+ members across 19 chapters from Butte County to the Mexican border.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Legislative Voice",
    description: "Participate in annual Capitol Advocacy events and federal fly-ins to Washington D.C.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "Scholarship Access",
    description: "Student members are eligible for scholarships supporting FFA, 4-H, and higher education.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "The Compass Newsletter",
    description: "Receive our quarterly publication keeping you informed on ag news, CWA programs, and legislative updates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Member Events",
    description: "Access to statewide meetings, the annual convention, AgVenture program, and local chapter events.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Diverse Community",
    description: "Join farmers, ranchers, bankers, lawyers, accountants, marketing professionals, and consumers united for agriculture.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        subtitle="Membership"
        title="Your Voice for California Agriculture"
        description="CWA is open to everyone who believes in a vibrant, sustainable California agriculture. Whether you grow food or eat it, there is a place for you here."
        primaryCta={{ label: "Join Today", href: "#join" }}
        secondaryCta={{ label: "View Tiers", href: "#tiers" }}
        compact
      />

      {/* Why Join */}
      <SectionWrapper bg="white" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            Why Join CWA
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight mb-4">
            Benefits of Membership
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
            As California's most active all-volunteer agricultural organization, CWA offers unmatched opportunities to advocate, connect, and make a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-cwa-purple/10 text-cwa-purple rounded-xl flex items-center justify-center flex-shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="font-spartan font-bold text-cwa-dark text-base mb-1">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Membership Tiers */}
      <SectionWrapper bg="light" py="lg" id="tiers">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            Membership Options
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
            Choose Your Level
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                tier.highlighted
                  ? "border-2 border-cwa-purple ring-4 ring-cwa-purple/20"
                  : "border border-gray-200"
              } bg-white`}
            >
              {tier.highlighted && (
                <div className="bg-cwa-purple text-white text-center py-2">
                  <span className="font-spartan font-bold text-xs uppercase tracking-widest">Most Popular</span>
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-spartan font-bold text-cwa-dark text-xl mb-1">{tier.name}</h3>
                <div className="mb-3">
                  <span className="font-spartan font-extrabold text-3xl text-cwa-purple">{tier.price}</span>
                  <span className="text-gray-500 text-sm ml-1 font-sans">{tier.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">{tier.description}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-cwa-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-sans">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#join"
                  variant={tier.highlighted ? "secondary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Join Form */}
      <SectionWrapper bg="white" py="lg" id="join">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl leading-tight mb-4">
              Join CWA Today
            </h2>
            <p className="text-gray-600 text-base font-sans">
              Fill out the form below and we will contact you with next steps to complete your membership.
            </p>
          </div>
          <MembershipForm />
        </div>
      </SectionWrapper>
    </>
  );
}

function MembershipForm() {
  return (
    <form
      action="mailto:statecwa@gmail.com"
      method="get"
      encType="text/plain"
      className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-5"
    >
      <input type="hidden" name="subject" value="CWA Membership Application" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            required
            placeholder="Jane"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            required
            placeholder="Smith"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="(916) 555-0100"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
            Membership Type <span className="text-red-500">*</span>
          </label>
          <select
            name="membership_type"
            required
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
          >
            <option value="">Select type</option>
            <option value="Student ($26.50/year)">Student ($26.50/year)</option>
            <option value="Regular ($41.50/year)">Regular ($41.50/year)</option>
            <option value="Silver Donor ($501-$1,000)">Silver Donor ($501-$1,000)</option>
            <option value="Platinum Donor ($2,000+)">Platinum Donor ($2,000+)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
            Preferred Chapter
          </label>
          <select
            name="chapter"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
          >
            <option value="">Select chapter</option>
            <option>Lake County</option>
            <option>North Bay</option>
            <option>North Valley</option>
            <option>Sacramento Valley</option>
            <option>Merced</option>
            <option>San Joaquin</option>
            <option>Stanislaus</option>
            <option>Central Valley</option>
            <option>Kern</option>
            <option>Tulare-Kings</option>
            <option>Carpinteria/Santa Barbara</option>
            <option>Salinas Valley</option>
            <option>San Luis Obispo County</option>
            <option>Santa Maria</option>
            <option>Ventura County</option>
            <option>Coachella Valley</option>
            <option>Imperial Valley</option>
            <option>Los Angeles</option>
            <option>Palo Verde</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-spartan font-bold text-base px-6 py-4 rounded-lg transition-colors duration-150 shadow-md hover:shadow-lg"
      >
        Submit Membership Application
      </button>
      <p className="text-gray-500 text-xs text-center font-sans">
        Submitting will open your email client with your application details. We will contact you within 2-3 business days to finalize your membership.
      </p>
    </form>
  );
}
