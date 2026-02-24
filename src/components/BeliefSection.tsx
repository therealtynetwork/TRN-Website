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
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-[1.15]"
        >
          Real Estate Is Global.
          <br />
          <span className="text-muted-foreground">Referrals Are Not.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            Clients move across borders. Capital flows between markets. Yet most agents
            operate in isolation — losing relationships and revenue the moment a deal
            crosses a boundary they don't serve.
          </p>
          <p>
            There is no institutional infrastructure for cross-border referrals.
            No verification. No structure. No accountability.
          </p>
          <p className="text-foreground font-medium">
            TRN exists to change that.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefSection;
