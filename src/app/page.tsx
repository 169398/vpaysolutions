"use client";

import { Navigation } from "@/components/shared/Navigation";
import { HeroSection } from "@/components/shared/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,140,50,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(205,70,150,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(70,150,205,0.2),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <HeroSection />
      </main>
    </div>
  );
}
