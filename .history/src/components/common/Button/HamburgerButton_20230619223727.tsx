import React from "react";

const HamburgerButton = () => {
  return (
    <button type="button" className=" bg-orange-300 p-2">
      <div className="w-8 h-0.5 bg-black"></div>
      <div className="w-8 h-0.5 bg-black"></div>
      <div className="w-8 h-0.5 bg-black"></div>
    </button>
  );
};

export default HamburgerButton;
