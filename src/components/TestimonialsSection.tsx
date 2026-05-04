import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "As a founder growing my agency, I needed a way to attract serious recruits and a pipeline of genuine investor conversations. TRN delivered both through one system. The outreach runs in the background, the conversations come to me, and the network gives my team a global edge no local agency can offer.",
    name: "Joseph",
    role: "Agency Founder, TRN Member",
  },
  {
    quote: "Working with The Realty Network has been a genuinely good experience. I have been able to connect with international clients I would not have reached on my own, and I have even been using it to find the right people on LinkedIn for hiring which has worked really well. If you are in real estate and serious about growing beyond your local market, worth looking into.",
    name: "TRN Member",
    role: "",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-background py-28 px-6 border-t border-border/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6">Member Testimonials</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold">Straight From the Members</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-10"
          >
            <Quote className="w-6 h-6 text-primary mb-6" strokeWidth={1.2} />
            <p className="text-foreground/90 text-base leading-[1.85] mb-8">{t.quote}</p>
            <div className="border-t border-border/30 pt-5">
              <p className="font-serif text-foreground text-base font-semibold">{t.name}</p>
              {t.role && <p className="text-primary text-[10px] tracking-[0.25em] uppercase mt-1">{t.role}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
