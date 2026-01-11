import HeroSection from "@/components/opportunities/jobs/HeroSection";
import WhyPartnerWithUs from "@/components/opportunities/jobs/WhyPartnerWithUs";
import JobPostingSection from "@/components/opportunities/jobs/JobPostingSection";
import FresherJobsSection from "@/components/opportunities/jobs/FresherJobsSection";
import OurProcess from "@/components/opportunities/jobs/OurProcess";
import TestimonialsSection from "@/components/opportunities/jobs/TestimonialsSection";
import FAQsSection from "@/components/opportunities/jobs/FAQsSection";

export const metadata = {
  title: "Jobs | IITNxt",
  description:
    "Partner with IITNxt to hire top-performing students trained in technology, innovation, and real-world projects.",
};

export default function JobsPage() {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <WhyPartnerWithUs />
      <FresherJobsSection/>
      <JobPostingSection />
      <OurProcess />
      <FAQsSection />
      <TestimonialsSection />
    </div>
  );
}
