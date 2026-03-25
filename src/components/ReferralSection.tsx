import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "You refer",
    description: "Introduce any realtor you trust, anywhere in the world.",
  },
  {
    number: "02",
    title: "They join",
    description: "They become a paying member of The Realty Network.",
  },
  {
    number: "03",
    title: "You earn",
    description: "25% of their membership, every renewal, for life.",
  },
];

const ReferralSection = () => {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Referral Programme
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Know a great realtor?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Every member you refer earns you 25% of their membership fee — paid to you for as long as they remain a member. No cap. No expiry. Just ongoing income from the network you are already part of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="text-primary font-serif text-4xl md:text-5xl font-bold opacity-40 block mb-6">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
