// src/app/(main)/student-wellness/page.tsx
import HeroSection from "@/components/student-wellness/HeroSection";
import ExperiencesSection from "@/components/student-wellness/ExperiencesSection";
import OurCommitment from "@/components/student-wellness/OurCommitment";
import ProgramsSection from "@/components/student-wellness/ProgramsSection";
import WhyWellnessSection from "@/components/student-wellness/WhyWellnessSection";
import FAQSection from "@/components/student-wellness/FAQSection";

export default function StudentWellnessPage() {
  return (
    <div className="pt-[63px]">
      <HeroSection />
      <OurCommitment />
      <WhyWellnessSection />
      <ProgramsSection />
      <FAQSection />
      <ExperiencesSection />
    </div>
  );
}
