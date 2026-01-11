import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/hero.png')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-black/30" aria-hidden="true" />
      {/* Hero Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6 py-20 flex flex-col items-center justify-center">
        {/* Icon placeholder */}
        <div className="mb-6 flex items-center justify-center">
          {/* Replace below SVG with your own icon if desired */}
          <Image
            src="/logo/logoWithoutBg.png"
            alt="IIT Nxt Logo"
            height={120}
            width={120}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-300 drop-shadow-lg mb-6">
          Dream, Innovate, and Transform
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-8 max-w-2xl mx-auto">
          Together, Let’s Build a Technological Future!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/programs"
            className="inline-block rounded-full px-8 py-3 bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition-colors text-lg"
          >
            Explore Programs
          </a>
          <SignedOut>
            <Link
              href="/sign-in"
              className="inline-block rounded-full px-8 py-3 bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition-colors text-lg"
            >
              Join Now
            </Link>
          </SignedOut>
        </div>
      </div>
    </section>
  );
}
