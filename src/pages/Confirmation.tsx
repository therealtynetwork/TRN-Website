import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/jake-therealty-network/30min";
const REDIRECT_SECONDS = 5;

const Confirmation = () => {
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = CALENDLY_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md text-center"
      >
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
          Application Received
        </h1>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Thank you for applying to The Realty Network. We review every application personally
          and will be in touch within 48 hours.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Redirecting you to book a call in <span className="text-primary font-semibold">{countdown}s</span>...
        </p>

        <div className="space-y-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book a Free Call with the Founder
          </a>
          <Link
            to="/"
            className="block w-full border border-border text-foreground font-semibold py-3.5 rounded-lg hover:bg-secondary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default Confirmation;
