import React from "react";
import imageUrl1 from "../../assets/suplly_chain_assets/Group 232.png"; // Update with your image file path

function Imagetext() {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#000000" }}>SUPPLY CHAIN </span>{" "}
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              EXCECUTION
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            The final leg, Supply Chain Execution, shifts focus to applications
            and systems integration. Once design and planning frameworks are
            refined, deployment of tailored applications and systems becomes
            paramount to actualizing an optimized Supply Chain. Emphasis is laid
            on Enterprise Resource Planning (ERP) systems housing inventory and
            financial management modules (AP/AR/GL), transportation management
            platforms, supplier collaboration tools, order and demand planning
            software, and global trade management solutions. These instrumental
            systems empower businesses with Supply Chain transparency, enabling
            agile decision-making in real time.
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Imagetext;
