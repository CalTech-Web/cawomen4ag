import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Media & Resources",
  description:
    "Access CWA's official state publication, The Compass newsletter archive, annual reports, and press releases from California Women For Agriculture.",
};

const compassIssues = [
  {
    title: "Compass March 2024",
    url: "https://cawomen4ag.com/wp-content/uploads/2024/03/March-2024-Compass-Newsletter_digital.pdf",
  },
  {
    title: "Compass January 2024",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/12/January-2024-Compass-Newsletter.pdf",
  },
  {
    title: "Compass November 2023",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/11/Fnal-Nov.-2023Compass.pdf",
  },
  {
    title: "Compass September 2023",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/09/September-2023-Compass-Newsletter.pdf",
  },
  {
    title: "Compass May 2023",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/06/Fnal-May-2023-Compass-Newsletter.pdf",
  },
  {
    title: "Compass March 2023",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/04/March-2023-Compass-Newsletter-1.pdf",
  },
  {
    title: "Compass January 2023",
    url: "https://cawomen4ag.com/wp-content/uploads/2023/01/Jan-2023-Compass-in-word.pdf",
  },
  {
    title: "Compass November 2022",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/11/165975_CWFA-Compass-September-PROOF_sy.pdf",
  },
  {
    title: "Compass September 2022",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/10/FINAL-September-Compass-2022.pdf",
  },
  {
    title: "Compass May 2022",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/10/COMPASS-May22-FINAL..pdf",
  },
  {
    title: "Compass March 2022",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/03/COMPASS-_-March2022-FINAL.pdf",
  },
  {
    title: "Compass January 2022",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/01/COMPASS_JANUARY_2022.pdf",
  },
  {
    title: "CWA Annual Report",
    url: "https://cawomen4ag.com/wp-content/uploads/2022/01/CWA-State-Report-.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        subtitle="Media & Resources"
        title="Media & Resources"
        description="Stay informed with CWA's official publications, newsletters, and press releases."
        bgImage="/images/pexels-zen-chung-5529007.jpg"
        compact
      />

      {/* Press Releases */}
      <SectionWrapper bg="white" py="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-green text-[11px] uppercase tracking-[0.2em] mb-3">
              Stay Informed
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              Press Releases
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-center font-sans max-w-2xl mx-auto">
            Stay in touch with us through our Official State Publication, The Compass.
          </p>
        </div>
      </SectionWrapper>

      {/* Compass Newsletter Archive */}
      <SectionWrapper bg="light" py="lg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-cwa-purple text-[11px] uppercase tracking-[0.2em] mb-3">
              Newsletter Archive
            </p>
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight">
              The Compass
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {compassIssues.map((issue, i) => (
              <FadeIn key={i} delay={i * 50}>
                <a
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-cwa-green/30 transition-all"
                >
                  <div className="w-12 h-12 bg-cwa-purple/10 text-cwa-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cwa-purple group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-cwa-dark text-sm group-hover:text-cwa-purple transition-colors">
                      {issue.title}
                    </p>
                    <p className="text-gray-400 text-xs font-sans mt-0.5">PDF Download</p>
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
