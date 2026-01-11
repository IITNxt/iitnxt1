'use client';

import { HeartHandshake, HelpingHand, Lightbulb } from 'lucide-react';

export default function DonationImpact() {
  return (
    <section className="bg-[#F6EEC9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#A20A0A] mb-10">
          How Your Support Makes a Difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Impact Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <HelpingHand className="h-12 w-12 text-[#F59E0B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">Mentorship Access</h3>
            <p className="text-gray-700">
              Connects students with IITians & industry leaders, helping them shape their futures.
            </p>
          </div>

          {/* Impact Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <HeartHandshake className="h-12 w-12 text-[#799351]" />
            </div>
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">Wellness Support</h3>
            <p className="text-gray-700">
              Your donations enable programs that prioritize mental and emotional well-being.
            </p>
          </div>

          {/* Impact Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-[#F59E0B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">Real-World Learning</h3>
            <p className="text-gray-700">
              Students gain hands-on experience through projects, competitions, and career guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
