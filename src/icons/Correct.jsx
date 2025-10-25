import React from "react";

const CorrectIcon = ({ color = "currentColor", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.4,72c-1.2,0-2.3-0.4-3.2-1.3L11.3,50.8c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0l16.8,16.7 l39.9-39.8c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4l-43.1,43C36.7,71.6,35.6,72,34.4,72z"
      fill={color}
    />
  </svg>
);

export default CorrectIcon;
