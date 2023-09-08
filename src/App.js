import React, { useState } from "react";
import "./assets/css/App.css";
import "./assets/js/App.js";
import MenuItem from "../src/components/header/MenuItem.jsx";
import MenuButton from "../src/components/header/MenuButton.jsx";
import Menu from "../src/components/header/Menu.jsx";
import Footer from "../src/components/footer/Footer.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
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
    logo: {
      margin: "0 auto",
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
        <div style={styles.logo}>Logo</div>
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
      <div style={styles.body}>
        <Footer name="Menu" />
      </div>
    </div>
  );
}

export default App;


