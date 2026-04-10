import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsTRNSection from "@/components/WhatIsTRNSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import NetworkInActionSection from "@/components/NetworkInActionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MembershipTiersSection from "@/components/MembershipTiersSection";
import InvestorAccessSection from "@/components/InvestorAccessSection";
import FounderMessageSection from "@/components/FounderMessageSection";

import ClosingCTASection from "@/components/ClosingCTASection";
import FooterSection from "@/components/FooterSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <NewsletterPopup />
      <Navbar />
      <HeroSection />
      <WhatIsTRNSection />
      <WhoThisIsForSection />
      <WhatYouGetSection />
      <NetworkInActionSection />
      <TestimonialsSection />
      <MembershipTiersSection />
      <InvestorAccessSection />
      <FounderMessageSection />
      
      <ClosingCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
