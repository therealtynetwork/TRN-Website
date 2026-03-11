import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderVideoSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground/60 text-center mb-8">
            A message from the founder
          </p>
          <div className="aspect-video rounded-2xl overflow-hidden border border-border/20 bg-card/20">
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
          <div className="text-center mt-10">
            <a
              href="https://calendly.com/jake-therealty-network/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border/40 text-foreground font-semibold px-12 py-4 rounded-xl text-sm tracking-[0.1em] uppercase hover:bg-secondary/50 transition-colors duration-300"
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
