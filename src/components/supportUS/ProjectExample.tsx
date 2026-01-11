'use client';

import { Presentation, ArrowRight } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';
import DonationModal from './DonationModal';

export default function ProjectExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#F6EEC9] py-16 px-4 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Project Placeholder Block */}
        <div className="w-full md:w-[70%]">
          <Image
            src="/PlaceholderRectangle.png"
            alt="Placeholder"
            width={700}   // adjust width
            height={300}  // adjust height
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right: Project Info */}
        <div className="w-full md:w-[30%] space-y-4">
          <div className="flex items-center gap-2 text-[#A20A0A] font-semibold">
            <Presentation className="w-5 h-5" />
            <span className="uppercase tracking-wide">Featured Project</span>
          </div>

          <h3 className="text-xl font-bold text-[#A20A0A]">
            SwachhBot – AI-Powered Public Space Cleaning Robot
          </h3>


          <p className="text-sm text-gray-800">
            An intelligent, solar-powered robotic system designed to autonomously identify, classify, and collect litter in public spaces.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 inline-flex items-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Donate to this Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={500}
      />
    </section>
  );
}
