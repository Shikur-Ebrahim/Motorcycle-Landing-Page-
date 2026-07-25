import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://motorcycle-landing-page-five.vercel.app"),
  title: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ | 100% አዲስ ሞተርሳይክሎች",
  description:
    "ከ 65,000 ብር እስከ 90,000 ብር ድረስ 100% አዲስ የሞተርሳይክል ሞዴሎች። 2025/2026 ሞዴሎች ሙሉ ህጋዊ ሰነዶች ጋር። ዛሬውኑ ይደውሉ: 0932912020",
  keywords:
    "ሞተርሳይክል ሽያጭ, motorcycle Ethiopia, motorcycle Addis Ababa, 2025 motorcycle, ዘላለም ይበልጣል, አዲስ ሞተርሳይክል",
  authors: [{ name: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ" }],
  openGraph: {
    title: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ | 100% አዲስ ሞተርሳይክሎች",
    description:
      "ከ 65,000 ብር እስከ 90,000 ብር ድረስ 100% አዲስ ሞተርሳይክሎች። 2025/2026 ሞዴሎች። ዛሬውኑ ይደውሉ: 0932912020",
    type: "website",
    locale: "am_ET",
    siteName: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ",
    images: [
      {
        url: "/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ",
    description: "100% አዲስ ሞተርሳይክሎች ከ 65,000 ብር ጀምሮ። ዛሬውኑ ይደውሉ: 0932912020",
  },

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
