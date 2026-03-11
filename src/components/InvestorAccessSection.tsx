import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  country: z.string().trim().min(1, "Required").max(100),
  budget: z.string().trim().min(1, "Required").max(200),
  markets: z.string().trim().min(1, "Required").max(500),
  investmentType: z.string().trim().min(1, "Required").max(200),
  message: z.string().trim().max(2000),
});

type EnquiryData = z.infer<typeof enquirySchema>;

const InvestorAccessSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<EnquiryData>({
    name: "",
    email: "",
    country: "",
    budget: "",
    markets: "",
    investmentType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof EnquiryData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-investor-enquiry", {
        body: result.data,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ name: "Something went wrong. Please try again." });
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-secondary/80 border border-border/30 rounded-xl px-4 py-3.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300";

  return (
    <section id="investor-access" className="relative py-24 md:py-32 overflow-hidden bg-secondary/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-semibold tracking-[0.35em] uppercase mb-6"
          >
            Exclusive Investor Channel
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Investors Private Global Real Estate Access
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A private channel connecting serious global investors with vetted opportunities sourced directly through our international network of trusted agents.
          </motion.p>
        </div>

        {/* Agent Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/15 rounded-2xl p-10 md:p-12 mb-14"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-5">
            How It Works for TRN Members
          </h3>
          <p className="text-muted-foreground text-sm leading-[1.8] mb-8">
            Every TRN member can submit one featured property each month. Your submission is reviewed and then presented privately to our curated circle of qualified international investors. If an investor expresses interest, their contact details are passed directly to you so you can manage the conversation on your terms.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Property of the Month", desc: "Each member submits one featured opportunity per month for private distribution" },
              { title: "Curated Investor Introductions", desc: "Interested investors are connected to you directly, with full discretion" },
              { title: "No Cost, No Commission to TRN", desc: "All transactions happen between you and the investor with no network fees" },
              { title: "Equal Access for All Members", desc: "Every verified member has the same opportunity to present and receive interest" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works for investors */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-left max-w-2xl mx-auto space-y-6 text-muted-foreground text-sm leading-[1.8] mb-14"
        >
          <p>
            The Realty Network maintains a private, invitation only investor circle. Each month, verified members submit a single featured property to TRN. These opportunities are then reviewed and shared individually with qualified investors from our curated list.
          </p>
          <p className="text-foreground/80 font-medium">
            This is not a public marketplace or open listing platform.
          </p>
          <p>
            Every opportunity is handled with full discretion. If an investor expresses interest, TRN facilitates a private introduction by passing the investor's details directly to the member who submitted the property. From that point, the relationship is yours.
          </p>

          <div className="pt-4">
            <p className="text-foreground/60 text-[10px] tracking-[0.2em] uppercase mb-4">
              How the process works:
            </p>
            <ul className="space-y-3">
              {[
                "Members submit their Property of the Month to TRN",
                "TRN reviews and distributes each opportunity privately to relevant investors",
                "Interested investors are introduced directly to the submitting member",
                "All communication and transactions take place between the member and the investor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="pt-2">
            TRN acts as infrastructure and connector, not broker, advisor, or intermediary.
          </p>
          <p>Investor participation is free. There are no fees or commissions charged by the network.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-primary-foreground font-semibold px-12 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm tracking-[0.1em] uppercase"
          >
            Request Private Investor Access
          </button>
          <p className="text-muted-foreground/50 text-xs mt-5">
            Are you an agent? <a href="#membership" className="text-primary hover:underline">Join TRN</a> to receive investor leads in your territory.
          </p>
        </motion.div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-md px-4"
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              className="bg-card border border-border/30 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-10"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Request Received
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Thank you. We will review your enquiry and be in touch if there is alignment.
                  </p>
                  <a
                    href="https://calendly.com/jake-therealty-network/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm mb-4"
                  >
                    Book a Call with the Founder
                  </a>
                  <br />
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors mt-2"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      Request Private Access
                    </h3>
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-muted-foreground hover:text-foreground text-lg transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: "name" as const, label: "Full Name", placeholder: "Your full name", type: "text" },
                      { name: "email" as const, label: "Email", placeholder: "you@example.com", type: "email" },
                      { name: "country" as const, label: "Country of Residence", placeholder: "e.g. Malta", type: "text" },
                      { name: "budget" as const, label: "Investment Budget Range", placeholder: "e.g. €500k – €2M", type: "text" },
                      { name: "markets" as const, label: "Markets of Interest", placeholder: "e.g. Spain, Portugal, UAE", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] font-medium text-foreground/60 uppercase tracking-[0.2em] mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name]}
                          onChange={handleChange}
                          className={inputClass}
                        />
                        {errors[field.name] && (
                          <p className="text-destructive text-xs mt-1">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}

                    <div>
                      <label className="block text-[10px] font-medium text-foreground/60 uppercase tracking-[0.2em] mb-2">
                        Type of Investment
                      </label>
                      <select
                        name="investmentType"
                        value={form.investmentType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Development">Development</option>
                        <option value="Mixed">Mixed</option>
                      </select>
                      {errors.investmentType && (
                        <p className="text-destructive text-xs mt-1">{errors.investmentType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-medium text-foreground/60 uppercase tracking-[0.2em] mb-2">
                        Short Message <span className="text-muted-foreground/50">(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Anything else you'd like us to know..."
                        value={form.message}
                        onChange={handleChange}
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 text-sm tracking-[0.1em] uppercase"
                    >
                      {submitting ? "Submitting..." : "Submit Enquiry"}
                    </button>

                    <p className="text-muted-foreground/40 text-[11px] leading-relaxed text-center pt-2">
                      TRN does not provide financial advice or act as a broker. All transactions
                      occur directly between investor and local agent.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InvestorAccessSection;
