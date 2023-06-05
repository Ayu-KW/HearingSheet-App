import Link from "next/link";
import React from "react";

// 型定義（props
type Props = {
  children: string;
  style: string;
  url:string
};

// 共通のボタンコンポーネント
const LinkButton = (props: Props) => {
  const { children, style, url } = props;
  return (
    <Link href={url}} className={`rounded-md py-1 px-2 duration-500 ${style}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
