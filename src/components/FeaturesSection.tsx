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
    <section id="benefits" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-24"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">Infrastructure</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What the Network Provides
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            The tools and structure that support serious cross-border collaboration between verified members and qualified investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-10 md:p-12 hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <f.icon className="w-8 h-8 text-primary mb-8" strokeWidth={1.2} />
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {f.title}
                  </h3>
                  {"badge" in f && f.badge && (
                    <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-primary border border-primary/30 rounded-full px-2.5 py-0.5">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
