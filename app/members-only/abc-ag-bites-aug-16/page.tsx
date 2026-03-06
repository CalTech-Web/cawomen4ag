import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "ABC AG Bites – Aug 16",
  description:
    "ABC AG Bites agriculture news update for August 16. Members only content from California Women For Agriculture.",
};

export default function AgBitesAug16Page() {
  return (
    <>
      <Hero
        subtitle="Members Only"
        title="ABC AG Bites – Aug 16"
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
                California Plums
              </h2>
              <p className="text-cwa-purple font-sans font-semibold text-sm mb-6">Ag Bites Club</p>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/plums.jpg"
                  alt="Fresh California plums"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
              <div className="font-sans">
                <p className="text-gray-600 text-base leading-relaxed">
                  Plums are stone fruits and belong to the rose family and are related to peaches, apricots, and cherries. According to CDFA, California produces over 70% of the plums eaten worldwide. Plums are even thought to help with memory loss and are a great source of potassium which can help lower blood pressure and promote heart health.
                </p>
              </div>
            </div>
          </div>
        </PasswordGate>
      </SectionWrapper>
    </>
  );
}
