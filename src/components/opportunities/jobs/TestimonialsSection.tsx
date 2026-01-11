export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#A20A0A] mb-12">
          What Our Hiring Partners Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Srinivas K",
              role: "HR Director, TechCom India",
              feedback:
                "IITNxt provides some of the best industry-ready candidates we’ve ever hired. Their learners bring initiative and clarity.",
            },
            {
              name: "Ayesha M",
              role: "Co-Founder, LogiSmart AI",
              feedback:
                "The hands-on exposure and mentorship show in the quality of these candidates. We were impressed by their adaptability and drive.",
            },
            {
              name: "Rohan B",
              role: "CTO, FinCloud",
              feedback:
                "We hired 3 developers via IITNxt and all of them hit the ground running with zero hand-holding. Truly professional.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#799351]"
            >
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <div className="mt-4 text-sm font-semibold text-[#A20A0A]">
                {t.name} – {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
