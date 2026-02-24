import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Confirmation = () => {
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
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for applying to The Realty Network. We review every application personally
          and will be in touch within 48 hours.
        </p>

        <div className="space-y-4">
          <a
            href="#"
            className="block w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book an Intro Call
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
