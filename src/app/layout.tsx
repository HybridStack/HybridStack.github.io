import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BackToTop } from "@/components/ui/back-to-top";
import { FloatingContactButton } from "@/components/ui/FloatingContactButton";
import { CookieBanner } from "@/components/ui/cookie-banner";

export const metadata: Metadata = {
  title: "Tariq Mahmood | Portfolio",
  description: "Full-stack developer · TypeScript enthusiast · Building things that matter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-screen flex flex-col font-sans"
        suppressHydrationWarning
      >
        <div>
          <ScrollProgress />
          <Header />
          <main className="pt-32">
            {children}
          </main>
          <MobileMenu />
          <BackToTop />
          <FloatingContactButton />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}