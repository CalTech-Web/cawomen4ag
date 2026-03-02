import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Find your local California Women For Agriculture chapter. 19 chapters spanning California from Butte County to the Mexican border.",
};

const chapters = [
  {
    name: "Lake County",
    region: "North",
    description: "Home to the flagship AgVenture program, Lake County chapter is a leader in agricultural education.",
  },
  {
    name: "North Bay",
    region: "North",
    description: "Serving Sonoma, Napa, and surrounding counties in the North Bay region.",
  },
  {
    name: "North Valley",
    region: "North",
    address: "P.O. Box 249, Durham, CA 95938",
    email: "northvalleycwa@gmail.com",
    description: "Serving the northern Sacramento Valley, including Butte County and surrounding areas.",
  },
  {
    name: "Sacramento Valley",
    region: "Central",
    description: "The heart of CWA advocacy, with close proximity to the State Capitol and legislative action.",
  },
  {
    name: "Merced",
    region: "Central",
    description: "Serving the agricultural communities of Merced County in the San Joaquin Valley.",
  },
  {
    name: "San Joaquin",
    region: "Central",
    description: "Representing one of California's most productive agricultural regions.",
  },
  {
    name: "Stanislaus",
    region: "Central",
    description: "Active in the Central Valley's diverse dairy, nut, and fruit production region.",
  },
  {
    name: "Central Valley",
    region: "Central",
    address: "P.O. Box 1761, Clovis, CA 93612",
    email: "CWACentralvalley@gmail.com",
    description: "Based in Clovis, serving Fresno and the greater Central Valley agricultural community.",
  },
  {
    name: "Kern",
    region: "South Central",
    description: "Advocating for Kern County's vast and diverse agricultural production.",
  },
  {
    name: "Tulare-Kings",
    region: "South Central",
    description: "Serving Tulare and Kings counties, two of California's top agricultural counties.",
  },
  {
    name: "Carpinteria / Santa Barbara",
    region: "Central Coast",
    description: "Representing the unique agricultural communities along the Santa Barbara County coast.",
  },
  {
    name: "Salinas Valley",
    region: "Central Coast",
    description: "Serving the 'Salad Bowl of the World' and surrounding Monterey County agricultural communities.",
  },
  {
    name: "San Luis Obispo County",
    region: "Central Coast",
    description: "Representing SLO County's diverse wine, dairy, and vegetable production sectors.",
  },
  {
    name: "Santa Maria",
    region: "Central Coast",
    description: "One of CWA's most active chapters, having invested over $330,000 in local agricultural scholarships.",
  },
  {
    name: "Ventura County",
    region: "Southern",
    description: "Serving one of California's most productive coastal agricultural regions.",
  },
  {
    name: "Coachella Valley",
    region: "Southern",
    description: "CWA's birthplace. The Coachella Valley chapter is where it all began in 1975.",
  },
  {
    name: "Imperial Valley",
    region: "Southern",
    description: "Representing California's southernmost agricultural region, known for winter vegetables.",
  },
  {
    name: "Los Angeles",
    region: "Southern",
    description: "Bridging agriculture and urban communities in the greater Los Angeles region.",
  },
  {
    name: "Palo Verde",
    region: "Southern",
    description: "Serving the Palo Verde Valley agricultural community along the Colorado River.",
  },
];

const regions = ["North", "Central", "South Central", "Central Coast", "Southern"];

const regionColors: Record<string, string> = {
  North: "bg-cwa-blue/10 text-blue-800 border-cwa-blue/30",
  Central: "bg-cwa-green/10 text-cwa-green border-cwa-green/30",
  "South Central": "bg-cwa-gold/10 text-yellow-700 border-cwa-gold/30",
  "Central Coast": "bg-cwa-purple/10 text-cwa-purple border-cwa-purple/30",
  Southern: "bg-red-50 text-red-700 border-red-200",
};

export default function ChaptersPage() {
  return (
    <>
      <Hero
        subtitle="Our Chapters"
        title="19 Chapters Across the Golden State"
        description="From Butte County in the north to the Mexican border in the south, CWA chapters connect agricultural advocates, farmers, and supporters in every major growing region of California."
        compact
      />

      {/* Geographic Overview */}
      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
              Statewide Reach
            </p>
            <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight mb-6">
              Agriculture Runs the Length of California
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-sans">
              California Women For Agriculture's 19 chapters span the entire state, from the rice fields of Butte County to the date palms of the Coachella Valley and the vegetable farms of Imperial Valley near the Mexican border.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
              This geographic diversity is one of CWA's greatest strengths. Our members understand the unique challenges faced by different agricultural regions and unite to speak with one voice in Sacramento and Washington D.C.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "19", label: "Active Chapters" },
                { value: "1,500+", label: "Members" },
                { value: "50+", label: "Years Serving CA" },
                { value: "Statewide", label: "Geographic Coverage" },
              ].map((stat, i) => (
                <div key={i} className="bg-cwa-purple/5 rounded-xl p-4 text-center border border-cwa-purple/10">
                  <p className="font-spartan font-extrabold text-cwa-purple text-2xl">{stat.value}</p>
                  <p className="text-gray-600 text-xs font-sans mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cwa-green/5 rounded-2xl p-8 border border-cwa-green/20">
            <h3 className="font-spartan font-bold text-cwa-dark text-xl mb-6">Chapters by Region</h3>
            <div className="space-y-4">
              {regions.map((region) => {
                const regionChapters = chapters.filter((c) => c.region === region);
                return (
                  <div key={region}>
                    <span className={`inline-block text-xs font-spartan font-bold uppercase tracking-wide px-3 py-1 rounded-full border mb-2 ${regionColors[region]}`}>
                      {region} ({regionChapters.length})
                    </span>
                    <p className="text-gray-600 text-sm font-sans">
                      {regionChapters.map((c) => c.name).join(", ")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* All Chapters */}
      <SectionWrapper bg="light" py="lg">
        <div className="text-center mb-12">
          <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
            Find Your Chapter
          </p>
          <h2 className="font-spartan font-extrabold text-cwa-dark text-4xl lg:text-5xl leading-tight">
            All CWA Chapters
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((chapter, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-spartan font-bold text-cwa-dark text-lg">{chapter.name}</h3>
                <span className={`flex-shrink-0 text-xs font-spartan font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${regionColors[chapter.region]}`}>
                  {chapter.region}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-sans mb-3">{chapter.description}</p>
              {(chapter.address || chapter.email) && (
                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  {chapter.address && (
                    <div className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 text-cwa-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-500 text-xs font-sans">{chapter.address}</p>
                    </div>
                  )}
                  {chapter.email && (
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-cwa-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${chapter.email}`} className="text-cwa-purple text-xs hover:underline font-sans">
                        {chapter.email}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Start a Chapter CTA */}
      <SectionWrapper bg="dark" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-spartan font-extrabold text-white text-3xl lg:text-4xl mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6 font-sans">
            Contact CWA's state office to learn about joining the nearest chapter or connecting with other ag advocates in your region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact State Office
            </Button>
            <Button href="/membership" variant="outline">
              Join CWA
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
