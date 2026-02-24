import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The Story Behind TRN
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why This Exists
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo + Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
              <img
                src={founderImg}
                alt="Jake Engerer, Founder of The Realty Network"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="text-center">
              <p className="font-serif text-lg font-semibold text-foreground">Jake Engerer</p>
              <p className="text-muted-foreground text-sm mt-1">Founder, The Realty Network</p>
            </div>
          </motion.div>

          {/* First-Person Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-8"
          >
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              I got into real estate young, in Malta, a small island where everyone knows everyone. I learned fast, made mistakes faster, and over time built something real. More than 200 transactions. Relationships that meant something.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              But there was a pattern I couldn't ignore. Every time a client left Malta, relocated, invested abroad, started a new chapter somewhere else, the relationship just… stopped. Not because of bad service. Not because they didn't trust me. Because there was nowhere for that trust to go.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I used to say "good luck" and mean it. But it frustrated me. I knew good operators in other markets. I knew those clients deserved better than starting from scratch. And I knew I was leaving value, and relationships, on the table.
            </p>

            <p className="text-foreground leading-relaxed text-base md:text-lg italic">
              Real estate is global. But the systems we rely on to connect across borders are not.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              So I stopped accepting that. I started building structure around what was missing. A way for serious operators to collaborate across markets with protected territories, accountability, and shared standards. Not a directory. Not a WhatsApp group. An infrastructure layer.
            </p>

            <p className="text-foreground leading-relaxed text-base md:text-lg font-medium">
              TRN exists so that relationships don't end when borders begin.
            </p>

            {/* Signature */}
            <div className="pt-10 border-t border-border/50">
              <p className="font-serif text-lg font-semibold text-foreground">Jake Engerer</p>
              <p className="text-muted-foreground text-sm mt-1">Founder, The Realty Network</p>
            </div>
          </motion.div>
        </div>

        {/* Founder Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 max-w-3xl mx-auto"
        >
          <div className="aspect-video rounded-xl border border-border/50 bg-card/30 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary/60 border-b-[10px] border-b-transparent ml-1" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                A message from the founder
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mt-1">
                Coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
