import { motion } from "framer-motion";
import jakeFounder from "@/assets/jake-founder.jpg";

const FounderMessageSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            From the Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            A Word From Jake
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
              <img
                src={jakeFounder}
                alt="Jake Engerer, Founder of The Realty Network"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-primary/30 rounded-br-xl" />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-[1.9]">
              <p>
                I built TRN because I kept seeing the same problem. Great agents, working hard, but stuck inside one market with no real way to reach beyond it.
              </p>
              <p>
                I wanted to change that. I wanted to build something where one phone call, one introduction, one trusted connection could open a door that changes someone's year.
              </p>
              <p>
                TRN is that place. I am here personally. Not a team, not a chatbot. Me. And if you are inside this network, I am invested in making sure you win.
              </p>
            </div>

            <div className="mt-10">
              <div className="w-16 h-px bg-primary mb-6" />
              <p className="font-serif text-foreground font-semibold text-lg">
                Jake Engerer
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Founder of The Realty Network
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
