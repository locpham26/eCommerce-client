import React from "react";

function AddButton({ onAdd }) {
  return (
    <button className="btn btn-warning btn-sm" onClick={onAdd}>
      Add
    </button>
  );
}

export default AddButton;
