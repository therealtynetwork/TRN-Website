
import { motion } from "framer-motion";
import { Check, Sparkles, Rocket, Crown, Users } from "lucide-react";

const packages = [
  {
    icon: Sparkles,
    name: "Entry",
    tagline: "Your Starting Point",
    description:
      "A monthly lead list of contacts in your area identified as more likely to be considering a property decision. You make the outreach in your own time and your own way.",
    features: [
      "Monthly lead list targeted to your zone",
      "Filtered around your criteria",
      "Full TRN network access included",
      "Outreach run by you, on your terms",
    ],
    cta: "Book a Call",
    href: "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2",
  },
  {
    icon: Rocket,
    name: "Growth",
    tagline: "Done For You",
    description:
      "Prospects in your market contacted on your behalf each month. You respond to the conversations that come back to you.",
    features: [
      "Outreach run on your behalf each month",
      "Done for you campaigns with a dedicated expert",
      "You handle the inbound conversations",
      "Full TRN network access included",
    ],
    cta: "Book a Call",
    href: "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2",
    featured: true,
  },
  {
    icon: Crown,
    name: "Scale",
    tagline: "Full Scale",
    description:
      "Higher volume outreach across your wider target market. Structured on a call and built around your capacity, your zones and your goals.",
    features: [
      "Higher volume outreach across your wider market",
      "Multi channel campaigns built around your zones",
      "Strategy structured directly with the founder",
      "Full TRN network access included",
    ],
    cta: "Book a Call",
    href: "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2",
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">Packages</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            How We Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            Every package includes full access to the TRN global network. Every lead you cannot service in your market is a referral opportunity. Every inbound from outside your zone is additional income. The pipeline runs in both directions.
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
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-card/50 backdrop-blur-sm border ${pkg.featured ? "border-primary/30" : "border-border/30"} rounded-2xl p-8 md:p-10 flex flex-col relative`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              )}
              <pkg.icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-5">{pkg.tagline}</p>
              <p className="text-muted-foreground text-sm leading-[1.8] mb-6">
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pkg.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold text-sm py-4 rounded-xl tracking-[0.1em] uppercase transition-opacity ${pkg.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border/50 text-foreground hover:bg-secondary/50"}`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Network Membership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-7 h-7 text-primary mx-auto mb-6" strokeWidth={1.2} />
            <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-5">
              Network Membership
            </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Done with leads. Want to stay inside TRN.
            </h3>
            <p className="text-muted-foreground text-base leading-[1.9] mb-8">
              After your first month, if you have the leads you need and do not want to continue the monthly list, you do not have to leave. The network stays open to you. Ongoing access to the global referral network, the full client service suite, and every deal opportunity that moves through the network. No leads delivered. No outreach. Just the room and everything in it.
            </p>
            <p className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase mb-8">
              Founding member access available to the first 50 members only
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary text-primary font-semibold text-sm py-4 px-10 rounded-xl tracking-[0.1em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Enquire About Network Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
