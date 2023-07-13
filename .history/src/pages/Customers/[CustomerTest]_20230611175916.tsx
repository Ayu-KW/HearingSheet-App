import { getAllClientData, getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticProps = async ({ params }: any) => {
  const post = await getSingleClientData(params.clientData);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

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