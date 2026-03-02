"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/chapters", label: "Chapters" },
  { href: "/foundation", label: "Foundation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cwa-purple shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-cwa-gold rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-cwa-dark font-spartan font-bold text-sm">CWA</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-spartan font-bold text-white text-sm leading-tight">
                California Women
              </p>
              <p className="font-spartan font-bold text-cwa-gold text-sm leading-tight">
                For Agriculture
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-sans font-semibold transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/membership"
              className="hidden sm:inline-flex items-center bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-spartan font-bold text-sm px-4 py-2 rounded-md transition-colors duration-150"
            >
              Join CWA
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition-transform duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-transform duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-cwa-purple border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md text-base font-sans font-semibold transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-cwa-gold hover:bg-yellow-400 text-cwa-dark font-spartan font-bold text-sm px-4 py-3 rounded-md text-center transition-colors"
          >
            Join CWA
          </Link>
        </nav>
      </div>
    </header>
  );
}
