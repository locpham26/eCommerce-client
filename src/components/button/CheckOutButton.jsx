import React from "react";

function CheckOutButton({ onCheckOut }) {
  return (
    <button className="btn btn-success" onClick={onCheckOut}>
      CheckOut
    </button>
  );
}

export default CheckOutButton;
