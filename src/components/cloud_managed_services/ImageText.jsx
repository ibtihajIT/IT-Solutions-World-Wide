import React from "react";
import imageUrl1 from "../../assets/cloud_managed_assets/Group 221.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span className="font-semibold">We </span>
            <span style={{ color: "#278083", fontWeight: "bold" }}>Offer</span>
          </h3>
          <h4 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Cloud Strategy Development
            </span>
          </h4>
          <p className="text-lg lg:text-xl text-black leading-7 mx-4">
            Craft a comprehensive roadmap tailored to your organizational
            objectives, ushering in a cloud-first approach to address prevalent
            challenges and opportunities.
          </p>
          <h4 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Cloud Migration
            </span>
          </h4>
          <p className="text-lg lg:text-xl text-black leading-7 mx-4">
            Facilitate a seamless transition to cloud-based solutions,
            leveraging proven methodologies to mitigate risk and ensure
            sustainability.
          </p>
          <h4 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Cloud Management and Operation
            </span>
          </h4>
          <p className="text-lg lg:text-xl text-black leading-7 mx-4">
            Harness the power of as-a-service options to streamline management
            across networking, data centers, and hybrid cloud implementations,
            ensuring alignment with business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
