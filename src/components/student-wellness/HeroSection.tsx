// components/wellness/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <section className="relative h-[65vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6EEC9] via-white to-[#FEF3C7]" />

      {/* AI-generated Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/student-wellness/Herosection.png"
          alt="Student Wellness Illustration"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* dark overlay for contrast */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#F6EEC9]">
          Your Well-being Matters as Much as Your Learning
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-[#FEF3C7]">
          Empowering students with mental health support, fitness programs, and
          creative workshops for holistic growth.
        </p>
        <a
          href="#programs"
          className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Join the Wellness Program
        </a>
      </div>
    </section>
  );
}
