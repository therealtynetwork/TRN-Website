import { motion } from "framer-motion";

const WhatIsTRNSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            The Foundation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-[1.15]">
            What Is TRN
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.9] max-w-2xl mx-auto">
            The Realty Network is a private membership connecting serious real estate professionals across borders. The right people, in the right markets, at the right time. One introduction can change the trajectory of an entire year.
          </p>
          <p className="text-foreground text-base md:text-lg font-medium mt-8 leading-relaxed">
            The client does not stay local. Neither should the agent.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsTRNSection;
