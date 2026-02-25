import { motion } from "framer-motion";

const profiles = [
  "Established real estate operators",
  "Agents with active deal flow",
  "Long-term strategic thinkers",
  "Professionals seeking structured cross-border access",
  "Investors looking for opportunities from anywhere in the world",
];

const WhoSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6"
        >
          Membership
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 leading-[1.15]"
        >
          Who TRN Is Built For
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-5 max-w-md mx-auto"
        >
          {profiles.map((item, i) => (
            <li
              key={i}
              className="text-muted-foreground text-base md:text-lg tracking-wide border-b border-border/30 pb-5 last:border-0"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WhoSection;
