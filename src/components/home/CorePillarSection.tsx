import { Briefcase, Hammer, HeartPulse } from "lucide-react";
import VedicCard from "@/components/cards/VedicCard";

export default function CorePillarSection() {
  return (
    <section className="relative w-full py-10 px-4 bg-amber-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-stretch-150% text-amber-900 text-center mb-16 tracking-tight">
          Our Core Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VedicCard>
            <div className="flex flex-col items-center mb-4">
              <Briefcase className="h-9 w-9 text-gray-700 mb-2" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Career Preparation
              </h3>
            </div>
            <p className="text-gray-800 text-base max-w-xs text-center mx-auto">
              Receive personalized mentorship from IITians, participate in
              realistic mock interviews, and develop the confidence and skills
              needed to excel in competitive job markets and campus placements.
            </p>
          </VedicCard>

          <VedicCard>
            <div className="flex flex-col items-center mb-4">
              <Hammer className="h-9 w-9 text-gray-600 mb-2" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Real-World Learning
              </h3>
            </div>
            <p className="text-gray-800 text-base max-w-xs text-center mx-auto">
              Work on hands-on, impact-driven technology projects that bridge
              theory and practice, allowing you to solve real challenges, build
              a strong portfolio, and prepare for the demands of the modern
              workplace.
            </p>
          </VedicCard>

          <VedicCard>
            <div className="flex flex-col items-center mb-4">
              <HeartPulse className="h-9 w-9 text-gray-600 mb-2" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Student Wellness
              </h3>
            </div>
            <p className="text-gray-800 text-base max-w-xs text-center mx-auto">
              Embrace holistic development with resources and support for mental
              well-being, physical health, and creative expression—ensuring you
              thrive academically and personally throughout your journey.
            </p>
          </VedicCard>
        </div>
      </div>
    </section>
  );
}
