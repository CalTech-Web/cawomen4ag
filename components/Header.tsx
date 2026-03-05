"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string; external?: boolean }[];
}

const navLinks: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/chapters", label: "Chapters" },
  {
    href: "/resources",
    label: "Media & Resources",
    children: [
      { href: "/statewide-meeting-information", label: "Statewide Meeting Information" },
    ],
  },
  {
    href: "/foundation",
    label: "CWA Foundation",
    children: [
      { href: "/scholarship-opportunity", label: "Scholarship Opportunity" },
      { href: "/donors", label: "Sponsors" },
      { href: "https://cawomen4ag.com/wp-content/uploads/2025/03/Introduction-to-web-donor-application.pdf", label: "Download Donor Application", external: true },
    ],
  },
  {
    href: "/membership",
    label: "Membership",
    children: [
      { href: "/members-only", label: "Members Only" },
    ],
  },
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
    <header className="fixed top-0 w-full z-50">
      {/* Utility Bar */}
      <div className={`hidden lg:block transition-all duration-300 ${showWhiteBg ? "bg-cwa-purple" : "bg-cwa-dark/60 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-5">
              <a href="tel:916-441-2910" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-sans">(916) 441-2910</span>
              </a>
              <a href="mailto:statecwa@gmail.com" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-sans">statecwa@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/caborninag/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/women4ag" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/california-women-for-agriculture" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${showWhiteBg ? "bg-white shadow-sm" : "bg-cwa-dark/30 backdrop-blur-sm"}`}>
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
              const isActive = pathname === link.href || (link.children?.some(c => pathname === c.href)) || false;
              const hasChildren = link.children && link.children.length > 0;
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-sans font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                      isActive
                        ? showWhiteBg ? "text-cwa-purple" : "text-cwa-gold"
                        : showWhiteBg ? "text-gray-600 hover:text-cwa-purple" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {hasChildren && (
                      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-cwa-gold rounded-full" />
                    )}
                  </Link>
                  {hasChildren && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                        {link.children!.map((child) => {
                          const childActive = pathname === child.href;
                          if (child.external) {
                            return (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-sans text-gray-600 hover:text-cwa-purple hover:bg-cwa-cream/50 transition-colors"
                              >
                                {child.label}
                                <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm font-sans transition-colors ${
                                childActive
                                  ? "text-cwa-purple bg-cwa-cream/50"
                                  : "text-gray-600 hover:text-cwa-purple hover:bg-cwa-cream/50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
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
            const isActive = pathname === link.href || (link.children?.some(c => pathname === c.href)) || false;
            return (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all block ${
                    isActive
                      ? "text-cwa-purple bg-cwa-cream"
                      : "text-gray-600 hover:text-cwa-purple hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && link.children.map((child) => {
                  const childActive = pathname === child.href;
                  if (child.external) {
                    return (
                      <a
                        key={child.href}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-1.5 pl-8 pr-4 py-2.5 rounded-lg text-sm font-sans text-gray-500 hover:text-cwa-purple hover:bg-gray-50 transition-all"
                      >
                        {child.label}
                        <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block pl-8 pr-4 py-2.5 rounded-lg text-sm font-sans transition-all ${
                        childActive
                          ? "text-cwa-purple bg-cwa-cream/50"
                          : "text-gray-500 hover:text-cwa-purple hover:bg-gray-50"
                      }`}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <Link
            href="/membership"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-cwa-gold hover:bg-cwa-gold/90 text-cwa-dark font-sans font-semibold text-sm px-4 py-3 rounded-full text-center transition-colors"
          >
            Join CWA
          </Link>
          {/* Mobile Contact Info */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2 px-4">
            <a href="tel:916-441-2910" className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (916) 441-2910
            </a>
            <a href="mailto:statecwa@gmail.com" className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              statecwa@gmail.com
            </a>
          </div>
        </nav>
      </div>
      </div>
    </header>
  );
}
