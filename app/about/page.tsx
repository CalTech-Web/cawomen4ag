import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about California Women For Agriculture's founding story, mission, five core objectives, and the dedicated leadership guiding the organization since 1975.",
};

const objectives = [
  "To speak on behalf of agriculture in an intelligent, informative, direct, and truthful manner.",
  "To keep CWA members informed on legislative activities pertaining to agriculture.",
  "To join forces when the need arises to deal with agricultural issues and challenges.",
  "To improve the public image of farmers.",
  "To develop a rapport with consumers, educators, and governmental and business leaders in communities throughout the State.",
];

const leaders = [
  {
    name: "Bobbie Lynn Galvan",
    title: "State President",
    phone: "(760) 393-5015",
    email: "bgalvan@oceanmist.com",
    bio: "Bobbie Lynn Galvan serves as the current State President of California Women For Agriculture, leading the organization's statewide advocacy and membership initiatives.",
  },
  {
    name: "Sharron Zoller",
    title: "Past State President (2022-2024)",
    bio: "A Lake County walnut grower and past president, Sharron Zoller's philosophy: \"In the years to come, CWA will continue to help shape decisions that secure our food supply, strengthen rural communities, and build our economies. We know, and we have shown, that when women speak together, the world listens differently.\"",
  },
  {
    name: "Lora K. Daniels",
    title: "Communications Director",
    phone: "(916) 215-1494",
    bio: "Lora K. Daniels serves as CWA's Communications Director, overseeing outreach, media relations, and The Compass Newsletter.",
  },
  {
    name: "Sara Reid",
    title: "Past State President",
    bio: "Sara Reid, a Vice President at CoBank Farm Credit Banking Group, has been a dedicated leader in advancing CWA's mission of agricultural advocacy and education.",
  },
];

const sponsors = [
  "AgWest Farm Credit",
  "American AgCredit",
  "CoBank",
  "Colusa-Glenn Farm Credit",
  "Fresno Madera Farm Credit",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="Our Story"
        title="50 Years of Empowering California Agriculture"
        description="Founded in 1975 in the Coachella Valley, California Women For Agriculture has grown into the most active all-volunteer agricultural organization in California, with 19 chapters spanning the entire state."
        compact
      />

      {/* Founding Story */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/CWA-50th.png.webp"
                alt="CWA 50th Anniversary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-5 -right-5 bg-cwa-purple text-white rounded-xl px-5 py-4 shadow-xl hidden lg:block">
              <p className="font-spartan font-extrabold text-2xl leading-none">1975</p>
              <p className="font-spartan font-bold text-xs text-cwa-gold">Founded</p>
            </div>
          </div>
          <div>
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              Where It All Began
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight mb-6">
              Born in the Coachella Valley
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              In 1975, several women involved in agriculture gathered in the Coachella Valley to discuss how they could educate policymakers and consumers about the needs of California agriculture. The first statewide meeting in Palm Springs drew fifty-five women who drafted the organization's initial constitution and bylaws.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              CWA officially began on November 17, 1975. Founding members included Beverly Sfingi, Cherry Ishimatsu, Patricia "Corky" Larson, and Jeri Taylor. Cherry Ishimatsu served as the group's first state president and celebrated her 100th birthday during the 50th Anniversary Golden Weekend Celebration in La Quinta.
            </p>
            <div className="bg-cwa-green/10 border-l-4 border-cwa-green rounded-r-lg p-5 mt-6">
              <p className="text-cwa-dark text-base italic leading-relaxed font-sans">
                "Our name was carefully chosen. They chose 'for' instead of 'in' to be sure everyone who believed in the mission would join."
              </p>
              <p className="text-cwa-green font-spartan font-bold text-sm mt-2">
                Sharron Zoller, Former State President
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper bg="purple" py="lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-4">
            Our Purpose
          </p>
          <h2 className="font-spartan font-extrabold text-white text-4xl lg:text-5xl leading-tight mb-8">
            Mission Statement
          </h2>
          <p className="text-white/90 text-xl leading-relaxed mb-6 font-sans">
            CWA's mission is to promote and develop the interest of California women involved or interested in agriculture and to promote a strong agriculture industry in California.
          </p>
          <p className="text-white/80 text-lg leading-relaxed font-sans">
            "United, CWA advocates today for the economic sustainability of the diverse California agriculture community so future generations can continue to produce a healthy, diverse food supply."
          </p>
        </div>
      </SectionWrapper>

      {/* Five Core Objectives */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              How We Operate
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
              Five Core Objectives
            </h2>
          </div>
          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-cwa-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-spartan font-extrabold text-cwa-dark text-base">{i + 1}</span>
                </div>
                <p className="text-gray-700 text-base leading-relaxed pt-1.5 font-sans">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper bg="white" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            Our Leaders
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
            State Executive Board
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-cwa-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-spartan font-bold text-xl">
                    {leader.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-spartan font-bold text-cwa-dark text-xl">{leader.name}</h3>
                  <p className="text-cwa-green font-semibold text-sm">{leader.title}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">{leader.bio}</p>
              {(leader.phone || leader.email) && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4">
                  {leader.phone && (
                    <a href={`tel:${leader.phone.replace(/\D/g, "")}`} className="text-cwa-purple text-sm font-semibold hover:underline">
                      {leader.phone}
                    </a>
                  )}
                  {leader.email && (
                    <a href={`mailto:${leader.email}`} className="text-cwa-purple text-sm font-semibold hover:underline">
                      {leader.email}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Notable Alumni */}
      <SectionWrapper bg="dark" py="md">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-spartan font-semibold text-cwa-gold text-sm uppercase tracking-widest mb-4">
            Notable Alumni
          </p>
          <h2 className="font-spartan font-extrabold text-white text-3xl lg:text-4xl leading-tight mb-6">
            Ann Veneman, U.S. Secretary of Agriculture
          </h2>
          <p className="text-white/80 text-lg leading-relaxed font-sans">
            CWA member Ann Veneman went on to become U.S. Secretary of Agriculture under President George W. Bush, demonstrating the caliber of leaders our organization cultivates. CWA is proud to be part of her journey.
          </p>
        </div>
      </SectionWrapper>

      {/* Sponsors */}
      <SectionWrapper bg="light" py="md">
        <div className="text-center mb-8">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-2">
            Long-Term Partners
          </p>
          <h2 className="font-spartan font-bold text-cwa-dark text-2xl">
            Our Sponsors: 20+ Years of Farm Credit Support
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm"
            >
              <p className="font-spartan font-semibold text-cwa-dark text-sm">{sponsor}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/membership" variant="primary" size="lg">
            Join the Movement
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
