import { motion } from "framer-motion";
import { Globe, FileText, Mic, Handshake, MapPin, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Verified Member Directory",
    description: "Access a network of verified real estate professionals organized by market. Every member is reviewed for track record, licensing, and professional standards.",
  },
  {
    icon: FileText,
    title: "Structured Referral System",
    description: "Clear referral protocols and introduction processes so cross-border collaboration is organized and nothing is lost in translation.",
  },
  {
    icon: Mic,
    title: "Private Monthly Briefings",
    description: "Regular calls with fellow members to share market updates, discuss trends, and exchange insights from across the network.",
  },
  {
    icon: Handshake,
    title: "Property of the Month",
    description: "Each member can submit one featured property per month. Opportunities are reviewed and shared privately with our curated investor circle.",
  },
  {
    icon: MapPin,
    title: "Market Leadership Roles",
    description: "Committed members can step into leadership roles to help shape the network in their region and support fellow operators.",
  },
  {
    icon: BarChart3,
    title: "Private Investor Introductions",
    description: "When an investor expresses interest in a submitted property, their details are passed directly to the member who promoted it.",
    badge: "Coming Soon",
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
            The tools and structure that support serious cross-border collaboration between verified members and qualified investors.
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
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                {"badge" in f && f.badge && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-primary border border-primary/30 rounded-full px-2 py-0.5">
                    {f.badge}
                  </span>
                )}
              </div>
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
