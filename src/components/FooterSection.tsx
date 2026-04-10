import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/20 px-6 py-16 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 font-serif text-lg font-bold text-foreground tracking-[0.05em] mb-6">
          <img src={logo} alt="TRN Logo" className="h-6 w-auto" />
          TRN<span className="text-primary">.</span>
        </Link>
        <p className="text-muted-foreground/60 text-sm mb-2">
          The Realty Network
        </p>
        <p className="text-muted-foreground/40 text-xs mb-1">
          therealty-network.com
        </p>
        <p className="text-muted-foreground/40 text-xs">
          Founded by Jake Engerer
        </p>
        <div className="border-t border-border/20 mt-10 pt-8">
          <p className="text-muted-foreground/30 text-[11px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} The Realty Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
