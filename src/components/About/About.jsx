import React from 'react';
import img from '../../assets/videos/rbn.png';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaPhp, FaPython,  } from "react-icons/fa";
import {RiJavascriptFill} from "react-icons/ri";
import {SiMysql} from "react-icons/si";

export default function About() {
  return (
    <div className="container-fluid h-100">
      <div className="container d-flex justify-content-center align-items-center mt-5 py-4">
        <div className="d-flex flex-column mt-5 w-50">
          <div className="title my-3">
            <h3
              className="fs-5"
              style={{
                fontFamily: "ariel",
                fontWeight: "400",
              }}
            >
              {" "}
              Welcome To My World.{" "}
            </h3>
          </div>
          <div className="text-white">
            <h2
              style={{
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
              className="fs-1 my-3"
            >
              Hi, I'm <span style={{ color: "#c30147" }}>Podey Adhikari </span>
              <br />A Professional Coder.
            </h2>
          </div>
          <div className="des">
            <p
              style={{
                fontFamily: "ariel",
                fontWeight: "400",
              }}
              className="my-3 fs-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam nobis repudiandae doloribus facere fugit, dolore
              excepturi perspiciatis temporibus accusantium cum voluptat
            </p>
          </div>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column gap-4">
              <h3 className=""> FIND ME </h3>
              <div className="d-flex gap-5">
                <a
                  href=""
                  className="text-white bg-dark text-center shadow-lg"
                  style={{ width: "60px", height: "45px" }}
                >
                  <BsFacebook className="shadow-lg" size={40} />
                </a>
                <a
                  href=""
                  className="text-white bg-dark text-center shadow-lg"
                  style={{ width: "60px", height: "45px" }}
                >
                  <BsTwitter size={40} />
                </a>
                <a href="" className="text-white bg-dark rounded-circle text-center shadow-lg" style={{width: "60px", height:"60px"}}>
                  <BsLinkedin size={40} />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column gap-4 px-3">
              <h3 className=""> BEST SKILLS ON </h3>
              <div className="d-flex gap-5">
                <FaPhp size={40} /> <FaPython size={40} />
                <RiJavascriptFill size={40} /> <SiMysql size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center w-50">
          <img src={img} alt="" className="h-100" />
        </div>
      </div>
    </div>
  );
}
