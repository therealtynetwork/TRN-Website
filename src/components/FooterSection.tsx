import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/20 px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-serif text-lg font-bold text-foreground tracking-[0.05em]">
              <img src={logo} alt="TRN Logo" className="h-6 w-auto" />
              TRN<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground/60 text-sm mt-6 leading-[1.8] max-w-xs">
              The Realty Network. Private global referral infrastructure for verified real estate operators.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-[10px] tracking-[0.3em] uppercase mb-4">Navigate</h4>
            <a href="#benefits" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">Infrastructure</a>
            <a href="#how-it-works" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">Process</a>
            <a href="#membership" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">Membership</a>
            <a href="#faq" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">FAQ</a>
            <a href="https://api.leadconnectorhq.com/widget/form/MVHwB9FzUKRmU4crVP2m" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity mt-2">Apply for Access</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-[10px] tracking-[0.3em] uppercase mb-4">Contact</h4>
            <a href="mailto:jake@therealty-network.com" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">jake@therealty-network.com</a>
            <a href="https://www.linkedin.com/in/jake-engerer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">LinkedIn</a>
            <a href="https://www.instagram.com/therealtynetwork_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-300">Instagram</a>
            <div className="flex gap-6 mt-6">
              <a href="#" className="text-muted-foreground/40 text-xs hover:text-foreground transition-colors duration-300 tracking-wider">Terms</a>
              <a href="#" className="text-muted-foreground/40 text-xs hover:text-foreground transition-colors duration-300 tracking-wider">Privacy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-16 pt-10 text-center">
          <p className="text-muted-foreground/30 text-[11px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} The Realty Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
