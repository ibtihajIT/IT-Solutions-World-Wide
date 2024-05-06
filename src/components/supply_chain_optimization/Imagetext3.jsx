import React from "react";
import imageUrl1 from "../../assets/suplly_chain_assets/Group 233.png";
function Imagetext3() {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Third Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#000000" }}>
              HOW CAN IT SOLUTIONS WORLDWIDE EXPERTS{" "}
            </span>{" "}
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              SUPPORT YOU?
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            A streamlined Supply Chain forms the backbone of your enterprise.
            Yet, navigating towards optimization is no mean feat. This is where
            our seasoned experts step in to guide you. We undertake a
            comprehensive analysis of your Supply Chain, crafting a bespoke
            optimization roadmap tailored to your strategic imperatives.
            <br /> <br />
            Our consultants seamlessly shepherd the execution of each phase,
            ensuring organizational buy-in and alignment. Should you require a
            standalone optimization study, our consultants will adeptly
            collaborate with your in-house project manager, ensuring a seamless
            transition. Additionally, our doors are always open for
            brainstorming sessions to infuse fresh perspectives into your
            project. Don't delay your Supply Chain optimization voyage any
            longer!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Imagetext3;
