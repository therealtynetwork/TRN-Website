import { motion } from "framer-motion";

const pillars = [
  {
    title: "Territory Leaders",
    description: "One operator per market. Accountability over volume.",
  },
  {
    title: "Structured Collaboration",
    description: "Warm introductions with tracked outcomes. Not random referrals.",
  },
  {
    title: "Long-Term Positioning",
    description: "Built for operators who think in decades, not quarters.",
  },
  {
    title: "Shared Belief",
    description: "That trust deserves infrastructure, and relationships deserve continuity.",
  },
];

const MovementSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Vision
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            Building The Future of
            <br />
            Cross-Border Real Estate
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="space-y-3"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovementSection;
