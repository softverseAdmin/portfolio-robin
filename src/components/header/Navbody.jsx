import React from "react";
import "../../assets/css/Navbody.css";
import Typewriter from "typewriter-effect";
import rbn from "../../assets/videos/rbn.png";
import { motion } from "framer-motion";

const Navbody = () => {
  return (
    <motion.div
      className="bg-image vw-100 position-relative"
      style={{
        backgroundImage: `url(${rbn})`,
        backgroundPosition: "left",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "95vh",
        zIndex: "1",
      }}
    >
      <div className="container ps-3 pt-3 h-100">
        <div className="row d-flex flex-column flex-md-row h-100">
          <div className="col"></div>
          <div className="col d-flex justify-content-center align-items-start flex-column">
            <div className="text-center fs-2 my-2">
              <h1 className="fw-bolder fs-1">I'm Rabin Adhikari</h1>
            </div>
            <div className="text-center fs-1 fw-bolder">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="fs-3 py-2 fst-normal text-start">
              I provide real life solutions to your <br /> website & <br /> web
              application problems.
            </p>

            <div className="d-flex gap-4 w-75 justify-content-start">
              <button
                className="btn btn-dark btn-lg btn-outline-light"
                style={{ width: "120px" }}
              >
                Resume
              </button>
              <button
                className="btn btn-dark btn-lg btn-outline-light"
                style={{ width: "120px" }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbody;
