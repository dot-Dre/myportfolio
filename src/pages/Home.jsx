import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Canvas } from "@react-three/fiber";
import Cloud from "../models/Cloud";
import Loading from "../components/Loading";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import About from "./About";
import CV from "./CV";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate()

  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const [swiper, setSwiper] = useState(null);

  return (
    <section className="w-full h-screen relative">
      <Suspense fallback={<Loading />}>
        <div className="w-1/3 h-1/6 absolute top-20 right-12 z-10 flex flex-col items-end pr-10">
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            size="large"
          >
            <Button
              onClick={() => {
                swiper.slideTo(0);
              }}
            >
              <span className="font-bold">About me</span>
            </Button>
            <Button
              onClick={() => {
                swiper.slideTo(1);
              }}
            >
              <span className="font-bold">CV</span>
            </Button>
            <Button
              onClick={() => {
                swiper.slideTo(2);
              }}
            >
              <span className="font-bold">Contact Me</span>
            </Button>
            <Button
              onClick={() => {
                navigate('/Projects')
              }}
            >
              <span className="font-bold">Projects</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className="w-1/3 h-screen absolute left-12 top-6 right-0 z-10 flex flex-col items-start pl-10">
          <Swiper
            direction="vertical"
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={setSwiper}
          >
            <SwiperSlide>
              <About />
            </SwiperSlide>
            <SwiperSlide>
              <CV />
            </SwiperSlide>
            <SwiperSlide>
              <Contact />
            </SwiperSlide>
          </Swiper>
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
              <Cloud pos={[0, 0, -12]} zoom={true}/>
            </Suspense>
          </Canvas>
        </div>
      </Suspense>
    </section>
  );
};

export default Home;
