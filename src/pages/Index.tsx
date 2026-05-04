import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhatMembershipUnlocks from "@/components/WhatMembershipUnlocks";
import InsideTRN from "@/components/InsideTRN";
import FounderSection from "@/components/FounderSection";
import MemberWins from "@/components/MemberWins";
import TestimonialsSection from "@/components/TestimonialsSection";
import MembershipSection from "@/components/MembershipSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => (
  <main className="bg-background min-h-screen">
    <NewsletterPopup />
    <Navbar />
    <HeroSection />
    <StatsBar />
    <WhatMembershipUnlocks />
    <InsideTRN />
    <FounderSection />
    <MemberWins />
    <TestimonialsSection />
    <MembershipSection />
    <FAQSection />
    <FooterSection />
  </main>
);

export default Index;
