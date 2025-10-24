import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to the new world of Armoury Games
        </p>

        <AnimatedTitle
          title="Discover New <br /> Characters"
          containerClass="mt-5 !text-black text-center "
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Legends Arena unites players from countless games and platforms,
            digital and physical, into a unified Play Economy—where progress,
            rewards, and reputation travel with you.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdTsItGhPwf1DmqLi9FKWeArRS27u8Ocg6UQjP"
            className="absolute left-0 top-0 size-full object-cover"
            loop
            muted
            autoPlay
            playsInline
            aria-label="About background video"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
