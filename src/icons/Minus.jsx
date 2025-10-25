import React from "react";

const MinusIcon = ({ color = "#000", size = 24 }) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z"
    />
  </svg>
);

export default MinusIcon;
