import React, { FC, MouseEventHandler } from "react";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
};

const HamburgerButton: FC<Props> = ({ open, onClick }) => {
  return (
    <button
      type="button"
      className={`md:hidden h-[50px] w-[50px] duration-500
        flex flex-wrap items-center justify-center content-center gap-[10px]
        relative ${open ? "bg-sky-300 z-10" : ""}`}
      aria-expanded={open}
      onClick={onClick}
    >
      <span
        className={`w-[30px] h-[2px] duration-500 ${
          open
            ? "bg-blue-400 absolute top-[50%] left-[50%] translate-x-[-50%] rotate-45"
            : "bg-white"
        }`}
      ></span>
      <span
        className={`w-[30px] h-[2px] duration-500 ${
          open
            ? "bg-sky-300 absolute top-[50%] left-[50%] translate-x-[-50%] rotate-75"
            : "bg-white"
        }`}
      ></span>
      <span
        className={`w-[30px] h-[2px] duration-500 ${
          open
            ? "bg-blue-400 absolute top-[50%] left-[50%] translate-x-[-50%] -rotate-45"
            : "bg-white"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
