'use client';

import { HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import DonationModal from './DonationModal';

export default function FooterCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb] text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <HeartHandshake className="w-10 h-10 text-black" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg mb-6 text-black">
          Your support empowers underprivileged students with education, mentorship, and wellness.
          Every contribution matters.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#A20A0A] hover:bg-[#870808] transition text-white font-semibold px-6 py-3 rounded-lg"
        >
          Donate Now
        </button>
      </div>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultAmount={2000}
      />
    </section>
  );
}
