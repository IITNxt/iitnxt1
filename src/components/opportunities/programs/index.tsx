"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavMini from "./Navmini";
import ProgramFAQs from "./FAQsSection";

const programs = [
  {
    title: "Young Explorers (Kids)",
    image: "/opportunities/Programs/heroimage1.png",
    description:
      "Fun, engaging programs designed to introduce young learners to creativity, STEM basics, and teamwork through play-based learning.",
    link: "/opportunities/Programs/AgePage",
  },
  {
    title: "Student Builders (College)",
    image: "/opportunities/Programs/heroimage2.png",
    description:
      "Challenging programs crafted for college learners to develop career-ready skills, collaborate on projects, and explore innovation pathways.",
    link: "/opportunities/Programs/CollegePage",
  },
  {
    title: "Future Leaders (Advanced)",
    image: "/opportunities/Programs/heroimage3.png",
    description:
      "Cutting-edge specialized training for advanced learners focusing on AI, robotics, research, and professional development at the highest level.",
    link: "/opportunities/Programs/AdvancedProgramPage",
  },
];

export default function ProgramsPage() {
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ NavMini on top */}
      <NavMini />

      {/* Programs Split Section */}
      <section className="flex h-[90vh] w-full">
        {programs.map((program, idx) => (
          <div
            key={program.title}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            onClick={() => router.push(program.link)} // ✅ Next.js client-side nav
            className={`relative flex-1 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden 
              ${active === idx ? "flex-[3]" : active === null ? "flex-1" : "flex-[0.8]"}`}
          >
            {/* Background Image */}
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
              <h2
                className={`text-white font-bold transition-all duration-500 ${
                  active === idx ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {program.title}
              </h2>

              {/* Description only when hovered */}
              <p
                className={`mt-4 text-sm md:text-base text-gray-200 max-w-md transition-opacity duration-500 ${
                  active === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      <ProgramFAQs/>
    </div>
  );
}
