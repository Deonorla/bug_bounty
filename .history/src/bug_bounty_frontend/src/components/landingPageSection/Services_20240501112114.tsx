import React, { useRef } from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import bounty from "../../assets/bounty.jpg";
import { bugbountyServices, brainwaveServicesIcons } from "../../constants";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Generating from "../design/Generating";

const BugModel = (props: any) => {
  const { scene, animations } = useGLTF(`/hack-bug.glb`);
  const mixer = useRef<THREE.AnimationMixer | undefined>(undefined);

  if (animations && animations.length && !mixer.current) {
    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current!.clipAction(clip).play();
    });
  }

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <primitive object={scene} dispose={null} {...props} />;
    </>
  );
};

const Services = () => {
  return (
    <Section className="py-4" id="how-to-use">
      <div className="flex flex-col">
        <Heading
          className=" text-center px-8 md:px-0 mb-[3rem]"
          title="Hack your way"
          span=" into bugs"
        />
        <div className="relative px-4 lg:px-8">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-[50%x]">
              <img
                className="w-full h-full object-cover md:object-right opacity-50"
                src={bounty}
                width={800}
                height={730}
                alt="bounty "
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className=" text-[1.5rem] font-bold mb-4">
                One Bug at a Time
              </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Where code challenges meet collaboration
              </p>
              <ul className="body-2">
                {bugbountyServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <IoIosCheckmarkCircle className="text-linear-1 text-[1.5em]   " />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-[20%] lg:right-1/2 lg:bottom-8 lg:translate-x-1/2" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
