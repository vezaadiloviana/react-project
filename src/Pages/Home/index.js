import React from "react";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";

const Home = () => {
  return (
    <div>
      <Layout
      content={
        <>
          <Header/>
        </>
      }
      />
    </div>
  );
};

export default Home;
