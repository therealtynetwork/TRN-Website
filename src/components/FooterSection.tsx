import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border px-6 py-16 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
              <img src={logo} alt="TRN Logo" className="h-7 w-auto" />
              TRN<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-xs">
              The Realty Network — private global referral infrastructure for verified real estate operators.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground text-xs tracking-[0.2em] uppercase mb-3">Navigate</h4>
            <a href="#benefits" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Infrastructure</a>
            <a href="#how-it-works" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Process</a>
            <a href="#membership" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Membership</a>
            <a href="#faq" className="text-muted-foreground text-sm hover:text-foreground transition-colors">FAQ</a>
            <Link to="/apply" className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity">Apply for Access</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground text-xs tracking-[0.2em] uppercase mb-3">Contact</h4>
            <a href="mailto:hello@therealty-network.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">hello@therealty-network.com</a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">LinkedIn</a>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs tracking-wide">
            © {new Date().getFullYear()} The Realty Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
