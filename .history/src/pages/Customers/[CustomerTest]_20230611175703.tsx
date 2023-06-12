import { getAllClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticPaths = async () => {
  const allClientData = await getAllClientData();
  const paths = allClientData.map(({ clientData }) => ({ params: { clientData } }));
  return {
    paths,
    fallback: "blocking",
  };
};

const CustomerTest = () => {
  return <div>Test</div>;
};

export default CustomerTest;
