"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "./data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (hovered) {
      timeout = setTimeout(() => {
        setShowDetails(true);
      }, 3000);
    } else {
      setShowDetails(false);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 w-full border border-gray-100"
    >
      {/* Image container */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            showDetails ? "blur-sm scale-110 " : "scale-100"
          )}
        />

        {/* Title + Desc (always shown) with TEXT-ONLY overlay */}
        {!showDetails && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white">
            <h3 className="text-lg font-semibold mb-1 ">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        )}

        {/* Details shown after delay */}
        {showDetails && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/95 p-4 flex flex-col justify-start transition-opacity duration-500 overflow-y-auto max-h-full">
            <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#A20A0A]">{project.title}</h3>
              <button className="bg-[#F59E0B] hover:bg-[#ea580c] text-black text-xs font-semibold px-4 py-1.5 rounded-md transition-colors">
                Enroll Now
              </button>
            </div>
            <p className="text-sm text-gray-800 mb-3">{project.description}</p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {project.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
