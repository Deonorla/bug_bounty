import React from "react";
import Section from "./Section";
import Heading from "../design/Heading";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          className="mb-[3rem]"
          title="Hack your way"
          span=" into bugs"
        />
      </div>
    </Section>
  );
};

export default Services;
