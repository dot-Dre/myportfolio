import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Carousel } from "react-responsive-carousel";
import Typewriter from "typewriter-effect";
import ProjectCards from "../components/ProjectCard";
import Loading from "../components/Loading";
import Cloud from "../models/Cloud";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure you have this import
import ProjectDetails from "../projs";

const Projects = () => {
  return (
    <>
      <section className="projectcanvas w-full h-screen relative">
        <div className="absolute left-1/2 top-1/5 transform -translate-x-1/2 z-10">
          <div className="text-8xl pt-28 font-bold text-black flex justify-center items-center">
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
          <div className="pt-20">
            {/* <div className="w-full h-full">
              <Carousel className="no-shadow" axis="horizontal" showArrows={true} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
                <ProjectCards tags={["Java ♨️", "Processing ⚙️"]} blurb="bru r" name={"When Pigs Fly"} img={proj1}/>
                <ProjectCards tags={["3", "4"]} blurb="another blurb" name={"Project 2"} img={proj1}/>
                <ProjectCards tags={["5", "6"]} blurb="yet another blurb" name={"Project 3"} img={proj1}/>
              </Carousel>
            </div> */}
            <div className="">
              <ProjectCards
                tags={ProjectDetails.WhenPigsFly.tags}
                blurb={ProjectDetails.WhenPigsFly.blurb}
                name={ProjectDetails.WhenPigsFly.name}
                img={ProjectDetails.WhenPigsFly.img}
              />
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
            <Cloud
              rot={[-Math.PI / 2, -1, 0]}
              pos={[-35, -90, -12]}
              zoom={false}
            />
            <Cloud
              rot={[-Math.PI / 2, -1, 0]}
              pos={[35, -90, -12]}
              zoom={false}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default Projects;
