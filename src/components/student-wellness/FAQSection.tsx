// components/wellness/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in the wellness programs?",
    answer:
      "All registered students across school, college, and advanced programs are welcome to join wellness activities.",
  },
  {
    question: "Are the mental health sessions confidential?",
    answer:
      "Yes, all counseling and therapy sessions are completely private and conducted by licensed experts.",
  },
  {
    question: "Do I need to pay separately for wellness programs?",
    answer:
      "Many wellness sessions are included in program enrollments. Some specialized workshops may have additional registration fees.",
  },
  {
    question: "Will I get a certificate for attending wellness workshops?",
    answer:
      "Certificates may be awarded for structured workshops (e.g., self-defense, yoga training), but not for casual sessions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb]">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Title */}
        <div className="w-4/5 h-[2px] bg-[#799351] mx-auto mb-3 rounded-full" />
        <div className="text-center mb-12 pt-8"> {/* added padding top */}
          
          <h2 className="text-4xl font-bold text-[#A20A0A]">
            Frequently Asked Questions
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
