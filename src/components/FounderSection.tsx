import { motion } from "framer-motion";
import founderImg from "@/assets/jake-founder.jpg";

const FounderSection = () => (
  <section className="bg-[hsl(40,20%,96%)] text-[hsl(0,0%,8%)] py-28 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="aspect-[4/5] overflow-hidden rounded-xl"
      >
        <img src={founderImg} alt="Jake Engerer, Founder" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-[hsl(38,65%,40%)] mb-6">Hear From The Founder</p>
        <p className="font-serif text-2xl md:text-3xl leading-[1.5] mb-10 text-[hsl(0,0%,15%)]">
          "I spent years in real estate watching agents lose clients the moment they looked outside their local market. Not because they were not good at what they did. Because they had no trusted network beyond it. I built TRN to fix that. The agents who win long term put the relationship first and let the deals follow. That is the foundation everything here is built on."
        </p>
        <div>
          <p className="font-serif text-base font-semibold">Jake Engerer</p>
          <p className="text-xs text-[hsl(0,0%,40%)] tracking-[0.15em] uppercase mt-1">Founder, The Realty Network</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
