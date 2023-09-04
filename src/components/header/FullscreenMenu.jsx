import React, { useState } from "react";
import {
  MDBNavbarBrand,
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar
        className="bg-light"
        style={{
          position: "absolute",
          zIndex: "3",
          width: "100vw",
        }}
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            className="ms-auto"
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon="bars" fas size={"2x"}/>
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse
        style={{
          position: "absolute",
          zIndex: "2",
          width: "100vw",
        }}
        show={showNavExternal3}
      >
        <div className="bg-light shadow-3 p-4 mt-4">
          <MDBContainer
            className="d-flex justify-content-center mt-4 flex-column align-items-center gap-3"
            fluid
          >
            <MDBNavbarBrand className="text-primary" href="/home">
              <MDBBtn outline color="success" className="me-2" type="button">
                Navbar
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary" href="/projects">
              <MDBBtn outline color="success" className="me-2" type="button">
                Navbar
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary" href="/contact">
              <MDBBtn outline color="success" className="me-2" type="button">
                Navbar
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary" href="/about">
              <MDBBtn outline color="success" className="me-2" type="button">
                Navbar
              </MDBBtn>
            </MDBNavbarBrand>
          </MDBContainer>
        </div>
      </MDBCollapse>
    </>
  );
}
