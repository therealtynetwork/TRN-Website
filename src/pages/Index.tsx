import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FounderVideoSection from "@/components/FounderVideoSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeliefSection from "@/components/BeliefSection";

import FeaturesSection from "@/components/FeaturesSection";

import FounderSection from "@/components/FounderSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import MemberAdvantagesSection from "@/components/MemberAdvantagesSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import InvestorAccessSection from "@/components/InvestorAccessSection";
import ReferralSection from "@/components/ReferralSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <FounderVideoSection />
      <SocialProofSection />
      <BeliefSection />
      
      <FeaturesSection />
      
      <FounderSection />
      
      <TestimonialsSection />
      <MemberAdvantagesSection />
      <MembershipSection />
      
      <InvestorAccessSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
