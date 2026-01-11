"use client";

import { useState } from "react";

const wingsData = [
  {
    title: "Vaaman",
    img: "/PlaceholderSquare.png",
    imgPosition: "center top",
    sections: [
      {
        heading: "For Schools & Intermediate (Ages 8–18)",
        items: [
          "Creative learning. Real tech. Guided by IITians.",
          "AI, Robotics & Smart Devices",
          "No-Code Website & App Building",
          "Graphic Design & Digital Art",
          "Public Speaking & Soft Skills",
          "Basic Programming Concepts",
          "Ideathons & Innovative Project Challenges",
          "Free Health & Wellness Checkups",
          "IITian Mentorship & Subject Support",
        ],
      },
    ],
  },
  {
    title: "Nalanda",
    img: "/PlaceholderSquare.png",
    imgPosition: "center center",
    sections: [
      {
        heading: "For Universities, Degree, Engineering, Polytechnic colleges",
        items: [
          "Hands-on Tech Workshops",
          "Expert-Led Webinars",
          "Campus Hackathons",
          "Startup Mentorship",
          "Club & Ambassador Support",
          "Research & Patents Collaboration",
          "Internships & Placements assistance",
          "Resume-Boosting Certifications",
        ],
      },
    ],
  },
  {
    title: "Kubera",
    img: "/PlaceholderSquare.png",
    imgPosition: "center bottom",
    sections: [
      {
        heading: "For Corporates, Startups & Industries, MNC’s",
        items: [
          "Industry-Ready Interns & Professionals, Talent Access",
          "CSR-Focused Tech Education Camps",
          "Sponsorships for events, Labs, Wellness & Innovation",
          "Health & Mental Wellness Camps (Free)",
          "Brand Recognition Across Our Network",
          "Startup Product Promotions",
          "Chief Guest Invites at Prestigious Events",
          "Partner Acknowledgment in All Outreach",
        ],
      },
    ],
  },
];

export default function CoreWingsMenu() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white border-b border-gray-200 relative">
      <div className="container mx-auto px-6 py-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#A20A0A] text-center mb-8">
          Our Core Wings
        </h2>

        {/* Equal Partition Menu */}
        <ul className="flex justify-center w-full">
          {wingsData.map((wing, idx) => (
            <li
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className={`flex-1 flex flex-col items-center justify-center cursor-pointer py-8 transition-all duration-300 ${
                active === idx ? "bg-[#F4F6F0]" : ""
              }`}
            >
              {/* Bigger Image */}
              <div
                className={`w-32 h-32 mb-4 overflow-hidden rounded-full shadow-md transition-transform duration-300 ${
                  active === idx ? "scale-110" : ""
                }`}
              >
                <img
                  src={wing.img}
                  alt={wing.title}
                  style={{
                    objectFit: "cover",
                    objectPosition: wing.imgPosition,
                  }}
                  className="w-full h-full"
                />
              </div>

              {/* Bigger Title */}
              <span
                className={`font-bold text-2xl ${
                  active === idx
                    ? "text-[#799351] border-b-4 border-[#A20A0A]"
                    : "text-gray-800 hover:text-[#799351]"
                }`}
              >
                {wing.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width dropdown */}
      {active !== null && (
        <div
          onMouseEnter={() => setActive(active)}
          onMouseLeave={() => setActive(null)}
          className="absolute left-0 top-full w-full bg-[#F4F6F0] shadow-lg border-t border-[#799351] z-50 animate-fadeIn"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="flex justify-center items-center bg-white p-6">
              <img
                src={wingsData[active].img}
                alt={wingsData[active].title}
                style={{
                  objectFit: "cover",
                  objectPosition: wingsData[active].imgPosition,
                }}
                className="max-h-80 w-full rounded-lg shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="p-8">
              {wingsData[active].sections.map((section, sIdx) => (
                <div key={sIdx} className="mb-6">
                  <h3 className="text-lg font-bold text-[#A20A0A] mb-3">
                    {section.heading}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-[#799351] cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
