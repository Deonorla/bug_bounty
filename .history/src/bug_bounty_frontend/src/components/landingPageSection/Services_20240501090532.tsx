import React, { useRef } from "react";
import Section from "./Section";
import Heading from "../design/Heading";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const BugModel = (props: any) => {
  const { scene, animations } = useGLTF(`/robo_beetle.glb`);
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
          className="mb-[3rem]"
          title="Hack your way"
          span=" into bugs"
        />
        <div className="flex gap-5">
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 45 }}
            style={{
              width: `100%`,
              height: `450px`,
              position: "absolute",
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
      </div>
    </Section>
  );
};

export default Services;
