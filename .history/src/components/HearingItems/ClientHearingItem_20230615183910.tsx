import React from "react";

const HearingItem = [
  { id: 1, title: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];
const ClientHearingItem = HearingItem.map((item) => {
  return (
    <>
      <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
        {item.title}
      </dt>
      <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
        {}
      </dd>
    </>
  );
});

export default ClientHearingItem;
