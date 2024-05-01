import Heading from "../design/Heading";
import Section from "./Section";
import Tagline from "../design/TagLine";
import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../assets";
import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

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

const Roadmap = () => (
  <Section className="overflow-hidden mb-[2rem]" id="roadmap">
    <div className="container">
      <Heading className="mb-[3rem] md:my-[5rem]" title="Road" span="map" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className=" flex justify-center items-center mb-10 -my-10 -mx-15">
                    <img
                      className="w-[20rem] md:w-[25rem]"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-color-7">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" relative flex justify-center items-center mt-[15rem]">
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{
            width: `100%`,
            height: `40rem`,
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

export default Roadmap;
