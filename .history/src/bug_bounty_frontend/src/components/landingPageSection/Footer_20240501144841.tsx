import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import Heading from "../design/Heading";

const BugModel = (props: any) => {
  const { scene, animations } = useGLTF(`/hunter.glb`);
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

const Footer = () => {
  return (
    <div className="">
      <div className=" relative flex justify-center items-center mt-[3rem]">
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
            <Stage environment={null}>
              <BugModel scale={0.7} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="mt-[49rem]">
        <Heading
          className="text-center mx-w-[25rem] px-8 md:px-0"
          title="Become a bounty"
          span=" hunter today"
        />
      </div>
    </div>
  );
};

export default Footer;
