"use client";

import HeroSection from "./heroSection";
import ResumeTemplates from "./resumeTemplates";
import ResumeBuilder from "./ResumeBuilder";
import References from "./references";

export default function CareerPrepPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />
      <ResumeTemplates />
      <ResumeBuilder /> 
      <References/>

    </main>
  );
}
