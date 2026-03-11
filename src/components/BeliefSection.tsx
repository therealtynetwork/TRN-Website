import { motion } from "framer-motion";

const BeliefSection = () => {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-10"
        >
          Belief
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16 leading-[1.1]"
        >
          Relationships Should Compound.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-8 text-muted-foreground leading-[1.9] max-w-2xl mx-auto text-base md:text-lg"
        >
          <p>
            In real estate, relationships are the real asset. Yet when clients move markets, those relationships often reset.
          </p>
          <p>
            TRN was built on a simple belief: borders should never end a relationship built on trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefSection;
