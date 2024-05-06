import React from "react";
import imageUrl1 from "../../assets/suplly_chain_assets/Group 231.png";
const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#000000" }}>SUPPLY CHAIN</span>{" "}
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              PLANNING
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Following design delineation, meticulous Supply Chain Planning
            ensues. This entails meticulous inventory forecasting, streamlined
            product delivery logistics, optimal manufacturing capacity
            utilization, and end-to-end lead time analysis. Additionally,
            inherent Supply Chain constraints are factored in. The Planning
            phase transcends material and service flow coordination to encompass
            seamless information exchange, ensuring supply-demand equilibrium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
