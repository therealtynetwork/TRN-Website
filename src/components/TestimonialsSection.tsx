import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ciaran Branigan",
    location: "Dubai, UAE",
    quote: "Needed information regarding property in Thailand. Posted in TRN, Jake connected me with a vetted agent within a day. Sorted. Now I have a go-to person in Thailand whenever I need one.",
  },
  {
    name: "David Briceag",
    location: "Portugal",
    quote: "Previously I would have never thought I would be able to help my client in Portugal but now through TRN I was able to connect my client to a vetted agent in South Africa. My client could not believe I had someone out there.",
  },
  {
    name: "Taylor Davidson",
    location: "Johannesburg, South Africa",
    quote: "David messaged me through TRN about a listing in my area. Never met the guy. Turned into a proper working relationship. The trust is already there because everyone in here has been vetted.",
  },
  {
    name: "Shayla Twit",
    location: "Florida, USA",
    quote: "Jake passed me an investor from inside the network looking to put money into Florida. We are now working on multiple deals together.",
  },
  {
    name: "Luca Caliendo",
    location: "Malta",
    quote: "I am not an agent. I was relocating from London to Malta and needed proper advice on tax, housing, everything. Jake took the time to connect me with the right people on the ground. Made the whole move stress free.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-5xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Member Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            Straight From the Members
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="glass-card p-8"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-[1.9] mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-foreground font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-primary text-xs mt-0.5">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
