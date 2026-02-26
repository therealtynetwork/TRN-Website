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
      "The commission is a bonus. The real value is being part of a serious international network that creates long-term referral opportunities. Within my first week, I received a genuine opportunity through another member. Not by luck, but because TRN was built to make that happen.",
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
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Members Testimonials
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Founding ambassadors sharing their perspective on TRN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card border-primary/20 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground/60 text-xs mt-10 tracking-wide"
        >
          Early feedback from founding ambassador members.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
