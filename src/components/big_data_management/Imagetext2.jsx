import React from "react";
import imageUrl1 from "../../assets/big_data_assets/Group 239.png"; // Update with your image file path

function Imagetext() {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              BI Specialists
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-black leading-7">
            Change management planning is the cornerstone of your organizational
            structure. Robust change planning ensures that your initiative is
            constructed on a stable foundation. Our change managers are adept at
            dissecting a change strategy into monthly, weekly, and daily
            planning schedules. Now that the strategy and planning are
            finalized, the real work commences!
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Imagetext;
