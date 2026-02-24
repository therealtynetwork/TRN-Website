import { motion } from "framer-motion";
import { MapPin, Shield, Lock } from "lucide-react";

const points = [
  {
    icon: MapPin,
    title: "One Operator Per Territory",
    description: "Each market is assigned to a single designated operator — ensuring accountability, trust, and exclusivity.",
  },
  {
    icon: Shield,
    title: "Protected Positioning",
    description: "Your territory is yours. No competing members, no diluted referrals, no conflicts of interest.",
  },
  {
    icon: Lock,
    title: "Limited by Design",
    description: "We restrict membership to maintain quality. Once a territory is filled, access is closed until further notice.",
  },
];

const TerritorySection = () => {
  return (
    <section id="territory" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Structure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Territory Allocation
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Access is governed by territory. Each market operates under a single designated representative.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-10 text-center"
            >
              <p.icon className="w-7 h-7 text-primary mb-6 mx-auto" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerritorySection;
