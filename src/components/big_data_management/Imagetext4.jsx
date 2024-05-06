import React from "react";
import imageUrl1 from "../../assets/big_data_assets/Group 242.png"; // Update with your image file path

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Data Migration Analysts
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-black leading-7">
            Navigating ERP transitions or system integrations requires
            meticulous planning and execution. Our data migration analysts offer
            comprehensive support, encompassing data analysis, mapping,
            transformation, cleanup, documentation, and post-migration
            assistance. Whether you need short-term assistance or long-term
            engagement, our flexible experts are committed to ensuring the
            success of your projects.
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
