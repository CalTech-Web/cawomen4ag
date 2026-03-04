import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join California Women For Agriculture at upcoming events including the March Statewide Meeting in Carpinteria and May Legislative Days in Sacramento.",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        subtitle="Events"
        title="Upcoming Events"
        bgImage="/images/pexels-pixabay-461960.jpg"
        compact
      />

      {/* Event 1: March Statewide Meeting */}
      <SectionWrapper bg="white" py="lg">
        <FadeIn>
          <div className="rounded-2xl border-2 border-cwa-gold bg-white overflow-hidden shadow-lg">
            <div className="bg-cwa-gold px-6 py-3">
              <span className="font-heading font-semibold text-cwa-dark text-sm uppercase tracking-widest">
                Featured Event
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <p className="font-sans font-semibold text-cwa-purple text-xs uppercase tracking-widest mb-3">
                  March 6-8, 2026 | Carpinteria, CA
                </p>
                <h2 className="font-heading font-semibold text-cwa-dark text-3xl leading-tight mb-2">
                  2026 March Statewide Meeting
                </h2>
                <p className="font-heading text-cwa-dark/70 text-lg italic mb-6">
                  Rooted in the Valley: From Mountain Farms to Coastal Fields
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
                  Come Visit Us in Carpinteria! Join the Carpinteria/Santa Barbara Chapter for CWA's March Statewide Meeting celebrating 50 years of California Women for Agriculture (1975-2025).
                </p>

                {/* Events & Pricing */}
                <div className="space-y-5 mb-8">
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Events & Pricing</h3>
                    <ul className="space-y-2 text-gray-600 text-sm font-sans">
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span><strong>3/6:</strong> Welcome Social & Swag Pick Up</span>
                        <span className="text-cwa-dark font-medium">No Host</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span><strong>3/7:</strong> Tours & Lunch</span>
                        <span className="text-cwa-dark font-medium">$25.00 per person</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span><strong>3/7:</strong> Dinner</span>
                        <span className="text-cwa-dark font-medium">$50.00 per person</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span><strong>3/7:</strong> Executive Meeting</span>
                        <span className="text-cwa-dark/50">—</span>
                      </li>
                      <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span><strong>3/8:</strong> SWM In Person</span>
                        <span className="text-cwa-dark font-medium">$50.00 per person</span>
                      </li>
                      <li className="flex justify-between">
                        <span><strong>3/8:</strong> SWM Virtual (Zoom Link Fee)</span>
                        <span className="text-cwa-dark font-medium">$15.00</span>
                      </li>
                    </ul>
                  </div>

                  {/* Accommodations */}
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Accommodations</h3>
                    <div className="text-gray-600 text-sm font-sans space-y-1">
                      <p className="font-semibold text-cwa-dark">Holiday Inn Express & Suites</p>
                      <p>5606 Carpinteria Avenue</p>
                      <p>Carpinteria, CA 93013</p>
                      <p><a href="tel:+18055669499" className="text-cwa-purple hover:underline">(805) 566-9499</a></p>
                      <p className="mt-2"><strong>Rate:</strong> $169.99/night (1 King or 2 Queens)</p>
                      <p><strong>Check In:</strong> 3:00 PM | <strong>Check Out:</strong> 12:00 PM</p>
                      <p className="mt-2"><strong>Reserve by Phone:</strong> <a href="tel:+18884098300" className="text-cwa-purple hover:underline">888-409-8300</a></p>
                      <p><strong>Group Block ID:</strong> 315174</p>
                      <p className="text-cwa-green font-semibold mt-2">Reserve by 2/13/26 to receive group rate.</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Contact Information</h3>
                    <div className="text-gray-600 text-sm font-sans space-y-1">
                      <p><strong>Email:</strong> <a href="mailto:carpinteriacwa@gmail.com" className="text-cwa-purple hover:underline">carpinteriacwa@gmail.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+18053315377" className="text-cwa-purple hover:underline">(805) 331-5377</a></p>
                      <p><strong>Instagram:</strong> <a href="https://instagram.com/carpinteriacwa" target="_blank" rel="noopener noreferrer" className="text-cwa-purple hover:underline">@carpinteriacwa</a></p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfc43VwY4F-nfC7gSbmgozFVUn2b_VMIrm3md93lwgK91ycaA/viewform"
                    variant="primary"
                    external
                  >
                    Register Here
                  </Button>
                  <Button
                    href="https://cawomen4ag.com/wp-content/uploads/2026/01/CWA-State-Meeting-Registration-Flyer-2.pdf"
                    variant="outline"
                    external
                  >
                    Download Flyer
                  </Button>
                </div>
              </div>

              {/* Featured Image: Flyer */}
              <div className="relative bg-cwa-cream flex items-center justify-center p-6 lg:p-8">
                <Image
                  src="/images/CWA-State-Meeting-Registration-Flyer.jpg.webp"
                  alt="2026 March Statewide Meeting Registration Flyer"
                  width={500}
                  height={700}
                  className="rounded-lg shadow-md w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Event 2: Legislative Days */}
      <SectionWrapper bg="light" py="lg">
        <FadeIn>
          <div className="rounded-2xl border-2 border-cwa-purple/30 bg-white overflow-hidden shadow-lg">
            <div className="bg-cwa-purple px-6 py-3">
              <span className="font-heading font-semibold text-white text-sm uppercase tracking-widest">
                Advocacy
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <p className="font-sans font-semibold text-cwa-purple text-xs uppercase tracking-widest mb-3">
                  May 4-5, 2026 | Sacramento, CA
                </p>
                <h2 className="font-heading font-semibold text-cwa-dark text-3xl leading-tight mb-2">
                  Statewide Legislative Days
                </h2>
                <p className="font-heading text-cwa-dark/70 text-lg italic mb-6">
                  California Women for Agriculture
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
                  CWA's annual two-day legislative event in Sacramento, meeting directly with state lawmakers to advocate for California agriculture. Celebrating 50 years (1975-2025) of California Women for Agriculture.
                </p>

                {/* Event Details */}
                <div className="space-y-5 mb-8">
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Event Details</h3>
                    <div className="text-gray-600 text-sm font-sans space-y-1">
                      <p><strong>Registration Fee:</strong> $125 per person</p>
                      <p><strong>Duration:</strong> 2 Days, 1 Night</p>
                      <p><strong>Registration Deadline:</strong> <span className="text-cwa-green font-semibold">April 13th</span></p>
                    </div>
                  </div>

                  {/* Agenda */}
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Agenda</h3>
                    <div className="text-gray-600 text-sm font-sans space-y-3">
                      <div>
                        <p className="font-semibold text-cwa-dark mb-1">Monday, May 4th</p>
                        <ul className="space-y-1 ml-4">
                          <li><strong>Arrive:</strong> 11:00 AM</li>
                          <li>Light Luncheon</li>
                          <li>Legislative Briefing</li>
                          <li>Cornucopia Dinner with Sponsors and Guests</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-cwa-dark mb-1">Tuesday, May 5th</p>
                        <ul className="space-y-1 ml-4">
                          <li>Legislative Visits</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Accommodations */}
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Accommodations</h3>
                    <div className="text-gray-600 text-sm font-sans space-y-1">
                      <p className="font-semibold text-cwa-dark">Sheraton Grand</p>
                      <p>1230 J Street</p>
                      <p>Sacramento, CA 95814</p>
                      <p><strong>Call to Reserve:</strong> <a href="tel:+19164471700" className="text-cwa-purple hover:underline">(916) 447-1700</a></p>
                      <p><strong>Hotel Rate:</strong> $239+ per night</p>
                      <p className="text-cwa-green font-semibold mt-2">Room Block Deadline: April 13th</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-sans font-semibold text-cwa-dark text-sm uppercase tracking-wide mb-3">Questions?</h3>
                    <div className="text-gray-600 text-sm font-sans">
                      <p><strong>Email:</strong> <a href="mailto:StateCWA@gmail.com" className="text-cwa-purple hover:underline">StateCWA@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe3f981uHiQYWG7D-aYtS7_EqEkU8QDkko0GU21Sca9KD9NFw/viewform"
                    variant="primary"
                    external
                  >
                    Register Here
                  </Button>
                  <Button
                    href="https://cawomen4ag.com/wp-content/uploads/2026/03/2026-leg-day-flier.png"
                    variant="outline"
                    external
                  >
                    Download Flyer
                  </Button>
                </div>
              </div>

              {/* Featured Image: Flyer */}
              <div className="relative bg-cwa-cream flex items-center justify-center p-6 lg:p-8">
                <Image
                  src="/images/2026-leg-day-flyer.png"
                  alt="2026 Statewide Legislative Days Flyer"
                  width={540}
                  height={675}
                  className="rounded-lg shadow-md w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Contact CTA */}
      <SectionWrapper bg="white" py="md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-cwa-dark text-3xl mb-4">
            Questions About Events?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
            Contact the CWA state office for more information about upcoming events and statewide meetings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button href="/membership" variant="outline">
              Become a Member
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
