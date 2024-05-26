import React from "react";
import Typewriter from "typewriter-effect";
import cv from "../assets/cv.JPG";

const CV = () => {
  return (
    <>
      <div className="text-6xl pt-12 font-bold text-black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Here's My CV 📃")
              .changeDelay(10)
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
      <div className="text-8xl pt-2 font-bold text-black">
        <img src={cv} alt="Description of the image" />
      </div>
    </>
  );
};

export default CV;
