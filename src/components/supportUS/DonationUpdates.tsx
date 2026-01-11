// app/supportUs/DonationUpdates.tsx

'use client';

export default function DonationUpdates() {
  return (
    <section className="bg-[#F6EEC9] py-16 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#A20A0A] mb-10 text-center">
          Recent Initiatives Funded by You
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* June 2025 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#F59E0B]">
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">
              🧘 Mental Health Week
            </h3>
            <p className="text-sm text-gray-800 mb-1 font-medium">June 2025</p>
            <p className="text-gray-700">
              Over 500 students participated in group sessions, yoga retreats, and 1:1 counseling funded by your donations.
            </p>
          </div>

          {/* May 2025 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#799351]">
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">
              💡 Tech4Good Bootcamp
            </h3>
            <p className="text-sm text-gray-800 mb-1 font-medium">May 2025</p>
            <p className="text-gray-700">
              Students built real-world solutions for NGOs and rural communities, mentored by IIT alumni.
            </p>
          </div>

          {/* March 2025 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#F59E0B]">
            <h3 className="text-xl font-semibold text-[#A20A0A] mb-2">
              🌱 Rural Outreach Mentorships
            </h3>
            <p className="text-sm text-gray-800 mb-1 font-medium">March 2025</p>
            <p className="text-gray-700">
              Reached 200+ students in Tier-3 towns to offer career mentorship and mental wellness programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
