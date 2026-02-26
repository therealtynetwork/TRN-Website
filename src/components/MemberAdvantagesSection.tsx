import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const MemberAdvantagesSection = () => {
  return (
    <section id="advantages" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <Separator className="bg-border/50 mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Advantages
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Member Advantages
          </h2>
        </motion.div>

        {/* Founding Phase Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <Badge
            variant="outline"
            className="border-primary/40 text-primary text-xs tracking-wider uppercase px-4 py-1.5 mb-6"
          >
            Founding Phase Pricing
          </Badge>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Founding Phase Access
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            As the community grows and infrastructure strengthens, membership pricing will increase accordingly. Founding members secure long-term access at the earliest rate.
          </p>
        </motion.div>

        {/* The Practical Reality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            The Practical Reality
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            In real estate, one meaningful international connection can change a year.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            If a member closes just one additional deal annually, or passes on a single referral that results in a completed transaction, the upside already outweighs the membership investment.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Everything beyond that becomes compounding opportunity.
          </p>
        </motion.div>

        {/* More Than Referrals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            More Than Referrals
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            Beyond transactions, TRN is being built as a long-term global infrastructure:
          </p>
          <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 shrink-0">•</span>
              Direct access to trusted agents in key markets
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 shrink-0">•</span>
              Ongoing speaker sessions and shared expertise
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 shrink-0">•</span>
              A private investor network distributing opportunities
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 shrink-0">•</span>
              Strategic relationships that expand over years, not weeks
            </li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed mt-5">
            This is about building positioning, leverage, and optionality across borders.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground/70 text-sm italic tracking-wide mb-20"
        >
          Serious agents understand the value of being early.
        </motion.p>

        <Separator className="bg-border/50" />
      </div>
    </section>
  );
};

export default MemberAdvantagesSection;
