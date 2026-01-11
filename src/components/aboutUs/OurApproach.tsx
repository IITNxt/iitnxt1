"use client";

import { BookOpen, GraduationCap, Smile, Cpu, Rocket, Heart } from "lucide-react";

export interface ApproachItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const approachData: ApproachItem[] = [
  {
    title: "Age 8–11 Learners",
    description:
      "Explore making, coding, and creative building in structured, guided formats designed for young minds.",
    icon: Smile,
  },
  {
    title: "School Students",
    description:
      "Learn through fun, hands-on projects that spark curiosity and introduce tech in simple ways.",
    icon: BookOpen,
  },
  {
    title: "Age 12+ Learners",
    description:
      "Dive into ambitious STEM projects, build confidence, and develop critical problem-solving skills.",
    icon: Cpu,
  },
  {
    title: "Student Wellness",
    description:
      "Well-being is core to all programs — mental, emotional, and physical wellness help every learner thrive.",
    icon: Heart,
  },
  {
    title: "College Students",
    description:
      "Tackle advanced challenges, build real-world portfolios, and gain research experience.",
    icon: GraduationCap,
  },

  {
    title: "Advanced Specialized Training",
    description:
      "Receive expert instruction in cutting-edge fields to build industry-relevant mastery.",
    icon: Rocket,
  },

];

export default function ApproachSection() {
  return (
    <section className="py-16 px-6 bg-amber-100">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-4xl font-bold text-[#A20A0A]">
            Our Approach
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-xl "
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFD600] text-[#A20A0A] mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
