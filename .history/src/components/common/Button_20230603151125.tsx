import Link from "next/link";
import React from "react";

type Props = {
  children: string;
};

export const Button = (props: Props) => {
  const { { children } } = props;
  return (
    <Link
      href={"/"}
      className="bg-rose-400 rounded-md py-1 px-2 hover:bg-rose-300 duration-500"
    >
      {children}
    </Link>
  );
};
