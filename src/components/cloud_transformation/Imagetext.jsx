import React from "react";
import imageUrl1 from "../../assets/cloud_transformation_assets/Group 232.png";

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
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              On-Premises ERP Software
            </span>
          </h3>
          <ul
            className="text-lg lg:text-xl text-black leading-7 mx-6"
            style={{ listStyleType: "decimal", color: "inherit" }}
          >
            <li style={{ listStyleType: "disc" }}>
              On-Premises ERP Software requires organizations to purchase and
              maintain their own servers and IT infrastructure.
            </li>
            <li style={{ listStyleType: "disc" }}>
              This option provides complete control over the ERP system but
              involves higher upfront costs and ongoing maintenance
              responsibilities.
            </li>
            <li style={{ listStyleType: "disc" }}>
              Deployment may take longer compared to cloud-based solutions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
