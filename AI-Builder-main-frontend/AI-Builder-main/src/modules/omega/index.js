import React from "react";

import Tabs from "./components/tab/Tab";
import Layout from "./layouts/Layout";


function Omega() {
  return (
    <div className="px-[4%]">
      <Layout>
        <div className="mt-[5%]">
          <Tabs />
        </div>
      </Layout>
    </div>
  );
}

export default Omega;
