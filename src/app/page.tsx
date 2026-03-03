"use client";

import { Sidebar } from "@/components/sidebar";
import { useScrollspy } from "@/hooks/use-scrollspy";

const SECTION_IDS = ["hero", "projects", "research", "journey", "philosophy", "contact"];

export default function Home() {
  const activeSection = useScrollspy(SECTION_IDS);

  return (
    <div className="min-h-screen">
      <Sidebar activeSection={activeSection} />

      {/* Main content */}
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-24">
          <section id="hero" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Hero section</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>

          <section id="projects" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Side Projects</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>

          <section id="research" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Research Roots</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>

          <section id="journey" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Career Journey</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>

          <section id="philosophy" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">How I Work</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>

          <section id="contact" className="scroll-mt-20">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Contact</p>
            <h2 className="font-serif text-3xl">Coming soon</h2>
          </section>
        </div>
      </main>
    </div>
  );
}
