// HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    // Outer section: hero container with background image
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center flex items-center justify-center"
      // Hero background image (set via inline style for flexibility)
      style={{ backgroundImage: "url('/aboutUs/Hero.png')" }}
    >
      {/* Content wrapper with background overlay + styling */}
      <div className="bg-black p-10 rounded-xl text-center text-gold space-y-4 max-w-3xl">
        
        {/* Logo at the top center */}
        <Image
          src="/logo/logoWithoutBg.png"
          alt="IIT Nxt Logo"
          width={100}
          height={100}
          className="mx-auto"
        />

        {/* Hero heading / main tagline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Dream, Innovate, and Transform
        </h1>

        {/* Supporting sub-text */}
        <p className="text-xl text-[#F6EEC9]">
          Together, Let’s Build a Technological Future!
        </p>
      </div>
    </section>
  );
}
