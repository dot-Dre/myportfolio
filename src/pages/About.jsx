import React from "react";
import Typewriter from "typewriter-effect";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="text-9xl pt-12 font-bold text-black">
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
      <div className="text-2xl text-gray-900 pt-11">
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
      <div className="text-lg text-gray-900 pt-7">
        My interests span across software development, cyber security, machine learning, and dev-ops. I a goal driven person and a dillegent learner. 
      </div>

      <div className="text-lg text-gray-900 pt-7">
        Outside of my studies I enjoy playing the piano and sports such as Basketball 🏀 and Volleyball 🏐. 
      </div>
      <div className="text-lg text-gray-800 pt-2">
      
      
        
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
