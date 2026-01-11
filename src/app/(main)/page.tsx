export const runtime = 'edge';
import ContactUsSection from "@/components/home/ContactUsSection";
import CorePillarSection from "@/components/home/CorePillarSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnerSection />
      <CorePillarSection />
      <EcosystemSection />
      <ContactUsSection />
    </div>
  );
}
