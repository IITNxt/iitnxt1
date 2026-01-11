import HeroSection from '../../../components/supportUS/HeroSection';
import DonationImpact from '../../../components/supportUS/DonationImpact';
import DonationUpdates from '../../../components/supportUS/DonationUpdates';
import ProjectExample from '../../../components/supportUS/ProjectExample';
import ImpactStats from '../../../components/supportUS/ImpactStats';
import Testimonials from '../../../components/supportUS/Testimonials';
import FooterCTA from '../../../components/supportUS/FooterCTA';
import DonorTools from '../../../components/supportUS/DonorTools';

export default function SupportPage() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <DonationImpact />
      <DonationUpdates />
      <DonorTools/>
      <ProjectExample />
      <ImpactStats />
      <Testimonials />
      <FooterCTA />
    </main>
  );
}
