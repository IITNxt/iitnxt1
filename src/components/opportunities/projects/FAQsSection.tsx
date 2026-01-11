"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Project-related FAQs
const faqs = [
  {
    question: "How can I join a project team?",
    answer: "You can apply through the Projects section by submitting your interest form.",
  },
  {
    question: "Do I need prior experience to participate in projects?",
    answer: "No prior experience is necessary, but relevant skills can be beneficial.",
  },
  {
    question: "Can I propose my own project idea?",
    answer: "Yes, you can submit your project idea for approval and possible mentorship.",
  },
  {
    question: "What’s the duration of each project?",
    answer: "Durations vary but most last between 4 to 12 weeks.",
  },
  {
    question: "Are these projects collaborative or solo?",
    answer: "Most projects are team-based to encourage collaboration.",
  },
  {
    question: "Will I receive mentorship during the project?",
    answer: "Yes, every team has access to mentorship and technical guidance.",
  },
  {
    question: "Can I showcase the project in my resume or portfolio?",
    answer: "Yes, and you'll also receive a certificate or recommendation if applicable.",
  },
  {
    question: "Are projects available year-round?",
    answer: "Yes, new projects open periodically throughout the year.",
  },
  {
    question: "How are team members selected?",
    answer: "Teams are formed based on interests, skills, and application responses.",
  },
  {
    question: "Is there any evaluation or review at the end?",
    answer: "Yes, mentors typically conduct final reviews and provide feedback.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Title */}
        <div className="w-4/5 h-[2px] bg-[#799351] mx-auto mb-3 rounded-full " />

        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold text-[#A20A0A]">
            Project FAQs
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                className="w-full flex justify-between items-center text-left text-[#0f172a] font-semibold text-lg"
                onClick={() => toggle(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#799351]" />
                ) : (
                  <ChevronDown size={20} className="text-[#A20A0A]" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-700 text-base transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
