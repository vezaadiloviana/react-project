import React from "react";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";

const Home = () => {
  return (
    <div>
      <Layout
      content={
        <>
          <Header headerTitle={'Welcome to Haha React'} />
        </>
      }
      />
    </div>
  );
};

export default Home;
