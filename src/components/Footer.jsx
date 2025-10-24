import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> }
];

const Footer = () => {
  return (
    <footer className="relative w-screen bg-[#dfdff0] py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        {/* Centered App Store button */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#1f1b1b] text-white px-6 py-3 rounded-2xl shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
          >
            <FaApple className="text-xl" />
            <span className="font-medium">Mac App Store</span>
          </a>
        </div>

        {/* Small rounded icon buttons */}
        <div className="flex items-center gap-4">
          {socialLinks.slice(0, 3).map((link, index) => (
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

        {/* Small policy link */}
        <a href="#privacy-policy" className="text-sm font-light text-gray-700 hover:underline">
          Privacy Policy
        </a>
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
          fontFamily: "heronew, Zentry, serif",
          overflow: "hidden",
        }}
      >
        Legends Arena
      </div>
    </footer>
  );

};

export default Footer;
