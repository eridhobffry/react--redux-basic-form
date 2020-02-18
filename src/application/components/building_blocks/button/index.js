import React from "react";

const Button = ({ onClick, text, isDisabled = false }) => {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
