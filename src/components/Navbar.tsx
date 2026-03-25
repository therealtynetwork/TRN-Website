import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Infrastructure", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Advantages", href: "#advantages" },
  { label: "Membership", href: "#membership" },
  { label: "Investors", href: "#investor-access" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2.5 font-serif text-lg font-bold tracking-[0.05em] text-foreground">
          <img src={logo} alt="TRN Logo" className="h-6 w-auto" />
          TRN<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-[11px] font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity tracking-[0.15em] uppercase"
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-lg text-center hover:opacity-90 transition-opacity tracking-wider uppercase mt-2"
              >
                Apply
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
