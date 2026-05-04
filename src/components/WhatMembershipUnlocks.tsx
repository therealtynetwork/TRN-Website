import { motion } from "framer-motion";

const BOOK = "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2";

const WhatMembershipUnlocks = () => (
  <section className="bg-[hsl(40,20%,96%)] text-[hsl(0,0%,8%)] py-28 px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-[10px] tracking-[0.4em] uppercase text-[hsl(38,65%,40%)] mb-8">Membership</p>
      <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.1] mb-10">
        Membership unlocks the world of TRN.
      </h2>
      <p className="text-base md:text-lg leading-[1.85] text-[hsl(0,0%,30%)] mb-12">
        The professionals inside TRN are generating deal flow from markets they have never worked in, connecting clients to the right people globally, and earning beyond the transaction itself. This is not a course or a directory. It is a network where real business gets done.
      </p>
      <a href={BOOK} target="_blank" rel="noopener noreferrer"
        className="inline-block bg-[hsl(0,0%,8%)] text-[hsl(40,20%,96%)] font-semibold px-12 py-4 rounded-lg text-xs tracking-[0.25em] uppercase hover:opacity-90 transition-opacity">
        Apply Now
      </a>
    </motion.div>
  </section>
);

export default WhatMembershipUnlocks;
