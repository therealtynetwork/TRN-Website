import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: 'hsl(38, 65%, 45%)' }}>
            The Story Behind TRN
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
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
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            </div>
            <div className="text-center">
              <p className="font-serif text-lg font-semibold text-neutral-900">Jake Engerer</p>
              <p className="text-neutral-500 text-sm mt-1">Founder, The Realty Network</p>
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
            <p className="text-neutral-900 leading-relaxed text-base md:text-lg">
              I got into real estate young, in Malta, a small island where everyone knows everyone. I learned fast, made mistakes faster, and over time built something real. More than 200 transactions. Relationships that meant something.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              But there was a pattern I couldn't ignore. Every time a client left Malta, relocated, invested abroad, started a new chapter somewhere else, the relationship just… stopped. Not because of bad service. Not because they didn't trust me. Because there was nowhere for that trust to go.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              I used to say "good luck" and mean it. But it frustrated me. I knew good operators in other markets. I knew those clients deserved better than starting from scratch. And I knew I was leaving value, and relationships, on the table.
            </p>

            <p className="text-neutral-900 leading-relaxed text-base md:text-lg italic">
              Real estate is global. But the systems we rely on to connect across borders are not.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              So I stopped accepting that. I started building structure around what was missing. A way for serious operators to collaborate across markets with protected territories, accountability, and shared standards. Not a directory. Not a WhatsApp group. An infrastructure layer.
            </p>

            <p className="text-neutral-900 leading-relaxed text-base md:text-lg font-medium">
              TRN exists so that relationships don't end when borders begin.
            </p>

            {/* Signature */}
            <div className="pt-10 border-t border-neutral-200">
              <p className="font-serif text-lg font-semibold text-neutral-900">Jake Engerer</p>
              <p className="text-neutral-500 text-sm mt-1">Founder, The Realty Network</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
