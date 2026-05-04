import { motion } from "framer-motion";
import img1 from "@/assets/trn-speaker.jpeg";
import img2 from "@/assets/trn-conference.jpeg";
import img3 from "@/assets/trn-handshake.jpeg";
import img4 from "@/assets/trn-convo.jpeg";

const tiles = [
  { img: img1, title: "Extra Deal Flow", desc: "LinkedIn lead generation targeting people in your market who have recently moved, changed jobs or had a life event. Qualified conversations arriving to you every month." },
  { img: img2, title: "Global Network", desc: "Vetted real estate professionals across 13 countries. Send clients to Dubai, London, Miami, Malta, Greece and Cape Town. Receive inbound referrals in return." },
  { img: img3, title: "A to Z Client Service", desc: "Wealth management, currency exchange, visa and tax specialists, relocation support. You become the agent your clients call for everything." },
  { img: img4, title: "High Level Advisory", desc: "Direct access to Jake and a growing network of advisors. Real guidance, real connections, real accountability." },
];

const InsideTRN = () => (
  <section id="inside-trn" className="bg-background py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6">Inside TRN</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
          Everything that comes with membership.
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {tiles.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
              <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">{t.title}</h3>
            <p className="text-muted-foreground text-sm leading-[1.85]">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsideTRN;
