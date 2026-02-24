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
          Earn Beyond
          <br />
          <span className="text-gradient">Your Market.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-sans"
        >
          TRN is a private global referral infrastructure built to ensure relationships compound, not reset, when clients move across borders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <Link
            to="/apply"
            className="bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            Apply for Membership
          </Link>
          <p className="text-xs text-muted-foreground/50 tracking-[0.2em] uppercase">
            Built for long-term operators.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
