"use client";

import React from "react";
import ProgramFAQs from "./FAQsSection";
const advancedPrograms = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Gain foundational and advanced understanding of AI and ML algorithms, models, and real-world applications.",
    img: "/opportunities/Programs/apimage1.png",
  },
  {
    title: "Generative AI (GANs, Diffusion Models)",
    description:
      "Explore how AI creates art, music, text, and more using powerful generative models like GANs and diffusion networks.",
    img: "/opportunities/Programs/apimage2.png",
  },
  {
    title: "Explainable AI & Trustworthy ML",
    description:
      "Learn methods to interpret AI decisions and ensure ethical, transparent, and fair model behavior.",
    img: "/opportunities/Programs/apimage3.png",
  },
  {
    title: "AI for Healthcare, Finance, Cybersecurity",
    description:
      "Understand how AI revolutionizes key industries by enabling diagnosis, fraud detection, and threat monitoring.",
    img: "/opportunities/Programs/apimage4.png",
  },
  {
    title: "Edge AI & Adversarial ML",
    description:
      "Work on AI that runs on edge devices and learn to protect models from adversarial attacks.",
    img: "/opportunities/Programs/apimage5.png",
  },
  {
    title: "Natural Language Processing & LLMs",
    description:
      "Master text-based AI using transformers and large language models to build chatbots, summarizers, and more.",
    img: "/opportunities/Programs/apimage6.png",
  },
  {
    title: "Computer Vision",
    description:
      "Build applications that see and interpret images and video using modern computer vision tools and libraries.",
    img: "/opportunities/Programs/apimage7.png",
  },
  {
    title: "Systems Programming (C, Rust, OS Dev)",
    description:
      "Dive deep into systems-level coding, reverse engineering, and custom operating system development.",
    img: "/opportunities/Programs/apimage8.png",
  },
  {
    title: "Cloud & DevOps (AWS, Terraform, CI/CD)",
    description:
      "Deploy and scale applications on cloud platforms using modern DevOps tools and practices.",
    img: "/opportunities/Programs/apimage9.png",
  },
  {
    title: "IoT & Embedded Systems (TinyML, RTOS)",
    description:
      "Work on intelligent hardware combining AI and embedded systems for real-world automation.",
    img: "/opportunities/Programs/apimage10.png",
  },
  {
    title: "PCB Design (KiCad, Altium, Proteus)",
    description:
      "Design and simulate PCBs using professional software tools, enabling advanced electronics prototyping.",
    img: "/opportunities/Programs/apimage11.png",
  },
  {
    title: "VLSI & Embedded (FPGA, SoC)",
    description:
      "Learn digital design using FPGAs and secure system architectures for embedded innovation.",
    img: "/opportunities/Programs/apimage12.png",
  },
  {
    title: "Full-Stack Development (Web3, JAMstack)",
    description:
      "Develop modern web applications using AI tools, blockchain backends, and JAMstack architecture.",
    img: "/opportunities/Programs/apimage13.png",
  },
  {
    title: "Robotics & Automation (SLAM, ROS)",
    description:
      "Program intelligent robots and drones using SLAM, ROS, and real-time automation strategies.",
    img: "/opportunities/Programs/apimage14.png",
  },
  {
    title: "Digital Marketing & AI Business Strategy",
    description:
      "Apply AI to marketing, growth hacking, and business innovation through real-world campaigns.",
    img: "/opportunities/Programs/apimage15.png",
  },
  {
    title: "Biomedical Innovation & Smart Implants",
    description:
      "Explore the intersection of AI, medical imaging, and biotech through hands-on innovation.",
    img: "/opportunities/Programs/apimage16.png",
  },
  {
    title: "Quantum Computing & Advanced Computation",
    description:
      "Understand quantum logic, qubits, and advanced computing models shaping the next generation of tech.",
    img: "/opportunities/Programs/apimage17.png",
  },
  {
    title: "Sustainable & Green Technologies",
    description:
      "Innovate in clean energy, smart grids, and carbon capture with a focus on green technology.",
    img: "/opportunities/Programs/apimage18.png",
  },
  {
    title: "Cybersecurity & Quantum Cryptography",
    description:
      "Defend digital systems with AI-powered detection and cutting-edge cryptographic techniques.",
    img: "/opportunities/Programs/apimage19.png",
  },
];

export default function AdvancedProgramsPage() {
  return (
  <div>
        <main className="pt-32 px-6 pb-20 bg-[#F6EEC9] min-h-screen">
      <h1 className="text-4xl font-bold text-[#0f172a] text-center mb-6">
      Future Leaders (Advanced)
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {advancedPrograms.map((program, index) => (
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
