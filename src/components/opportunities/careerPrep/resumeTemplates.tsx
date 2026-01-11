"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

const templates = [
  {
    name: "IIT Kharagpur Resume Template",
    src: "/PlaceholderA4.png",
  },
  {
    name: "IIT Madras Resume Template",
    src: "/PlaceholderA4.png",
  },
  {
    name: "NIT Trichy Resume Template",
    src: "/PlaceholderA4.png",
  },
];

export default function ResumeTemplates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));
  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
    document.body.style.overflow = "auto"; // restore background scroll
  };

  const openModal = (src: string) => {
    setSelectedImage(src);
    setZoom(1);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  return (
    <section  id="resume-templates"  className="py-16 px-6 bg-[#F6EEC9]">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#A20A0A]">
          Professional Resume Templates Inspired by Top Institutes
        </h2>
        <p className="text-lg text-[#0f172a] max-w-3xl mx-auto">
          Choose from expertly designed resume templates inspired by IITs and NITs.
          Each template is crafted for clarity, professionalism, and impact —
          helping you stand out in applications and interviews.
        </p>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {templates.map((template, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => openModal(template.src)}
            >
            <div className="overflow-hidden rounded-lg shadow-md aspect-[210/297] bg-gray-400 transition-shadow duration-300 group-hover:shadow-2xl">
                <Image
                src={template.src}
                alt={template.name}
                width={600}
                height={850}
                className="w-full h-auto object-cover"
                />
            </div>
            <p className="mt-3 text-lg font-medium text-[#0f172a] text-center">
                {template.name}
            </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/85 z-50 flex flex-col">
          {/* Controls */}
          <div className="absolute top-[70px] right-6 flex gap-4 z-50">
            <button
              className="text-white hover:text-gray-300"
              onClick={handleZoomIn}
            >
              <ZoomIn size={28} />
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={handleZoomOut}
            >
              <ZoomOut size={28} />
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={handleClose}
            >
              <X size={32} />
            </button>
          </div>

          {/* Image Container with Scroll */}
          <div className="flex-1 w-full overflow-auto px-6 pt-[80px] pb-10 flex items-start justify-center">
            <div
              className="transition-transform duration-300"
              style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
            >
              <Image
                src={selectedImage}
                alt="Full Screen Resume Template"
                width={850}
                height={1200}
                className="rounded-lg shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
