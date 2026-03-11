import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nick Nahid",
    location: "United States",
    quote:
      "There's real potential here for agents who want to build beyond their local brokerage. If this grows intentionally, the referral upside and long-term positioning could be powerful. This is something serious agents should consider.",
  },
  {
    name: "Taylor Davidson",
    location: "South Africa",
    quote:
      "The real value is being part of a serious international network that creates long-term referral opportunities. Within my first week, I received a genuine opportunity through another member. Not by luck, but because TRN was built to make that happen.",
  },
  {
    name: "David Briceag",
    location: "Portugal",
    quote:
      "Positioning and personal branding will be key. This is a long-term opportunity for ambitious agents who want to grow internationally.",
  },
  {
    name: "Stefano Barzagna",
    location: "Italy",
    quote:
      "In real estate, too many agencies compete by trying to take clients. This project is different. It's built on trust, quality service, and mutual support. For those who believe in long-term relationships, this is the right direction.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Members Testimonials
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base">
            Founding ambassadors sharing their perspective on TRN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-10 md:p-12 flex flex-col justify-between hover:border-primary/25 transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/85 text-sm leading-[1.9] italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-border/30">
                <p className="text-foreground font-semibold text-sm tracking-wide">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs mt-1 tracking-wider">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground/40 text-[11px] mt-12 tracking-[0.2em] uppercase"
        >
          Early feedback from founding ambassador members.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
