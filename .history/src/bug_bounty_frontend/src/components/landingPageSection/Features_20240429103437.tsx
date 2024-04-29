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
            <div key={item.id} className="">
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
