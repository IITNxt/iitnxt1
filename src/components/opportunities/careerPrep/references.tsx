// src/opportunities/careerPrep/References.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const references = [
  {
    title: "Software Development Engineer (SDE) – Beginner Level",
    links: [
      { label: "Codecademy – Core languages & SQL", href: "https://www.codecademy.com/" },
      { label: "Forage – Career skills programs", href: "https://www.theforage.com/blog/careers/software-engineering-resources" },
      { label: "Daily.dev Guide – Roadmap & online courses", href: "https://daily.dev/blog/how-to-learn-software-engineering-online-a-guide" },
      { label: "Reddit Thread – Recommended books", href: "https://www.reddit.com/r/SoftwareEngineering/comments/11altny/ask_se_recommended_resources_for_improving/" },
    ],
  },
  {
    title: "Software Development Engineer (SDE) – Intermediate Level",
    links: [
      { label: "Daily.dev – Software Engineering Path", href: "https://daily.dev/blog/how-to-learn-software-engineering-online-a-guide" },
      { label: "Reddit Thread – Clean Code, Pragmatic Programmer", href: "https://www.reddit.com/r/SoftwareEngineering/comments/11altny/ask_se_recommended_resources_for_improving/" },
    ],
  },
  {
    title: "Software Development Engineer (SDE) – Advanced Level",
    links: [
      { label: "Reddit Book List – Software Engineering at Google", href: "https://www.reddit.com/r/SoftwareEngineering/comments/11altny/ask_se_recommended_resources_for_improving/" },
    ],
  },
  {
    title: "Data Scientist",
    links: [
      { label: "SkillCamper – MOOCs & project-driven tutorials", href: "https://www.skillcamper.com/blog/10-resources-to-help-you-fulfill-data-scientist-requirements" },
      { label: "EliteDataScience – 65 Free Resources", href: "https://elitedatascience.com/data-science-resources" },
      { label: "Microsoft Learn – Training path", href: "https://learn.microsoft.com/en-us/training/career-paths/data-scientist" },
    ],
  },
  {
    title: "Business Analyst",
    links: [
      { label: "Codecademy – Data Science Catalog", href: "https://www.codecademy.com/catalog/subject/data-science" },
      { label: "EliteDataScience – Business Analytics & Communication", href: "https://elitedatascience.com/data-science-resources" },
    ],
  },
  {
    title: "Product Manager",
    links: [
      { label: "Daily.dev Guide – Software Engineering Fundamentals", href: "https://daily.dev/blog/how-to-learn-software-engineering-online-a-guide" },
      { label: "Software Engineering at Google (Reddit Recommendation)", href: "https://www.reddit.com/r/SoftwareEngineering/comments/11altny/ask_se_recommended_resources_for_improving/" },
    ],
  },
  {
    title: "UI/UX Designer",
    links: [
      { label: "Skillcrush – Coding & Design Blueprints", href: "https://dev.to/theoriginalbpc/my-5-favorite-coding-resources-30d" },
      { label: "Codecademy – Web Dev & Design Tracks", href: "https://www.theforage.com/blog/careers/software-engineering-resources" },
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    links: [
      { label: "AWS Free Tech Courses (Times of India)", href: "https://timesofindia.indiatimes.com/education/news/amazon-is-offering-free-tech-courses-for-students-and-professionals-here-are-6-you-can-start-now/articleshow/122988425.cms" },
    ],
  },
  {
    title: "AI & Machine Learning Engineer",
    links: [
      { label: "Lifewire – Free AI Courses Guide", href: "https://www.lifewire.com/best-free-ai-courses-8575868" },
      { label: "Dive into Deep Learning – Open source book", href: "https://arxiv.org/abs/2106.11342" },
    ],
  },
];

export default function References() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curated-references" className="py-16 px-6 bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#A20A0A] text-center">
          References for Career Preparation
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto text-center">
          Access hand-picked resources, guides, and practice material for top career paths. Click a role to view resources.
        </p>

        {/* Dropdown References */}
        <div className="space-y-4">
          {references.map((ref, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg text-[#0f172a]"
                onClick={() => toggle(index)}
              >
                {ref.title}
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#799351]" />
                ) : (
                  <ChevronDown size={20} className="text-[#A20A0A]" />
                )}
              </button>
              {openIndex === index && (
                <ul className="mt-3 space-y-2 pl-4 list-disc text-gray-700 text-base">
                  {ref.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
