import { getAllClientData, getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticProps = async ({ params }: any) => {
  const clientPage = await getSingleClientData(params.ID);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const allClientData = await getAllClientData();
  const paths = allClientData.map(({ ID }) => ({ params: { ID } }));
  return {
    paths,
    fallback: "blocking",
  };
};

const CustomerTest = () => {
  console.log(allClientData);
  return <div>Test</div>;
};

export default CustomerTest;
