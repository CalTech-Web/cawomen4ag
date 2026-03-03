import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore CWA's programs: Legislative Advocacy, Agricultural Education (AgVenture, Agriculture in the Classroom, Supermarket Saturday), Scholarships, CWA Foundation, and The Compass Newsletter.",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        subtitle="What We Do"
        title="Programs That Move California Agriculture Forward"
        description="From Sacramento to Washington D.C., from classrooms to farm fields, CWA's programs educate, advocate, and invest in the future of California agriculture."
        compact
      />

      {/* Legislative Advocacy */}
      <SectionWrapper bg="white" py="lg" id="advocacy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-cwa-purple/10 text-cwa-purple rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
              Program 01
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              Legislative Advocacy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              CWA members are the frontline voice for California agriculture in the halls of power. Every year, our members participate in a two-day Sacramento legislative event, meeting directly with lawmakers to educate and advocate for the industry.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
              At the federal level, CWA members join the American Agri Women coalition for fly-ins to Washington D.C., ensuring California agriculture has a seat at the national table.
            </p>
            <div className="space-y-3">
              {[
                "Annual two-day Sacramento legislative event with state lawmakers",
                "Federal fly-in to Washington D.C. with American Agri Women",
                "Adopt-a-Legislator program",
                "Capitol Ag Day education events for the legislature",
                "10 scholarships offered at May Legislative Days",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cwa-purple rounded-full flex-shrink-0" />
                  <p className="text-gray-700 text-sm font-sans">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cwa-purple/5 rounded-2xl p-8 border border-cwa-purple/20">
            <blockquote className="text-cwa-dark text-xl leading-relaxed font-heading font-medium italic mb-6">
              "In the years to come, CWA will continue to help shape decisions that secure our food supply, strengthen rural communities, and build our economies. We know, and we have shown, that when women speak together, the world listens differently."
            </blockquote>
            <p className="font-heading font-semibold text-cwa-purple">Sharron Zoller</p>
            <p className="text-gray-600 text-sm font-sans">Former State President</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Agricultural Education */}
      <SectionWrapper bg="light" py="lg" id="education">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-cwa-green/10 text-cwa-green rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
            Program 02
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-4">
            Agricultural Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
            CWA believes an educated public is agriculture's greatest ally. Our education programs bring agriculture into classrooms, communities, and grocery stores across California.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AgVenture",
              badge: "14-Year Flagship Program",
              description:
                "A 4-month deep-dive program in Lake County for 12 community leaders per year. Running August through November, participants explore pears, walnuts, grapes, and olives, gaining hands-on agricultural knowledge that they carry back to their communities.",
              color: "border-cwa-green",
            },
            {
              title: "Agriculture in the Classroom",
              badge: "K-12 Education",
              description:
                "Supporting classroom programs that teach students where their food comes from. CWA provides books for elementary school libraries, sponsors farm tours for students, and funds school and community gardens.",
              color: "border-cwa-blue",
            },
            {
              title: "Supermarket Saturday",
              badge: "Consumer Education",
              description:
                "Meeting consumers where they shop. CWA members educate grocery shoppers about the farm-to-table journey, connecting everyday purchases to the California farmers who grow them.",
              color: "border-cwa-gold",
            },
          ].map((program, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-7 shadow-sm border-t-4 ${program.color} border border-gray-100 hover:shadow-md transition-shadow`}
            >
              <span className="inline-block bg-cwa-green/10 text-cwa-green text-xs font-semibold font-sans px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                {program.badge}
              </span>
              <h3 className="font-heading font-semibold text-cwa-dark text-xl mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm font-sans">
            CWA received the 2019 CALAward from the California Foundation for Agriculture in the Classroom for its outstanding education work.
          </p>
        </div>
      </SectionWrapper>

      {/* Scholarships */}
      <SectionWrapper bg="purple" py="lg" id="scholarships">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans font-semibold text-cwa-gold text-[11px] uppercase tracking-[0.2em] mb-3">
              Program 03
            </p>
            <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              Scholarships
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-4 font-sans">
              CWA's scholarship programs invest in the next generation of California agricultural leaders. Chapter-level scholarships support FFA, 4-H, and college students pursuing careers in agriculture.
            </p>
            <p className="text-white/85 text-lg leading-relaxed mb-6 font-sans">
              The Santa Maria Chapter alone has invested over $330,000 in scholarships, demonstrating the profound impact CWA chapters can have on individual futures and the broader agricultural workforce.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$330K+", label: "Santa Maria Chapter Total" },
                { value: "$250-$2K", label: "Typical Award Range" },
                { value: "10", label: "Scholarships at Legislative Days" },
                { value: "$300", label: "Capitol Advocacy Scholarship" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="font-heading font-bold text-cwa-gold text-2xl">{stat.value}</p>
                  <p className="text-white/70 text-xs font-sans mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "FFA and 4-H Scholarships",
                description: "Supporting young members of agricultural youth organizations at the chapter level.",
              },
              {
                title: "Higher Education Scholarships",
                description: "Awards for college students pursuing degrees in agriculture, agricultural business, environmental science, and related fields.",
              },
              {
                title: "Capitol Advocacy Scholarship",
                description: "A $300 scholarship from the CWA Foundation to help defray costs for first-time attendees at CWA's State Capitol Advocacy Event.",
              },
              {
                title: "Annual Convention Scholarships",
                description: "Ten scholarships awarded annually at May Legislative Days to support members advancing their agricultural careers.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5">
                <h3 className="font-heading font-semibold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* The Compass */}
      <SectionWrapper bg="white" py="lg" id="compass">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-cwa-green/10 text-cwa-green rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
            Program 04
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
            The Compass Newsletter
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
            The Compass is CWA's official state publication, published four times per year. It is our primary communication channel, reaching members, agricultural organizations, elected officials, and appointed officials across California.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 font-sans">
            Every issue keeps the CWA community informed on legislative developments, chapter news, program updates, scholarship announcements, and upcoming events.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Published quarterly (4x/year)",
              "Members and elected officials",
              "Agricultural organizations",
              "Legislative updates",
              "Chapter news and events",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-cwa-green/10 text-cwa-green border border-cwa-green/30 text-sm font-semibold font-sans px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <Button href="/contact" variant="secondary">
            Contact Us to Subscribe
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark" py="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-sans">
            All of CWA's programs are powered by our members and volunteers. Join us and make an impact for California agriculture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/membership" variant="primary" size="lg">
              Become a Member
            </Button>
            <Button href="/foundation" variant="outline" size="lg">
              CWA Foundation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
