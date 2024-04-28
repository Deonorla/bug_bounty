import React from "react";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="mt-[3rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative  z-1 max-w-[62rem] mx-auto text-center md:mb-0 lg:mb-[6rem]">
          <h1 className="h3 mb-6 text-center">
            Solve and transform bugs into opportunities
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
