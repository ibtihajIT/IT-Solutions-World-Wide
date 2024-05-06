import React from "react";
import imageUrl1 from "../../assets/cloud_transformation_assets/Group 234.png";

const Imagetext2 = () => {
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
              Oracle Cloud
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Renowned for its enterprise-grade services, strong database
            offerings, and integration capabilities, Oracle Cloud is a
            comprehensive cloud solution suitable for organizations of various
            sizes and industries.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Odoo Cloud
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Odoo Cloud provides businesses with a cost-effective and efficient
            way to implement a comprehensive ERP system without significant
            upfront investments. Its modular and customizable ERP applications
            leverage cloud technology, allowing organizations to focus on core
            business activities.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Tailor-made ERP Cloud Solutions
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Particularly beneficial for organizations with unique processes or
            industry-specific requirements, tailor-made ERP cloud systems
            involve close collaboration between the organization and the ERP
            provider to ensure alignment with business objectives.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Your Quick Start to Cloud
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            IT Solutions Worldwide understands the struggle of transforming a
            running operation into a fully cloud-automated business. We offer a
            quick start guide to cloud transformation, providing key steps and
            considerations to initiate and execute a successful migration to the
            cloud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext2;
