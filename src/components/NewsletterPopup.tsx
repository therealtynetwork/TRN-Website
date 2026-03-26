import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DISMISSED_KEY = "trn_newsletter_dismissed";

const NewsletterPopup = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Open Beehiiv subscribe in background and show success
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://therealtynetwork.beehiiv.com/subscribe";
    form.target = "_blank";
    const input = document.createElement("input");
    input.name = "email";
    input.value = email;
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
    setTimeout(dismiss, 2500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && dismiss()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-muted-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                  TRN Newsletter
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-4">
                  Real estate is a people business.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Get honest insights and real conversations. No spam. Just value. Join free below.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Join the TRN Newsletter
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="font-serif text-xl text-foreground mb-2">Welcome to the network.</p>
                <p className="text-sm text-muted-foreground">Check your inbox to confirm.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
