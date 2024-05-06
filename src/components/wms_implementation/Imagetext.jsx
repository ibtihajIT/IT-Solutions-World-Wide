import React from "react";
import imageUrl1 from "../../assets/wms_assets/Group 236.png";
const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Oracle NetSuite WMS
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            This cloud-based solution offers scalability and seamless
            integration with ERP systems, providing real-time visibility, order
            management, and advanced warehouse automation functionalities. It
            caters to diverse industries, including manufacturing, wholesale
            distribution, and retail sectors.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>Odoo</span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            As an open-source ERP system, Odoo presents a user-friendly
            interface and rapid implementation capabilities, typically within a
            few weeks. Its flexibility surpasses many cloud systems, making it
            an ideal choice for small and medium enterprises seeking
            cost-effective yet scalable WMS solutions.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Custom WMS
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            For enterprises seeking tailored solutions, a custom WMS offers
            unparalleled flexibility. Unlike pre-packaged systems, such as
            NetSuite and Odoo, a custom WMS allows for personalized design,
            ensuring alignment with your unique operational requirements. It's
            particularly suitable for industries with bespoke operations and
            self-built manufacturing systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
