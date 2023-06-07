import Link from "next/link";
import React from "react";

// 型定義（props
type Props = {
  children: ReactDOM;
  style: string;
  url: string;
};

// 共通のボタンコンポーネント
const LinkButton = (props: Props) => {
  const { children, style, url } = props;
  return (
    <Link href={url} className={`rounded-md duration-500 ${style}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
