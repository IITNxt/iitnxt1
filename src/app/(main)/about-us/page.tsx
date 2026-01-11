// /app/(main)/about/page.tsx
import HeroSection from "../../../components/aboutUs/HeroSection";
import WhoWeAre from "../../../components/aboutUs/WhoWeAre";
import CoreWings from "../../../components/aboutUs/CoreWings";
import OurTeam from "../../../components/aboutUs/OurTeam";
import OurApproach from "../../../components/aboutUs/OurApproach";
import { Metadata } from "next";
import PartnerSection from "@/components/home/PartnerSection";
import CTAContactSection from "../../../components/aboutUs/CTAContactSection";
import { Lightbulb, Users, TrendingUp, Eye, Target, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | IITNXT",
  description: "Learn more about our vision, mission, and approach.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#F6EEC9]"> {/* Soft cream base background */}
      <HeroSection />

      <main className="max-w-6xl mx-auto p-6 space-y-20">
        {/* Tagline Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-[#A20A0A] mb-4">
            Empowering the Innovators of Tomorrow
          </h2>
          <p className="text-xl italic text-[#799351]">
            "Śikṣā sārthakaṃ jīvanam" – Education for a Meaningful Life
          </p>
        </section>

        {/* Innovation / Community / Growth Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Innovation",
              desc: "Fostering creative thinking and real-world problem solving.",
              icon: Lightbulb,
            },
            {
              title: "Community",
              desc: "Connecting young innovators into a strong support network.",
              icon: Users,
            },
            {
              title: "Growth",
              desc: "Guiding students to explore, learn, and lead through tech mastery.",
              icon: TrendingUp,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white shadow-md p-6 rounded-xl border-t-4 border-[#799351] flex flex-col items-center hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-[#A20A0A] mb-4" />
                <h3 className="text-2xl font-semibold text-[#A20A0A] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Who We Are */}
        <WhoWeAre />

        {/* Core Wings */}
        <CoreWings />

        {/* Vision / Mission / Motto Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              content:
                "To reshape the future of education where technology fuels purpose-driven innovation and transforms communities.",
              icon: Eye,
              bg: "bg-[#F59E0B]",
            },
            {
              title: "Our Mission",
              content:
                "To guide learners at all stages through real-world projects, expert mentorship, and wellness support—unlocking their potential as changemakers.",
              icon: Target,
              bg: "bg-[#799351]",
            },
            {
              title: "Our Motto",
              content:
                "Dream, Innovate, and Transform – Together, Let’s Build a Technological Future!",
              icon: Rocket,
              bg: "bg-[#A20A0A]",
            },
          ].map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className={`${block.bg} text-white p-8 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition`}
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{block.title}</h3>
                <p className="text-center">{block.content}</p>
              </div>
            );
          })}
        </section>
      </main>

      {/* Consistent Cream Background */}
      <div className="bg-[#F6EEC9] space-y-20 mt-20">
        <PartnerSection />
        <OurApproach />
        <OurTeam />
        <CTAContactSection />
      </div>
    </div>
  );
}
