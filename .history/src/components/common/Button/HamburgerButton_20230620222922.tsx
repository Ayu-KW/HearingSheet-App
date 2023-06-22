import React from "react";

const HamburgerButton = () => {
  const onClick = {};
  return (
    <button type="button" className="bg-sky-300 p-2 grid gap-2" onClick={onClick}>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </button>
  );
};

export default HamburgerButton;
