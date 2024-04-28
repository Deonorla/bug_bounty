import React from "react";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-12rem -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative  z-1 max-w-[62rem] mx-auto text-center md:mb-0 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Empowering Developers, Solving Bugs, and Rewarding Innovation
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
