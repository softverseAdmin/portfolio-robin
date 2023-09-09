import React, { useState } from "react";
import ModalComponent from "./ModalComponent"; // Import your modal component here

const ButtonBackgroundShine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonStyle1 = {
    background: "linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)",
    backgroundSize: "200% 100%",
    animation: "background-shine 2s linear infinite",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "2px solid #1e2631",
    color: "#ccc",
    fontWeight: "bold",
    transition: "color 0.2s ease",
    outline: "none",
    cursor: "pointer",
    marginRight: "10px", 
  };

  const buttonStyle2 = {
    background: "linear-gradient(110deg, #000103 45%, #1e2631 55%, #000103)",
    backgroundSize: "200% 100%",
    marginLeft: "40px",
    animation: "background-shine 2s linear infinite",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "2px solid #1e2631",
    color: "#ccc",
    fontWeight: "bold",
    transition: "color 0.2s ease",
    outline: "none",
    cursor: "pointer",
    marginRight: "10px", 
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="d-flex w-100">
      <button type="button" className="form-control btn w-25" style={buttonStyle1} onClick={openModal}>
        Detail
      </button>
      <button type="button" className="form-control btn w-25" style={buttonStyle2} onClick={openModal}>
        Contact
      </button>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <ModalComponent closeModal={closeModal} />}
    </div>
  );
};

export default ButtonBackgroundShine;