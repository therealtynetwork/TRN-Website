import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Globe, Clock } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    badge: "Founding Phase Pricing",
    title: "Founding Phase Access",
    description:
      "As the community grows and infrastructure strengthens, membership pricing will increase accordingly. Founding members secure long-term access at the earliest rate.",
  },
  {
    icon: Users,
    title: "The Practical Reality",
    description:
      "In real estate, one meaningful international connection can change a year. If a member closes just one additional deal annually, or passes on a single referral that results in a completed transaction, the upside already outweighs the membership investment. Everything beyond that becomes compounding opportunity.",
  },
  {
    icon: Globe,
    title: "More Than Referrals",
    description:
      "Direct access to trusted agents in key markets, ongoing speaker sessions and shared expertise, a private investor network distributing opportunities, and strategic relationships that expand over years, not weeks.",
  },
  {
    icon: Clock,
    title: "Long-Term Positioning",
    description:
      "This is about building positioning, leverage, and optionality across borders. Serious agents understand the value of being early.",
  },
];

const MemberAdvantagesSection = () => {
  return (
    <section id="advantages" className="py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Decorative line */}
        <div className="w-16 h-px bg-primary/30 mx-auto mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Advantages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Member Advantages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-10 md:p-12 hover:border-primary/20 transition-all duration-500"
            >
              <item.icon className="w-8 h-8 text-primary mb-8" strokeWidth={1.2} />
              {item.badge && (
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary text-[9px] tracking-[0.2em] uppercase px-3 py-1 mb-5"
                >
                  {item.badge}
                </Badge>
              )}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="w-16 h-px bg-primary/30 mx-auto mt-20" />
      </div>
    </section>
  );
};

export default MemberAdvantagesSection;
