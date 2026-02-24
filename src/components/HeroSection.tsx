import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury real estate property"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-32 pb-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-10"
        >
          For Real Estate Operators
          <br />
          <span className="text-gradient">Who Think Beyond Borders.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-sans"
        >
          A private global referral infrastructure connecting vetted operators across strategically allocated territories.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/apply"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Apply for Membership
          </Link>
          <a
            href="https://calendly.com/jake-therealty-network/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            Book a Free Call
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xs text-muted-foreground/60 tracking-widest uppercase mt-10"
        >
          Territories are limited and allocated with intention.
        </motion.p>
      </div>
    </header>
  );
};

export default HeroSection;
