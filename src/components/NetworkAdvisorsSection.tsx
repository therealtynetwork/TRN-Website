import kevinPhoto from "@/assets/kevin-cassar.jpg";

const expertise = [
  "Cross-Border Wealth",
  "Tax Residency",
  "Estate Planning",
  "Relocation",
  "Family Advisory",
];

const NetworkAdvisorsSection = () => {
  return (
    <section id="network-advisors" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-[11px] font-semibold tracking-[0.3em] uppercase mb-6">
            Network Advisors
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            The people behind the network.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Every TRN member gains access to a curated group of advisors and specialists, vetted personally and brought into the network because they raise the standard of service members can offer their own clients.
          </p>
        </div>

        {/* Featured advisor card */}
        <article className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-border/30">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-8 md:gap-12 p-8 md:p-12">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
                <img
                  src={kevinPhoto}
                  alt="Kevin Cassar, Wealth Management and Relocation Advisor"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="text-primary text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
                Wealth Management and Relocation Advisor
              </p>
              <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Kevin Cassar
              </h3>

              <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-relaxed font-light">
                <p>
                  Kevin Cassar has over 20 years of experience in cross-border wealth management, tax residency and estate planning, advising high-net-worth individuals and families across Malta, the United Kingdom and Europe. He has been authorised and regulated by the UK Financial Conduct Authority, the Malta Financial Services Authority and CySEC in Europe.
                </p>
                <p>
                  Today Kevin leads Reloka, Residency360 and Etic Co, three connected businesses serving internationally mobile clients across relocation, residency programmes and family advisory. As the official Wealth Management and Relocation Advisor for The Realty Network, Kevin is the trusted point of reference whenever a TRN member has a client requiring these services.
                </p>
              </div>

              {/* Expertise tags */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {expertise.map((tag, i) => (
                    <li key={tag} className="flex items-center gap-3">
                      <span className="text-primary text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase">
                        {tag}
                      </span>
                      {i < expertise.length - 1 && (
                        <span className="text-primary/40 text-[10px]">·</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-muted-foreground/70 text-sm italic font-light">
                Introductions made personally through Jake.
              </p>
            </div>
          </div>
        </article>

        {/* Closing line */}
        <p className="text-center font-serif italic text-primary text-lg md:text-xl mt-16 md:mt-20 max-w-2xl mx-auto leading-relaxed">
          More advisors are being added across the network. Every name here is by invitation only.
        </p>
      </div>
    </section>
  );
};

export default NetworkAdvisorsSection;