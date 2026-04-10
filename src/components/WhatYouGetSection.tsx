import { motion } from "framer-motion";

const cards = [
  {
    title: "Direct Access to the Founder",
    body: "Every member gets a personal 1 on 1 call with Jake Engerer. You talk through your goals, your market and exactly how TRN can work for you from day one. You are not joining a platform. You are joining someone who is personally invested in your growth.",
  },
  {
    title: "A Global Network That Actually Works",
    body: "Members across multiple countries, all active, all real. When your client asks about a market you do not cover, someone inside TRN does. You stop saying I do not know and start saying I have someone for that.",
  },
  {
    title: "Qualified Leads in Your Zone",
    body: "Every new member receives targeted leads built around their specific market and audience. Real names, real contact details, real opportunities. Not a generic list. Yours.",
  },
  {
    title: "Access to Expert Partners",
    body: "Wealth management, relocation, currency exchange, legal support and more. Through TRN you become the agent that has a trusted answer for everything. Your clients get a full service and you build a stronger relationship because of it.",
  },
  {
    title: "The TRN Property Portal",
    body: "A members-only property portal coming soon where you can list, collaborate and work on live deals with other agents globally. When investors come through, Jake connects them to you directly. No middlemen.",
  },
  {
    title: "Accountability From Someone Who Actually Cares",
    body: "This is not a WhatsApp group where people go quiet after a week. Jake is active and present. If you need a push on outreach, training or your personal goals as a realtor, you have someone in your corner.",
  },
];

const fullWidthCard = {
  title: "Done For You Outreach",
  body: "For members who do not have time for daily outreach. You tell us your target audience and we handle everything start to finish. Guaranteed reply rates. No time required from your end.",
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
            Infrastructure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            What You Get as a Member
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
