import { motion } from "framer-motion";
import { Globe, Target, Mic, Repeat, MapPin, BarChart3, Send, Briefcase, Coins } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Member Introductions",
    description: "Direct access to vetted realtors, investors and operators across key global markets. The right people, in the right markets, at the right time.",
  },
  {
    icon: Target,
    title: "100 Targeted Leads",
    description: "In your onboarding call, we identify your target market. We then deliver 100 leads matching your exact criteria.",
  },
  {
    icon: Mic,
    title: "Monthly Webinar + Outreach Expert",
    description: "Live sessions on market insights and deal flow, co-hosted with our outreach specialist. All members benefit from their knowledge regardless of tier.",
  },
  {
    icon: Repeat,
    title: "FX Partner Access",
    description: "Exclusive referral access to a trusted money exchange partner. Earn on your client transfers.",
  },
  {
    icon: MapPin,
    title: "European Tax and Relocation Expert",
    description: "Direct access to a specialist for clients exploring European tax residency or relocation options.",
  },
  {
    icon: BarChart3,
    title: "Monthly Property Collaboration",
    description: "One featured listing slot per month to advertise and co-market within the TRN network.",
    badge: "Coming Soon",
  },
  {
    icon: Send,
    title: "Done For You Outreach and Lead Generation",
    description: "A system that puts you in front of people in your market who are in a position to make a property decision. We handle the outreach and the conversations come to you.",
  },
  {
    icon: Briefcase,
    title: "Licensed Wealth Management",
    description: "Direct access to licensed wealth managers for you and your clients. Every referral you make earns you a commission.",
  },
  {
    icon: Coins,
    title: "Currency Exchange",
    description: "Your clients buying property abroad routinely lose money through standard bank transfers. TRN connects them to a preferred currency partner that closes that gap. Another referral, another commission for you.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="benefits" className="py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-24"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">Infrastructure</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What the Network Provides
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            The tools and structure behind serious cross-border collaboration between members and qualified investors.
          </p>
          <div className="mt-8 inline-block border border-primary/30 rounded-full px-5 py-2">
            <p className="text-primary text-[10px] font-semibold tracking-[0.25em] uppercase">
              Consultation available for investors and private clients. Specialist services available on request.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-10 md:p-12 hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <f.icon className="w-8 h-8 text-primary mb-8" strokeWidth={1.2} />
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {f.title}
                  </h3>
                  {"badge" in f && f.badge && (
                    <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-primary border border-primary/30 rounded-full px-2.5 py-0.5">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
