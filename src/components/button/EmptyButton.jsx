import React from "react";

function EmptyButton({ onEmpty }) {
  return (
    <button className="btn btn-info" onClick={onEmpty}>
      Empty Cart
    </button>
  );
}

export default EmptyButton;
