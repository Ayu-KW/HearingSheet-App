import React from "react";

const HearingItem = [
  { title: "会社名", text: "Item 1" },
  { title: "サービス名", text: "Item 2" },
  { title: "業種", text: "Item 3" },
  { title: "企業サイド：担当者名", text: "Item 4" },
  { title: "制作サイド：担当者名", text: "Item 5" },
];

export const ClientHearingItem = ({ clientPage }: any) => {
  return (
    <React.Fragment>
      {HearingItem.map((item, index) => {
        const dtClassName =
          index === 0
            ? "col-span-1 bg-cyan-600 text-white font-bold px-2 py-3"
            : "col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed";
        const ddClassName =
          index === 0
            ? "col-span-3 px-2 py-3"
            : "col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed";
        return (
          <React.Fragment key={index}>
            <dt className={dtClassName}>{item.title}</dt>
            <dd className={ddClassName}>{item.text}</dd>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
