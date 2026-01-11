'use client';

import { BarChart } from 'lucide-react';

export default function ImpactStats() {
  return (
    <section className="bg-gradient-to-br from-[#F6EEC9] to-[#f4f6f8] py-16 px-6 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-6">
          <BarChart className="w-6 h-6 text-[#A20A0A]" />
          <h2 className="text-3xl font-bold text-[#A20A0A]">
            Our Impact So Far
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Flat Bar Graph (no radius/shadow) */}
          <div className="w-full">
            <svg viewBox="0 0 400 200" className="w-full h-52">
              <rect x="30" y="80" width="40" height="100" fill="#F59E0B" />
              <text x="30" y="195" className="text-sm fill-[#A20A0A]">Students</text>

              <rect x="110" y="40" width="40" height="140" fill="#799351" />
              <text x="110" y="195" className="text-sm fill-[#A20A0A]">Workshops</text>

              <rect x="190" y="60" width="40" height="120" fill="#A20A0A" />
              <text x="190" y="195" className="text-sm fill-[#A20A0A]">Communities</text>

              <text x="34" y="75" className="text-xs fill-black font-bold">80</text>
              <text x="114" y="35" className="text-xs fill-black font-bold">120</text>
              <text x="194" y="55" className="text-xs fill-white font-bold">100</text>
            </svg>
          </div>

          {/* Supporting Text */}
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We’ve sponsored over <span className="text-[#799351] font-semibold">80 students</span> with hands-on education programs.
            </p>
            <p>
              Conducted <span className="text-[#F59E0B] font-semibold">120+ real-world workshops</span> in collaboration with experts.
            </p>
            <p>
              Reached <span className="text-[#A20A0A] font-semibold">100+ communities</span> across rural and urban India.
            </p>
            <p className="mt-2 text-[#A20A0A] font-semibold">
              Help us reach our next milestone — 200 students in 2025!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
