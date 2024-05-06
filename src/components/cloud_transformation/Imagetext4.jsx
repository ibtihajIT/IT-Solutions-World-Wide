import React from "react";
import imageUrl1 from "../../assets/cloud_transformation_assets/Group 233.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Cloud ERP
            </span>
          </h3>
          <ul
            className="text-lg lg:text-xl text-black leading-7 mx-6"
            style={{ listStyleType: "decimal", color: "inherit" }}
          >
            <li style={{ listStyleType: "disc" }}>
              Cloud ERP, on the other hand, is hosted and maintained by a
              third-party cloud service provider.
            </li>
            <li style={{ listStyleType: "disc" }}>
              It typically involves a subscription-based pricing model, reducing
              upfront costs.
            </li>
            <li style={{ listStyleType: "disc" }}>
              Cloud ERP offers scalability, flexibility, and accessibility from
              anywhere with an internet connection.
            </li>
            <li style={{ listStyleType: "disc" }}>
              It enables faster deployment and automatic updates without the
              need for in-house IT staff to manage the infrastructure.
            </li>
          </ul>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
