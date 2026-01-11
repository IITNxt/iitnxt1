import ProgramFAQs from "./FAQsSection";

const programs = [
  {
    title: "AI-Powered Drawing & Animation",
    description:
      "Use AI to turn your sketches into animations. Learn by drawing, coloring, and animating your own characters.",
    img: "/opportunities/Programs/8image1.png",
  },
  {
    title: "AI-Generated Storytelling & Comics",
    description:
      "Create interactive stories using AI tools that help you imagine, write, and illustrate like never before.",
    img: "/opportunities/Programs/8image2.png",
  },
  {
    title: "Basic Game Design",
    description:
      "Make simple games with Scratch and beginner-friendly platforms. Understand logic through fun!",
    img: "/opportunities/Programs/8image3.png",
  },
  {
    title: "Fun with Math & AI",
    description:
      "Learn how AI helps solve math problems in a fun way. Play with shapes, puzzles, and smart tools.",
    img: "/opportunities/Programs/8image4.png",
  },
  {
    title: "Exploring Science with AI",
    description:
      "Use AI to visualize space, weather, and science concepts. See how things work in the real world!",
    img: "/opportunities/Programs/8image5.png",
  },
  {
    title: "AI & Music",
    description:
      "Generate music beats using AI-powered tools. Compose your own tunes with just a few clicks.",
    img: "/opportunities/Programs/8image6.png",
  },
  {
    title: "Creative DIY Projects",
    description:
      "Hands-on activities with simple electronics and smart toys. Build, play, and learn!",
    img: "/opportunities/Programs/8image7.png",
  },
];

export default function Age8Page() {
  return (
    <div>
          <div className="pt-32 px-6 pb-20 bg-[#F6EEC9] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-12">
        Programs for Young Explorers (Kids)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between hover:shadow-lg transition-shadow"
          >
            {/* Circle Image */}
            <div className="w-35 h-35 mb-4 rounded-full overflow-hidden shadow-md">
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Desc */}
            <h3 className="text-xl font-bold text-[#A20A0A] mb-2 text-center">
              {program.title}
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              {program.description}
            </p>

            {/* Actions */}
            <div className="mt-auto flex items-center justify-between w-full">
              <a
                href="#"
                className="text-[#799351] text-sm font-medium underline"
              >
                View more details
              </a>
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold px-4 py-1 rounded-md transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ProgramFAQs/>
    </div>
  );
}
