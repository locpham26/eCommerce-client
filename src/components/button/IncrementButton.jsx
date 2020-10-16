import React from "react";

function IncrementButton({ onIncrement }) {
  return (
    <button className="btn btn-outline-primary btn-sm" onClick={onIncrement}>
      +
    </button>
  );
}

export default IncrementButton;
