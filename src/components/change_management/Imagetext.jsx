import React from "react";
import imageUrl1 from "../../assets/change_management_assets/Group 221.png";
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
            As seasoned change managers, we understand the intricacies of global
            project and change management. Our comprehensive management of
            change procedure guarantees smooth transitions and empowers your
            workforce to thrive in the face of transformation. With our
            expertise, we aim to become your trusted change management master,
            guiding your organization towards adaptable, enduring change. <br />
            <br />
            Our experts will then delve deeply into the change details and
            impact to determine the change strategy. Once the change strategy is
            completed, all key stakeholders gather to discuss the results. This
            is the initiation of Change Management Planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
