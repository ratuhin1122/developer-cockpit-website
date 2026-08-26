import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Cockpit - The Unified Developer Workspace for Windows",
  description: "An extensible, high-performance desktop workspace designed to unify core developer workflows and eliminate context switching on Windows.",
  metadataBase: new URL("https://developercockpit.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Developer Cockpit",
    description: "An extensible, high-performance desktop workspace designed to unify core developer workflows and eliminate context switching on Windows.",
    url: "https://developercockpit.example.com",
    siteName: "Developer Cockpit",
    images: [
      {
        url: "/developer-cockpit.png",
        width: 1200,
        height: 630,
        alt: "Developer Cockpit Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Cockpit",
    description: "An extensible, high-performance desktop workspace designed to unify core developer workflows.",
    images: ["/developer-cockpit.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Developer Cockpit",
  "operatingSystem": "Windows 10, Windows 11",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-blue-200`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
