import React from "react";

function Text() {
  return (
    <div className="bg-white py-8 lg:py-12 text-center w-full max-w-[746px] mx-auto lg:px-0 px-4 lg:mr-auto">
      {/* Adjusted padding and margin for responsiveness */}
      <h2 className="text-3xl mb-8">
        <span className="font-semibold">Define Clear </span>
        <span className="text-[#278083] font-bold">
          Objectives and Key Performance Indicators (KPIs)
        </span>
      </h2>
      <p className="text-base lg:text-lg font-normal text-black leading-7">
        To begin, it's crucial to define clear objectives and key performance
        indicators (KPIs) that align with your business goals. By articulating
        measurable KPIs, you can effectively assess and track the performance of
        your operational processes.
      </p>
    </div>
  );
}

export default Text;
