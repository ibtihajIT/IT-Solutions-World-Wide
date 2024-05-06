import React from "react";
import imageUrl1 from "../../assets/big_data_assets/Interviewing Coaching.png"; // Update with your image file path

function Imagetext3() {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Third Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h2 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Data Entry Specialists
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-black leading-7">
            In today’s world where nothing happens without the internet, it
            seems unlikely however there are still a lot of areas where people
            do not have internet. For material tracking or ISO requirements, the
            operators are still required to keep a record hand written which
            then gets re-typed to ERP systems. While the role may seem
            straightforward, attention to detail and accuracy are essential to
            ensure the reliability of the data used by other departments for
            decision-making and analysis. Our data entry specialists can provide
            a great added value where you have manual data such as written
            records or excel sheets that need to be loaded into an ERP system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Imagetext3;
