import React from "react";

function Text() {
  return (
    <div className="bg-white py-8 lg:py-12 text-justify w-full max-w-[750px] mx-auto lg:px-0 px-4 lg:mr-auto lg:ml-12">
      {/* Adjusted padding and margin for responsiveness */}
      <h2 className="text-3xl mb-8">
        <span className="font-semibold">SUPPLY CHAIN</span>
        <span className="text-[#278083] font-bold"> DESIGN</span>
      </h2>
      <p className="text-base lg:text-lg font-normal text-black leading-7">
        Supply Chain Design sets the blueprint for your operational and material
        flows. It encompasses critical aspects such as the geographic
        positioning of warehouses and manufacturing hubs, supplier network
        dynamics, demand projection, scheduling, and their alignment with
        overarching strategic objectives and Sales and Operations Planning
        (S&OP) initiatives.
      </p>
    </div>
  );
}

export default Text;
