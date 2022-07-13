import React from "react";
import Layout from "./components/Layout";
import MainInfo from "./components/MainInfo";

type Props = {};

const App = (props: Props) => {
  return (
    <Layout>
      <MainInfo />
    </Layout>
  );
};

export default App;
