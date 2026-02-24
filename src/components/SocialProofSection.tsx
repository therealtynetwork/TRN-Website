import { motion } from "framer-motion";

const countries = ["🇲🇹 Malta", "🇬🇧 United Kingdom", "🇮🇹 Italy", "🇵🇹 Portugal", "🇺🇸 United States", "🇨🇦 Canada", "🇿🇦 South Africa"];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base md:text-lg mb-16 max-w-xl mx-auto leading-relaxed"
        >
          Members positioned across multiple international markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">Active Territories</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {countries.map((country) => (
              <span
                key={country}
                className="text-sm text-foreground/70 font-medium tracking-wide"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
