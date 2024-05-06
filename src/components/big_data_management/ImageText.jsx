import React from "react";
import imageUrl1 from "../../assets/big_data_assets/Group 237.png";
const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Data Analyst
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-black leading-7">
            Data analysts play a pivotal role in transforming raw data into
            actionable insights that drive strategic decision-making. Leveraging
            their expertise, we facilitate improved business processes,
            heightened efficiency, and a competitive edge in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
