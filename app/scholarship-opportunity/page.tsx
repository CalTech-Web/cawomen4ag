import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Scholarship Opportunity",
  description:
    "Apply for a $300 CWA Foundation scholarship to attend the State Capitol Advocacy Event in Sacramento. Open to CWA members attending for the first time.",
};

const experiences = [
  "Learn how current legislation and policies directly impact your farm, ranch, and community",
  "Discover how to effectively communicate with lawmakers and make your voice heard",
  "Network with passionate advocates who are shaping California's agricultural future",
  "Visit legislative offices to share CWA's legislative positions",
  "Gain the confidence and skills to champion agriculture in your own community",
];

const applicationDetails = [
  { label: "Scholarships available", value: "10" },
  { label: "Application opens", value: "February 20, 2026" },
  { label: "Deadline", value: "March 6, 2026" },
  { label: "Notification", value: "Week of March 16, 2026" },
  { label: "Selection", value: "First-come, first-served for complete applications" },
];

export default function ScholarshipPage() {
  return (
    <>
      <Hero
        subtitle="CWA Foundation"
        title="Scholarship Opportunity"
        description="Introducing a Scholarship Opportunity to attend the CWA Sacramento Legislative Event."
        bgImage="/images/pexels-photo-602428.jpeg"
        compact
      />

      {/* Scholarship Overview */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/Final-version-of-Logo.jpg.webp"
                alt="CWA Foundation Logo"
                fill
                className="object-contain p-8 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              First-Ever Scholarship
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              Scholarship Opportunity
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              The California Women for Agriculture Foundation (CWAF) is proud to announce its first-ever scholarship program for the State Capitol Advocacy Event. CWA members who have never attended this event can now apply for one of ten $300 scholarships to join us in Sacramento on May 4-5, 2026.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
              This exciting opportunity reflects the mission of our newly established Foundation, a companion organization to CWA dedicated to cultivating the next generation of agricultural leaders through transformative experiences.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* What You'll Receive */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
              Your Voice Matters
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Apply for a $300 Scholarship to Advocate for California Agriculture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What You'll Receive */}
            <FadeIn delay={0}>
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-cwa-gold/15 text-cwa-gold rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-cwa-dark text-xl mb-3">What You&apos;ll Receive</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-sans mb-3">
                  A $300 scholarship to help defray costs (lodging and mileage) to attend CWA&apos;s State Capitol Advocacy Event on May 4-5, 2026.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  Expenses (lodging and mileage) up to the $300.00 will be reimbursed per the CWA expense form submitted to the CWA treasurer. The registration fee is $125.00 and is not covered by the scholarship.
                </p>
              </div>
            </FadeIn>

            {/* Who Should Apply */}
            <FadeIn delay={80}>
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 h-full">
                <div className="w-14 h-14 bg-cwa-purple/10 text-cwa-purple rounded-2xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-cwa-dark text-xl mb-3">Who Should Apply</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-sans mb-3">
                  CWA members attending the State Capitol Advocacy Event for the first time.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans mb-2">Your application will ask you to share:</p>
                <ul className="space-y-2">
                  {[
                    "Your connection to agriculture",
                    "Why you want to attend this event",
                    "How you'll share your experience with your local chapter",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-cwa-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* What You'll Experience */}
      <SectionWrapper bg="white" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Two Transformative Days
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              What You&apos;ll Experience
            </h2>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="flex items-start gap-5 bg-cwa-cream rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-cwa-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="font-heading font-semibold text-cwa-dark text-base">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed pt-2 font-sans">{exp}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why This Matters */}
      <SectionWrapper bg="purple" py="lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans font-semibold text-cwa-gold text-[11px] uppercase tracking-[0.2em] mb-4">
            Why This Matters
          </p>
          <h2 className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
            Investing in Tomorrow&apos;s Leaders
          </h2>
          <p className="text-white/85 text-lg leading-relaxed mb-4 font-sans">
            The newly established California Women for Agriculture Foundation (CWAF) marks a bold new chapter in CWA&apos;s 50-year legacy of championing California agriculture.
          </p>
          <p className="text-white/80 text-base leading-relaxed mb-8 font-sans">
            As companion organizations, CWA and CWAF share one mission: cultivate the next generation of agricultural leaders through transformative opportunities. This is our first scholarship offering for the State Capitol Advocacy Event, and we&apos;re investing in you, the leaders who will carry California agriculture forward for the next 50 years.
          </p>
        </div>
      </SectionWrapper>

      {/* How to Apply */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Get Started
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              How to Apply
            </h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <div className="space-y-4">
              {applicationDetails.map((detail, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-gray-50 last:border-0">
                  <span className="font-heading font-semibold text-cwa-dark text-sm w-48 flex-shrink-0">{detail.label}</span>
                  <span className="text-gray-600 text-sm font-sans">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-gray-600 text-base font-sans">
              If you have questions, email{" "}
              <a href="mailto:statecwa@gmail.com" className="text-cwa-purple font-semibold hover:underline">
                statecwa@gmail.com
              </a>{" "}
              and put &quot;CWAFoundation Scholarship&quot; in the subject line.
            </p>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJjAQO4eMqnEvtm32ZK-LpVJstt8UCtwIUYK7xDBOytboHtA/viewform"
              variant="primary"
              size="lg"
              external
            >
              Apply Now
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Follow Up */}
      <SectionWrapper bg="dark" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-heading font-semibold text-white text-xl mb-3">Follow Up Requirement</h3>
          <p className="text-white/75 text-base font-sans leading-relaxed">
            Share event pictures and personal quotes (your insights and personal value of the experience) for the CWA Foundation&apos;s publicity.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
