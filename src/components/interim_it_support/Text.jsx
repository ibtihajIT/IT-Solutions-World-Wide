import React from "react";

function Text() {
  return (
    <div className="bg-white py-8 lg:py-12 text-justify w-full max-w-[750px] mx-auto lg:px-0 px-4 lg:mr-auto lg:ml-12">
      {/* Adjusted padding and margin for responsiveness */}
      <p className="text-base lg:text-lg font-normal text-black leading-7">
        <span className="text-[#278083]">Our Expert Team </span>
        <span>
          is comprised of professionals with diverse backgrounds and expertise.
          Whether you require assistance with development, software engineering,
          functional analysis, or operational tasks, we've got you covered. We
          offer fast, flexible, and cost-effective solutions to meet your
          business requirements.
        </span>
      </p>
    </div>
  );
}

export default Text;
