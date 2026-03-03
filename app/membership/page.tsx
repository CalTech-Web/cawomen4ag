import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join California Women For Agriculture. Open to everyone who supports a vibrant California agriculture. Contact us for membership inquiries.",
};

const tiers = [
  {
    name: "Membership - Student",
    price: "$20",
    period: "per year",
  },
  {
    name: "Membership - Regular",
    price: "$40",
    period: "per year",
  },
  {
    name: "Membership - Donor",
    price: "Minimum $100",
    period: "",
  },
  {
    name: "Bronze",
    price: "$250+",
    period: "",
  },
  {
    name: "Silver Donor",
    price: "$501 to $1,000",
    period: "",
  },
  {
    name: "Gold Donor",
    price: "$1,000 to $2,000",
    period: "",
  },
  {
    name: "Platinum Donor",
    price: "$2,000 to $4,000",
    period: "",
  },
  {
    name: "Titanium Donor",
    price: "$5,000+",
    period: "",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        subtitle="Membership"
        title="Our Voice for California Agriculture"
        compact
      />

      {/* Membership Tiers */}
      <SectionWrapper bg="white" py="lg">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-4">
            Membership Options
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-sans">
            CWA is open to everyone who believes in a vibrant, sustainable California agriculture. Choose the membership level that works for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <h3 className="font-heading font-semibold text-cwa-dark text-base mb-3 leading-snug">{tier.name}</h3>
              <p className="font-heading font-bold text-cwa-purple text-2xl leading-none">{tier.price}</p>
              {tier.period && (
                <p className="text-gray-500 text-sm font-sans mt-1">{tier.period}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 text-base font-sans mb-4">
            Interested in donor membership? Download the donor application to get started.
          </p>
          <a
            href="https://cawomen4ag.com/wp-content/uploads/2025/03/Introduction-to-web-donor-application.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-heading font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-150"
          >
            Download Donor Application
          </a>
        </div>
      </SectionWrapper>

      {/* Membership Inquiry Form */}
      <SectionWrapper bg="light" py="lg" id="inquire">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading font-semibold text-cwa-dark text-3xl sm:text-4xl leading-tight mb-4">
              Membership Inquiries
            </h2>
            <p className="text-gray-600 text-base font-sans">
              Send us a message and we will be in touch with more information about joining CWA.
            </p>
          </div>
          <MembershipInquiryForm />
        </div>
      </SectionWrapper>
    </>
  );
}

function MembershipInquiryForm() {
  return (
    <form
      action="mailto:statecwa@gmail.com"
      method="get"
      encType="text/plain"
      className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-5"
    >
      <input type="hidden" name="subject" value="CWA Membership Inquiry" />
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Full Name
        </label>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-sans">
          Your Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cwa-purple focus:border-transparent text-sm font-sans resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-heading font-semibold text-base px-6 py-4 rounded-lg transition-colors duration-150"
      >
        Send Inquiry
      </button>
    </form>
  );
}
