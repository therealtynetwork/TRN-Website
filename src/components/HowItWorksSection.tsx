import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply & Get Verified",
    description: "Submit your application. We review your track record, specialization, and market to ensure quality standards.",
  },
  {
    number: "02",
    title: "Match & Introduce",
    description: "When a referral opportunity arises, we match you with the right agent — warm handoff, not a cold directory.",
  },
  {
    number: "03",
    title: "Close & Earn",
    description: "The referral is tracked, the deal closes, you earn your fee — and the client relationship stays with you long-term.",
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
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">The Process</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-6 md:gap-10 items-start"
            >
              <span className="text-primary font-serif text-4xl md:text-5xl font-bold shrink-0 opacity-60">
                {step.number}
              </span>
              <div className="border-l border-border pl-6 md:pl-10 pb-4">
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
