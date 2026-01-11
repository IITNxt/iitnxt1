import { Target, Users, CheckCircle } from "lucide-react";

export default function OurProcess() {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-[#A20A0A]">Our Process</h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#A20A0A] via-[#F59E0B] to-[#799351] rounded-full"></div>

          <div className="space-y-12">
            {[
              {
                title: "Understanding Your Needs",
                desc: "We begin by identifying your hiring goals and tech stack needs through a dedicated partnership consultation.",
                icon: Target,
                color: "bg-[#A20A0A]",
                align: "left",
              },
              {
                title: "Curated Talent Pipeline",
                desc: "Based on your needs, we filter top talent from our programs through assessments and project evaluations.",
                icon: Users,
                color: "bg-[#799351]",
                align: "right",
              },
              {
                title: "Post-Hiring Support",
                desc: "We continue to support both candidate and recruiter with onboarding strategies and feedback-driven training.",
                icon: CheckCircle,
                color: "bg-[#F59E0B]",
                align: "left",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`md:flex items-center ${
                    step.align === "right" ? "md:flex-row-reverse" : ""
                  } md:justify-between`}
                >
                  {/* Icon Bubble */}
                  <div className="relative flex items-center justify-center md:w-1/2">
                    <div
                      className={`w-14 h-14 ${step.color} text-white flex items-center justify-center rounded-full shadow-lg`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 mt-4 md:mt-0 bg-white shadow-md rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
