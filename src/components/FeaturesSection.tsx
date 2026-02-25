import { motion } from "framer-motion";
import { Globe, FileText, Mic, Handshake, MapPin, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Verified Operator Directory",
    description: "Access vetted agents organized by territory. Every member is screened for track record, licensing, and professional standards.",
  },
  {
    icon: FileText,
    title: "Referral Infrastructure",
    description: "Structured agreements, introduction protocols, and tracking systems. Nothing falls through the cracks.",
  },
  {
    icon: Mic,
    title: "Private Briefings",
    description: "Monthly calls with market intelligence, guest operators, and strategic insights from across the network.",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    description: "Pre-vetted legal, tax, finance, and advisory partners ready to support cross-border transactions.",
  },
  {
    icon: MapPin,
    title: "Market Leadership",
    description: "Committed members can step into leadership roles, build local reputation, and help shape the network in their region.",
  },
  {
    icon: BarChart3,
    title: "Deal & Opportunity Board",
    description: "Access to off-market opportunities, investor introductions, and cross-border project flow available to all members.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Infrastructure</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What the Network Provides
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Institutional-grade tools and structure for serious cross-border operators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-10 group hover:border-primary/20 transition-colors"
            >
              <f.icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
