'use client';

import { GraduationCap } from 'lucide-react';
import { useState } from 'react';
import DonationModal from './DonationModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[70vh] bg-[#F6EEC9]">
      {/* Background Image */}
      <img
        src="/supportUs/hero.png"
        alt="Students working together"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-end px-6">
        <div className="w-full md:w-3/5 bg-black bg-opacity-60 p-8 md:p-12 rounded-xl text-white">
          <div className="flex items-center mb-4 gap-2">
            <GraduationCap className="w-8 h-8 text-[#F59E0B]" />
            <span className="uppercase text-sm font-semibold tracking-wider text-[#F59E0B]">
              Student Empowerment
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#F6EEC9] mb-6">
            Empower. Educate. Transform.
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Join us in building a future where every student has access to mentorship, mental wellness, and real-world learning opportunities.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F59E0B] hover:bg-[#D97706] transition text-white font-bold px-6 py-3 rounded-2xl shadow-lg"
          >
            Sponsor a Student Today
          </button>
        </div>
      </div>

      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={1000}
      />
    </section>
  );
}
