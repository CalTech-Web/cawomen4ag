import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import LightboxImage from "@/components/LightboxImage";

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

const executiveBoard = [
  {
    name: "Lora Daniels",
    chapter: "San Joaquin Chapter",
    title: "President Elect",
    photo: "/images/Lora-Daniels-r9extb53niv1tkwmk3a4iwd8s1sqd3c5f03ddwynco.jpg",
  },
  {
    name: "Nanette Simonian",
    chapter: "Central Valley Chapter",
    title: "President Elect",
    photo: "/images/Nanette-Simonian-jpg-qik20htzkrp0o0pbeijqoz77s3msbyd5stg62ydjnc-qlr09c5f7jre1lj0a2p18ov09lqnmp3ojq41bexdx4.jpg",
  },
  {
    name: "Sandy Fiack",
    chapter: "North Valley Chapter",
    title: "VP External",
    photo: null,
  },
  {
    name: "Jill Levake",
    chapter: "Sacramento Valley Chapter",
    title: "VP External",
    photo: "/images/Jill-rha3xdpk7zv61898z7cev8jxseb14xjilb42l639vc.jpg",
  },
  {
    name: "Paola Saenz",
    chapter: "Central Valley Chapter",
    title: "Secretary",
    photo: null,
  },
  {
    name: "Susie Sorenson",
    chapter: "North Valley Chapter",
    title: "Treasurer",
    photo: null,
  },
  {
    name: "Nancy Machut",
    chapter: "Santa Maria Chapter",
    title: "Asst. Treasurer",
    photo: null,
  },
  {
    name: "Debra Stroschein",
    chapter: "Palo Verde Chapter",
    title: "Past President",
    photo: "/images/Debra-Stroschein-qqw7iym6mj9p7oq6kqq4g2ih8tpfryb8ggp9cgh0vs.jpg",
  },
];

const districtDirectors = [
  {
    name: "Joan Webster",
    chapter: "Northern Valley Chapter",
    title: "Northern District",
    photo: null,
  },
  {
    name: "Fatima Gioletti",
    chapter: "Stanislaus Chapter",
    title: "North Central District",
    photo: null,
  },
  {
    name: "Stacey Jischke",
    chapter: "Kern County Chapter",
    title: "Central Valley District",
    photo: "/images/Stacey-rhaxyexe9lpwkfzthzixzxxgok10p8667xgf8h8bso.jpg",
  },
  {
    name: "Mary Ann Hooker",
    chapter: "Salinas Valley Chapter",
    title: "Central Coast District",
    photo: null,
  },
  {
    name: "Summer Spraggins",
    chapter: "Palo Verde Chapter",
    title: "Southern District",
    photo: "/images/Summer-Scroggins-Image-qdpt917s2zvjem2jgb6ip8d41p0kehr86998115588-qdptb5cpgkrrj0zy3q3at75g5wlapz5hgq3jwg0988.webp",
  },
  {
    name: "Victoria Weatherly",
    chapter: "Santa Maria Chapter",
    title: "Parliamentarian",
    photo: "/images/Victoria-rhaxyior0xv1uvucw15g9wzb23ihk0l3kg2d5l2r3s.jpg",
  },
];

const sponsors = [
  "AgWest Farm Credit",
  "American AgCredit",
  "CoBank",
  "Colusa-Glenn Farm Credit",
  "Fresno Madera Farm Credit",
];

function PersonCard({ person }: { person: { name: string; chapter: string; title: string; photo: string | null } }) {
  return (
    <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-3">
        {person.photo ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={person.photo}
              alt={person.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-14 h-14 bg-gradient-to-br from-cwa-purple to-cwa-purple/70 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-heading font-bold text-xl">
              {person.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h3 className="font-heading font-semibold text-cwa-dark text-lg leading-snug">{person.name}</h3>
          <p className="text-cwa-green font-sans font-semibold text-sm mt-0.5">{person.title}</p>
          <p className="text-gray-500 font-sans text-xs mt-0.5">{person.chapter}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Fifty Years of Fighting for California Agriculture"
        description="Founded in 1975, California Women For Agriculture has grown from 55 founding members to 1,500+ across 19 chapters, united by a single conviction: California agriculture deserves a strong voice."
        bgImage="/images/noah-buscher-x8ZStukS2PM-unsplash.jpg"
        compact
      />

      {/* CWA Foundation Announcement */}
      <SectionWrapper bg="light" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <LightboxImage
                src="/images/pexels-gary-barnes-6231905.jpg"
                alt="Women in agriculture"
                containerClassName="relative aspect-[4/3] rounded-2xl overflow-hidden"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              A New Chapter
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              The CWA Foundation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              We're thrilled to announce the launch of the California Women for Agriculture Foundation (CWAF), a bold new chapter in our 50 year legacy of championing California agriculture.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-sans">
              For half a century, CWA has been the voice of California's agricultural community. Now, as we celebrate this milestone, the CWA Foundation takes our mission further by investing directly in the people who will advocate for California agriculture's future.
            </p>
            <Button href="/foundation" variant="secondary">Find Out More</Button>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Founding Story */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/CWA-50th.png.webp"
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

      {/* Image Gallery */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <FadeIn delay={0}>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image src="/images/pexels-enric-cruz-lopez-6272310.jpg" alt="Agricultural field" fill className="object-cover !relative" sizes="25vw" />
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image src="/images/olive-rha3xfl8lnxqog6io85o082uz61rkbqz9kf1jq0hiw.jpg" alt="Olive branch" fill className="object-cover !relative" sizes="25vw" />
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image src="/images/almonds-qqw7j571ydipgygmibkifiupeit09u1ctd9npe79o8.jpg" alt="Almonds" fill className="object-cover !relative" sizes="25vw" />
            </div>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image src="/images/wallnut-image-rhavwf2s94faljh7l028pm556kqsr0evdomd6ay1mg.jpg" alt="Walnut grove" fill className="object-cover !relative" sizes="25vw" />
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* State Executive Board */}
      <SectionWrapper bg="light" py="lg">
        <div className="text-center mb-12">
          <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
            Our Leaders
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
            State Executive Board
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {executiveBoard.map((person, i) => (
            <FadeIn key={i} delay={i * 60}>
              <PersonCard person={person} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* District Directors */}
      <SectionWrapper bg="white" py="lg">
        <div className="text-center mb-12">
          <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
            Regional Leadership
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
            District Directors
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {districtDirectors.map((person, i) => (
            <FadeIn key={i} delay={i * 60}>
              <PersonCard person={person} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Notable Alumni */}
      <div className="bg-cwa-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/pexels-matthias-oben-3687927-qjqpeg6kplkkas78bzhvhsd8hdcjlu4r9hnfxf4szc.jpg" alt="" fill className="object-cover" />
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

      {/* Contact Info */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl leading-tight mb-8">
            Contact Info
          </h2>
          <div className="space-y-3 mb-8">
            <p className="text-gray-600 text-lg font-sans">1521 I Street, Sacramento, CA 95814</p>
            <p>
              <a href="mailto:statecwa@gmail.com" className="text-cwa-purple text-lg font-sans font-semibold hover:underline">statecwa@gmail.com</a>
            </p>
            <p>
              <a href="tel:9164412910" className="text-cwa-purple text-lg font-sans font-semibold hover:underline">(916) 441-2910</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/membership" variant="secondary" size="lg">
              Join the Movement
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Sponsors */}
      <SectionWrapper bg="white" py="md">
        <div className="text-center mb-8">
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-2">
            Long-Term Partners
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-2xl">
            Our Sponsors: 20+ Years of Farm Credit Support
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {sponsors.map((sponsor, i) => (
            <div key={i} className="bg-cwa-cream border border-gray-100 rounded-xl px-7 py-4 shadow-sm hover:border-cwa-gold transition-colors">
              <p className="font-heading font-semibold text-cwa-dark text-sm">{sponsor}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
