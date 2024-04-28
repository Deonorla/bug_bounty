import React from "react";
import Section from "./Section";
import Button from "../utils/Button";

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
            <p className=" mt-2 text-sm text-color-7 max-w-3xl mx-auto mb-6 lg:mb-8">
              Revolutionize the way you debug code, earn rewards and drive
              innovation forward
            </p>
            <Button className="font-bold" href="/pricing" white>
              Get started
            </Button>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
