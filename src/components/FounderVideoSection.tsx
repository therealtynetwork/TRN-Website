import { motion } from "framer-motion";

const FounderVideoSection = () => {
  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 text-center mb-6">
            A message from the founder
          </p>
          <div className="aspect-video rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster=""
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
              className="inline-block border border-neutral-300 text-neutral-900 font-semibold px-10 py-4 rounded-lg text-base hover:bg-neutral-100 transition-colors"
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
