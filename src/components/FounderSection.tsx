import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">From the Founder</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Hear from Jake
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          {/* Photo */}
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

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-foreground leading-relaxed">
              I'm Jake Engerer — 23, based in Malta, with over 200 deals closed across multiple markets.
              I started in real estate young, and learned one painful lesson early:
            </p>
            <p className="text-primary font-serif text-xl md:text-2xl italic leading-snug">
              "Every time a client moved to a market I didn't serve, I lost them. Not because I failed — 
              because I had no one to send them to."
            </p>
            <p className="text-foreground leading-relaxed">
              So I built what I wish had existed: a vetted, global network of agents who operate with the same 
              standards I hold. TRN isn't about collecting members — it's about connecting the right people, 
              protecting trust, and making sure no opportunity is ever wasted.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Our standard:</strong> Every member is verified. Every referral is tracked. 
                Every market is protected. This is how real estate should work globally.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
