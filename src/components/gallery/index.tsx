"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryCategory {
  title: string;
  description?: string;
  images: string[];
}

interface ImageGridProps {
  galleries: GalleryCategory[];
}

export default function ImageGrid({ galleries }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb]">
      {galleries.map((category) => (
        <CategorySectionWithModal
          key={category.title}
          category={category}
          onImageClick={setSelectedImage}
        />
      ))}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 bg-black/50 p-2 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategorySectionWithModal({ category, onImageClick }: { category: GalleryCategory, onImageClick: (src: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-20 last:mb-0 transition-all duration-300"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="w-full max-w-3xl mx-auto mb-10 text-center">
        <h2
          className="text-3xl font-bold text-slate-800 capitalize mb-4 relative inline-block cursor-pointer select-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {category.title.replace(/([A-Z])/g, " $1").trim()}
          <span className={cn(
            "absolute -bottom-2 left-1/4 w-1/2 h-1 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]",
            isOpen ? "opacity-100 scale-110 bg-amber-500" : "opacity-60"
          )}></span>
        </h2>

        <div className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="overflow-hidden">
            {category.description && (
              <p className="text-lg text-slate-600 leading-relaxed font-light mt-4 px-4 animate-in slide-in-from-top-2 duration-300">
                {category.description}
              </p>
            )}
            {!category.description && (
              <p className="text-sm text-slate-400 mt-2 italic">No description available.</p>
            )}
          </div>
        </div>
      </div>

      {category.images.length === 0 ? (
        <p className="text-center text-slate-500">No images found for this event.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => onImageClick(src)}
            >
              <Image
                src={src}
                alt={`${category.title} image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
