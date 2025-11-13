import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

// Resolve API base URL with precedence so you don't need to rebuild when changing backends:
// 1) `window.__env.VITE_API_BASE` (runtime injection)
// 2) `<meta name="api-base" content="...">` in deployed `index.html`
// 3) build-time `import.meta.env.VITE_API_BASE`
// 4) fallback to the deployed Render backend so the live frontend works out-of-the-box
const API_BASE = (() => {
  if (typeof window !== "undefined") {
    const runtime = window.__env && window.__env.VITE_API_BASE;
    if (runtime) return runtime;
    try {
      const m = document.querySelector('meta[name="api-base"]');
      if (m && m.content) return m.content;
    } catch (e) {}
  }

  return import.meta.env.VITE_API_BASE ?? "https://legends-arena.onrender.com";
})();

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const base = API_BASE ? API_BASE.replace(/\/$/, "") : "";
      const url = base ? `${base}/api/waitlist` : "/api/waitlist";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("You're on the list");
        setEmail("");
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(data?.message || "Something went wrong");
    } catch {
      setError("Unable to reach server");
    }
  };

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg overflow-hidden py-24 text-blue-50">
        <img
          src="/img/contactus.jpeg"
          alt="Waitlist background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-6 font-heronew text-[10px] uppercase">Join the waitlist</p>

          <AnimatedTitle
            title="Join  the  Legends"
            className="special-font !md:text-[6.2rem] w-full font-heronew !text-5xl !font-black !leading-[.9]"
          />

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col items-center gap-4 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full bg-white/90 px-5 py-3 text-black placeholder-gray-500 focus:outline-none font-heronew text-xs uppercase"
            />
            <Button title="Join Waitlist" containerClass="mt-0" />
            {error && <p className="font-heronew text-red-500 text-xs uppercase">{error}</p>}
            {status && <p className="font-heronew text-lime-300 text-xs uppercase">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
