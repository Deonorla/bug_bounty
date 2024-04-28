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
        <div className="relative  z-1  max-w-[20rem] lg:max-w-[40rem] mx-auto text-center md:mb-0 lg:mb-[6rem]">
          <h1 className="h3 mb-6 mt-[2rem] text-center">
            Solve and transform{" "}
            <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
              {" "}
              bugs into opportunities
            </span>
            <p className=" p text-color-7">
              Revolutionize the way you debug code, earn rewards and drive
              innovation forward
            </p>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
