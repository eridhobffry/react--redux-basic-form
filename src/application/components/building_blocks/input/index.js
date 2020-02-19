import React from "react";

const Input = ({
  onChange,
  value,
  placeholder,
  type,
  name,
  onEnterToInputValue
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      name={name}
      onKeyPress={onEnterToInputValue}
    />
  );
};

export default Input;
