import { motion } from "framer-motion";

const wins = [
  { title: "Portugal x South Africa", desc: "A TRN member in Portugal had a client with a property to sell in South Africa. The right agent was found through the network. One introduction. Two countries. The deal moved." },
  { title: "Florida Investor Matched", desc: "A client needed a trusted agent in Florida. TRN made the connection the same day. Right person, right market, no friction." },
  { title: "Thailand in 24 Hours", desc: "A member needed a contact in a market TRN had no presence in. The right connection was made within 24 hours through the wider network." },
];

const MemberWins = () => (
  <section id="wins" className="bg-background py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6">Already In Motion</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
          Real Results. Already Happening.
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {wins.map((w, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-10"
          >
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-5">Win {i + 1}</p>
            <h3 className="font-serif text-xl text-foreground mb-5">{w.title}</h3>
            <p className="text-muted-foreground text-sm leading-[1.85]">{w.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MemberWins;
