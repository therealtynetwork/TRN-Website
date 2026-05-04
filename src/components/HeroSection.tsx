import { motion } from "framer-motion";
import heroBg from "@/assets/trn-hero.jpeg";

const BOOK = "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2";

const HeroSection = () => (
  <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="TRN private members gathering" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
        className="text-[10px] tracking-[0.4em] uppercase text-primary mb-8"
      >
        The Realty Network
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-foreground mb-12 max-w-3xl mx-auto"
      >
        The network real estate professionals use to generate deal flow, access global markets and grow beyond their local zone.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
      >
        <a href={BOOK} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-semibold px-14 py-4 rounded-lg text-xs tracking-[0.25em] uppercase hover:opacity-90 transition-opacity">
          Apply Now
        </a>
      </motion.div>
    </div>
  </header>
);

export default HeroSection;
