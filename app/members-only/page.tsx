import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import PasswordGate from "@/components/PasswordGate";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Members Only",
  description:
    "Exclusive member resources from California Women For Agriculture. Password required for access.",
};

const agBites = [
  {
    title: "ABC AG Bites",
    date: "Aug 09",
    slug: "abc-bites-aug-09",
    description:
      "Agriculture news bites covering the latest updates and developments in California agriculture.",
  },
  {
    title: "ABC AG Bites",
    date: "Aug 16",
    slug: "abc-ag-bites-aug-16",
    description:
      "Weekly agriculture news updates from ABC covering policy, markets, and industry developments.",
  },
  {
    title: "ABC AG Bites",
    date: "Aug 21",
    slug: "abc-ag-bites-aug-21",
    description:
      "Agriculture industry news bites featuring the latest from California farms and policy updates.",
  },
];

export default function MembersOnlyPage() {
  return (
    <>
      <Hero
        subtitle="Members Only"
        title="Members Only"
        description="Exclusive resources for CWA members."
        bgImage="/images/pexels-photo-158603.jpeg"
        compact
      />

      <SectionWrapper bg="light" py="lg">
        <PasswordGate>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
                Member Resources
              </p>
              <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
                ABC AG Bites
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agBites.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <Link href={`/members-only/${item.slug}`} className="group block h-full">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-cwa-green/30 transition-all h-full flex flex-col">
                      <div className="w-12 h-12 bg-cwa-purple/10 text-cwa-purple rounded-xl flex items-center justify-center mb-4 group-hover:bg-cwa-purple group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-semibold text-cwa-dark text-lg mb-1 group-hover:text-cwa-purple transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-cwa-green font-sans font-semibold text-sm mb-3">{item.date}</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-sans flex-1">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </PasswordGate>
      </SectionWrapper>
    </>
  );
}
