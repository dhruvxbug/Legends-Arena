import {FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://x.com/LegendsArenaxyz", icon: <FaTwitter /> }
];

const Footer = () => {
  const shareOnX = () => {
    try {
      const text = `Check out Legends Arena! Join the waitlist now at: www.legendsarena.xyz`;
      // Use X compose/intent endpoint to prefill the post text. Falls back to twitter intent if x.com path changes.
      const intentUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(intentUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      // Fallback: navigate to the project's X profile
      window.open("https://x.com/LegendsArenaxyz", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="relative w-screen bg-[#dfdff0] py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 mb-20">
        {/* Share on X button and Twitter icon side by side */}
        <div className="flex items-center gap-4 mt-4">
          <button
            type="button"
            onClick={shareOnX}
            className="inline-flex items-center gap-3 bg-[#1f1b1b] text-white px-6 py-3 rounded-2xl shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
          >
            <span className="font-heronew">Share on X</span>
          </button>
          
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-gray-800 p-3 rounded-lg shadow-sm hover:scale-105 transition-transform"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              {link.icon}
            </a>
          ))}
        </div>

      
      </div>

      {/* Huge faint watermark text in the background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          bottom: "0",
          width: "100vw",
          fontSize: "clamp(4rem, 11vw, 16rem)",
          fontWeight: 900,
          color: "#000",
          opacity: 0.12,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 0.85,
          transform: "translateY(6%)",
          whiteSpace: "nowrap",
          textAlign: "center",
          fontFamily: "heronew, LegendsArena, serif",
          overflow: "hidden",
        }}
      >
        Legends Arena
      </div>
    </footer>
  );

};

export default Footer;
