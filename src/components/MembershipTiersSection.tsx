import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Member",
    subtitle: "For agents ready to grow globally",
    requirements: [
      "Active real estate professional",
      "Application and short interview",
    ],
    benefits: [
      "Access to the private global network",
      "Targeted leads in your specific zone",
      "Private community and group discussions",
      "Access to expert partners (legal, relocation, wealth)",
      "Monthly network calls and market insights",
      "Personal onboarding call with the founder",
    ],
    featured: false,
  },
  {
    name: "Member+",
    subtitle: "For serious operators who want more",
    requirements: [
      "Proven track record in real estate",
      "Interview with the founder",
      "Committed to active participation",
    ],
    benefits: [
      "Everything in Member, plus:",
      "Done-for-you outreach to your target audience",
      "Priority access to investor introductions",
      "Early access to the TRN Property Portal",
      "VIP access to future in-person events",
      "Direct advisory support from the founder",
    ],
    featured: true,
  },
];

const MembershipTiersSection = () => {
  return (
    <section id="membership" className="section-padding">
      <div className="max-w-5xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Membership Tiers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            Choose Your Level
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`glass-card p-8 md:p-10 ${tier.featured ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-1">
                {tier.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                {tier.subtitle}
              </p>

              <div className="mb-8">
                <p className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Requirements
                </p>
                <ul className="space-y-2.5">
                  {tier.requirements.map((req, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Benefits
                </p>
                <ul className="space-y-2.5">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-center font-semibold px-8 py-3.5 rounded-lg text-sm tracking-[0.1em] uppercase transition-opacity hover:opacity-90 ${
                  tier.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/40 text-primary"
                }`}
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiersSection;
