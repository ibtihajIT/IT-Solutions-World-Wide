import React from "react";
import imageUrl1 from "../../assets/digital_marketing_assests/Group 228.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <p className="text-lg lg:text-xl text-black leading-7">
            In today's digital world, having a strong online presence is crucial
            for businesses to succeed. At IT Solutions Worldwide, we specialize
            in digital marketing services that help businesses grow and succeed
            online. Our goal is to increase your visibility, engage your
            audience, and turn visitors into customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
