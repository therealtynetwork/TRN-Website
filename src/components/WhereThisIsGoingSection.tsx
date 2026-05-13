import { motion } from "framer-motion";

const WhereThisIsGoingSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Vision
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            Where This Is Going
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              Short Term
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.9]">
              100 members across multiple countries with a steady and growing income from the business. A lead generation system that delivers real targeted value to every member in their specific zone. A premium online network that operates like a proper business not a hobby project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              Long Term
            </h3>
            <p className="text-muted-foreground text-sm leading-[1.9]">
              In-person events and private meetups where members build genuine relationships face to face. A full property portal where members list, collaborate and close deals across borders. Real friendships and long-term business partnerships built on trust and shared wins. Every single member making more from TRN than they ever put in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhereThisIsGoingSection;
