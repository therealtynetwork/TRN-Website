import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  country: z.string().trim().min(1, "Country is required").max(100),
  agency: z.string().trim().max(200),
  niche: z.string().trim().max(200),
  social: z.string().trim().max(300),
  whyJoin: z.string().trim().min(1, "Please tell us why you want to join").max(2000),
  biggestGoal: z.string().trim().min(1, "Please share your biggest goal").max(2000),
  referredBy: z.string().trim().max(200),
});

type FormData = z.infer<typeof applicationSchema>;

const Apply = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    country: "",
    agency: "",
    niche: "",
    social: "",
    whyJoin: "",
    biggestGoal: "",
    referredBy: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = applicationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-application", {
        body: result.data,
      });
      if (error) throw error;
      navigate("/apply/confirmation");
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ name: "Something went wrong. Please try again." });
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition";

  return (
    <main className="bg-background min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-xl font-bold text-foreground">
            TRN<span className="text-primary">.</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Apply to Join TRN
          </h1>
          <p className="text-muted-foreground">
            We review every application personally. Only serious, vetted agents are accepted.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {[
            { name: "name" as const, label: "Full Name", placeholder: "Jake Engerer", type: "text" },
            { name: "email" as const, label: "Email", placeholder: "jake@example.com", type: "email" },
            { name: "country" as const, label: "Country / Market", placeholder: "Malta", type: "text" },
            { name: "agency" as const, label: "Agency Name (optional)", placeholder: "Your agency", type: "text" },
            { name: "niche" as const, label: "Niche / Specialization (optional)", placeholder: "Luxury residential, commercial, etc.", type: "text" },
            { name: "social" as const, label: "Instagram or LinkedIn (optional)", placeholder: "@handle or URL", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
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
            <label className="block text-sm font-medium text-foreground mb-1.5">Were you recommended by someone? (optional)</label>
            <input
              type="text"
              name="referredBy"
              placeholder="Name of the person who referred you"
              value={form.referredBy}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {[
            { name: "whyJoin" as const, label: "Why do you want to join TRN?", placeholder: "Tell us about your goals and what drew you to the network..." },
            { name: "biggestGoal" as const, label: "What's your biggest goal in the next 12 months?", placeholder: "Expand internationally, increase referrals, etc." },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
              <textarea
                name={field.name}
                rows={4}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                className={inputClass + " resize-none"}
              />
              {errors[field.name] && (
                <p className="text-destructive text-xs mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </motion.form>
      </div>
    </main>
  );
};

export default Apply;
