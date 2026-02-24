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
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-8"
        >
          Close More Deals.
          <br />
          <span className="text-gradient">Earn Beyond Your Market.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed font-sans"
        >
          An exclusive network of vetted real estate operators structured to protect
          relationships and compound cross-border opportunity.
        </motion.p>

        {/* Institutional line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xs tracking-[0.25em] uppercase text-primary/80 mb-14"
        >
          Territory-led · By invitation · Built for long-term operators
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
            Apply for Access
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
      </div>
    </header>
  );
};

export default HeroSection;
