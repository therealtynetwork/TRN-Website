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
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            A Letter from the Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Hear from the Founder
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
            className="md:col-span-3 space-y-7"
          >
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              I started in real estate in Malta — young, hungry, and learning everything the hard way. Over the years, I closed more than 200 transactions, and somewhere along the way, I started to understand something that most agents don't talk about.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I used to wish clients luck when they left Malta. A handshake, a good word, and that was it. The relationship just… ended. Not because of bad service. Not because of price. Because they were moving — to another country, another market, another life. And I had no structured way to stay connected to that opportunity, or to connect them with someone I actually trusted on the other side.
            </p>

            <p className="text-foreground leading-relaxed text-base md:text-lg italic">
              I realised relationships shouldn't end at borders.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Real estate is global. But the way we refer clients is still informal, inconsistent, and largely built on chance. A name passed in a WhatsApp group. A favour with no follow-through. No accountability. No territory. No system.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Instead of accepting that, I decided to build structure around it. A way for verified operators to collaborate across borders — with protected territories, tracked referrals, and real accountability.
            </p>

            <p className="text-foreground leading-relaxed text-base md:text-lg">
              Real estate is built on trust. Trust needs infrastructure. Not listings. Not leads. Relationships. And they deserve a system — not just good intentions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              That's why I built The Realty Network. Not as a community. Not as a directory. As a private infrastructure layer for serious operators who want to earn beyond their own borders — with the structure and standards to make it sustainable.
            </p>

            {/* Signature */}
            <div className="pt-8 border-t border-border/50">
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
          className="mt-24 max-w-3xl mx-auto"
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
