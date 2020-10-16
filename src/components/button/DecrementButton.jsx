import React from "react";

function DecrementButton({ onDecrement }) {
  return (
    <button className="btn btn-outline-danger btn-sm" onClick={onDecrement}>
      -
    </button>
  );
}

export default DecrementButton;
