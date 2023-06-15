import React from "react";

const ClientHearingItem = () => {
  const HearingItem = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  return         <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
  制作サイド：担当者名
</dt>
<dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
  {}
</dd>;
};

export default ClientHearingItem;
