import React from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { roadmap } from "../../constants";
import grid from "../../assets/grid.png";
import TagLine from "../design/TagLine";
import { loading1, check2 } from "../../assets";

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
                  <img
                    src={grid}
                    width={550}
                    height={550}
                    className="w-full "
                    alt="grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between">
                    <TagLine>{item.date}</TagLine>
                    <div>
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        alt=""
                      />
                    </div>
                  </div>
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
