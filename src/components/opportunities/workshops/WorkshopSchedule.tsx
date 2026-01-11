"use client";

import { MapPin, CalendarDays, ArrowRight } from "lucide-react";

type Workshop = {
  title: string;
  description: string;
  location: string;
  date: string;
  registerBy: string;
  fee: number;
  image: string;
};

const workshops: Workshop[] = [
  {
    title: "The Importance of Effective Lesson Planning",
    description:
      "Plan better lessons using SMART objectives and improve learner outcomes.",
    location: "IIT Bombay",
    date: "Sep 12, 2025",
    registerBy: "Sep 5, 2025",
    fee: 499,
    image: "/PlaceholderSquare.png",
  },
  {
    title: "Independent Learning Workshop Series",
    description:
      "Encourage autonomous learning and help students develop critical life skills.",
    location: "Delhi University",
    date: "Aug 25, 2025",
    registerBy: "Aug 20, 2025",
    fee: 0,
    image: "/PlaceholderSquare.png",
  },
  {
    title: "Embracing Teacher Growth Mindset",
    description:
      "Discover strategies to improve teacher development and classroom learning.",
    location: "IIT Madras",
    date: "Oct 3, 2025",
    registerBy: "Sep 28, 2025",
    fee: 250,
    image: "/PlaceholderSquare.png",
  },
];

const onlineWorkshops: Workshop[] = [
  {
    title: "Gamification in Online Teaching",
    description:
      "Learn how to gamify your virtual classroom with fun, interactive tools.",
    location: "Online",
    date: "Sep 15, 2025",
    registerBy: "Sep 10, 2025",
    fee: 0,
    image: "/PlaceholderSquare.png",
  },
  {
    title: "AI Tools for Educators",
    description:
      "Master AI-based tools to save time and personalize student learning.",
    location: "Online",
    date: "Aug 30, 2025",
    registerBy: "Aug 25, 2025",
    fee: 199,
    image: "/PlaceholderSquare.png",
  },
];

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="w-[350px] flex flex-col rounded-xl shadow-lg overflow-hidden bg-white  border border-[#799351]/40">
      <div className="bg-gray-200 aspect-square w-full">
        <img
          src={workshop.image}
          alt="Workshop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[#A20A0A] mb-2">
          {workshop.title}
        </h3>
        <p className="text-sm text-gray-700 mb-3">{workshop.description}</p>

        <div className="text-sm text-[#799351] flex items-center mb-1">
          <MapPin size={16} className="mr-1" />
          {workshop.location}
        </div>
        <div className="text-sm text-[#799351] flex items-center mb-1">
          <CalendarDays size={16} className="mr-1" />
          Date: {workshop.date}
        </div>
        <div className="text-sm text-[#799351] flex items-center mb-4">
          <CalendarDays size={16} className="mr-1" />
          Register by: {workshop.registerBy}
        </div>

        {/* View Details Link */}
        <a
          href="#"
          className="text-sm text-[#A20A0A] font-medium mb-2 flex items-center hover:underline"
        >
          View Details <ArrowRight className="ml-1" size={14} />
        </a>

        <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm py-2 rounded mt-auto">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default function WorkshopSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#F6EEC9] via-[#F59E0B]/20 to-[#A20A0A]/10">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-[#A20A0A] mb-8">Workshops</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {workshops.map((ws, idx) => (
            <WorkshopCard key={idx} workshop={ws} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-[#A20A0A] mb-8">Online Workshops</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {onlineWorkshops.map((ws, idx) => (
            <WorkshopCard key={idx} workshop={ws} />
          ))}
        </div>
      </div>
    </section>
  );
}
