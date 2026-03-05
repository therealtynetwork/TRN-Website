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
          <div className="aspect-video rounded-xl border border-border/50 bg-card/30 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary/60 border-b-[10px] border-b-transparent ml-1" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                A message from the founder
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mt-1">
                Coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
