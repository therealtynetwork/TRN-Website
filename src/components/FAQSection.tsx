import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is TRN?", a: "TRN is a private global network for real estate professionals. Members access a vetted room of agents across 10+ countries, a full client service suite covering wealth, tax, visa and relocation, and ongoing deal flow that runs beyond their local market." },
  { q: "How does the lead generation work?", a: "On the Done For You tier, we run targeted LinkedIn outreach in your specific market each month. Conversations come back to you. You handle them. Volume and quality benchmarks are built into the package." },
  { q: "Who is this for?", a: "Real estate professionals who are serious about growing beyond their local zone. Agents, agency founders, brokers and operators who want a global referral network and a structured growth system around it." },
  { q: "What happens after I join?", a: "You are personally onboarded by the founder, plugged into the network, introduced to relevant advisors and members, and set up with outreach or referral flow starting the same month." },
  { q: "How do I apply?", a: "Click Apply Now anywhere on this page, book a call, and we will walk you through fit and tier on the call." },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-28 px-6 border-t border-border/30">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6">FAQ</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold">Frequently Asked Questions</h2>
      </motion.div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border/30">
            <AccordionTrigger className="text-left font-serif text-base md:text-lg text-foreground hover:text-primary py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-[1.85] pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
