import React from "react";

const ModalComponent = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalComponent;
