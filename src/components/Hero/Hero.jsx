import { ButtonOutline, ButtonPrimary } from "../Button/Button.jsx";
// Import necessary dependencies

// import Shapes from "../model/Shape.jsx";
const Hero = () => {
  return (
    <div className="relative">
      
      {/* Hero Content */}
      <section id="home" className="pt-28 lg:pt-36 relative z-10">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/images/avatar-1.jpg"
                  width={40}
                  height={40}
                  alt="Ayush Pandey"
                  className="img-cover"
                />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for future
            </h2>
            <div className="flex items-center gap-3">
              <ButtonPrimary label="Download CV" icon="download" />
              <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
            </div>
          </div>
            {/* <Shapes/> */}
          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/images/hero-banner.png"
                width={800}
                height={1000}
                alt="Ayush Pandey"
                className="w-full z-333"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
