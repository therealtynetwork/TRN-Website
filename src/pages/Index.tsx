import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsTRNSection from "@/components/WhatIsTRNSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import MembershipSection from "@/components/MembershipSection";
import InvestorAccessSection from "@/components/InvestorAccessSection";
import FounderMessageSection from "@/components/FounderMessageSection";
import FounderVideoSection from "@/components/FounderVideoSection";

import ClosingCTASection from "@/components/ClosingCTASection";
import FooterSection from "@/components/FooterSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <NewsletterPopup />
      <Navbar />
      <HeroSection />
      <FounderVideoSection />
      <WhatIsTRNSection />
      <WhoThisIsForSection />
      <WhatYouGetSection />
      
      <TestimonialsSection />
      <MembershipSection />
      <InvestorAccessSection />
      <FounderMessageSection />
      
      <ClosingCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
