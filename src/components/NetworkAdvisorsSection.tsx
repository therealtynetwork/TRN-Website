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
            Every TRN member gains access to a curated group of advisors and specialists, vetted personally and brought in because they raise the standard of service members can offer their own clients.
          </p>
        </div>

        {/* Featured advisor card */}
        <article className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-border/30 max-w-3xl mx-auto">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-primary text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              Wealth Management and Relocation Advisor
            </p>
            <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Senior Advisor
            </h3>

            <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-relaxed font-light">
              <p>
                Over 20 years of experience in cross-border wealth management, tax residency and estate planning, advising high-net-worth individuals and families across Malta, the United Kingdom and Europe. Authorised and regulated by the UK Financial Conduct Authority, the Malta Financial Services Authority and CySEC in Europe.
              </p>
              <p>
                Heads three connected businesses serving internationally mobile clients across relocation, residency programmes and family advisory. The trusted point of reference whenever a TRN member has a client requiring these services.
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
              Introductions made personally and only through TRN.
            </p>
          </div>
        </article>

        {/* Done For You service card */}
        <article className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-border/30 max-w-3xl mx-auto mt-8 md:mt-10">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-primary text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              Done For You Outreach and Lead Generation
            </p>
            <h3 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Pipeline, handled.
            </h3>
            <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-relaxed font-light">
              <p>
                Each month we identify people in your market who have recently experienced a meaningful life change, a new role, a relocation, a shift in circumstances, the kind of change that almost always leads to a property decision. We put your name in front of them and run the outreach on your behalf.
              </p>
              <p>
                You respond to the conversations that come back to you. The system runs in the background while you stay focused on closing. Structured around your zone, your criteria and your capacity.
              </p>
            </div>
            <p className="mt-8 text-muted-foreground/70 text-sm italic font-light">
              Available exclusively to TRN members.
            </p>
          </div>
        </article>

        {/* Investor access block */}
        <article className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-border/30 max-w-2xl mx-auto mt-10 md:mt-12">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          <div className="p-8 md:p-12 text-center">
            <p className="text-primary text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
              Investor Access
            </p>
            <h3 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
              Looking for any of these services?
            </h3>
            <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed font-light max-w-xl mx-auto mb-8">
              Investors and private clients who require access to any of the services within the TRN advisor network are welcome to reach out. We will personally review the request and connect you with the right advisor based on your needs.
            </p>
            <a
              href="mailto:jake@therealty-network.com?subject=Request%20an%20Introduction"
              className="inline-block border border-primary text-primary text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Request an Introduction
            </a>
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