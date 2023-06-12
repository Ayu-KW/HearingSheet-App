import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticProps = async ({ params }: any) => {
  const clientPage = await getSingleClientData(params.slug);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

const CustomerID = () => {
  return <div>Test</div>;
};

export default CustomerID;
