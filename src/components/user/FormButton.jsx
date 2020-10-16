import React from "react";

function FormButton({ name, disabled }) {
  return (
    <div>
      <button disabled={disabled} type="submit" className="btn btn-primary">
        {name}
      </button>
    </div>
  );
}

export default FormButton;
