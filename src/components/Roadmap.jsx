const roadmapData = [
  {
    period: "Q4 2025",
    updates: [
      {
        title: "Token Launch & Staking",
        features: [
          "Public Sale (IDO) & Token Generation Event (TGE)",
          "Staking Protocol Launch (v1) with veLEGEND model",
          "Initial DEX Liquidity and CEX partner announcements",
        ],
        highlight: true,
      },
    ],
  },
  {
    period: "Q1 2026",
    updates: [
      {
        title: "Beta & Marketplace",
        features: [
          "Closed Beta release for early access participants",
          "Marketplace (v1) launch for trading",
          "First SS-Grade Hero & Transcendent Item NFT minting events",
        ],
        highlight: false,
      },
    ],
  },
  {
    period: "Q2 2026",
    updates: [
      {
        title: "Full Public Release",
        features: [
          "Full Public Game Release (iOS, Android, PC)",
          "First Official PvP Season with $LEGEND rewards",
          "Major content update: New heroes and item sets",
        ],
        highlight: true,
      },
    ],
  },
  {
    period: "Q3 2026",
    updates: [
      {
        title: "Governance & Expansion",
        features: [
          "Full veLEGEND Governance launch for community proposals",
          "Teaser and initial concepts for second ecosystem title",
          "More coming...",
        ],
        highlight: false,
      },
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="relative w-screen bg-black py-20 overflow-hidden">
      {/* Full-bleed background video (only background) */}
      <vid
        src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdadDjrX7JdeKXxnoGrWElzvOugYU8w41D07Q9"
        className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Background effects - lime theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-900/20 to-black pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lime-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heronew mb-6 bg-gradient-to-r from-lime-200 via-yellow-400 to-lime-200 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-lime-500 to-lime-500" />
            <div className="text-lime-400 text-2xl">⚔</div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent via-lime-500 to-lime-500" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal timeline line - lime/yellow theme */}
          <div className="absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-lime-900/30 via-lime-500/60 to-lime-900/30 shadow-[0_0_10px_rgba(163,230,53,0.3)] z-10" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 relative z-0">
            {roadmapData.map((period, periodIndex) => (
              <div key={periodIndex} className="relative">
                {/* Period Label */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    {/* Timeline dot - lime theme */}
                    <div className="absolute top-[52px] left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-lime-500 border-4 border-black z-20 shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                    
                    <h3 className="font-heronew text-xl md:text-2xl text-lime-200/90 mb-2 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {period.period}
                    </h3>
                  </div>
                </div>

                {/* Updates Cards */}
                <div className="space-y-4 mt-20">
                  {period.updates.map((update, updateIndex) => (
                    <div
                      key={updateIndex}
                      className={`
                        relative rounded-lg p-4 border-2 backdrop-blur-sm
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                        ${
                          update.highlight
                            ? "bg-gradient-to-br from-lime-950/80 via-green-950/70 to-lime-950/80 border-lime-700/80 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
                            : "bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70 border-stone-600/60"
                        }
                      `}
                    >
                      {/* Update Title */}
                      <h4 className={`font-heronew text-lg md:text-xl mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                        update.highlight ? 'text-lime-300' : 'text-stone-100'
                      }`}>
                        {update.title}
                      </h4>

                      {/* Features List */}
                      <ul className="space-y-1.5">
                        {update.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="font-legends text-sm text-stone-200/90 flex items-start"
                          >
                            <span className="text-lime-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
