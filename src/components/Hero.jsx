import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Background Image */}
        <img
          src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdQaDTcWHdmSpbFZWUV9zxBkqTw1RJfGIor0gs"
          alt="Hero background"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* Overlay Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center mix-blend-overlay opacity-50"
        >
          <source src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdQaDTcWHdmSpbFZWUV9zxBkqTw1RJfGIor0gs" type="video/mp4" />
        </video>

        <h1 className="font-[heronew] text-5xl sm:text-5xl md:text-6xl lg:text-7xl absolute bottom-10 right-10 z-40 text-white">
         Legends Arena
        </h1>

        <div className="absolute left-0 top-10 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="font-[heronew] text-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold">
              Leap of Faith
            </h1>

            <p className="mb-5 max-w-64 font-[heronew] text-black text-xl sm:text-2xl md:text-3xl">
              Where heroes are not born… they're forged
            </p>

            <Button
              id="Register"
              title="Coming Soon"
              leftIcon={<TiLocationArrow />}
              containerClass="bg- flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="font-[heronew] text-5xl sm:text-5xl md:text-6xl lg:text-7xl absolute bottom-10 right-10 text-black">
       Legends Arena
      </h1>
    </div>
  );
};

export default Hero;
