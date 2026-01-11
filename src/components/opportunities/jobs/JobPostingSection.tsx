"use client";

import { Briefcase } from "lucide-react";

export default function JobPostingSection() {
  const handlePostJobClick = () => {
    // Placeholder - no action for now
    console.log("Post a Job clicked");
  };

  return (
    <section className="w-full py-10 bg-white px-4 flex justify-center items-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
          Hire top talent from IITNxt
        </h2>
        <p className="text-neutral-700 text-base mb-4">
          Connect with India's brightest students ready to transform your organization.
        </p>
        <button
          onClick={handlePostJobClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-orange-600 hover:bg-orange-700 transition font-medium text-sm md:text-base shadow-md"
        >
          <Briefcase size={18} />
          Post a Job with IITNxt
        </button>
      </div>
    </section>
  );
}
