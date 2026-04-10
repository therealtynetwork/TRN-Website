import { motion } from "framer-motion";

const FounderMessageSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            From the Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            A Word From Jake
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="space-y-6 text-muted-foreground text-base md:text-lg leading-[1.9]"
        >
          <p>
            I built TRN because I kept seeing the same problem. Great agents, working hard, but stuck inside one market with no real way to reach beyond it.
          </p>
          <p>
            I wanted to change that. I wanted to build something where one phone call, one introduction, one trusted connection could open a door that changes someone's year.
          </p>
          <p>
            TRN is that place. I am here personally. Not a team, not a chatbot. Me. And if you are inside this network, I am invested in making sure you win.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12"
        >
          <div className="w-16 h-px bg-primary mb-6" />
          <p className="font-serif text-foreground font-semibold text-base">
            Jake Engerer
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Founder of The Realty Network
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
