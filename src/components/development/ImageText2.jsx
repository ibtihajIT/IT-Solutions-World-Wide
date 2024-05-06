import React from "react";
import imageUrl1 from "../../assets/development_assets/Group 10.png";

const Imagetext2 = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Get Started Today !
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Ready to improve your brand with awesome graphic design? Contact us
            to talk about your needs and goals. Let's work together to create
            designs that wow your customers and boost your business.
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Imagetext2;
