import React from "react";
import imageUrl1 from "../../assets/desinging_assets/Group 226.png";

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
            In today's world, good graphic design is really important for any
            business. It helps your brand stand out and look professional. At IT
            Solutions Worldwide, we offer different graphic design services to
            help your business look its best. Whether you're just starting or
            want to refresh your brand, our team of designers is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
