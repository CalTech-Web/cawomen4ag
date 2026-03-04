import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Statewide Meeting Information",
  description:
    "Access CWA statewide meeting reports, agendas, and related documents from California Women For Agriculture.",
};

const meetingReports = [
  {
    title: "September 2022 SWM Reports",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/11/Sept-2022-SWM-Reports.pdf",
  },
  {
    title: "USDA Invests in Urban Agriculture",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/11/USDA-Invests-in-Urban-Agriculture.pdf",
  },
];

export default function StatewideMinfoPage() {
  return (
    <>
      <Hero
        subtitle="SWM Information"
        title="Statewide Meeting Information"
        description="Access meeting reports and related documents from CWA statewide meetings."
        bgImage="/images/pexels-pixabay-461960.jpg"
        compact
      />

      {/* Meeting Reports */}
      <SectionWrapper bg="white" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Documents
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Meeting Reports
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-4 font-sans">
              Click on the link below to view attachment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {meetingReports.map((report, i) => (
              <FadeIn key={i} delay={i * 80}>
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-cwa-cream rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-cwa-green/30 transition-all"
                >
                  <div className="w-14 h-14 bg-cwa-purple/10 text-cwa-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cwa-purple group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-cwa-dark text-base group-hover:text-cwa-purple transition-colors">
                      {report.title}
                    </p>
                    <p className="text-gray-400 text-sm font-sans mt-1">PDF Download</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
