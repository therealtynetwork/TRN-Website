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
            TRN is for the agent, broker, investor or developer who wish to be connected. Not the one waiting for the phone to ring. The one already dialling.
          </p>
          <p>
            If you are ambitious and looking for that extra deal, that extra connection or simply a better way to serve your clients globally, you belong inside TRN.
          </p>
          <p className="text-foreground font-medium">
            One referral from the right person can be worth more than years of the membership. That is not a line. It has already happened.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
