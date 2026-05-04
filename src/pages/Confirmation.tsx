import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/1O3neHl4OnGyiA9E1mj2";

const Confirmation = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = BOOKING_URL;
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
          Thank you for applying. Let's get a call booked so we can get to know each other.
        </p>
        <p className="text-primary text-sm font-medium mb-8">
          You'll be redirected to book your call in {countdown} second{countdown !== 1 ? "s" : ""}, or click below to book now.
        </p>
        <a
          href={BOOKING_URL}
          className="inline-block w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-[0.1em] uppercase"
        >
          Book A Call
        </a>
      </motion.div>
    </main>
  );
};

export default Confirmation;
