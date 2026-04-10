import { motion } from "framer-motion";
import jakeFounder from "@/assets/jake-founder.jpg";

const FounderMessageSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#C9A84C] text-[10px] font-semibold tracking-[0.35em] uppercase mb-6 text-center"
        >
          Hear from the Founder
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-xl aspect-[3/4]">
              <img
                src={jakeFounder}
                alt="Jake Engerer, Founder of The Realty Network"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5 text-neutral-600 text-base md:text-lg leading-[1.9] font-sans">
              <p className="text-neutral-800 font-serif text-xl md:text-2xl leading-[1.6] font-medium">
                "When I started in real estate, the hardest part was never the work. It was the isolation. Great agents everywhere, grinding hard, but stuck inside one market with no real way to reach beyond it.
              </p>
              <p>
                So I set out to build something different. A network where one phone call, one introduction, one trusted connection could open a door that changes someone's entire year.
              </p>
              <p>
                The longer I have been in this industry, the more clear it has become. The agents who win are not always the best at selling. They are the best connected. The ones with the right person in the right market at the right time.
              </p>
              <p>
                That is what TRN exists to create. Not a platform. Not a directory. A real network of professionals who back each other, refer to each other, and grow together across borders.
              </p>
              <p className="text-neutral-800 font-serif text-xl md:text-2xl leading-[1.6] font-medium">
                Every member who joins now is helping build the foundation of something much bigger than a network."
              </p>
            </div>

            <div className="mt-10">
              <p className="font-serif text-neutral-900 font-semibold text-lg">
                Jake Engerer
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                Founder, The Realty Network
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessageSection;
