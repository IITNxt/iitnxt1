"use client";
import Image from "next/image";
import teamData from "./teamData";
import advisoryData from "./advisoryData";
import activeMembers from "./activeMembers";
import "./teamScroll.css"; // infinite scroll animation

export default function OurTeam() {
  return (
    <section className="w-full bg-amber-50 overflow-hidden py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#A20A0A] mb-12">Our Team</h2>

        {/* Governing Body */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#799351] mb-8">
            Governing Body
          </h3>
          <div className="w-full overflow-hidden">
            <div className="flex whitespace-nowrap space-x-8 team-scroll">
              {[...teamData, ...teamData].map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[220px] px-4"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-3 shadow-md"
                  />
                  <h4 className="text-lg font-semibold text-[#111827]">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  <p className="text-xs text-gray-400">{member.qualification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#799351] mb-8">
            Advisory Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {advisoryData.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-[250px]"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover mb-3"
                />
                <h4 className="text-lg font-semibold text-[#111827]">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-xs text-gray-400 text-center">
                  {member.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Members */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#799351] mb-6">
            Active Members
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-3 text-left">
            {activeMembers.map((name, idx) => (
              <p
                key={idx}
                className="text-sm font-medium text-[#111827] hover:text-[#A20A0A] transition-colors"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
}
