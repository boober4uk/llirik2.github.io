import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import "./globals.css";

const title = "Bober4uk — Minecraft Datapack Developer";
const description =
  "Bober4uk builds complex, high-performance Minecraft datapacks: custom mechanics, game modes and server systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bober4uk.ru"),
  title,
  description,
  keywords: [
    "Minecraft datapack developer",
    "Minecraft datapacks",
    "custom minecraft mechanics",
    "bober4uk",
    "датапаки майнкрафт",
    "разработка датапаков"
  ],
  openGraph: {
    title,
    description,
    url: "https://bober4uk.ru",
    siteName: "Bober4uk",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  icons: {
    icon: "/favicon.svg"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#070A08",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout is
            the documented place for this link; the rule only knows about pages/_document.js. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <BackgroundGrid />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
