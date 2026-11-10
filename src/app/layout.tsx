import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/motion";
import { site } from "@/content/site";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
      <head>
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
