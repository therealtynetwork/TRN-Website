import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeliefSection from "@/components/BeliefSection";
import WhoSection from "@/components/WhoSection";
import FeaturesSection from "@/components/FeaturesSection";
import OperatingPrinciplesSection from "@/components/OperatingPrinciplesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MembershipStandardsSection from "@/components/MembershipStandardsSection";
import FounderSection from "@/components/FounderSection";
import MovementSection from "@/components/MovementSection";
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
      <OperatingPrinciplesSection />
      <HowItWorksSection />
      <MembershipStandardsSection />
      <FounderSection />
      <MovementSection />
      <MembershipSection />
      <FAQSection />
      <CTABanner />
      <InvestorAccessSection />
      <FooterSection />
    </main>
  );
};

export default Index;
