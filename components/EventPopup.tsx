"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventPopup() {
  const [visible, setVisible] = useState(false);

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

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-300"
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

        {/* Flyer Image */}
        <div className="relative bg-cwa-cream flex items-center justify-center p-4">
          <Image
            src="/images/2026-leg-day-flyer.png"
            alt="2026 Statewide Legislative Days Flyer"
            width={480}
            height={600}
            className="rounded-lg w-full h-auto max-h-[50vh] object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="font-sans font-semibold text-cwa-purple text-xs uppercase tracking-widest mb-1">
            May 4-5, 2026 | Sacramento, CA
          </p>
          <h2 className="font-heading font-semibold text-cwa-dark text-xl leading-tight mb-2">
            Statewide Legislative Days
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 font-sans">
            Join CWA's annual two-day legislative event in Sacramento, meeting directly with state lawmakers to advocate for California agriculture.
          </p>
          <div className="flex gap-3">
            <Link
              href="/events"
              onClick={close}
              className="flex-1 bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold text-sm px-5 py-3 rounded-full text-center transition-colors"
            >
              View Event Details
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe3f981uHiQYWG7D-aYtS7_EqEkU8QDkko0GU21Sca9KD9NFw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
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
