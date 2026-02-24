import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeliefSection from "@/components/BeliefSection";
import FeaturesSection from "@/components/FeaturesSection";
import TerritorySection from "@/components/TerritorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MembershipStandardsSection from "@/components/MembershipStandardsSection";
import FounderSection from "@/components/FounderSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <BeliefSection />
      <FeaturesSection />
      <TerritorySection />
      <HowItWorksSection />
      <MembershipStandardsSection />
      <FounderSection />
      <MembershipSection />
      <FAQSection />
      <CTABanner />
      <FooterSection />
    </main>
  );
};

export default Index;
