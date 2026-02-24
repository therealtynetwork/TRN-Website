import { motion } from "framer-motion";
import { MapPin, Handshake, TrendingUp, Shield } from "lucide-react";

const principles = [
  {
    icon: MapPin,
    title: "Territory Responsibility",
    description: "Each operator is accountable for the service quality and reputation within their assigned market.",
  },
  {
    icon: Handshake,
    title: "Structured Introductions",
    description: "Referrals follow a defined process — warm, tracked, and professionally managed from start to close.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Alignment",
    description: "The network is designed for sustained relationships, not transactional volume.",
  },
  {
    icon: Shield,
    title: "Professional Standards",
    description: "Members are held to a shared code of conduct that protects the integrity of every interaction.",
  },
];

const OperatingPrinciplesSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Framework</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Operating Principles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-6 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciplesSection;
