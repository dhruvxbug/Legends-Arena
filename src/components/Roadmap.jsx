const roadmapData = [
  {
    period: "Q1 2025",
    updates: [
      {
        title: "Alpha Launch", 
        features: [
          "Core Arena Mechanics",
          "5 Starter Champions",
          "Tutorial Campaign",
          "Basic PvP Matchmaking",
          "Guild System Foundation",
          "Early Adopter Rewards",
        ],
        highlight: false,
      },
    ],
  },
  {
    period: "Q2 2025",
    updates: [
      {
        title: "Champion Expansion",
        features: [
          "10 New Champions",
          "Ranked Season 1",
          "Guild Wars Beta",
          "Custom Loadouts",
          "Replay System",
          "Balance Updates",
        ],
        highlight: false,
      },
      {
        title: "Social Features",
        features: [
          "Friend System",
          "In-Game Chat",
          "Spectator Mode",
          "Leaderboards",
          "Achievement System",
        ],
        highlight: false,
      },
    ],
  },
  {
    period: "Q3 2025",
    updates: [
      {
        title: "TO BE ANNOUNCED",
        features: ["More updates coming soon"],
        highlight: false,
        tba: true,
      },
    ],
  },
  {
    period: "Q4 2025",
    updates: [
      {
        title: "DLC: Ancient Worlds",
        features: [
          "New Campaign Chapter",
          "5 Legendary Champions",
          "New Arena Map",
          "Ancient Artifacts System",
          "Cross-Platform Play",
        ],
        highlight: true,
        dlc: true,
      },
      {
        title: "Season 2 Launch",
        features: [
          "Ranked Reset",
          "New Game Modes",
          "Seasonal Rewards",
          "Meta Rebalance",
        ],
        highlight: false,
      },
    ],
  },
  {
    period: "Q1 2026",
    updates: [
      {
        title: "DLC: Atomic Ambitions",
        features: [
          "Sci-Fi Champion Line",
          "Tournament System",
          "Esports Integration",
          "Advanced AI Companions",
        ],
        highlight: true,
        dlc: true,
      },
      {
        title: "Mobile Launch",
        features: [
          "iOS & Android Release",
          "Cross-Save Support",
          "Touch Controls",
          "Cloud Sync",
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

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-600 to-amber-600" />
            <div className="text-amber-500 text-2xl">⚔</div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent via-amber-600 to-amber-600" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal timeline line - weathered gold */}
          <div className="absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-amber-900/30 via-amber-600/60 to-amber-900/30 shadow-[0_0_10px_rgba(217,119,6,0.3)]" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 relative">
            {roadmapData.map((period, periodIndex) => (
              <div key={periodIndex} className="relative">
                {/* Period Label */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    {/* Timeline dot - ancient stone */}
                    <div className="absolute top-[52px] left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-amber-600 border-4 border-black z-20 shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
                    
                    <h3 className="font-heronew text-xl md:text-2xl text-amber-200/90 mb-2 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {period.period}
                    </h3>
                  </div>
                </div>

                {/* Updates Cards */}
                <div className="space-y-4 mt-16">
                  {period.updates.map((update, updateIndex) => (
                    <div
                      key={updateIndex}
                      className={`
                        relative rounded-lg p-4 border-2 backdrop-blur-sm
                        transition-all duration-300 hover:scale-105 hover:shadow-2xl
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                        ${
                          update.dlc
                            ? "bg-gradient-to-br from-amber-950/80 via-orange-950/70 to-amber-950/80 border-amber-700/80 shadow-[0_0_30px_rgba(217,119,6,0.3)]"
                            : update.tba
                            ? "bg-stone-950/60 border-stone-700/60"
                            : "bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70 border-stone-600/60"
                        }
                      `}
                    >
                      {/* DLC Badge - ornate gold */}
                      {update.dlc && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-black text-xs font-bold px-4 py-1.5 rounded-full border-2 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                          DLC
                        </div>
                      )}

                      {/* Update Title */}
                      <h4 className={`font-heronew text-lg md:text-xl mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                        update.dlc ? 'text-amber-300' : 'text-stone-100'
                      }`}>
                        {update.title}
                      </h4>

                      {/* Features List */}
                      {!update.tba && (
                        <ul className="space-y-1.5">
                          {update.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="font-legends text-sm text-stone-200/90 flex items-start"
                            >
                              <span className="text-amber-600 mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {update.tba && (
                        <p className="font-legends text-stone-400/70 italic text-center py-4">
                          Details coming soon
                        </p>
                      )}
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
