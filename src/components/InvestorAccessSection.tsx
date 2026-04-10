import { motion } from "framer-motion";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2";

const InvestorAccessSection = () => {
  return (
    <section id="investor-access" className="relative py-20 md:py-28 overflow-hidden bg-secondary/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
          >
            For Private Investors
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Investor Access
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are looking to invest in global real estate or simply exploring your options, you get direct access to me personally. No cost. No obligation.
          </motion.p>
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/15 rounded-2xl p-10 md:p-12 mb-14"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-5">
            How It Works
          </h3>
          <p className="text-muted-foreground text-sm leading-[1.8] mb-8">
            As an investor, you deal directly with me. I learn what you are looking for, where you want to invest, and what matters most to you. From there, I connect you with the right vetted agent in the right market, but only with your permission and only on a project you are genuinely interested in. Until then, your contact stays with me.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "100% Free for Investors", desc: "There are no fees, no commissions from TRN, and no hidden costs. Ever." },
              { title: "Direct Access to the Founder", desc: "You speak with me personally. Not a sales team, not a chatbot." },
              { title: "Your Privacy Comes First", desc: "You will only be introduced to an agent with your explicit permission, on a project you choose." },
              { title: "Private 1-on-1 Service", desc: "For investors who prefer full discretion, I work with you individually and allocate the right agent based on your specific needs." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold px-12 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm tracking-[0.1em] uppercase"
          >
            Book a Free Call
          </a>
          <p className="text-muted-foreground/60 text-xs mt-5 max-w-md mx-auto leading-relaxed">
            Investor access is completely free. You will speak directly with the founder to discuss your goals and preferences before any introductions are made.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-4">
            Are you an agent? <a href="#membership" className="text-primary hover:underline">Join TRN</a> to receive investor leads in your territory.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default InvestorAccessSection;
