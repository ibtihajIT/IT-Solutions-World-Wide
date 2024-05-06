import React from "react";
import imageUrl1 from "../../assets/change_management_assets/Group 223.png";

function Imagetext3() {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Third Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <p className="text-lg lg:text-xl text-black leading-7">
            Daily scrum stand-ups, weekly communication across various
            organizational tiers, visuals, and standard work instructions are
            among the tools that should be employed to guide all team members
            through a seamless and consistent change process without causing
            undue disruption to daily operations and to prepare them for the
            change ahead <br /> <br />
            However, effective change management transcends the mere utilization
            of tools. Its success hinges upon the relationships and trust
            cultivated with the team. Listening is paramount. You cannot impose
            change from the top down without providing proper training and
            instructions. Ultimately, it's the operational team that must uphold
            the change for your business to thrive. If the team comprehends the
            change and recognizes the benefits it offers, they are much more
            likely to embrace and champion the change!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Imagetext3;
