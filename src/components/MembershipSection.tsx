
import { motion } from "framer-motion";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";

const communityFeatures = [
  "Member introductions across global markets",
  "100 targeted leads, criteria identified in your 1-on-1 onboarding call with the founder",
  "Monthly webinar co-hosted with a dedicated outreach expert",
  "FX partner referral access",
  "European tax and relocation expert access",
  "Monthly property collaboration slot",
  "1-on-1 onboarding call with the founder to build your personal outreach system",
];

const dfyLiteExtras = [
  "Full done-for-you outreach service with a dedicated expert",
  "Monthly 1-on-1 strategy call with the founder",
  "Active deal sourcing and curated connections",
  "Priority network access",
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
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
          If you are serious about growing, TRN is the place for you
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Community Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 md:p-10 flex flex-col"
          >
            <Sparkles className="w-7 h-7 text-primary mb-6" strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
              Community
            </h3>
            <p className="text-primary font-semibold text-sm mb-6">Application-Based Access</p>
            <ul className="space-y-4 mb-10 flex-1">
              {communityFeatures.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-primary-foreground font-semibold text-sm py-4 rounded-xl hover:opacity-90 transition-opacity tracking-[0.1em] uppercase"
            >
              Apply for Membership
            </a>
          </motion.div>

          {/* DFY Lite Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-10 flex flex-col relative"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <Rocket className="w-7 h-7 text-primary mb-6" strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
              DFY Lite
            </h3>
            <p className="text-primary font-semibold text-sm mb-4">Everything in Community, plus:</p>
            <ul className="space-y-4 mb-6 flex-1">
              {dfyLiteExtras.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-secondary/50 border border-border/30 rounded-xl p-5 mb-8">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary mb-3">Your Dedicated Outreach Expert</p>
              <p className="text-muted-foreground text-xs leading-[1.8]">
                DFY Lite members get direct access to a dedicated outreach specialist, the same expert behind TRN's own growth. This includes a personalised LinkedIn strategy, DM campaign design across LinkedIn and WhatsApp, and regular strategy reviews, all built specifically for real estate professionals.
              </p>
              <p className="text-muted-foreground/70 text-xs leading-[1.8] mt-3 italic">
                This is not a generic VA. It is a real estate-specific outreach strategy built around your goals, your markets, and your voice.
              </p>
            </div>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-primary-foreground font-semibold text-sm py-4 rounded-xl hover:opacity-90 transition-opacity tracking-[0.1em] uppercase"
            >
              Book a Call
            </a>
          </motion.div>

          {/* DFY Premium Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 md:p-10 flex flex-col relative"
          >
            <Crown className="w-7 h-7 text-muted-foreground/40 mb-6" strokeWidth={1.2} />
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                DFY Premium
              </h3>
              <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-primary border border-primary/30 rounded-full px-2.5 py-0.5">
                Coming Soon
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-[1.8] mb-8 flex-1">
              Full-service global expansion. Hands-on. Done entirely for you.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-border/50 text-foreground font-semibold text-sm py-4 rounded-xl hover:bg-secondary/50 transition-colors tracking-[0.1em] uppercase"
            >
              Register Interest
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
