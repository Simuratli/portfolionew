import React from 'react';
import { InputPropTypes } from './input.types';
import classes from '../../styles/components/input.module.scss';

function Input({ onChange, name, placeholder, value, type, label }: InputPropTypes) {
  return (
    <div className={classes.input}>
      <label className={classes.input__label} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input__item}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
