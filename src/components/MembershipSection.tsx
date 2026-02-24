import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Newsletter",
    price: "Free",
    description: "Stay informed with weekly insights on global real estate trends and network updates.",
    features: [
      "Weekly market insights",
      "Network news & updates",
      "Public events access",
    ],
    cta: "Subscribe",
    highlighted: false,
  },
  {
    name: "Core Network",
    price: "Request Access",
    description: "Full access to the vetted agent network, referral system, and member calls.",
    features: [
      "Vetted agent directory",
      "Referral system + templates",
      "Monthly member calls",
      "Strategic partner access",
      "Deal & opportunity board",
    ],
    cta: "Apply Now",
    highlighted: true,
  },
  {
    name: "Pro Network",
    price: "Request Access",
    description: "Everything in Core plus territory leadership, priority matching, and 1-on-1 intros.",
    features: [
      "Everything in Core",
      "Territory ambassador role",
      "Priority referral matching",
      "1-on-1 founder introductions",
      "Early access to partnerships",
      "Exclusive mastermind events",
    ],
    cta: "Apply Now",
    highlighted: false,
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Membership</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Level
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Limited members per territory to protect trust and referral quality.
          </p>
        </motion.div>

        {/* Scarcity note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-primary tracking-widest uppercase mb-12"
        >
          Spots are limited by market — apply while your territory is open
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`rounded-xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-card border-2 border-primary"
                  : "glass-card"
              }`}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {tier.name}
              </h3>
              <p className="text-primary font-semibold text-lg mb-3">{tier.price}</p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={tier.name === "Newsletter" ? "#" : "/apply"}
                className={`text-center font-semibold text-sm py-3 rounded-lg transition-opacity hover:opacity-90 ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
