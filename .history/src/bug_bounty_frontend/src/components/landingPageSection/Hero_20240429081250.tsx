import React, { useRef } from "react";
import Section from "./Section";
import Button from "../utils/Button";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { heroIcons } from "../../constants";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";

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

const Hero = () => {
  const parallaxRef = useRef(null);
  const width = window.innerWidth >= 1200 ? "50rem" : "fit-content";
  const height = window.innerHeight >= 1200 ? "50rem" : "30rem";
  return (
    <Section
      className="pt-12rem -mt-[5.25]"
      //   crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative  z-10  max-w-[20rem] lg:max-w-[40rem] mx-auto text-center md:mb-0 lg:mb-[6rem]">
          <h1 className="h3 mb-6 mt-[2rem] text-center">
            Solve and transform{" "}
            <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
              {" "}
              bugs into opportunities
            </span>
            <p className=" mt-2 text-sm text-color-7 max-w-3xl mx-auto mb-6 lg:mb-8">
              Revolutionize the way you debug code, earn rewards and drive
              innovation forward
            </p>
            {/* <Button
              onClick={() => console.log("clicked ")}
              className="z-10 font-bold uppercase"
              href="/pricing"
              white
            >
              Get started
            </Button> */}
          </h1>
        </div>
        {/*  BUG MODEL  */}
        <div className="relative z-1 max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative top-[7rem]  flex justify-center items-center">
            <Canvas
              dpr={[1, 2]}
              shadows
              camera={{ fov: 45 }}
              style={{
                width: `${width}`,
                height: `${height}`,
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
            <ScrollParallax isAbsolutelyPositioned>
              <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-linear-3 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
                {heroIcons.map((icon, index) => (
                  <li key={index} className="p-5 ">
                    <img src={icon} alt="" width={24} height={25} />
                  </li>
                ))}
              </ul>
            </ScrollParallax>
          </div>
        </div>
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>
    </Section>
  );
};

export default Hero;
