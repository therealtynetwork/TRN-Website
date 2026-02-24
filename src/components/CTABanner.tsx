import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
          Ready to Go Global?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Your next client might be across the world. Make sure you have a trusted agent waiting for them.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/apply"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply to Join
          </Link>
          <a
            href="mailto:hello@therealty-network.com"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-secondary transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
