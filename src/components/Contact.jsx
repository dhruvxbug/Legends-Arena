'use client';

import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Image from 'next/image';

// Next.js API route - always uses relative path to same-origin API
const API_BASE = "";

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

    console.log("Submitting email:", email);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const base = API_BASE ? API_BASE.replace(/\/$/, "") : "";
      const url = base ? `${base}/api/waitlist` : "/api/waitlist";

      console.log("Submitting to URL:", url);

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
        <div className="absolute inset-0">
          <Image
            src="/img/contactus.jpeg"
            alt="Waitlist background"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />

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
            <Button title="Join Waitlist" onClick={handleSubmit} containerClass="mt-0" />
            {error && <p className="font-heronew text-red-500 text-xs uppercase">{error}</p>}
            {status && <p className="font-heronew text-lime-300 text-xs uppercase">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
