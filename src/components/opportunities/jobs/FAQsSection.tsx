"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I start hiring through IITNxt?",
    answer: "Submit a job posting using our form, and we’ll schedule a call with your team to align goals.",
  },
  {
    question: "Are the candidates pre-screened?",
    answer: "Yes. All profiles are vetted for skills, attitude, and adaptability through technical and behavioral assessments.",
  },
  {
    question: "Is there a hiring fee?",
    answer: "We operate on a flexible partnership model — reach out to our team to tailor an arrangement.",
  },
  {
    question: "Can I conduct interviews via IITNxt platform?",
    answer: "Yes, we offer integrated virtual interview scheduling and tracking support.",
  },
  {
    question: "How long does it take to complete a hire?",
    answer: "Depending on your timeline, our partners usually complete hiring in 1–3 weeks after finalizing the job role.",
  },
  {
    question: "Can we request specialized talent profiles?",
    answer: "Absolutely. Our core wings—Vaaman, Nalanda, and Kubera—cover diverse specializations that we can curate from.",
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
        <div className="w-4/5  h-[2px] bg-[#799351] mx-auto mb-3 rounded-full " />
        <div className="text-center mb-12 pt-8">
        
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
