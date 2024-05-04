import {
  PresentationControls,
  SpotLight,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import Heading from "../design/Heading";
import Button from "../utils/Button";

const BugModel = (props: any) => {
  const { scene, animations } = useGLTF(`/hunter2.glb`);
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
      <ambientLight intensity={0.9} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <primitive object={scene} dispose={null} {...props} />;
    </>
  );
};

const Footer = () => {
  return (
    <div className="">
      <div className=" relative flex justify-center items-center -mt-[15rem] md:-mt-[4rem] lg:mt-[3rem]">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{
            width: `100%`,
            height: `50rem`,
            position: "absolute",
            top: "0",
          }}
        >
          <PresentationControls
            speed={1.5}
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage shadows environment={null}>
              <BugModel scale={0.7} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="flex justify-center flex-col items-center mt-[37rem] md:mt-[51rem] lg:mt-[51rem]">
        <Heading
          className="text-center max-w-[25rem] px-8 md:px-0"
          title="Become a bounty"
          span=" hunter today"
        />
        <div className=" mt-[2rem] flex items-center">
          <Button
            onClick={() => console.log("clicked ")}
            className="z-10 right  font-bold uppercase"
            href="/pricing"
            // white
          >
            Get started
          </Button>
        </div>
      </div>
      {/* Footer */}
      <div className="container flex sm:justify-between justify-center gap-10 max-sm:flex-col ">
        <p>©{new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
