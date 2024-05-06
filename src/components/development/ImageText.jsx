import React from "react";
import imageUrl1 from "../../assets/development_assets/Group 227.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <p className="text-lg lg:text-xl text-black leading-7">
            Welcome to IT Solutions Worldwide, where we bring innovation and
            expertise together. We're here to help you with web, app, and
            software development tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
