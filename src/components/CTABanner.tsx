
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Request Membership Review
          </a>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground font-semibold px-10 py-4 rounded-lg hover:bg-secondary transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
