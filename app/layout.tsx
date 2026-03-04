import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "California Women For Agriculture | Empowering Ag Since 1975",
    template: "%s | California Women For Agriculture",
  },
  description:
    "California Women For Agriculture (CWA) is a 501(c)(5) nonprofit uniting women in and for agriculture to advocate, educate, and invest in the next generation of California agricultural leaders since 1975.",
  keywords: [
    "California Women For Agriculture",
    "CWA",
    "agricultural advocacy",
    "California agriculture",
    "women in agriculture",
    "farm advocacy",
    "agricultural education",
  ],
  authors: [{ name: "California Women For Agriculture" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "California Women For Agriculture | Empowering Ag Since 1975",
    description:
      "Join 1,500+ members across 19 chapters advocating for California agriculture since 1975.",
    url: "https://cawomen4ag.com",
    siteName: "California Women For Agriculture",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "California Women For Agriculture",
    description:
      "Empowering California Women for Agriculture since 1975.",
    site: "@women4ag",
  },
  metadataBase: new URL("https://cawomen4ag.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="pt-[75px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
