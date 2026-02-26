import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeliefSection from "@/components/BeliefSection";
import WhoSection from "@/components/WhoSection";
import FeaturesSection from "@/components/FeaturesSection";
import MembershipStandardsSection from "@/components/MembershipStandardsSection";
import FounderSection from "@/components/FounderSection";
import MovementSection from "@/components/MovementSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MemberAdvantagesSection from "@/components/MemberAdvantagesSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import InvestorAccessSection from "@/components/InvestorAccessSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <BeliefSection />
      <WhoSection />
      <FeaturesSection />
      <MembershipStandardsSection />
      <FounderSection />
      <MovementSection />
      <TestimonialsSection />
      <MemberAdvantagesSection />
      <MembershipSection />
      <CTABanner />
      <InvestorAccessSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
