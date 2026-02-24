import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I referred a client relocating from Malta to Portugal — within 48 hours, TRN matched me with a verified agent. Deal closed, referral paid.",
    name: "Maria S.",
    role: "Agent, Malta",
  },
  {
    quote: "Before TRN, I'd lose international leads to random Google searches. Now I have a trusted contact in every major market.",
    name: "James R.",
    role: "Agency Owner, UK",
  },
  {
    quote: "The quality of agents in this network is unmatched. It's not a directory — it's a real operating system for referrals.",
    name: "Sofia L.",
    role: "Agent, Italy",
  },
];

const countries = ["🇲🇹 Malta", "🇬🇧 UK", "🇮🇹 Italy", "🇵🇹 Portugal", "🇺🇸 USA", "🇨🇦 Canada", "🇿🇦 South Africa"];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Countries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {countries.map((country) => (
            <span
              key={country}
              className="text-sm text-muted-foreground font-medium tracking-wide"
            >
              {country}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Members Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real results from agents inside the network.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <p className="text-foreground leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
