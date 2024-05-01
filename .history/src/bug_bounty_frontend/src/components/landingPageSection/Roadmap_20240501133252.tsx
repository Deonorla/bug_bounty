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
                        className="mr-2.5 "
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                    <div className="mb-10">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4>{item.title}</h4>
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
