import React from "react";
import { ButtonPropTypes } from "./button.types";

function Button({ text, onClick, color }: ButtonPropTypes) {
  return (
    <button className={color} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
