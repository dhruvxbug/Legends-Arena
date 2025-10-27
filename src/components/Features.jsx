import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setHoverOpacity(1);
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setHoverOpacity(0);
    setIsHovering(false);
  };

  return (
    <div 
      className="relative text-black border-rounded size-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      
      {/* Green overlay with text - shown on hover */}
      <div className={`absolute inset-0 bg-lime-700 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-5 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        {/* Decorative Frame */}
        <div className="relative border-4 border-black rounded-lg p-6 max-w-md">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1"></div>
          
          <div className="text-center">
            <h1 className="bento-title special-font text-black mb-4">{title}</h1>
            {description && (
              <p className="text-xs md:text-base font-general text-black">{description}</p>
            )}
          </div>

          {isComingSoon && (
            <div className="flex justify-center mt-6">
              <div
                ref={hoverButtonRef}
                onMouseMove={handleMouseMove}
                className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white border-2 border-white"
              >
                {/* Radial gradient hover effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                  style={{
                    opacity: hoverOpacity,
                    background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                  }}
                />
                <TiLocationArrow className="relative z-20" />
                <p className="relative z-20">coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-heronew text-2xl md:text-3xl text-blue-50">
          Discover the Arsenal
        </p>
        <p className="max-w-md text-xl md:text-xl text-blue-50 opacity-50 font-general">
          Step into the realm where stories are not told… they're forged into
          legends. Seek ancient relics, command elemental powers, and forge your
          path to glory.
        </p>
      </div>


      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdlo92eN8EQmyWFZje5ulIkS8MpY7N1LOBcVA9"
            title={
              <>
                <h2 className="text-xl text-black md:text-2xl font-heronew">Relic Vault</h2>
              </>
            }
            description="Discover a vast collection of ancient relics — each tied to the elements. Seek, collect, and equip the relic that best amplifies your legend's strength."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdkjWN4uamh8S3FjJu9tAiNDnZRGbIpf5Bvqxc"
            title={
              <>
                <h2 className="text-xl md:text-2xl font-heronew">Elemental Affinity</h2>
              </>
            }
            description="Every element holds a unique power. Choose your alignment wisely — the right match can mean victory against even the mightiest foe."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdwPhNRV5OpgfdKRP0IjcAEUtQlkGe64NH2JiC"
            title={
              <>
                <h2 className="text-xl md:text-2xl font-heronew">Battle Oracle</h2>
              </>
            }
            description="An ancient guide forged in wisdom — reveals opponent weaknesses, suggests strategic builds, and whispers secrets of victory before each clash."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-lime-700 p-5">
            <h1 className="bento-title special-font max-w-64 text-black font-heronew">
              Epic Trials & Seasonal Conquests
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <img
            src="https://7x8dq6l6vi.ufs.sh/f/UDe9UzBAkSRdazVeNOT7JdeKXxnoGrWElzvOugYU8w41D07Q"
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
