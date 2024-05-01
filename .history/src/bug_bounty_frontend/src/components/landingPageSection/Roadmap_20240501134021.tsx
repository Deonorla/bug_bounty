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
            <div
              key={item.id}
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full ">
                  <img
                    src={grid}
                    width={550}
                    height={550}
                    className="w-full "
                    alt="grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        className="mr-2.5 "
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-color-7">{item.text}</p>
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
