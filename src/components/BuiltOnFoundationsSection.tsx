import { motion } from "framer-motion";

const BuiltOnFoundationsSection = () => {
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
            Credibility
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-[1.15]">
            Built on Proven Foundations
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-[1.9] max-w-2xl mx-auto">
            TRN did not start from zero with no direction. Jake Engerer built this with the direct mentorship of James Galigan, founder of A Players Club, the leading network for young entrepreneurs in Europe. Everything that works inside world-class networks has been studied and applied specifically to real estate. The model is proven. TRN is being built the right way from the start.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltOnFoundationsSection;
