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
    paths: [
      { params: { slug: "post-1" } },
      { params: { slug: "post-2" } },
      { params: { slug: "post-3" } },
    ],
    fallback: "blocking",
  };
};

const CustomerID = () => {
  return <div>Test</div>;
};

export default CustomerID;
