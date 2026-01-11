// components/workshops/WorkshopFAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const workshopFaqs = [
  {
    question: "How can I register for a workshop?",
    answer:
      "You can register through the Workshops section of our website by filling out the application form and completing payment (if applicable) before the registration deadline.",
  },
  {
    question: "Do workshops have a registration fee?",
    answer:
      "Some workshops are free, while others may have a nominal fee depending on the topic, trainer, or institution hosting it.",
  },
  {
    question: "Will I get a certificate after attending a workshop?",
    answer:
      "Yes, participants who complete the workshop will receive a certificate of participation.",
  },
  {
    question: "Can I attend multiple workshops?",
    answer:
      "Yes, you can register for as many workshops as you like, depending on your interest and availability.",
  },
  {
    question: "What happens if I miss a session?",
    answer:
      "For online workshops, recordings may be provided. For onsite workshops, no make-up sessions are guaranteed.",
  },
  {
    question: "Who conducts the workshops?",
    answer:
      "Workshops are led by industry professionals, academic experts, and certified trainers in the respective fields.",
  },
  {
    question: "Can international participants join online workshops?",
    answer:
      "Yes, all online workshops are open to international participants unless specifically restricted.",
  },
];

export default function WorkshopFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Title */}
        <div className="w-4/5 h-[2px] bg-[#799351] mx-auto mb-3 rounded-full" />
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold text-[#A20A0A]">
            Workshop FAQs
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {workshopFaqs.map((faq, index) => (
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
