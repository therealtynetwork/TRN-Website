import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border px-6 py-14 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-xl font-bold text-foreground">
              TRN<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xs">
              The Realty Network — a vetted global network of elite real estate agents.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground text-sm mb-2">Quick Links</h4>
            <a href="#benefits" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Benefits</a>
            <a href="#how-it-works" className="text-muted-foreground text-sm hover:text-foreground transition-colors">How It Works</a>
            <a href="#membership" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Membership</a>
            <a href="#faq" className="text-muted-foreground text-sm hover:text-foreground transition-colors">FAQ</a>
            <Link to="/apply" className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity">Apply to Join</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-foreground text-sm mb-2">Connect</h4>
            <a href="mailto:hello@therealty-network.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">hello@therealty-network.com</a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">LinkedIn</a>
            <div className="flex gap-4 mt-3">
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} The Realty Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
