import React, { useRef } from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import bounty from "../../assets/bounty.jpg";

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
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={bounty}
                width={800}
                height={730}
                alt="bounty ai"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
