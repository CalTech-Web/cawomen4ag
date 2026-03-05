import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "ABC AG Bites – Aug 21",
  description:
    "ABC AG Bites agriculture news update for August 21. Members only content from California Women For Agriculture.",
};

export default function AgBitesAug21Page() {
  return (
    <>
      <Hero
        subtitle="Members Only"
        title="ABC AG Bites – Aug 21"
        bgImage="/images/pexels-photo-158603.jpeg"
        compact
      />

      <SectionWrapper bg="light" py="lg">
        <PasswordGate>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/members-only"
              className="inline-flex items-center gap-2 text-cwa-purple font-sans font-semibold text-sm hover:underline mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Members Only
            </Link>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
                Ag Facts from Farm to Fork
              </p>
              <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl leading-tight mb-2">
                National Bacon Day
              </h2>
              <p className="text-cwa-purple font-sans font-semibold text-sm mb-6">Ag Bites Club</p>
              <div className="font-sans">
                <p className="text-gray-600 text-base leading-relaxed">
                  Did you know that California grows 99% of the world&apos;s supply of cling peaches? This tasty summer treat is in season right now and can be a great substitute for other types of sweets in baking recipes. Check out these great resources and ideas from the California Canning Peach Association (CCPA). Established in 1922, it is California&apos;s oldest agricultural cooperative and is the nation&apos;s oldest farm bargaining association.
                </p>
              </div>
            </div>
          </div>
        </PasswordGate>
      </SectionWrapper>
    </>
  );
}
