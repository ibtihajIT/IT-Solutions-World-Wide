import React from "react";
import imageUrl1 from "../../assets/wms_assets/Group 235.png";
function Imagetext2() {
  return (
    <div
      className="flex flex-col space-y-6 py-12
  "
    >
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Space Optimization and Reduced Operating Costs
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            By leveraging WMS capabilities, warehouses can optimize floor space
            utilization, minimizing waste and enhancing operational efficiency.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Inventory Transparency
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            WMS implementations provide real-time visibility into inventory
            levels, facilitating informed supply estimates and mitigating
            backorders, thereby enhancing customer satisfaction.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Efficient Workforce Utilization
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Through intelligent task assignment based on factors like skill
            levels, proximity, and available equipment, a WMS optimizes
            workforce utilization, improving productivity.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Streamlined Supply Chain
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            WMS streamlines internal warehouse operations, optimizing inbound
            receipts, outbound deliveries, and overall operational efficiencies,
            thus contributing to cost reduction across the supply chain.
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Imagetext2;
