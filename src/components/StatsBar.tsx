import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Members" },
  { value: "10+", label: "Countries" },
  { value: "3", label: "Pillars" },
  { value: "1", label: "Network" },
];

const StatsBar = () => (
  <section className="bg-background border-y border-border/30 py-14 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      {stats.map((s, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6 }}
          className="text-center">
          <div className="font-serif text-4xl md:text-5xl text-primary font-semibold mb-2">{s.value}</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBar;
