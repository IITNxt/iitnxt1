
"use client";

import { useState } from "react";
import {
  MapPin,
  IndianRupee,
  ArrowRight,
  ArrowLeft,
  Filter,
} from "lucide-react";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
}

const jobFilters = [
  "Big brands",
  "Work from home",
  "Part-time",
  "MBA",
  "Engineering",
  "Media",
  "Design",
  "Data Science",
];

const jobData: Record<string, Job[]> = {
  "Big brands": [
    {
      title: "Customer Support Specialist",
      company: "Rippling",
      location: "Bangalore (Hybrid)",
      salary: "₹ 9,60,000 /year",
    },
    {
      title: "Senior Software Developer",
      company: "Samplify",
      location: "Delhi",
      salary: "₹ 9,00,000 - 12,00,000 /year",
    },
  ],
  MBA: [
    {
      title: "Skin Therapist",
      company: "Avataar",
      location: "Mumbai",
      salary: "₹ 8,40,000 /year",
    },
    {
      title: "Business Development Associate",
      company: "Square Yards",
      location: "Bangalore",
      salary: "₹ 6,00,000 - 16,00,000 /year",
    },
    {
      title: "Field Sales Executive",
      company: "PAYTM SERVICES PRIVATE LIMITED",
      location: "Work From Home",
      salary: "₹ 5,04,000 - 6,24,000 /year",
    },
  ],
  "Work from home": [
    {
      title: "Virtual Assistant",
      company: "Remotely",
      location: "Remote",
      salary: "₹ 5,00,000 /year",
    },
  ],
  "Part-time": [
    {
      title: "Online Tutor",
      company: "EduBridge",
      location: "Remote",
      salary: "₹ 3,60,000 /year",
    },
  ],
  Engineering: [
    {
      title: "Full Stack Engineer",
      company: "InnovaTech",
      location: "Hyderabad",
      salary: "₹ 10,00,000 /year",
    },
  ],
  Media: [
    {
      title: "Social Media Analyst",
      company: "BuzzCorp",
      location: "Delhi",
      salary: "₹ 7,00,000 /year",
    },
  ],
  Design: [
    {
      title: "UI/UX Designer",
      company: "PixelStory",
      location: "Bangalore",
      salary: "₹ 8,00,000 /year",
    },
  ],
  "Data Science": [
    {
      title: "Data Analyst",
      company: "Numly",
      location: "Chennai",
      salary: "₹ 9,00,000 /year",
    },
  ],
};

export default function FresherJobsSection() {
  const [selectedFilter, setSelectedFilter] = useState("Big brands");

  const jobs = jobData[selectedFilter] || [];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#F6EEC9] via-[#F59E0B]/20 to-[#A20A0A]/10">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-1">
              What are you looking for today?
            </h2>
            <h3 className="text-2xl font-semibold text-[#A20A0A]">
              Fresher Jobs
            </h3>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-sm text-[#799351]">
            <Filter size={16} />
            <span className="font-medium">Filter</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {jobFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full border text-xs font-medium ${selectedFilter === filter
                  ? "bg-[#799351] text-white"
                  : "bg-white text-[#0f172a]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <h4 className="font-semibold text-lg text-[#0f172a] mb-1">
                  {job.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">{job.company}</p>

                <div className="flex items-center text-gray-700 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  {job.location}
                </div>

                <div className="flex items-center text-gray-700 text-sm mb-4">
                  <IndianRupee size={16} className="mr-1" />
                  {job.salary}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="bg-[#f3f4f6] px-2 py-1 rounded text-xs text-gray-700">
                  Job
                </span>
                <a
                  href="#"
                  className="text-[#A20A0A] text-sm font-medium flex items-center gap-1"
                >
                  View details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white rounded-full p-2 shadow-sm">
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-full bg-[#A20A0A]" />
            <div className="w-2 h-1 rounded-full bg-gray-300" />
            <div className="w-2 h-1 rounded-full bg-gray-300" />
          </div>
          <button className="bg-white rounded-full p-2 shadow-sm">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
