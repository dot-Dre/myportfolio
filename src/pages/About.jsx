import React from "react";
import Typewriter from "typewriter-effect";
import Stack from "@mui/material/Stack";
import tools from "./tools";

const About = () => {
  return (
    <>
      <div className="text-9xl pt-20 font-bold text-black">
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
      <div className="pl-2">
        <div className="text-2xl text-gray-900 pt-11">
          I'm <span className="font-bold">Andre Lepardo</span>, a fourth year
          Software Engineering student @{" "}
          <a
            href="https://www.wgtn.ac.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold text-green-400">VUW</span>
          </a>
        </div>
        <div className="text-lg text-gray-900 pt-7">
          My interests span across software development, cyber security, machine
          learning, and dev-ops. I am goal driven person and a dillegent learner.
        </div>

        <div className="text-lg text-gray-900 pt-7">
          Outside of my studies I enjoy playing the piano and sports such as
          Basketball 🏀 and Volleyball 🏐.
        </div>

        <div className="text-base text-gray-900 pt-5">
          Get in touch with me at <span className="font-bold text-violet-700"><a href="mailto:andrelepardo@gmail.com">andrelepardo@gmail.com</a></span>
        </div>

        <div className="text-lg font-bold text-gray-600 pt-20">
          Things I like to work with:
        </div>
        <div className="text-lg text-gray-800 pt-2">
          <Stack direction="row" spacing={1} className="mt-4">
            {tools.map((tag, index) => (
              <item>
                <img className="w-20 h-20" src={tag} />
              </item>
            ))}
          </Stack>
        </div>
      </div>
      {/* <div className="text-lg text-gray-800 pt-6">
        <ul>
          <li>Cyber Security 🔒</li>
          <li>Machine Learning 🧠</li>
          <li>WebDev 🌐</li>
          <li>DevOps 🛠️</li>
        </ul>
      </div> */}
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
    </>
  );
};

export default About;
