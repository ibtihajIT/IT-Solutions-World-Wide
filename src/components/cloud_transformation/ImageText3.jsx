import React from "react";
import imageUrl1 from "../../assets/cloud_transformation_assets/Group 235.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Assessments
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Seamless migration of on-premises infrastructure to cloud
            environments.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Infrastructure Migration
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Seamless migration of on-premises infrastructure to cloud
            environments.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Application Migration
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Migrate legacy applications to the cloud for enhanced performance
            and scalability. Our functional consultants map requirements and
            prepare the framework.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Data Migration and Integration
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Securely transfer and integrate data from on-premises to cloud
            databases. Develop strategies for real-time data synchronization
            across systems.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Training and Change Management
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Our Lean Certified trainers guide operations throughout the project
            and support staff adaptation to new cloud technologies.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Custom Solutions and Integration
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Develop custom cloud solutions tailored to specific business needs
            and integrate cloud services with existing tools and systems.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Post-Migration Support
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Offer ongoing support for post-migration issues and assist with
            challenges encountered in the cloud environment.
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
