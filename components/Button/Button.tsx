import React from 'react';
import { ButtonPropTypes } from './button.types';
function Button({ text }: ButtonPropTypes) {
  return <button>{text}</button>;
}

export default Button;
