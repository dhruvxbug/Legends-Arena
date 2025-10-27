import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg overflow-hidden py-24 text-blue-50">
        {/* Background Image */}
        <img 
          src="/img/contactus.jpeg" 
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-10 font-heronew text-[10px] uppercase">
            Answer the call
          </p>

          <AnimatedTitle
            title="Join the Legend!"
            className="special-font !md:text-[6.2rem] w-full font-heronew !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Begin your journey" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
