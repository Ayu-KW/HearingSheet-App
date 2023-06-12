import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticProps = async ({ params }: any) => {
  const post = await getSingleClientData(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const CustomerID = () => {
  return <div>Test</div>;
};

export default CustomerID;
