import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Cloud from "../models/Cloud";
import Loading from "../components/Loading";
import Typewriter from "typewriter-effect";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";

const Home = () => {
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full h-screen relative">
      <Suspense fallback={<Loading />}>
        <div className="w-1/3 h-1/6 absolute top-20 right-12 z-10 flex flex-col items-end pr-10">
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            size="large"
          >
            <Button>
              <span className="font-bold">Projects</span>
            </Button>
            <Button>
              <span className="font-bold">CV</span>
            </Button>
            <Button>
              <span className="font-bold">Contact Me</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className="w-1/3 h-screen absolute left-12 top-6 right-0 z-10 flex flex-col items-start pl-10">
          <div className="text-8xl pt-12 font-bold text-black">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello! 👋")
                  .changeDelay(10)
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
          <div className="text-2xl text-gray-900 pl-8 pt-11">
            I'm <span className="font-bold">Andre Lepardo</span>, a fourth year
            Software Engineering student @{" "}
            <a
              href="https://www.wgtn.ac.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold">VUW</span>
            </a>
          </div>
          <div className="text-lg text-gray-800 pl-8 pt-2">
            During my studies I've had the chance to learn about a wide range of
            fields in tech. Some of my favorites have been:
          </div>
          <div className="text-lg text-gray-800 pl-11 pt-6">
            <ul>
              <li>Cyber Security 🔒</li>
              <li>Machine Learning 🧠</li>
              <li>WebDev 🌐</li>
              <li>DevOps 🛠️</li>
            </ul>
          </div>
          {/* <div className="text-lg text-gray-800 pl-8 pt-5">
            Outside of university some of my hobbies include:
          </div> */}
          {/* <div className="text-lg text-gray-800 pl-11 pt-2">
            <ul>
              <li>Basketball 🏀</li>
              <li>Piano 🎹</li>
              <li>Drawing ✏️</li>
            </ul>
          </div> */}
          <div className="absolute bottom-20 pl-11 flex justify-start">
            <a href="www.linkedin.com/in/andre-raphael-lepardo-575562212">
              <button className="mx-2 px-4 py-4 bg-gray-800 text-white rounded-md">
                <FaLinkedin size={30} />
              </button>
            </a>
            <a href="https://github.com/dot-Dre">
              <button className="mx-2 px-4 py-4 bg-gray-800 text-white rounded-md">
                <FaSquareGithub size={30} />
              </button>
            </a>
          </div>
        </div>
        <div
          className="homecanvas h-screen"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <Canvas
            className="mycanvas w-full h-screen"
            camera={{ near: 0.1, far: 1000 }}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <Suspense fallback={<Loading />}>
              <directionalLight position={[1, 1, 1]} intensity={5} />
              <ambientLight intensity={2} />
              <Cloud />
            </Suspense>
          </Canvas>
        </div>
      </Suspense>
    </section>
  );
};

export default Home;
