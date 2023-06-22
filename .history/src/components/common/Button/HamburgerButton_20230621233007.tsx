import React, { FC, MouseEventHandler } from "react";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
};

const HamburgerButton: FC<Props> = ({ open, onClick }) => {
  return (
    <button
      type="button"
      className={`md:hidden py-[15px] px-[15px] grid gap-2 duration-300 relative ${
        open ? "bg-sky-300" : ""
      }`}
      aria-expanded={open}
      onClick={onClick}
    >
      <div className={`w-8 h-0.5 bg-white ${open ? "absolute top-[50%]" : ""}`}></div>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </button>
  );
};

export default HamburgerButton;
