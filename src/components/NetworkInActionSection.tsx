import { motion } from "framer-motion";

const stories = [
  {
    location: "Portugal to South Africa",
    description:
      "A TRN agent in Portugal passed a live listing to a member in South Africa. The deal moved. No cold calls. No middlemen. Just the right introduction at the right time.",
  },
  {
    location: "Florida Investment Deal",
    description:
      "An active investor was connected with a TRN member in Florida through the network. One introduction. One live opportunity.",
  },
  {
    location: "Dubai to the Philippines",
    description:
      "A TRN member in Dubai needed a trusted agent in the Philippines. The connection was made directly through the network. Cross-continent, same day.",
  },
  {
    location: "Full Relocation Support",
    description:
      "An investor relocating internationally was connected through TRN with the right agents, legal contacts and external services needed. Everything sorted through the network, start to finish.",
  },
];

const NetworkInActionSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-4xl mx-auto border-t border-primary/20 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
            Proof
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
            The Network in Action
          </h2>
        </motion.div>

        <div className="space-y-0">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 border-b border-border/30 last:border-0"
            >
              <h3 className="font-serif text-lg font-semibold text-primary md:w-56 shrink-0">
                {story.location}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.9] flex-1">
                {story.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkInActionSection;
