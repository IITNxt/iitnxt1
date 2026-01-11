"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Program-related FAQs
const faqs = [
  {
    question: "How can I register for a program?",
    answer:
      "You can register by visiting the “Programs” section on our website and filling out the application form for the desired program.",
  },
  {
    question: "Is there a selection process for joining any program?",
    answer:
      "Yes, some programs may involve a shortlisting process based on eligibility, interest, or skill level.",
  },
  {
    question: "Will I get a certificate after completing a program?",
    answer:
      "Yes, participants who successfully complete the program will receive a certificate.",
  },
  {
    question: "Can I apply for more than one program at a time?",
    answer:
      "Yes, you are welcome to apply for multiple programs depending on your interests.",
  },
  {
    question: "Do I need to be from a technical background to apply?",
    answer:
      "Not necessarily. Each program has different eligibility criteria, and many are open to all disciplines.",
  },
  {
    question: "Are these programs open to international students?",
    answer:
      "Yes, most programs are accessible globally unless mentioned otherwise.",
  },
  {
    question: "How will I know if I’ve been selected?",
    answer:
      "Selected applicants will receive an email confirmation with next steps.",
  },
  {
    question: "What happens if I miss a session or class?",
    answer:
      "Some programs offer session recordings or catch-up support. Check program details.",
  },
  {
    question: "Can I access recorded sessions after live programs?",
    answer:
      "Yes, access is usually provided for a limited time post-program.",
  },
  {
    question: "How often are new programs launched?",
    answer:
      "New programs are launched regularly; subscribe to updates on the site.",
  },
];

export default function ProgramFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb] py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold text-[#A20A0A]">
            Program FAQs
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
