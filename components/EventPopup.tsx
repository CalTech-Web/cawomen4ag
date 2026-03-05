"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    image: "/images/CWA-State-Meeting-Registration-Flyer.jpg.webp",
    imageAlt: "2026 March Statewide Meeting Registration Flyer",
    date: "March 6-8, 2026 | Carpinteria, CA",
    title: "2026 March Statewide Meeting",
    description:
      "Rooted in the Valley: From Mountain Farms to Coastal Fields. Join the Carpinteria/Santa Barbara Chapter for CWA's March Statewide Meeting.",
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfc43VwY4F-nfC7gSbmgozFVUn2b_VMIrm3md93lwgK91ycaA/viewform",
  },
  {
    image: "/images/2026-leg-day-flyer.png",
    imageAlt: "2026 Statewide Legislative Days Flyer",
    date: "May 4-5, 2026 | Sacramento, CA",
    title: "Statewide Legislative Days",
    description:
      "Join CWA's annual two-day legislative event in Sacramento, meeting directly with state lawmakers to advocate for California agriculture.",
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe3f981uHiQYWG7D-aYtS7_EqEkU8QDkko0GU21Sca9KD9NFw/viewform",
  },
];

export default function EventPopup() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("event-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("event-popup-dismissed", "1");
  };

  const prev = () => setCurrent((c) => (c === 0 ? events.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === events.length - 1 ? 0 : c + 1));

  if (!visible) return null;

  const event = events[current];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-gray-800 shadow-sm transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Slider Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-cwa-purple shadow-md transition-colors"
          aria-label="Previous event"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-cwa-purple shadow-md transition-colors"
          aria-label="Next event"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Flyer Image */}
        <div className="relative bg-cwa-cream flex items-center justify-center p-4">
          <Image
            src={event.image}
            alt={event.imageAlt}
            width={480}
            height={600}
            className="rounded-lg w-full h-auto max-h-[45vh] object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="font-sans font-semibold text-cwa-purple text-xs uppercase tracking-widest mb-1">
            {event.date}
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-xl leading-tight mb-2">
            {event.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
            {event.description}
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-4">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-cwa-purple" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <Link
              href="/events"
              onClick={close}
              className="flex-1 bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors"
            >
              View Event Details
            </Link>
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-cwa-purple text-cwa-purple hover:bg-cwa-purple hover:text-white font-sans font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
