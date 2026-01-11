'use client';

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#A20A0A]">
        What Our Donors Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <blockquote className="bg-white p-6 rounded-lg shadow text-lg">
          “Knowing my donation supports real projects gives me so much satisfaction.”
          <br />
          <span className="font-semibold block mt-4">– Anjali, Donor</span>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow text-lg">
          “Transparent process and a real impact.”
          <br />
          <span className="font-semibold block mt-4">– Ramesh, Corporate Partner</span>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow text-lg">
          “It’s amazing to see exactly where the funds go and who they help.”
          <br />
          <span className="font-semibold block mt-4">– Priya, Supporter</span>
        </blockquote>
      </div>
    </section>
  );
}
