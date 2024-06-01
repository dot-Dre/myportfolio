import Typewriter from "typewriter-effect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCards from "../components/ProjectCard";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../components/Loading";
import Cloud from "../models/Cloud";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="w-full h-screen relative">
        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-8xl pt-12 font-bold text-black flex justify-center items-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("My Projects 🛠️")
                  .changeDelay(10)
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
          <div className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <Carousel responsive={responsive}>
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
              </Carousel>
            </div>
          </div>
        </div>
        <Canvas
          className="mycanvas w-full h-screen"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loading />}>
            <directionalLight position={[1, 1, 1]} intensity={5} />
            <ambientLight intensity={2} />
            <Cloud pos={[-35, -90, -12]} zoom={false}/>
            <Cloud pos={[35, -90, -12]} zoom={false}/>
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default Projects;
