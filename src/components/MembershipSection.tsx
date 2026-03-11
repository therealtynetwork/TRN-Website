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
    <section id="membership" className="py-12 md:py-16 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">Access</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Membership
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Open to real estate professionals and investors worldwide. Whether you are established or just getting started, all we ask is commitment and integrity.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] text-primary/60 tracking-[0.3em] uppercase mb-16"
        >
          If you are serious about growing, there is a place for you here
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 md:p-14"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
            TRN Membership
          </h3>
          <p className="text-primary font-semibold text-lg mb-6">Application-Based Access</p>
          <p className="text-muted-foreground text-sm mb-12 leading-[1.8]">
            Full access to the verified operator network, referral infrastructure, private briefings,
            strategic partners, and leadership opportunities.
          </p>
          <ul className="space-y-5 mb-14">
            {inclusions.map((item, j) => (
              <li key={j} className="flex items-start gap-4 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <Link
              to="/apply"
              className="block text-center bg-primary text-primary-foreground font-semibold text-sm py-4 rounded-xl hover:opacity-90 transition-opacity tracking-[0.1em] uppercase"
            >
              Apply for Membership
            </Link>
            <a
              href="https://calendly.com/jake-therealty-network/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-border/50 text-foreground font-semibold text-sm py-4 rounded-xl hover:bg-secondary/50 transition-colors tracking-[0.1em] uppercase"
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
