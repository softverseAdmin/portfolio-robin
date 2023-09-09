import React, { useState } from "react";
import MenuItem from "./components/header/MenuItem";
import MenuButton from "./components/header/MenuButton";
import Menu from "./components/header/Menu";
import Footer from "./components/footer/Footer";
import TopContent from "./components/top/TopContent"; // Import TopContent
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    alert("handle link");
  };

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: "99",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      background: "black",
      width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      filter: menuOpen ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  const pathName = window.location.pathname; // Get the path of the URL

  const menu = [
    "Who Am I?",
    "What I Had Done?",
    "What Can We Do?",
    "What I Am Doing?",
    "How To Reach Me?",
    "What Is My Company?",
  ];

  const menuItems = menu.map((val, index) => (
    <MenuItem key={index} delay={`${index * 0.1}s`} onClick={handleLinkClick}>
      {val}
    </MenuItem>
  ));

  return (
    <div>
      <div style={styles.container}>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color="white" />
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
      <div className="MainContent">
        {pathName === "/" && <TopContent />} {/* Render TopContent */}
        {pathName === "/projects" && <Projects />}
        {pathName === "/contact" && <Contact />}
        {pathName === "/about" && <About />}
      </div>

      <div style={styles.body}>
        <Footer name="Menu" />
      </div>
    </div>
  );
}

export default App;