import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Countries" },
  { value: "€500m+", label: "In Deals Closed" },
  { value: "Private", label: "Network" },
  { value: "Verified", label: "Operators" },
];

const countries = ["🇲🇹 Malta", "🇬🇧 United Kingdom", "🇮🇹 Italy", "🇵🇹 Portugal", "🇬🇷 Greece", "🇺🇸 United States", "🇨🇦 Canada", "🇿🇦 South Africa", "🇦🇪 Dubai"];

const SocialProofSection = () => {
  return (
    <section className="py-10 md:py-14 overflow-hidden">
      {/* Section heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-primary text-[10px] font-semibold tracking-[0.3em] uppercase mb-8"
      >
        More About Our Members
      </motion.p>

      {/* Scrolling stats ticker */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-6 px-12">
              <span className="font-serif text-4xl md:text-5xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{stat.label}</span>
              <span className="text-border/60 text-2xl">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Active territories */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Members positioned across multiple international markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-8">Active Territories</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {countries.map((country) => (
              <span
                key={country}
                className="text-sm text-foreground/60 font-medium tracking-wider"
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
