import React from "react";

const PlayIcon = ({ color = "#000", size = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
  >
    <title>play</title>
    <desc>Created with Sketch Beta.</desc>
    {/* Normalized simple play triangle */}
    <path d="M5 3v18l16-9z" />
  </svg>
);

export default PlayIcon;
