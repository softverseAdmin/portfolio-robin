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
        style={{
          position: "absolute",
          zIndex: "3",
          width: "100vw",
          backgroundColor: "#1d1d1d ",
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
            <MDBIcon className="text-white" icon="bars" fas size={"2x"} />
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
        <div
          className="shadow-3 p-4 mt-4"
          style={{
            backgroundColor: "#1d1d1d ",
          }}
        >
          <MDBContainer
            className="d-flex container justify-content-center mt-4 flex-column align-items-center gap-3"
            fluid
          >
            <MDBNavbarBrand className="text-primary w-100" href="/home">
              <MDBBtn
                outline
                color="success"
                className="me-2 w-100"
                type="button"
              >
                Home
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary w-100" href="/projects">
              <MDBBtn
                outline
                color="success"
                className="me-2 w-100"
                type="button"
              >
                About
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary w-100" href="/contact">
              <MDBBtn
                outline
                color="success"
                className="me-2 w-100"
                type="button"
              >
                Projects
              </MDBBtn>
            </MDBNavbarBrand>
            <MDBNavbarBrand className="text-primary w-100" href="/about">
              <MDBBtn
                outline
                color="success"
                className="me-2 w-100"
                type="button"
              >
                Contact
              </MDBBtn>
            </MDBNavbarBrand>
          </MDBContainer>
        </div>
      </MDBCollapse>
    </>
  );
}
