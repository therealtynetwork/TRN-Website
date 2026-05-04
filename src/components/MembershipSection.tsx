import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BOOK = "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2";

const tiers = [
  {
    name: "Member",
    features: [
      "Full network access",
      "Global referral flow",
      "A to Z client service suite",
      "Wealth management connections",
      "Currency exchange partner",
      "Visa and tax specialists",
      "Direct access to Jake Engerer",
    ],
    featured: false,
  },
  {
    name: "Done For You",
    features: [
      "Everything in Member",
      "LinkedIn outreach handled by a specialist",
      "500 targeted contacts per month in your market",
      "Minimum 30 percent connection rate",
      "Minimum 20 percent reply rate",
      "Minimum 30 qualified conversations per month",
    ],
    featured: true,
  },
];

const MembershipSection = () => (
  <section id="membership" className="bg-background py-28 px-6 border-t border-border/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6">Membership Tiers</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold">Two Ways In</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {tiers.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className={`rounded-xl p-10 border ${t.featured ? "bg-card/70 border-primary/40" : "bg-card/40 border-border/30"}`}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">{t.name}</h3>
            <ul className="space-y-4 mb-10">
              {t.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <a href={BOOK} target="_blank" rel="noopener noreferrer"
              className={`block text-center font-semibold py-4 rounded-lg text-xs tracking-[0.25em] uppercase transition-opacity ${t.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-primary/50 text-primary hover:bg-primary/10"}`}>
              Apply Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MembershipSection;
