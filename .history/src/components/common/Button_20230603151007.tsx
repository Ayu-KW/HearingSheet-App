import Link from "next/link";
import React from "react";

type Props = {
  children: string;
};

export const Button = (props: Props) => {
  const { children } = props;
  return <Link href={"/"}>{children}</Link>;
};
