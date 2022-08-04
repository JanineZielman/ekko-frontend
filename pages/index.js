import React from "react";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";

const Home = ({ page }) => {
  console.log(page)
  return (
    <Layout page={page}>
     
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  
  const [pageRes] = await Promise.all([
    fetchAPI("/global", { populate: "*", locale: locale }),
  ])


  return {
    props: {
      page: pageRes.data.attributes,
    },
    revalidate: 1,
  }
}

export default Home;