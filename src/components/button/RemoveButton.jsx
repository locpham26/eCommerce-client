import React from "react";

function RemoveButton({ onRemove }) {
  return (
    <button onClick={onRemove} className="btn btn-warning btn-sm">
      Remove
    </button>
  );
}

export default RemoveButton;
