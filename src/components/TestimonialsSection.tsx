import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ciaran Branigan",
    location: "Dubai, UAE",
    quote: "I had a client relocating to Thailand and needed someone on the ground I could actually trust. Within a day of posting in TRN, Jake connected me with a vetted agent out there who knew exactly what my client needed. Deal done, client happy, and I have a solid contact for life now. This is what a real network looks like.",
  },
  {
    name: "David Briceag",
    location: "Portugal",
    quote: "One of my clients owned a property in South Africa and honestly, before TRN I would have had no idea how to help them. But I reached out inside the network, got connected with Taylor in Johannesburg and we handled the whole thing together. My client could not believe I had someone there. That is the power of this.",
  },
  {
    name: "Taylor Davidson",
    location: "Johannesburg, South Africa",
    quote: "David reached out about a listing in my area through TRN and it turned into a proper working relationship. I got a quality lead from someone I had never met, on the other side of the world, and it just worked. No awkward introductions, no guessing. The trust is already built because everyone in here is vetted.",
  },
  {
    name: "Shayla Twit",
    location: "Florida, USA",
    quote: "There was an investor in the network looking to put money into Florida and Jake passed them directly to me. We are now actively working on multiple potential deals together. I never expected to get warm investor leads handed to me like that. TRN has genuinely changed how I think about where my next deal is coming from.",
  },
  {
    name: "Luca Caliendo",
    location: "Malta (Investor)",
    quote: "I am not an agent, I am an investor. I was living in London and wanted to relocate to Malta for tax reasons. I found TRN online, reached out, and Jake personally walked me through everything I needed. He connected me with the right people on the ground and my move was seamless. Best part is it cost me nothing. Cannot recommend this enough.",
  },
];

const TestimonialsSection = () => {
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
