import React from 'react';
import bgAbout from "../../assets/videos/bgAbout.png";
import {
  SiFacebook, 
  SiTwitter, 
  SiLinkedin, 
  SiInstagram, 
  SiPinterest, 
  SiMysql,
  SiRubyonrails,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiPython,
  SiPhp,
  SiJavascript
 } from "react-icons/si";

import './About'; // Import your CSS file
const divStyle = {
  backgroundImage: `url(${bgAbout})`,
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat', // Set background to not repeat
   // Set the height to auto
};
export default function About() {
  return (
    <div className="container-fluid h-100">
      <div className="container d-flex justify-content-center align-items-center mt-5 py-4">
        <div style={divStyle} className="justify-content-center align-items-center w-100">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Quibusdam nobis repudiandae doloribus facere fugit, dolore <br />
              excepturi perspiciatis temporibus accusantium cum voluptat <br />
            </p>
          </div>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column gap-4">
              <h3 className=""> FIND ME </h3>
              <div className="d-flex gap-5">
                <a
                  href="https://www.facebook.com/rabin.adhikari.3532"
                  className="text-white bg-dark text-center shadow-lg"
                  style={{ width: "60px", height: "45px" }}
                >
                  <SiFacebook className="shadow-lg" size={40} />
                </a>
                <a
                  href="https://twitter.com/shribinstore"
                  className="text-white bg-dark text-center shadow-lg"
                  style={{ width: "60px", height: "45px" }}
                >
                  <SiTwitter size={40} />
                </a>
                <a href="https://www.linkedin.com/in/rabin-adhikari-52573320b/" className="text-white bg-dark rounded-circle text-center shadow-lg" style={{width: "60px", height:"60px"}}>
                  <SiLinkedin size={40} />
                </a>
              </div>
              <div className="d-flex gap-5">
                <a href="https://www.linkedin.com/in/rabin-adhikari-52573320b/" className="text-white bg-dark rounded-circle text-center shadow-lg" style={{width: "60px", height:"60px"}}>
                  <SiInstagram size={40} />
                </a>
                <a href="https://www.linkedin.com/in/rabin-adhikari-52573320b/" className="text-white bg-dark rounded-circle text-center shadow-lg" style={{width: "60px", height:"60px"}}>
                  <SiPinterest size={40} />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column gap-4 px-3">
              <h3 className=""> BEST SKILLS ON </h3>
              <div className="d-flex gap-5">
                <SiPhp size={40} /> <SiPython size={40} />
                <SiJavascript size={40} /> <SiMysql size={40} /> <br />
              </div>
              <div className='d-flex gap-5'>
                <SiRubyonrails size={40} />
                <SiPostgresql size={40} />
                <SiTypescript size={40} />
                <SiAmazonaws size={40} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
