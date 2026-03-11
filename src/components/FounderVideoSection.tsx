import { motion } from "framer-motion";

const FounderVideoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center mb-6">
            A message from the founder
          </p>
          <div className="aspect-video rounded-xl overflow-hidden border border-border/50 bg-card/30">
            <video
              controls
              preload="auto"
              className="w-full h-full object-cover"
              poster=""
              onLoadedMetadata={(e) => { const v = e.currentTarget; v.currentTime = 1; }}
            >
              <source src="/videos/founder-message.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://calendly.com/jake-therealty-network/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border text-foreground font-semibold px-10 py-4 rounded-lg text-base hover:bg-secondary transition-colors"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
