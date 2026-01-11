
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  heading: string;
  description: string;
}

// ✅ Folder-level fallback descriptions
const folderDescriptions: { [folder: string]: { heading: string; description: string } } = {
  environmentDay: {
    heading: "Environment Day @ IITNXT",
    description: "Celebrating sustainability and eco-awareness with students and communities.",
  },
  visitingZPHS: {
    heading: "Inspiring ZPHS Students",
    description: "Connecting with young learners at ZPHS schools to spark innovation and creativity.",
  },
};

// ✅ Images per folder
const environmentDayImages = [
  "/gallery/environmentDay/image1.jpg",
  "/gallery/environmentDay/image2.png",
  // Add more images here
];

const visitingZPHSImages = [
  "/gallery/visitingZPHS/image1.jpg",
  "/gallery/visitingZPHS/image2.png",
  // Add more images here
];

// ✅ Build gallery dynamically
const gallery: GalleryItem[] = [
  ...environmentDayImages.map((src) => ({
    src,
    alt: "Environment Day Image",
    heading: folderDescriptions.environmentDay.heading,
    description: folderDescriptions.environmentDay.description,
  })),
  ...visitingZPHSImages.map((src) => ({
    src,
    alt: "Visiting ZPHS Image",
    heading: folderDescriptions.visitingZPHS.heading,
    description: folderDescriptions.visitingZPHS.description,
  })),
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏳ Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = gallery[currentIndex];

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={current.src}
        alt={current.alt}
        fill
        className="object-cover brightness-75 transition-all duration-700"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {current.heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#F6EEC9] drop-shadow">
          {current.description}
        </p>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 flex space-x-2">
        {gallery.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-[#F59E0B]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
