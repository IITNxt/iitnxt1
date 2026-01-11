"use client";

import React from "react";
import Image from "next/image";

export default function MentorshipSection() {
  return (
    <>
      {/* Main Mentorship Content */}
      <section className="pt-20 pb-16 bg-[#F6EEC9] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-4xl font-bold text-[#0f172a] mb-6">
              Incubation & Mentorship Support
            </h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold text-[#A20A0A]">IITNXT</span>, we
              believe every idea has the power to change the world. From a spark
              on paper to a scalable startup, we hand-hold innovators through
              every step of their entrepreneurial journey.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Already, <strong>10+ startups</strong> have been initiated by our
              student community — with many more in the pipeline. With dedicated
              mentors, incubation tie-ups, and access to industry leaders, we’re
              not just guiding projects — we’re building{" "}
              <span className="font-medium text-[#15803D]">
                India’s next generation of founders.
              </span>
            </p>

            <h2 className="text-xl font-semibold text-[#A20A0A] mb-3">
              Through our partnerships, students gain:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                One-on-one mentorship with entrepreneurs, VCs, and industry
                experts.
              </li>
              <li>
                Access to prototyping labs, hackathons, and incubation hubs
                across India.
              </li>
              <li>
                Networking with CSR partners, accelerators, and startup
                ecosystems.
              </li>
              <li>
                Strategic guidance to transform raw ideas into
                <em> market-ready ventures.</em>
              </li>
            </ul>

            <p className="mt-6 text-gray-800 font-medium">
              <strong>Our mission is simple:</strong> Turn your idea into a
              product, and your product into an impactful venture.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors">
                Apply for Mentorship
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <Image
              src="/opportunities/startup-mentorship/herosection.png"
              alt="Incubation and Mentorship"
              width={500}
              height={400}
              className="rounded-lg shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Separate Impact/Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#A20A0A] mb-10">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="bg-[#F6EEC9] rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-[#A20A0A]">10+</h3>
              <p className="text-gray-700 mt-2">Startups Initiated</p>
            </div>
            <div className="bg-[#F6EEC9] rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-[#15803D]">100+</h3>
              <p className="text-gray-700 mt-2">Students Mentored</p>
            </div>
            <div className="bg-[#F6EEC9] rounded-lg shadow-md p-6">
              <h3 className="text-3xl font-bold text-[#F59E0B]">15+</h3>
              <p className="text-gray-700 mt-2">Incubation Partners</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
