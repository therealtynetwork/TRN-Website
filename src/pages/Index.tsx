import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
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
      <FeaturesSection />
      <HowItWorksSection />
      <FounderSection />
      <MembershipSection />
      <FAQSection />
      <CTABanner />
      <FooterSection />
    </main>
  );
};

export default Index;
