import React from "react";
import "../../assets/css/App.css";
import "../../assets/js/App.js";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        position: "absolute",
        zIndex: "2",
        width: "100vw",
      }}
    >
      <div className="container-lg">
        <Navbar.Brand href="#home">
          <h3 className="fs-5">Rabin</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-Navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-sm-2 fw-bold" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-sm-2 fw-bold" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="mx-sm-2 fw-bold" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="mx-sm-2 fw-bold" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
