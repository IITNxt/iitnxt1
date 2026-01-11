import React from "react";

const ecosystemItems = [
  {
    title: "Career Preparation",
    description: (
      <>
        <span className="block mb-2">
          <strong>Personalized mentorship</strong> from IITians, tailored{" "}
          <strong>interview drills</strong>, and expert guidance to help you
          identify your strengths and land your dream job.
        </span>
        <span>
          Our career support doesn’t just stop at advice — we empower you with
          actionable strategies, real-world scenarios, and a network of
          professionals to ensure you’re always one step ahead in the
          competitive landscape.
        </span>
      </>
    ),
    image: "/ecosystem/career-prep.png",
    link: "/career-prep",
  },
  {
    title: "Resume Builder",
    description: (
      <>
        <span className="block mb-2">
          <strong>Craft a standout resume</strong> using AI-powered tools,
          templates, and direct feedback from IITian alumni and recruiters.
        </span>
        <span>
          Build your personal brand with a portfolio that highlights your unique
          skills, projects, and achievements — making you irresistible to top
          employers.
        </span>
      </>
    ),
    image: "/ecosystem/resume-builder.png",
    link: "/resume-builder",
  },
  {
    title: "Student Wellness",
    description: (
      <>
        <span className="block mb-2">
          <strong>Holistic wellness programs</strong> that nurture your mind,
          body, and creativity.
        </span>
        <span>
          Access mental health resources, physical fitness sessions, and
          creative workshops — ensuring you thrive both inside and outside the
          classroom.
        </span>
      </>
    ),
    image: "/ecosystem/student-wellness.png",
    link: "/student-wellness",
  },
  {
    title: "Workshops",
    description: (
      <>
        <span className="block mb-2">
          <strong>Hands-on sessions</strong> and industry-led workshops to build
          real-world skills and confidence.
        </span>
        <span>
          Collaborate on live projects, participate in hackathons, and learn
          directly from innovators and leaders shaping the future of technology.
        </span>
      </>
    ),
    image: "/ecosystem/workshops.png",
    link: "/workshops",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative w-full py-10 px-4 bg-gradient-to-b from-amber-100 via-gray-50 to-gray-100 overflow-hidden">
      {/* SVG Path Background (decorative, now more visible) */}
      <svg
        className="absolute inset-0 w-full h-full z-0 opacity-50 pointer-events-none hidden md:block"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M100 800 C 200 600, 300 200, 450 450 S 700 700, 850 100"
          stroke="#eab308"
          strokeWidth="32"
          fill="none"
          strokeDasharray="16 16"
          opacity="0.3"
        />
        {/* Feature dots */}
        <circle cx="100" cy="800" r="22" fill="#f6b100" opacity="0.5" />
        <circle cx="200" cy="600" r="16" fill="#2563eb" opacity="0.4" />
        <circle cx="300" cy="200" r="18" fill="#eab308" opacity="0.3" />
        <circle cx="450" cy="450" r="21" fill="#10b981" opacity="0.5" />
        <circle cx="700" cy="700" r="16" fill="#f43f5e" opacity="0.4" />
        <circle cx="850" cy="100" r="20" fill="#2563eb" opacity="0.5" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl font-stretch-150% text-amber-900 text-center mb-16 tracking-tight">
          Our Ecosystem
        </h2>
        <div className="flex flex-col gap-20">
          {ecosystemItems.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className="w-[280px] h-[200px] sm:w-[340px] sm:h-[240px] md:w-[400px] md:h-[260px] rounded-2xl overflow-hidden shadow-lg bg-zinc-200 flex items-center justify-center relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start md:items-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-3">
                  {item.title}
                </h3>
                <div className="text-zinc-700 text-lg mb-6 max-w-xl leading-relaxed">
                  {item.description}
                </div>
                <a
                  href={item.link}
                  className="inline-block rounded-full px-7 py-2.5 bg-amber-500 text-white font-semibold shadow hover:bg-amber-600 transition-colors text-base"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
