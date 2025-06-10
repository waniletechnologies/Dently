import React from "react";
import Header from "./parts/Header";
import TeamInsightsAndAlerts from "./parts/TeamInsightsAndAlerts";
import TeamPerformance from "./parts/TeamPerformance";
import TrainingCompliance from "./parts/TrainingCompliance";

const page = () => {
  return (
    <div className="bg-[#F4F5F7] text-black pt-[50px] pb-[37px] px-[23px]">
      <Header />
      <TeamInsightsAndAlerts />
      <TeamPerformance />
      <TrainingCompliance />
    </div>
  );
};

export default page;
