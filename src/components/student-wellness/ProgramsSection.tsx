"use client";

const programs = [
  {
    title: "Mental Health Sessions",
    image: "/student-wellness/Image1.png",
    description: `Get confidential access to expert-led counseling and emotional wellness tools. Learn to manage stress, combat anxiety, and gain clarity to move forward with strength.`,
    bullets: [
      "One-on-one therapy with Dr. M. Vijaya Gopal",
      "Group sessions to connect with peers",
      "Mental fitness workshops & toolkits",
    ],
  },
  {
    title: "Physical Fitness Programs",
    image: "/student-wellness/Image2.png",
    description: `Reclaim your energy and focus through guided fitness routines and mindful movement. Physical vitality sharpens your academics and builds lifelong habits.`,
    bullets: [
      "Full-body guided workouts",
      "Yoga and meditation sessions",
      "Outdoor activities, events & games",
    ],
  },
  {
    title: "Self-Defense for Women",
    image: "/student-wellness/Image3.png",
    description: `Our specialized self-defense program empowers women students with real-world safety techniques and the confidence to walk with power, anywhere.`,
    bullets: [
      "Learn practical safety tactics",
      "Led by certified female trainers",
      "Confidence-building & empowerment",
    ],
  },
  {
    title: "Art & Creative Workshops",
    image: "/student-wellness/Image4.png",
    description: `Your creativity deserves space to shine. Explore expressive outlets that relax your mind, build emotional resilience, and unleash your inner artist.`,
    bullets: [
      "Painting, sketching & digital art",
      "Creative writing, music & dance",
      "Non-judgmental, joy-first spaces",
    ],
  },
  {
    title: "Health Checkups & Screenings",
    image: "/student-wellness/Image5.png",
    description: `Regular health checkups ensure students stay physically strong and prevent issues early. Partner doctors provide trusted care.`,
    bullets: [
      "Eye exams and vision care",
      "Dental screenings for oral health",
      "Cardiology consultations",
    ],
  },
  {
    title: "Specialist Medical Consultations",
    image: "/student-wellness/Image6.png",
    description: `Access to certified medical professionals for guidance on key areas of health and well-being.`,
    bullets: [
      "Gynaecology & menstrual health talks",
      "Dermatology and skin care sessions",
      "Nutrition & diet guidance",
    ],
  },
  {
    title: "Ayurvedic & Holistic Wellness Camps",
    image: "/student-wellness/Image7.png",
    description: `Traditional Ayurvedic methods blended with modern science to build immunity and balance lifestyle.`,
    bullets: [
      "Ayurveda-inspired immunity camps",
      "Stress relief & herbal care workshops",
      "Guided lifestyle changes",
    ],
  },
  {
    title: "Counseling & Life Coaching",
    image: "/student-wellness/Image8.png",
    description: `Confidential counseling for personal, academic, or emotional struggles. Life coaching for clarity and motivation.`,
    bullets: [
      "Licensed therapists & certified coaches",
      "Individual and group guidance",
      "Stress & time management strategies",
    ],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#A20A0A] mb-16">
          Student Wellness Programs
        </h2>
        <div className="space-y-16">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="rounded-xl shadow-lg object-cover w-full h-[260px]"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#799351] mb-4">
                  {prog.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">{prog.description}</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6">
                  {prog.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-5 py-2 rounded-full transition">
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
