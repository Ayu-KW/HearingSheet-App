import React from "react";

const HearingItem = [{ title: "", text: "Item 1" }];
const ClientHearingItem = HearingItem.map((item, index) => {
  return (
    <>
      <dt
        key={index}
        className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed"
      >
        {item.title}
      </dt>
      <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
        {}
      </dd>
    </>
  );
});

export default ClientHearingItem;
