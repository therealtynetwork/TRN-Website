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
          This Is Being Built With Intention
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
          If you're a serious operator who believes relationships should outlast borders, we'd like to hear from you.
        </p>
        <Link
          to="/apply"
          className="bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Request Membership Review
        </Link>
      </motion.div>
    </section>
  );
};

export default CTABanner;
