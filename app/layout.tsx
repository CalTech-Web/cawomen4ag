import type { Metadata } from "next";
import { League_Spartan, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
    <html lang="en" className={`${leagueSpartan.variable} ${sourceSans.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
