import { motion } from "framer-motion";

const BeliefSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-8"
        >
          Belief
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-14 leading-[1.15]"
        >
          Relationships Should Compound.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
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
