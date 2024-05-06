import React from "react";

function Text2() {
  return (
    <div className="bg-white py-8 lg:py-12 text-center w-auto mx-8">
      {/* Adjusted padding and margin for responsiveness */}
      <h2 className="text-3xl mb-8">
        <span className="font-semibold">How we do </span>
        <span className="text-[#278083] font-bold">
          Graphic Design Services
        </span>
      </h2>
      <p className="text-base lg:text-lg font-normal text-black leading-7">
        We start by talking with you to understand your business and what you
        need. Our goal is to create designs that match your brand and speak to
        your customers.
      </p>
    </div>
  );
}

export default Text2;
