import React, { useState } from 'react';
import classes from '../../styles/components/toggle.module.scss';
import { TogglePropTypes } from './toggle.types';
import DropdownIcon from './dropdownIcon';

function Toggle({ header, children }: TogglePropTypes) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.toggle}>
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={classes.toggle__header}
      >
        <DropdownIcon rotate={open} />
        <span>{header}</span>
      </div>
      <div
        className={`${classes.toggle__content} ${
          open && classes.toggle__content__open
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default React.memo(Toggle);
