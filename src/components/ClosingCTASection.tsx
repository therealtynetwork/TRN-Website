import { motion } from "framer-motion";

const ClosingCTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto border-t border-primary/20 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-[1.2]">
            The network is growing.
            <br className="hidden md:block" />
            <span className="text-primary"> The right time to join is now.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Apply for membership and find out how TRN can open doors in markets you have never reached before.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold px-12 py-4 rounded-lg text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            Apply for Membership
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTASection;
