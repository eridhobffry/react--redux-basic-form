import React from "react";

const Input = ({ onChange, value, placeholder, type, name }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default Input;
