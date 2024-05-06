import React from "react";
import imageUrl1 from "../../assets/operational_excellence_assets/Group 10.png";
const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11">
          <p className="text-lg lg:text-xl text-black leading-7 mx-4">
            In conclusion, achieving operational excellence requires commitment,
            adaptability, and a focus on continuous improvement. With IT
            Solutions, you can achieve the operational excellence needed to
            propel your organization forward.
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
