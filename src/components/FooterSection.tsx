import { Instagram } from "lucide-react";
import img1 from "@/assets/trn-1.jpeg";
import img2 from "@/assets/trn-6.jpeg";
import img3 from "@/assets/trn-dinner.jpeg";
import img4 from "@/assets/trn-handshake.jpeg";
import img5 from "@/assets/trn-convo.jpeg";
import img6 from "@/assets/trn-run.jpeg";
import img7 from "@/assets/trn-speaker.jpeg";

const highlights = [img1, img2, img3, img4, img5, img6, img7];
const IG = "https://www.instagram.com/therealty.network/";

const FooterSection = () => (
  <footer className="bg-background border-t border-border/30 pt-20 pb-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 mb-14 justify-center scrollbar-none">
        {highlights.map((img, i) => (
          <a key={i} href={IG} target="_blank" rel="noopener noreferrer"
            className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors p-[2px]">
            <img src={img} alt={`TRN moment ${i + 1}`} className="w-full h-full object-cover rounded-full" />
          </a>
        ))}
      </div>
      <div className="text-center mb-12">
        <a href={IG} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-primary/40 text-primary px-8 py-3.5 rounded-lg text-xs font-semibold tracking-[0.25em] uppercase hover:bg-primary/10 transition-colors">
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </a>
      </div>
      <div className="text-center space-y-3 mb-12">
        <p className="font-serif text-2xl md:text-3xl text-foreground">THE REALTY NETWORK</p>
        <p className="text-primary text-[10px] tracking-[0.4em] uppercase">Global. Connected. Built to Last.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground mb-10">
        <a href="https://therealty-network.com" className="hover:text-primary transition-colors">therealty-network.com</a>
        <span className="hidden md:inline text-border">|</span>
        <a href="tel:+35699122628" className="hover:text-primary transition-colors">+356 99122628</a>
      </div>
      <div className="border-t border-border/20 pt-8 text-center">
        <p className="text-muted-foreground/40 text-[10px] tracking-[0.25em] uppercase">
          © {new Date().getFullYear()} The Realty Network. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
