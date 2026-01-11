"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/PlaceholderRectangle.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#F6EEC9] drop-shadow-lg">
          Career Preparation at IITNXT
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Empowering students with the tools, training, and guidance they need to excel in a competitive world.
          From resume building to real-world internships, we help shape your journey from learning to leadership.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="#resume-templates"
            className="px-6 py-3 rounded-full bg-[#799351] text-white font-semibold hover:bg-[#5d7440] transition-colors"
          >
            Explore Resume Templates
          </Link>
          <Link
            href="#resume-builder"
            className="px-6 py-3 rounded-full bg-[#A20A0A] text-white font-semibold hover:bg-[#7d0808] transition-colors"
          >
            Build My Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
