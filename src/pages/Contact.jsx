import React from "react";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <>
      <div className="text-6xl pt-12 font-bold text-black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Contact Me")
              .changeDelay(10)
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
      <div className="text-3xl pt-12 pl-4 text-black">
        <p>✉️ andrelepardo@gmail.com</p>
        <p className="pt-4">📞 021 087 46109</p>
      </div>
    </>
  );
};

export default Contact;
