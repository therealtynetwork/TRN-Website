import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from a free Facebook group?",
    a: "TRN is a vetted operating network — not a social media group. Every member is verified, referrals are structured with templates and tracking, and territories are protected. We have calls, partnerships, and accountability. Facebook groups have noise.",
  },
  {
    q: "How do referrals work?",
    a: "When you have a client buying or selling in a market you don't serve, you submit a referral request. We match you with a verified agent in that market, facilitate a warm introduction, and track the deal to completion. You earn a referral fee, and the client stays in your network.",
  },
  {
    q: "Who is this for?",
    a: "Ambitious real estate agents and small agency owners who want to grow beyond their local market. If you're serious about cross-border business, trusted connections, and operating at a higher standard — TRN is for you.",
  },
  {
    q: "How do you verify members?",
    a: "Every applicant goes through a review process. We check track record, specialization, licensing, online presence, and professional references. We reject applicants who don't meet our standards — that's what protects the network.",
  },
  {
    q: "Do you take a commission?",
    a: "TRN does not take a cut from your referral fees. The referral agreement is between you and the receiving agent. We provide the system, the matching, and the trust layer.",
  },
  {
    q: "Can I be the ambassador for my country?",
    a: "Yes — territory leadership roles are available. Ambassadors lead their local market, help onboard new members, and get priority referral matching. Apply and mention your interest in the application.",
  },
  {
    q: "How fast can I see value?",
    a: "Many members receive their first referral introduction within the first month. But the real value compounds over time: relationships, trust, repeat referrals, and strategic partnerships.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-border/50"
            >
              <AccordionTrigger className="text-foreground text-left font-sans font-medium text-sm md:text-base hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
