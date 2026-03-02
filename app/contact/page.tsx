import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with California Women For Agriculture. Reach us at 1521 I Street, Sacramento, CA 95814 or call (916) 441-2910.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Mailing Address",
    lines: ["1521 I Street", "Sacramento, CA 95814"],
    action: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "State Office Phone",
    lines: ["(916) 441-2910"],
    action: { href: "tel:+19164412910", label: "Call Now" },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Alternate Phone",
    lines: ["530-518-9583"],
    action: { href: "tel:+15305189583", label: "Call Now" },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "General Email",
    lines: ["statecwa@gmail.com"],
    action: { href: "mailto:statecwa@gmail.com", label: "Send Email" },
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Contact"
        title="Contact"
        compact
      />

      <SectionWrapper bg="white" py="lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-3">
                Contact Information
              </p>
              <h2 className="font-spartan font-extrabold text-cwa-dark text-3xl leading-tight mb-4">
                California Women For Agriculture
              </h2>
              <p className="text-gray-600 text-base leading-relaxed font-sans">
                CWA's state office is located in Sacramento. We welcome inquiries from members, prospective members, media, legislators, and anyone interested in California agriculture.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-cwa-purple/10 text-cwa-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-spartan font-bold text-cwa-dark text-sm mb-1">{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-gray-600 text-sm font-sans">{line}</p>
                    ))}
                    {item.action && (
                      <a
                        href={item.action.href}
                        className="text-cwa-purple text-sm font-semibold hover:underline mt-1 inline-block"
                      >
                        {item.action.label} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Communications Director */}
            <div className="bg-cwa-purple/5 rounded-xl p-5 border border-cwa-purple/20">
              <p className="font-spartan font-bold text-cwa-dark text-sm mb-1">Communications Director</p>
              <p className="font-spartan font-semibold text-cwa-purple text-base">Lora K. Daniels</p>
              <a href="tel:+19162151494" className="text-gray-600 text-sm font-sans hover:text-cwa-purple transition-colors block mt-1">
                (916) 215-1494
              </a>
              <p className="text-gray-500 text-xs font-sans mt-2">
                For media inquiries, press releases, and communications-related questions.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p className="font-spartan font-bold text-cwa-dark text-sm mb-3">Follow CWA</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cwa-purple/10 text-cwa-purple hover:bg-cwa-purple hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://twitter.com/women4ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cwa-purple/10 text-cwa-purple hover:bg-cwa-purple hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="font-spartan font-semibold text-cwa-green text-sm uppercase tracking-widest mb-2">
                Send a Message
              </p>
              <h2 className="font-spartan font-extrabold text-cwa-dark text-2xl leading-tight mb-6">
                Contact Form
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Membership CTA */}
      <SectionWrapper bg="dark" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-spartan font-extrabold text-white text-3xl mb-4">
            Ready to Join CWA?
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-6 font-sans">
            Membership is open to everyone who believes in California agriculture. Student memberships start at $20/year.
          </p>
          <a
            href="/membership"
            className="inline-flex items-center bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-spartan font-bold text-base px-8 py-4 rounded-lg transition-colors duration-150 shadow-md"
          >
            Join CWA Today
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
