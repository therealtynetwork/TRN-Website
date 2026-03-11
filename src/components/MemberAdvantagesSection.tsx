import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
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
    <section id="advantages" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <Separator className="bg-border/50 mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Advantages
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Member Advantages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 hover:border-primary/20 transition-colors"
            >
              <item.icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
              {item.badge && (
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary text-xs tracking-wider uppercase px-3 py-1 mb-4"
                >
                  {item.badge}
                </Badge>
              )}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-border/50 mt-16" />
      </div>
    </section>
  );
};

export default MemberAdvantagesSection;
