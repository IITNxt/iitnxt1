"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/opportunities/jobs/Herosection.png"
        alt="Jobs at IITNxt"
        layout="fill"
        objectFit="cover"
        objectPosition="center 20%" // shows top portion of the image
        className="z-0 opacity-100"
        priority
      />

      {/* Left-aligned content */}
      <div className="z-10 relative h-full flex items-center">
        <div className="pl-20 max-w-xl text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
            Explore Career Opportunities
          </h1>
          <p className="text-lg font-medium text-[#F6EEC9]">
            Find jobs that match your skills and passion. IITNxt connects top talent with industry leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
