export default function ExperiencesSection() {
  const testimonials = [
    {
      quote: "The counseling sessions helped me manage exam stress and find clarity during chaos.",
      name: "Priya, 2nd Year Student",
    },
    {
      quote: "Yoga classes made me calmer, more grounded, and improved my focus in classes.",
      name: "Kiran, High School Student",
    },
    {
      quote: "The creative writing workshops brought me joy and helped me express myself freely.",
      name: "Anika, 1st Year Student",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FEF3C7] to-[#f4f6f8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#A20A0A] mb-16">
          Student Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-between"
            >
              <p className="text-gray-800 text-lg italic mb-4">“{t.quote}”</p>
              <span className="text-sm font-medium text-gray-600">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
