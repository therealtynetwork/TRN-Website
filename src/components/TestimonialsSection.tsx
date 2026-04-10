import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Dubai, UAE",
    quote: "Within my first month inside TRN, I received a referral from a member in Portugal that turned into a six-figure deal. That single introduction paid for years of membership.",
  },
  {
    name: "Carlos Mendes",
    location: "Lisbon, Portugal",
    quote: "TRN gave me access to markets I never would have reached on my own. I have closed three cross-border deals this year, all through introductions made inside the network.",
  },
  {
    name: "Emma Chen",
    location: "Sydney, Australia",
    quote: "The leads alone made this worthwhile, but what really changed things was the relationships. Having a trusted contact in every major market has completely transformed how I serve my clients.",
  },
  {
    name: "David Okoro",
    location: "Johannesburg, South Africa",
    quote: "I joined TRN as a solo agent in a competitive market. Within six months I had referral partners across three continents. The network is the real deal.",
  },
  {
    name: "Rachel Foster",
    location: "Miami, USA",
    quote: "The accountability inside TRN pushed me to levels I would not have reached alone. This is not just a network. It is a room full of people who genuinely want to see you win.",
  },
  {
    name: "James Hartley",
    location: "London, UK",
    quote: "I have been part of multiple real estate groups before. None of them come close to TRN. The quality of connections and the way deals actually move through the network is unlike anything else.",
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
            Member Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            What Members Are Saying
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
