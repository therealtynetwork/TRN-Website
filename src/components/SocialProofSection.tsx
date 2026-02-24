import { motion } from "framer-motion";

const countries = ["🇲🇹 Malta", "🇬🇧 United Kingdom", "🇮🇹 Italy", "🇵🇹 Portugal", "🇺🇸 United States", "🇨🇦 Canada", "🇿🇦 South Africa"];

const metrics = [
  { value: "7+", label: "Markets Active" },
  { value: "€50M+", label: "Transaction Value Closed" },
  { value: "1", label: "Operator Per Territory" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-20"
        >
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{m.value}</p>
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Active territories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">Active Territories</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
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
