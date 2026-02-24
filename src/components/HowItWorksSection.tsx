import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply & Verification",
    description: "Submit your application. We evaluate track record, market presence, and alignment with network standards.",
  },
  {
    number: "02",
    title: "Territory Assignment",
    description: "Accepted operators are assigned to their territory. One operator per market. No overlap, no conflict.",
  },
  {
    number: "03",
    title: "Referral Activation",
    description: "When opportunity arises, the network facilitates structured introductions — warm handoffs with full accountability.",
  },
  {
    number: "04",
    title: "Execution & Tracking",
    description: "Deals are tracked through completion. Referral fees are settled directly. Relationships remain protected.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Process</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex gap-8 md:gap-12 items-start"
            >
              <span className="text-primary font-serif text-3xl md:text-4xl font-bold shrink-0 opacity-50 w-12">
                {step.number}
              </span>
              <div className="border-l border-border/50 pl-8 md:pl-12 pb-2">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
