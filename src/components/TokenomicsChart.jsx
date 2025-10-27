import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TokenomicsChart = () => {
  const chartRef = useRef(null);

  const tokenomicsData = [
    { label: "Ecosystem Rewards", value: 20, color: "#4a5f3a", amount: "2,000,000,000" },
    { label: "Airdrop & Community", value: 20, color: "#5d7547", amount: "2,000,000,000" },
    { label: "Treasury", value: 15, color: "#7ba05f", amount: "1,500,000,000" },
    { label: "Public Sale", value: 15, color: "#9caf88", amount: "1,500,000,000" },
    { label: "Liquidity Fund", value: 15, color: "#adbf92", amount: "1,500,000,000" },
    { label: "Team & Advisors", value: 10, color: "#b8c947", amount: "1,000,000,000" },
    { label: "Marketing", value: 5, color: "#cddc39", amount: "500,000,000" },
  ];

  useEffect(() => {
    const segments = chartRef.current.querySelectorAll(".donut-segment");

    gsap.fromTo(
      segments,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Calculate cumulative percentages for positioning
  const calculateSegments = () => {
    let cumulativeValue = 0;
    return tokenomicsData.map((item) => {
      const startAngle = (cumulativeValue / 100) * 360;
      cumulativeValue += item.value;
      const endAngle = (cumulativeValue / 100) * 360;
      return {
        ...item,
        startAngle,
        endAngle,
        middleAngle: (startAngle + endAngle) / 2,
      };
    });
  };

  const segments = calculateSegments();

  // SVG donut chart parameters
  const centerX = 250;
  const centerY = 250;
  const radius = 150;
  const innerRadius = 90;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  };

  const createDonutSegment = (segment) => {
    const outerPath = describeArc(
      centerX,
      centerY,
      radius,
      segment.startAngle,
      segment.endAngle
    );
    const innerPath = describeArc(
      centerX,
      centerY,
      innerRadius,
      segment.endAngle,
      segment.startAngle
    );

    const outerStart = polarToCartesian(
      centerX,
      centerY,
      radius,
      segment.endAngle
    );
    const outerEnd = polarToCartesian(
      centerX,
      centerY,
      radius,
      segment.startAngle
    );
    const innerStart = polarToCartesian(
      centerX,
      centerY,
      innerRadius,
      segment.endAngle
    );
    const innerEnd = polarToCartesian(
      centerX,
      centerY,
      innerRadius,
      segment.startAngle
    );

    return `${outerPath} L ${innerStart.x} ${innerStart.y} ${innerPath} L ${outerEnd.x} ${outerEnd.y} Z`;
  };

  const getLabelPosition = (segment) => {
    const labelRadius = radius + 40;
    const angle = ((segment.middleAngle - 90) * Math.PI) / 180;
    return {
      x: centerX + labelRadius * Math.cos(angle),
      y: centerY + labelRadius * Math.sin(angle),
    };
  };

  return (
    <section className="relative min-h-screen w-screen bg-black text-white py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-900/20 to-black pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lime-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-heronew mb-6 bg-gradient-to-r from-lime-200 via-yellow-400 to-lime-200 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-stone-400 font-heronew text-lg md:text-xl max-w-2xl mx-auto">
            Earn rewards, access exclusive events, and revolutionize your Web3 networking.
          </p>
        </div>

        {/* Chart Container */}
        <div ref={chartRef} className="flex justify-center items-center">
          <div className="relative">
            <svg
              width="900"
              height="600"
              viewBox="0 0 500 500"
              className="max-w-full h-auto"
            >
              {/* Donut segments */}
              {segments.map((segment, index) => (
                <g key={index} className="donut-segment">
                  <path
                    d={createDonutSegment(segment)}
                    fill={segment.color}
                    stroke="#000"
                    strokeWidth="2"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                  />
                  
                  {/* Label lines and text */}
                  <line
                    x1={
                      polarToCartesian(
                        centerX,
                        centerY,
                        radius,
                        segment.middleAngle
                      ).x
                    }
                    y1={
                      polarToCartesian(
                        centerX,
                        centerY,
                        radius,
                        segment.middleAngle
                      ).y
                    }
                    x2={getLabelPosition(segment).x}
                    y2={getLabelPosition(segment).y}
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  
                  <text
                    x={getLabelPosition(segment).x}
                    y={getLabelPosition(segment).y}
                    fill="white"
                    fontSize="14"
                    fontFamily="heronew"
                    textAnchor={
                      getLabelPosition(segment).x > centerX ? "start" : "end"
                    }
                    dominantBaseline="middle"
                  >
                    {segment.label}: {segment.value}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-stone-900/60 to-stone-950/60 border border-stone-700/40 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-heronew text-lime-300 mb-2">
              Total Supply
            </h3>
            <p className="text-3xl font-heronew text-white">10,000,000,000</p>
            <p className="text-stone-400 text-sm mt-2">$LEGEND Tokens</p>
          </div>

          <div className="bg-gradient-to-br from-stone-900/60 to-stone-950/60 border border-stone-700/40 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-heronew text-lime-300 mb-2">
              Distribution
            </h3>
            <p className="text-3xl font-heronew text-white">7 Categories</p>
            <p className="text-stone-400 text-sm mt-2">Fair allocation</p>
          </div>

          <div className="bg-gradient-to-br from-stone-900/60 to-stone-950/60 border border-stone-700/40 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-heronew text-lime-300 mb-2">
              Community First
            </h3>
            <p className="text-3xl font-heronew text-white">55%</p>
            <p className="text-stone-400 text-sm mt-2">Ecosystem + Airdrop + Public Sale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsChart;
