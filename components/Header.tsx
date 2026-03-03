"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/chapters", label: "Chapters" },
  { href: "/programs", label: "Programs" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteBg = scrolled || !isHome || mobileOpen;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${showWhiteBg ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-11 h-11 lg:w-12 lg:h-12">
              <Image
                src="/images/cwa-logo.webp"
                alt="California Women For Agriculture"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-heading font-semibold text-sm leading-tight transition-colors duration-300 ${showWhiteBg ? "text-cwa-dark" : "text-white"}`}>
                California Women
              </p>
              <p className="font-heading font-medium text-cwa-gold text-xs">
                For Agriculture
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-sans font-medium transition-colors duration-200 ${
                    isActive
                      ? showWhiteBg ? "text-cwa-purple" : "text-cwa-gold"
                      : showWhiteBg ? "text-gray-600 hover:text-cwa-purple" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cwa-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/membership"
              className="hidden sm:inline-flex items-center gap-1.5 bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Join CWA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${showWhiteBg ? "text-cwa-dark hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 transition-transform duration-300 origin-center ${showWhiteBg ? "bg-cwa-dark" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 transition-opacity duration-300 ${showWhiteBg ? "bg-cwa-dark" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 transition-transform duration-300 origin-center ${showWhiteBg ? "bg-cwa-dark" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${mobileOpen ? "max-h-screen opacity-100 shadow-lg" : "max-h-0 opacity-0"}`}>
        <nav className="border-t border-gray-100 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all ${
                  isActive
                    ? "text-cwa-purple bg-cwa-cream"
                    : "text-gray-600 hover:text-cwa-purple hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/membership"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold text-sm px-4 py-3 rounded-full text-center transition-colors"
          >
            Join CWA
          </Link>
        </nav>
      </div>
    </header>
  );
}
