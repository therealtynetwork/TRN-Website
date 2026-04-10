import { motion } from "framer-motion";

const cards = [
  {
    title: "A Global Network That Actually Works",
    body: "Members across multiple countries, all active, all real. When a client asks about a market that is not covered locally, someone inside TRN does. The network turns 'I do not know' into 'I have someone for that.'",
  },
  {
    title: "Qualified Leads in Your Zone",
    body: "Every new member receives targeted leads built around their specific market and audience. Real names, real contact details, real opportunities. Not a generic list. Tailored and delivered.",
  },
  {
    title: "Personal Onboarding Call",
    body: "Every member starts with a personal call to talk through goals, market positioning and exactly how TRN can deliver value from day one. No guesswork. A clear plan from the start.",
  },
  {
    title: "Access to Expert Partners",
    body: "Wealth management, relocation, currency exchange, legal support and more. Through TRN, members become the agent with a trusted answer for everything. Full service for clients. Stronger relationships because of it.",
  },
  {
    title: "The TRN Property Portal",
    body: "A members-only property portal coming soon where agents can list, collaborate and work on live deals globally. When investors come through, they get connected to the right member directly. No middlemen.",
  },
  {
    title: "Real Accountability",
    body: "This is not a group where people go quiet after a week. TRN is built on active participation, regular check-ins and genuine support. Members push each other to grow, stay consistent and close more.",
  },
];

const fullWidthCard = {
  title: "Done For You Outreach",
  body: "For members who do not have time for daily outreach. Share the target audience and the team handles everything start to finish. Guaranteed reply rates. No time required.",
};

const WhatYouGetSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="max-w-5xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Inside the Network
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            Everything That Comes With Membership
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="glass-card p-8 md:p-10"
            >
              <h3 className="font-serif text-lg md:text-xl font-semibold text-primary mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.9]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card p-8 md:p-10 border-primary/30"
        >
          <h3 className="font-serif text-lg md:text-xl font-semibold text-primary mb-4">
            {fullWidthCard.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-[1.9] max-w-3xl">
            {fullWidthCard.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
