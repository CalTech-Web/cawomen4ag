import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Donors & Sponsors",
  description:
    "Support California Women For Agriculture through sponsorship. View donor levels, past sponsors, and download the donor application.",
};

const sponsorshipLevels = [
  {
    name: "Titanium",
    amount: "Donations of $5,000 and Above",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 text-white",
    borderColor: "border-gray-700",
    benefits: [
      "All Platinum recognition",
      "Recognition plan commensurate with donation level",
      "Collaborative recognition package designed to meet your goals",
    ],
  },
  {
    name: "Platinum",
    amount: "$2,000 and Above",
    color: "bg-gradient-to-br from-gray-300 to-gray-400 text-gray-900",
    borderColor: "border-gray-400",
    benefits: [
      "All Gold recognition",
      'Logo recognition in "The Compass", website, and social media platforms',
      "Invitation to attendees (2) to Annual Meeting at member rate (if available)",
      'Placement of one Donor sponsored article or ad in "The Compass"',
    ],
  },
  {
    name: "Gold",
    amount: "$1,000 and Above",
    color: "bg-gradient-to-br from-cwa-gold/80 to-cwa-gold text-cwa-dark",
    borderColor: "border-cwa-gold",
    benefits: [
      "All Silver recognition",
      "Presentation opportunity at Statewide Meeting",
      "Promotional materials included in statewide meeting attendee packets",
    ],
  },
  {
    name: "Silver",
    amount: "$500 and Above",
    color: "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800",
    borderColor: "border-gray-300",
    benefits: [
      "All Bronze recognition",
      "Included in CWA state event signage",
      "Elevated social media recognition",
    ],
  },
  {
    name: "Bronze",
    amount: "$250 and Above",
    color: "bg-gradient-to-br from-amber-600 to-amber-700 text-white",
    borderColor: "border-amber-600",
    benefits: [
      'Recognition in our member newsletter "The Compass"',
      "Recognition on our website and social media platforms",
    ],
  },
  {
    name: "Friends of CWA",
    amount: "Up to $250",
    color: "bg-gradient-to-br from-cwa-green/80 to-cwa-green text-white",
    borderColor: "border-cwa-green",
    benefits: [
      "Recurring donation options are available",
    ],
  },
];

const donors2022 = {
  year: "2022 General Donors",
  categories: [
    { level: "Titanium ($5,000 and above)", donors: [] },
    { level: "Platinum ($2,000 and above)", donors: [] },
    { level: "Gold ($1,000 and above)", donors: [] },
    { level: "Silver ($500 and above)", donors: [] },
    { level: "Bronze ($250 and Above)", donors: [] },
    { level: "Friends of CWA (up to $250)", donors: ["Jane Bedrosian", "Susie Calhoun"] },
  ],
};

const donors2021 = {
  year: "2021 General Donors",
  categories: [
    { level: "Titanium ($5,000 and above)", donors: ["Farm Credit Alliance"] },
    { level: "Platinum ($2,000 and above)", donors: ["California Fresh Fruit Association", "Ellen Way/Sander Family Almond"] },
    { level: "Gold ($1,000 and above)", donors: ["National Raisin", "Eden Vale Dairy", "Madera County Farm Bureau", "Tanimura & Antle", "Dole Fresh Vegetables", "Pam Jones", "Mary Ann Graff", "Coachella CWA"] },
    { level: "Silver ($500 and above)", donors: ["San Joaquin CWA", "Palo Verde CWA", "David and Sara Herman", "Carol Chandler", "Jeanette Lombardo"] },
    { level: "Bronze ($250 and Above)", donors: [] },
    { level: "Friends of CWA (up to $250)", donors: ["California Rangeland Trust", "Ventura County CWA", "Ruth Schriefer", "Susie Calhoun", "Marlene Miyasaki"] },
  ],
};

const legReceptionSponsors = {
  year: "2019 Legislative Reception Sponsors",
  categories: [
    { level: "Gold ($1,000 and above)", donors: ["Bayer Crop Science", "Corteva Agriscience (DowDuPont)", "Syngenta Crop Protection", "TriCal, Inc.", "Western Growers Association"] },
    { level: "Silver ($500 and above)", donors: ["Ag Council of California", "California Association of Pest Control Advisers", "California Cotton Ginners & Growers Association", "Pacific Egg & Poultry Association", "California Farm Bureau Federation", "California Fresh Fruit Association", "California Grain & Feed Association", "California League of Food Processors", "California Seed Association", "California Strawberry Commission", "Far West Equipment Dealers Association", "Western Agriculture Processors Association", "Western Plant Health Association", "Western United Dairymen"] },
    { level: "Bronze ($250 and Above)", donors: ["Kahn, Soares & Conway, LLP"] },
  ],
};

function DonorSection({ data }: { data: { year: string; categories: { level: string; donors: string[] }[] } }) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="font-heading font-semibold text-cwa-dark text-2xl mb-6 text-center">{data.year}</h3>
      <div className="space-y-4">
        {data.categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
            <h4 className="font-heading font-semibold text-cwa-purple text-sm mb-2">{cat.level}</h4>
            {cat.donors.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {cat.donors.map((donor, j) => (
                  <span key={j} className="bg-cwa-cream text-cwa-dark text-sm font-sans px-3 py-1.5 rounded-lg">
                    {donor}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm font-sans italic">No donors listed</p>
            )}
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-xs font-sans italic text-center mt-3">*denotes Ag Boosters BBQ Harvest Sponsor</p>
    </div>
  );
}

export default function DonorsPage() {
  return (
    <>
      <Hero
        subtitle="Sponsor Opportunities"
        title="Donors"
        description="Support California Women For Agriculture and help champion the future of California agriculture."
        bgImage="/images/pexels-photo-2631885.jpeg"
        compact
      />

      {/* Intro */}
      <SectionWrapper bg="white" py="lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
            Sponsor Opportunities
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
            Support California Agriculture
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
            California Women for Agriculture is a grassroots organization with members donating time and talent for the benefit of California agriculture. Our efforts would not be possible without the support of our donors.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-sans">
            General donations to California Women for Agriculture may be deductible as a business expense. Mail your check payable to California Women for Agriculture. We also accept donations via credit card; <a href="/contact" className="text-cwa-purple font-semibold hover:underline">contact us</a> for further direction. CWA is a 501(c)5 and our tax ID number is available upon request.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-sans">
            We appreciate your continued support and understand you may contribute to CWA at the State level, as well as one or more chapters. That support allows local programs to move forward with support from the State.
          </p>
          <p className="text-gray-500 text-sm font-sans italic">
            Information above should not replace the advice of Legal and Tax professionals.
          </p>
        </div>
      </SectionWrapper>

      {/* Sponsorship Levels */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
              Giving Tiers
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Levels of CWA Sponsorship
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipLevels.map((level, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border ${level.borderColor} h-full flex flex-col`}>
                  <div className={`${level.color} p-5 text-center`}>
                    <h3 className="font-heading font-bold text-xl">{level.name}</h3>
                    <p className="text-sm opacity-80 mt-1 font-sans">{level.amount}</p>
                  </div>
                  <div className="bg-white p-5 flex-1">
                    <ul className="space-y-2.5">
                      {level.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-cwa-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm font-sans">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Past Donors */}
      <SectionWrapper bg="white" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Thank You
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Our Generous Donors
            </h2>
          </div>
          <DonorSection data={donors2022} />
          <DonorSection data={donors2021} />
          <DonorSection data={legReceptionSponsors} />
        </div>
      </SectionWrapper>

      {/* CTA / Why Donate */}
      <SectionWrapper bg="purple" py="lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans font-semibold text-cwa-gold text-[11px] uppercase tracking-[0.2em] mb-4">
            Make a Difference
          </p>
          <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
            Your Donation Directly Impacts the Future of California Agriculture
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-4 font-sans">
            California agriculture is the backbone of our state, producing 400 commodities, contributing over $50 billion to the economy and feeding millions of people both locally and globally.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-4 font-sans">
            By supporting CWA, you help fund local programs and initiatives that drive change from the ground up. From influencing policy to providing scholarships and resources to the next generation of agricultural leaders, your contribution empowers our work and amplifies our collective voice.
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-8 font-sans">
            Checks can be presented in person for promotional coverage; invoices are available upon request.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="https://cawomen4ag.com/wp-content/uploads/2025/03/Introduction-to-web-donor-application.pdf"
              variant="primary"
              size="lg"
              external
            >
              Download Donor Application
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
