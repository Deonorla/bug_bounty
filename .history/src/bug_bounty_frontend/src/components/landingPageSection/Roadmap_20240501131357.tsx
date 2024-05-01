import React from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { roadmap } from "../../constants";
import grid from "../../assets/git.png";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden " id="rooadmap">
      <div className="container md:pb-10">
        <Heading title="Road" span="map" />
      </div>
      <div className="relative grid md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";
          return (
            <div key={item.id} className="">
              <div>
                <div>
                  <img src={grid} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Roadmap;
