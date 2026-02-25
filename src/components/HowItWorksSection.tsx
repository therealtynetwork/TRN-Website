import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your application. We assess experience, market positioning, and alignment with network standards.",
  },
  {
    number: "02",
    title: "Market Alignment",
    description: "Accepted operators are aligned to their market. All members share equal access to opportunities.",
  },
  {
    number: "03",
    title: "Structured Introductions",
    description: "When cross-border opportunity arises, the network facilitates warm, tracked introductions between operators.",
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

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="text-primary font-serif text-4xl md:text-5xl font-bold opacity-40 block mb-6">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
