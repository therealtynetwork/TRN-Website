import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const inclusions = [
  "Verified operator directory by market",
  "Structured referral system and protocols",
  "Private monthly briefings and market intelligence",
  "Strategic partner access",
  "Deal and opportunity board",
  "Leadership eligibility",
  "1-on-1 onboarding call with the founder",
];

const MembershipSection = () => {
  return (
    <section id="membership" className="section-padding">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Access</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Membership
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open to real estate professionals and investors worldwide. Whether you are established or just getting started, all we ask is commitment and integrity.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-primary/70 tracking-[0.2em] uppercase mb-14"
        >
          If you are serious about growing, there is a place for you here
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card border-primary/30 p-12"
        >
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
            TRN Membership
          </h3>
          <p className="text-primary font-semibold text-lg mb-5">Application-Based Access</p>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
            Full access to the verified operator network, referral infrastructure, private briefings,
            strategic partners, and leadership opportunities.
          </p>
          <ul className="space-y-4 mb-12">
            {inclusions.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <Link
              to="/apply"
              className="block text-center bg-primary text-primary-foreground font-semibold text-sm py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply for Membership
            </Link>
            <a
              href="https://calendly.com/jake-therealty-network/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-border text-foreground font-semibold text-sm py-3.5 rounded-lg hover:bg-secondary transition-colors"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
