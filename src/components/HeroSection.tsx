import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const credibilityChips = [
  "7 Countries Live",
  "200+ Deals Closed",
  "Founder-Led",
  "Verified Network",
];

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
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-28 pb-20">
        {/* Credibility chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {credibilityChips.map((chip) => (
            <span
              key={chip}
              className="text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
        >
          Never Lose a Client
          <br />
          <span className="text-gradient">to Geography</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          A vetted network of elite agents across 7+ countries. Refer with confidence,
          earn on every deal, and keep your clients for life.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/apply"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Apply to Join
          </Link>
          <a
            href="#how-it-works"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
