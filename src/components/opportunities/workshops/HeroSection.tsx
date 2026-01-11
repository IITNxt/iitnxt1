"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full flex items-center bg-black text-white">
      {/* Background image with top-focused crop */}
      <Image
        src="/opportunities/workshops/Herosection.png"
        alt="IITNxt Workshops Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="z-0 opacity-100"
        priority
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content box aligned to left with padding */}
      <div className="z-10 pl-10 pr-4 max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
          Learn. Grow. Lead.
        </h1>
        <p className="mt-4 text-lg text-[#F6EEC9] font-medium max-w-lg">
          Join industry-relevant workshops crafted by IITNxt and our expert collaborators — online or on campus.
        </p>
      </div>
    </section>
  );
}
