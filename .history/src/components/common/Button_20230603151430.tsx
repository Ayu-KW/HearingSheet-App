import Link from "next/link";
import React from "react";

// 型定義（props
type Props = {
  children: string;
};

// 共通のボタンコンポーネント
export const Button = (props: Props) => {
  const { children } = props;
  return (
    <Link href={"/"} className=" rounded-md py-1 px-2 hover:bg-rose-300 duration-500">
      {children}
    </Link>
  );
};
