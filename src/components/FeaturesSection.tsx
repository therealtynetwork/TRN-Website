import { motion } from "framer-motion";
import { Globe, FileText, Mic, Handshake, MapPin, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Vetted Agent Network",
    description: "Access verified agents organized by country and region. Every member is screened for quality, track record, and professionalism.",
  },
  {
    icon: FileText,
    title: "Referral System + Templates",
    description: "Structured referral agreements, intro templates, and tracking tools so nothing falls through the cracks.",
  },
  {
    icon: Mic,
    title: "Exclusive Calls & Insights",
    description: "Monthly calls with guest speakers covering sales, marketing, and market insights from across the globe.",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    description: "Pre-vetted legal, tax, finance, and marketing partners ready to support your cross-border deals.",
  },
  {
    icon: MapPin,
    title: "Territory Leadership",
    description: "Become the ambassador for your market. Lead your territory, build your reputation, and earn priority referrals.",
  },
  {
    icon: BarChart3,
    title: "Deal & Opportunity Board",
    description: "Access exclusive projects, investor intros, and off-market opportunities shared by network members.",
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
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Membership Benefits</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You Get Inside TRN
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Not a Facebook group. A structured operating network built for serious agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:border-primary/30 transition-colors"
            >
              <f.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
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
