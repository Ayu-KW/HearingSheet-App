import React, { FC, MouseEventHandler } from "react";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
};

const HamburgerButton: FC<Props> = ({ open, onClick }) => {
  return (
    <button
      type="button"
      className={`md:hidden h-[50px] w-[50px] duration-300 flex flex-wrap relative ${
        open ? "bg-sky-300" : ""
      }`}
      aria-expanded={open}
      onClick={onClick}
    >
      <div
        className={`w-[30px] h-[2px] bg-white duration-500 ${
          open
            ? "bg-blue-400 absolute top-[50%] left-[50%] translate-x-[-50%] rotate-45"
            : ""
        }`}
      ></div>
      <div
        className={`w-[30px] h-[2px] bg-white duration-500 ${
          open
            ? "bg-blue-400 absolute top-[50%] left-[50%] translate-x-[-50%] -rotate-45"
            : ""
        }`}
      ></div>
      <div className={`w-[30px] h-[2px] bg-white ${open ? "bg-inherit" : ""}`}></div>
    </button>
  );
};

export default HamburgerButton;
