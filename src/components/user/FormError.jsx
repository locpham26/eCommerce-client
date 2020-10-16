import React from "react";

function FormError({ name, displayed }) {
  return (
    <div
      style={{
        color: "red",
        marginBottom: 10,
        display: displayed ? "block" : "none",
      }}
    >
      {name}
    </div>
  );
}

export default FormError;
