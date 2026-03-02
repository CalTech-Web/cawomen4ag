import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "CWA Foundation",
  description:
    "The California Women For Agriculture Foundation equips the next generation of agricultural leaders with education, experiences, and networks through scholarships and leadership programs.",
};

export default function FoundationPage() {
  return (
    <>
      <Hero
        subtitle="CWA Foundation"
        title="Investing in the Next Generation of Agricultural Leaders"
        description="The California Women For Agriculture Foundation was launched as a bold new chapter in our 50-year legacy, equipping young women with the education, experiences, and networks they need to lead California agriculture into the future."
        compact
      />

      {/* Foundation Overview */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              A Bold New Chapter
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight mb-6">
              The CWA Foundation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              We are thrilled to announce the launch of the California Women for Agriculture Foundation (CWAF), a bold new chapter in our 50-year legacy of championing California agriculture.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              The CWA Foundation exists to ensure that the agricultural leaders of tomorrow have the tools, opportunities, and mentorship they need to succeed. Through scholarships, leadership programs, and advocacy training, we are building a pipeline of passionate, informed agricultural advocates.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
              California's food supply depends on the voices of those who understand it best. The CWA Foundation is committed to developing those voices for generations to come.
            </p>
            <Button href="/contact" variant="secondary">
              Learn How to Support the Foundation
            </Button>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/Final-version-of-Logo.jpg.webp"
                alt="CWA Foundation Logo"
                fill
                className="object-contain p-8 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Programs */}
      <SectionWrapper bg="light" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            Foundation Programs
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
            How We Invest in the Future
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              ),
              title: "Scholarship Programs",
              description:
                "The CWA Foundation provides scholarships to women pursuing education and careers in agriculture. Awards support FFA members, 4-H participants, and college students studying agriculture, environmental science, agricultural business, and related fields.",
              details: [
                "FFA and 4-H scholarships",
                "College-level awards ($250 to $2,000)",
                "Capitol Advocacy attendance scholarship ($300)",
                "May Legislative Days scholarships (10 awarded annually)",
              ],
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "Leadership Development",
              description:
                "We develop the next generation of agricultural leaders through mentorship, advocacy training, and access to CWA's extensive network of farmers, ranchers, industry professionals, and elected officials.",
              details: [
                "Advocacy training and mentorship",
                "Access to the CWA member network",
                "Capitol Advocacy Event participation",
                "Leadership opportunities within CWA",
              ],
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Agricultural Experiences",
              description:
                "The Foundation connects young agricultural advocates with real-world experiences, including farm tours, legislative visits, and exposure to California's diverse agricultural sectors from field to policy.",
              details: [
                "Farm and ranch tours",
                "Legislative day participation",
                "Industry networking events",
                "Exposure to diverse agricultural sectors",
              ],
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              ),
              title: "Advocacy Training",
              description:
                "We train young women to be effective voices for California agriculture at the local, state, and federal level. Our advocacy curriculum prepares members to speak confidently with legislators and community leaders.",
              details: [
                "Legislative communication training",
                "Media and messaging skills",
                "Capitol meeting preparation",
                "Effective advocacy techniques",
              ],
            },
          ].map((program, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-cwa-purple/10 text-cwa-purple rounded-2xl flex items-center justify-center mb-5">
                {program.icon}
              </div>
              <h3 className="font-spartan font-bold text-cwa-dark text-xl mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-sans">{program.description}</p>
              <ul className="space-y-2">
                {program.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-cwa-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm font-sans">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Capitol Advocacy Scholarship */}
      <SectionWrapper bg="purple" py="lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-4">
            Featured Scholarship
          </p>
          <h2 className="font-spartan font-extrabold text-white text-4xl lg:text-5xl leading-tight mb-6">
            Capitol Advocacy Scholarship
          </h2>
          <p className="text-white/85 text-xl leading-relaxed mb-4 font-sans">
            Are you a CWA member who has never attended CWA's State Capitol Advocacy Event?
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-sans">
            The California Women for Agriculture Foundation offers a $300 scholarship to help defray costs, including lodging and mileage, to attend CWA's State Capitol Advocacy Event on May 4-5 in Sacramento, CA. This is an extraordinary opportunity to experience first-hand how CWA members advocate directly with California's legislators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { value: "$300", label: "Scholarship Award" },
              { value: "May 4-5", label: "Event Dates" },
              { value: "Sacramento, CA", label: "Location" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                <p className="font-spartan font-extrabold text-cwa-gold text-2xl">{stat.value}</p>
                <p className="text-white/70 text-sm font-sans mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Apply for the Scholarship
          </Button>
        </div>
      </SectionWrapper>

      {/* Support the Foundation */}
      <SectionWrapper bg="dark" py="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-spartan font-extrabold text-white text-4xl lg:text-5xl leading-tight mb-6">
            Support the CWA Foundation
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-sans">
            Your support helps us provide scholarships, leadership training, and advocacy experiences to the next generation of California agricultural leaders. Every contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Make a Donation
            </Button>
            <Button href="/membership" variant="outline" size="lg">
              Join as Platinum Donor
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
