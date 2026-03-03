import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

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
    photo: null,
    bio: "Bobbie Lynn Galvan serves as the current State President of California Women For Agriculture, leading the organization's statewide advocacy and membership initiatives.",
  },
  {
    name: "Sharron Zoller",
    title: "Past State President (2022-2024)",
    photo: null,
    bio: "A Lake County walnut grower and past president. \"In the years to come, CWA will continue to help shape decisions that secure our food supply, strengthen rural communities, and build our economies. We know that when women speak together, the world listens differently.\"",
  },
  {
    name: "Lora K. Daniels",
    title: "Communications Director",
    phone: "(916) 215-1494",
    photo: "/images/Lora-Daniels-r9extb53niv1tkwmk3a4iwd8s1sqd3c5f03ddwynco.jpg",
    bio: "Lora K. Daniels serves as CWA's Communications Director, overseeing outreach, media relations, and The Compass Newsletter.",
  },
  {
    name: "Sara Reid",
    title: "Past State President",
    photo: null,
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
        subtitle="About Us"
        title="Fifty Years of Fighting for California Agriculture"
        description="Founded in 1975, California Women For Agriculture has grown from 55 founding members to 1,500+ across 19 chapters, united by a single conviction: California agriculture deserves a strong voice."
        bgImage="/images/pexels-greta-hoffman-7728639-qjqpdrr19z7ahctuq7op6dih4ljpleice4h5f5vdps.jpg"
        compact
      />

      {/* Founding Story */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/cwa-logo.webp"
                alt="CWA 50th Anniversary Logo"
                fill
                className="object-contain bg-cwa-cream p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Where It All Began
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              Born in the Coachella Valley
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              In 1975, several women involved in agriculture gathered in the Coachella Valley to discuss how they could educate policymakers and consumers about the needs of California agriculture. The first statewide meeting in Palm Springs drew fifty-five women who drafted the organization's initial constitution and bylaws.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
              CWA officially began on November 17, 1975. Founding members included Beverly Sfingi, Cherry Ishimatsu, Patricia "Corky" Larson, and Jeri Taylor. Cherry Ishimatsu served as the group's first state president and celebrated her 100th birthday during the 50th Anniversary Golden Weekend Celebration in La Quinta.
            </p>
            <blockquote className="bg-cwa-green/8 border-l-4 border-cwa-green rounded-r-xl p-5">
              <p className="text-cwa-dark text-base italic leading-relaxed font-sans mb-2">
                "Our name was carefully chosen. They chose 'for' instead of 'in' to be sure everyone who believed in the mission would join."
              </p>
              <footer className="font-heading font-semibold text-cwa-green text-sm">
                Sharron Zoller, Former State President
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <div className="relative bg-cwa-purple overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/almond-tree.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-semibold text-cwa-gold text-[11px] uppercase tracking-[0.2em] mb-4">
            Our Purpose
          </p>
          <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-8">
            Mission Statement
          </h2>
          <p className="text-white/90 text-xl leading-relaxed mb-5 font-sans">
            CWA's mission is to promote and develop the interest of California women involved or interested in agriculture and to promote a strong agriculture industry in California.
          </p>
          <p className="text-white/70 text-base leading-relaxed font-sans italic">
            "United, CWA advocates today for the economic sustainability of the diverse California agriculture community so future generations can continue to produce a healthy, diverse food supply."
          </p>
        </div>
      </div>

      {/* Five Core Objectives */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              How We Operate
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Five Core Objectives
            </h2>
          </div>
          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-cwa-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="font-heading font-semibold text-cwa-dark text-base">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pt-2 font-sans">{obj}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper bg="white" py="lg">
        <div className="text-center mb-12">
          <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
            Our Leaders
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
            State Executive Board
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map((leader, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-white border border-gray-150 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  {leader.photo ? (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-cwa-purple to-cwa-purple/70 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-heading font-bold text-2xl">
                        {leader.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-heading font-semibold text-cwa-dark text-xl leading-snug">{leader.name}</h3>
                    <p className="text-cwa-green font-sans font-semibold text-sm mt-0.5">{leader.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-sans flex-1">{leader.bio}</p>
                {(leader.phone || leader.email) && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4">
                    {leader.phone && (
                      <a href={`tel:${leader.phone.replace(/\D/g, "")}`} className="text-cwa-purple text-sm font-sans font-semibold hover:underline">
                        {leader.phone}
                      </a>
                    )}
                    {leader.email && (
                      <a href={`mailto:${leader.email}`} className="text-cwa-purple text-sm font-sans font-semibold hover:underline">
                        {leader.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Notable Alumni */}
      <div className="bg-cwa-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/pexels-markus-spiske-95215-768x768.jpg.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-semibold text-cwa-gold text-[11px] uppercase tracking-[0.2em] mb-4">
            Notable Alumni
          </p>
          <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl leading-tight mb-5">
            Ann Veneman, U.S. Secretary of Agriculture
          </h2>
          <p className="text-white/75 text-lg leading-relaxed font-sans">
            CWA member Ann Veneman went on to become U.S. Secretary of Agriculture under President George W. Bush, demonstrating the caliber of leaders our organization cultivates. CWA is proud to be part of her journey.
          </p>
        </div>
      </div>

      {/* Sponsors */}
      <SectionWrapper bg="light" py="md">
        <div className="text-center mb-10">
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-2">
            Long-Term Partners
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-2xl">
            Our Sponsors: 20+ Years of Farm Credit Support
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {sponsors.map((sponsor, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl px-7 py-4 shadow-sm hover:border-cwa-gold transition-colors">
              <p className="font-heading font-semibold text-cwa-dark text-sm">{sponsor}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/membership" variant="secondary" size="lg">
            Join the Movement
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
