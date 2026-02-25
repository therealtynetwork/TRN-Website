import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is TRN different from a referral group or directory?",
    a: "TRN is a structured operating network, not a social group or passive directory. Every member is verified, referrals are tracked, and all operators have equal access to opportunities. This is institutional infrastructure, not networking.",
  },
  {
    q: "How do referrals work?",
    a: "When a client is buying or selling in a market you don't serve, you submit a referral through the network. We match you with the verified operator in that territory, facilitate a structured introduction, and track the transaction to completion.",
  },
  {
    q: "Who is this for?",
    a: "Established real estate operators with proven market presence and active deal flow. If you're serious about cross-border business, trusted infrastructure, and long-term positioning, TRN is built for you.",
  },
  {
    q: "How are members verified?",
    a: "Every applicant undergoes a review of their transaction history, market reputation, licensing, and professional standards. Applicants who don't meet our criteria are declined.",
  },
  {
    q: "Does TRN take a commission?",
    a: "No. Referral agreements are between operators. TRN provides the infrastructure, verification, and trust layer, not a commission structure.",
  },
  {
    q: "Can I take on a leadership role?",
    a: "Leadership positions are available for members who demonstrate consistent contribution and professional excellence. Designated leaders support onboarding and help maintain network standards. Indicate your interest in your application.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Questions</p>
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
