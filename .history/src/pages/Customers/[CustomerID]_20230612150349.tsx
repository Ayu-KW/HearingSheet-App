import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

//
export const getStaticProps = async ({ params }: any) => {
  const clientPage = await getSingleClientData(params.CustomerID);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

//
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "CUS-1" } }],
    fallback: "blocking",
  };
};

const CustomerID = () => {
  return <div>Test</div>;
};

export default CustomerID;
