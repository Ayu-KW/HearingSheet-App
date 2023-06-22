import React, { FC } from "react";

type Props = { open: boolean };

const HamburgerButton: FC<Props> = ({ open }) => {
  return (
    <button
      type="button"
      className="p-2 grid gap-2"
      aria-expanded={open}
      onClick={toggleFunction}
    >
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </button>
  );
};

export default HamburgerButton;
