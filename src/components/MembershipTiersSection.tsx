import { motion } from "framer-motion";

const tiers = [
  {
    name: "Member",
    subtitle: "For agents ready to grow globally",
    description:
      "You get access to a private global network of vetted real estate professionals, with leads directed to your specific zone and market. From your first day you are personally onboarded by the founder, connected to expert partners across legal, relocation and wealth, and plugged into monthly calls where real insight is shared. This is not a directory. It is a room you are invited into.",
    featured: false,
  },
  {
    name: "Member+",
    subtitle: "For serious operators who want more",
    description:
      "Everything in Member, taken further. You receive done-for-you outreach to your exact target audience, priority introductions to active investors, and early access to the TRN Property Portal before it opens to anyone else. You are first in line for in-person events and you work directly with the founder on your growth. This tier is for the people who do not just want to be in the room. They want to run it.",
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
            Membership
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

              <p className="text-muted-foreground text-sm leading-[1.9] mb-10">
                {tier.description}
              </p>

              <a
                href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
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
