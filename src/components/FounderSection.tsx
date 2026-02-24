import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Founder</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Jake Engerer
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={founderImg}
                alt="Jake Engerer, Founder of The Realty Network"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-foreground leading-relaxed">
              200+ transactions closed across multiple markets. Based in Malta.
              Operating internationally since the age of 20.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              TRN was built from a simple operational gap: there was no structured,
              trust-verified infrastructure for cross-border real estate referrals.
              Every time a client moved to a market I didn't serve, the relationship
              — and the revenue — disappeared.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This network exists to eliminate that gap. Not through volume, but through
              verified positioning, protected territories, and a shared standard of
              professional conduct.
            </p>
            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Principle:</strong> Every member verified.
                Every referral tracked. Every territory protected.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
