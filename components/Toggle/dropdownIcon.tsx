import React from "react";
import { ToggleDropdownIconPropTypes } from "./toggle.types";

function DropdownIcon({ rotate }: ToggleDropdownIconPropTypes) {
  return (
    <svg
      style={{ transform: rotate ? "rotate(180deg)" : "rotate(0deg)" }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2573 7L5.7394 7L9.99836 14.0154L14.2573 7Z"
        fill="#37352F"
      />
    </svg>
  );
}

export default React.memo(DropdownIcon);
