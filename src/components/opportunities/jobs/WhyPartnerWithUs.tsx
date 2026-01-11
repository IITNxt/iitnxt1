import { Users, Briefcase, Lightbulb } from "lucide-react";

export default function WhyPartnerWithUs() {
  return (
    <section className="py-20 px-6  text-gray-900">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-[#A20A0A]">
          Why Partner with <span className="text-[#799351]">IITNxt?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Industry-Ready Talent",
              desc: "Our students are not just academically strong, but also hands-on technologists with real-world experience in collaborative environments.",
              icon: Users,
              color: "bg-[#A20A0A]",
            },
            {
              title: "Tailored Hiring Pipelines",
              desc: "We work with corporate partners to understand hiring needs and customize pipelines that focus on long-term value, not just placement numbers.",
              icon: Briefcase,
              color: "bg-[#799351]",
            },
            {
              title: "Mentorship-Backed Growth",
              desc: "IITNxt learners are mentored by IITians and industry veterans — trained in soft skills, innovation, and strategic execution.",
              icon: Lightbulb,
              color: "bg-[#F59E0B]",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
              >
                <div
                  className={`w-12 h-12 ${item.color} text-white flex items-center justify-center rounded-full mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
