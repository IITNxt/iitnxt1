"use client";

import React from "react";
import ProgramFAQs from "./FAQsSection";

const collegePrograms = [
  {
    title: "No-Code App Development",
    description:
      "Build real-world applications using AI-assisted, no-code platforms. Ideal for non-coders looking to create tech solutions with ease.",
    img: "/opportunities/Programs/Cimage1.png",
  },
  {
    title: "Website Development with AI & No-Code Tools",
    description:
      "Explore the fundamentals of web development using intuitive tools that remove the barrier of traditional coding.",
    img: "/opportunities/Programs/Cimage2.png",
  },
  {
    title: "DIY Robotics & Smart Devices",
    description:
      "Design and build your own robots and smart IoT devices while learning core principles of automation and embedded systems.",
    img: "/opportunities/Programs/Cimage3.png",
  },
  {
    title: "Drone Technology & Automation",
    description:
      "Dive into the world of drones—understand aerodynamics, automation, and real-world applications in delivery, agriculture, and more.",
    img: "/opportunities/Programs/Cimage4.png",
  },
  {
    title: "Game Development with AI",
    description:
      "Develop immersive games powered by AI-generated assets. Learn mechanics, design, and deployment in an industry-standard workflow.",
    img: "/opportunities/Programs/Cimage5.png",
  },
  {
    title: "PCB & Circuit Designing",
    description:
      "Learn electronics from the ground up by designing and building your own PCBs and circuits, using modern design software and kits.",
    img: "/opportunities/Programs/Cimage6.png",
  },
  {
    title: "Computer Basics & Cyber Awareness",
    description:
      "Gain essential computer literacy and digital safety skills. Learn about privacy, cybersecurity, and smart internet usage.",
    img: "/opportunities/Programs/Cimage7.png",
  },
  {
    title: "IT & Innovation Projects",
    description:
      "Collaborate on tech-based projects solving real-world challenges, guided by mentors and industry professionals.",
    img: "/opportunities/Programs/Cimage8.png",
  },
  {
    title: "Graphic Design & Digital Art",
    description:
      "Master visual storytelling using tools like Canva and Photoshop. Turn your creativity into powerful digital designs.",
    img: "/opportunities/Programs/Cimage9.png",
  },
];

export default function CollegeProgramsPage() {
  return (
    <div>
          <main className="pt-32 px-6 pb-20 bg-[#F6EEC9] min-h-screen">
      <h1 className="text-4xl font-bold text-[#0f172a] text-center mb-10">
      Student Builders (College)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {collegePrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-between border border-gray-200 hover:shadow-xl transition-all"
          >
            {/* Circle Image */}
            <div className="w-35 h-35 mb-4 rounded-full overflow-hidden shadow-md">
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Desc */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-[#A20A0A] mb-2">
                {program.title}
              </h2>
              <p className="text-gray-700 text-sm">{program.description}</p>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between w-full">
              <a
                href="#"
                className="text-[#799351] text-sm font-medium underline"
              >
                View more details
              </a>
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold px-4 py-1 rounded-md transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    <ProgramFAQs/>
    </div>
  );
}
