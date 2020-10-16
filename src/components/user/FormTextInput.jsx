import React from "react";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Input({ name, label, placeholder, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{Capitalize(label)}</label>
      <input
        placeholder={Capitalize(placeholder)}
        name={name}
        id={name}
        {...rest}
        className="form-control"
      />
    </div>
  );
}

export default Input;
