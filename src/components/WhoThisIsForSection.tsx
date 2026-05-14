import { motion } from "framer-motion";

const WhoThisIsForSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Membership
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-[1.15]">
            Who This Is For
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
            TRN serves two audiences. The first is real estate agents and brokers who want more deals, global reach and additional income streams beyond the transaction.
          </p>
          <p>
            The second is investors and private clients at any level. Anyone exploring a property move, a cross-border purchase or a relocation. TRN is the one stop hub for the entire journey, with specialist services available for those who need them, including wealth management, currency exchange, outreach support, visa and tax guidance and full relocation support.
          </p>
          <p className="text-foreground font-medium">
            Introductions happen once you're in the right room.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
