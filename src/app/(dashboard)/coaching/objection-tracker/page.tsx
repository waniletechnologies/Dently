import React from "react";
import Header from "./parts/Header";
import ObjectionsOverTime from "./parts/ObjectionsOverTime";
import ObjectionCatalog from "./parts/ObjectionCatalog";

const page = () => {
  return (
    <div className="min-h-screen pt-[50px] pb-[37px] px-[23px] bg-[#F4F5F7] text-black">
      <Header />
      <ObjectionsOverTime />
      <ObjectionCatalog />
    </div>
  );
};

export default page;
