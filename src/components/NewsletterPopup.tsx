import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SUBSCRIBED_KEY = "trn_newsletter_subscribed";

const NewsletterPopup = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Only hide for users who have actually subscribed
    if (localStorage.getItem(SUBSCRIBED_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    // Do NOT store anything — popup will reappear on next visit
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Submit to Beehiiv in background via hidden form
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://therealtynetwork.beehiiv.com/subscribe";
    form.target = "beehiiv_hidden";
    const input = document.createElement("input");
    input.name = "email";
    input.value = email;
    form.appendChild(input);

    // Create hidden iframe target so we don't navigate away
    let iframe = document.getElementById("beehiiv_hidden") as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = "beehiiv_hidden";
      iframe.id = "beehiiv_hidden";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Mark as subscribed so it never shows again
    localStorage.setItem(SUBSCRIBED_KEY, "1");
    setSubmitted(true);
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
            className="relative w-full max-w-lg bg-card border border-border/50 rounded-2xl p-10 md:p-12 shadow-2xl"
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
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-5">
                  TRN Insider
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-5">
                  Real estate is a people business.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Get honest insights and real conversations. No spam. Just value. Join free below.
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-9">
                  Get access to opportunities and industry conversations from inside The Realty Network.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 rounded-lg border border-border bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Join the TRN Newsletter
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="font-serif text-2xl text-foreground mb-3">Welcome to the network.</p>
                <p className="text-sm text-muted-foreground">Check your inbox to confirm your subscription.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
