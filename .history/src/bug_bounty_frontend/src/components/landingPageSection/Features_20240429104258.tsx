import React from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { benefits } from "../../constants";

const Features = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading title="Built for " span="Developers" />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat 
                  bg-[length:100%_100%] md:max-w-[24rem] 

                  "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-color-7">{item.text}</p>
                <div className="flex items-center mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
