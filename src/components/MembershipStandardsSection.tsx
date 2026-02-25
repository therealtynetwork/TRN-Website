import { motion } from "framer-motion";

const standards = [
  {
    number: "01",
    title: "Market Presence or Clear Vision",
    description: "Whether you are an established operator or an ambitious newcomer with a clear plan, we welcome professionals who are serious about building something meaningful in real estate.",
  },
  {
    number: "02",
    title: "Active or Growing Deal Flow",
    description: "You are either managing a consistent pipeline or actively working toward one. What matters is momentum and commitment, not just history.",
  },
  {
    number: "03",
    title: "Long-Term Mindset",
    description: "Commitment to building lasting relationships and compounding value over time. This network is for those who think beyond the next transaction.",
  },
  {
    number: "04",
    title: "Professional Standards and Alignment",
    description: "Willingness to operate with integrity, follow structured referral protocols, and uphold the communication and accountability standards of the network.",
  },
];

const MembershipStandardsSection = () => {
  return (
    <section id="standards" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Requirements
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Membership Standards
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We welcome experienced operators and driven newcomers alike. Every applicant is evaluated on four core principles.
          </p>
        </motion.div>

        <div className="space-y-6">
          {standards.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-8 items-start"
            >
              <span className="text-primary font-serif text-3xl md:text-4xl font-bold shrink-0 opacity-50 w-12">
                {s.number}
              </span>
              <div className="border-l border-border/50 pl-8 pb-2">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipStandardsSection;
