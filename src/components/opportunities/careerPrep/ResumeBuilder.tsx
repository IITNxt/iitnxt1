// src/opportunities/careerPrep/ResumeBuilder.tsx
"use client";

import Link from "next/link";

export default function ResumeBuilder() {
  return (
    <section id="resume-builder" className="py-16 px-6 bg-[#F6EEC9]">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#A20A0A]">
          Build Your Resume in Minutes
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
          Don’t just use a template — create a resume that truly reflects your
          skills, achievements, and aspirations. Our Resume Builder will guide
          you step by step, ensuring a professional format aligned with industry
          standards.
        </p>

        {/* Call-to-Action Button */}
        <div>
          <Link
            href="/opportunities/careerPrep/builder-placeholder"
            className="inline-block rounded-full px-8 py-3 bg-[#799351] text-white font-semibold shadow-lg hover:bg-[#5d723e] transition-colors text-lg"
          >
            Start Building Now
          </Link>
        </div>
      </div>
    </section>
  );
}
