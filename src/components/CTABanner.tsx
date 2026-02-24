import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Your Territory Is Waiting
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Limited positions. Protected markets. Apply while your territory is open.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/apply"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply for Access
          </Link>
          <a
            href="mailto:hello@therealty-network.com"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-secondary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
