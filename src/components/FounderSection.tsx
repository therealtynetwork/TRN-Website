import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">Founder</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Jake Engerer
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={founderImg}
                alt="Jake Engerer, Founder of The Realty Network"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              After closing over 200 real estate transactions in Malta, Jake identified a structural gap in international referral systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Realty Network was built to introduce territory leadership and structured cross-border collaboration into global real estate relationships.
            </p>
            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Principle:</strong> Every member verified. Every referral tracked. Every territory protected.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founder Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="aspect-video rounded-xl border border-border/50 bg-card/30 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary/60 border-b-[10px] border-b-transparent ml-1" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">A message from the founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
