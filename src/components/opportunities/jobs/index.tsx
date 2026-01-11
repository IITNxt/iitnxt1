import HeroSection from "./HeroSection";
import WhyPartnerWithUs from "./WhyPartnerWithUs";
import JobPostingSection from "./JobPostingSection";
import OurProcess from "./OurProcess";
import TestimonialsSection from "./TestimonialsSection";
import FresherJobsSection from "./FresherJobsSection";
import FAQsSection from "./FAQsSection";

const JobsSection = () => {
  return (
    <>
      <HeroSection />
      <FresherJobsSection/>
      <WhyPartnerWithUs/>
      <JobPostingSection />
      <OurProcess/>
      <TestimonialsSection /> 
      <FAQsSection/>

    </>
  );
};

export default JobsSection;
