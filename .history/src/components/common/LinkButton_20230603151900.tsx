import Link from "next/link";
import React from "react";

// 型定義（props
type Props = {
  children: string;
  style: string;
};

// 共通のボタンコンポーネント
export const Button = (props: Props) => {
  const { children, style } = props;
  return (
    <Link href={"/"} className={`rounded-md py-1 px-2 duration-500 ${style}`}>
      {children}
    </Link>
  );
};
