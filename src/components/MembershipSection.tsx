import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Vetted agent directory by country",
  "Referral system + templates",
  "Monthly member calls & speakers",
  "Strategic partner access",
  "Deal & opportunity board",
  "Territory ambassador opportunities",
  "1-on-1 call with the founder",
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding bg-secondary/30">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Membership</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join the Network
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Limited members per territory to protect trust and referral quality.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-primary tracking-widest uppercase mb-12"
        >
          Spots are limited by market — apply while your territory is open
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary rounded-xl p-10"
        >
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
            TRN Membership
          </h3>
          <p className="text-primary font-semibold text-lg mb-4">Request Access</p>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Full access to the vetted agent network, referral system, calls, strategic partners, and territory leadership opportunities.
          </p>
          <ul className="space-y-3 mb-10">
            {features.map((f, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/apply"
            className="block text-center bg-primary text-primary-foreground font-semibold text-sm py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
