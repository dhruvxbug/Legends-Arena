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
        <p className="font-heronew text-lg uppercase md:text-[10px]">
          Step into the realm
        </p>

        <AnimatedTitle
          title="Where  Legends <br /> Are  Made"
          containerClass="mt-5 !text-black text-center "
        />

        <div className="about-subtext font-heronew">
          <p>Forge legendary heroes, master elemental synergies, </p>
          <p className="text-gray-500">
            and build the ultimate backpack arsenal in this addictive auto battler where every placement matters and every victory brings you closer to immortal glory and your very own NFTs
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdSfDjaETeH3vKEAncj6FBxw4uk9XLCUqh5stZ"
            loop 
            autoPlay
            muted
            className="absolute left-0 top-0 size-full object-cover"
            aria-label="About background video"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
