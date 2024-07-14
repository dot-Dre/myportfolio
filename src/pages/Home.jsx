import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Cloud from "../models/Cloud";
import Loading from "../components/Loading";
import Modal from "@mui/material/Modal";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import About from "./About";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import cv from "../assets/cvV5.pdf";

import { motion } from "framer-motion";

import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <section className="home-sec w-full relative">
        <Suspense fallback={<Loading />}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <>
              <Document file={cv}>
                <Page
                  pageNumber={1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </>
          </Modal>
          <div className="w-1/3 h-1/6 absolute top-20 right-12 z-10 flex flex-col items-end pr-10">
            <ButtonGroup
              variant="contained"
              aria-label="Basic button group"
              size="large"
            >
              <Button
                onClick={() => {
                  navigate("/Projects");
                }}
              >
                <span className="font-bold">Projects</span>
              </Button>
              <Button
                onClick={() => {
                  handleOpen();
                }}
              >
                <span className="font-bold">CV</span>
              </Button>
            </ButtonGroup>
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
                <Cloud
                  orbit={false}
                  rot={[-Math.PI / 10, 1, 0]}
                  pos={[-18, 4, 3]}
                  zoom={false}
                />
                <Cloud
                  orbit={true}
                  rot={[-Math.PI / 20, 0, 0]}
                  pos={[12, 0, -10]}
                  zoom={false}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="w-1/2 h-screen absolute left-1/2 top-24 transform -translate-x-1/2 z-10 flex flex-col items-start pl-10">
            <About />
          </div>
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <a href="https://www.linkedin.com/in/andre-raphael-lepardo-575562212">
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
        </Suspense>
      </section>
    </motion.div>
  );
};

export default Home;
