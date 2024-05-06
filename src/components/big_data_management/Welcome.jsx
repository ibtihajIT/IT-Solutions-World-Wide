import React from "react";
import backgroundImage from "../../assets/big_data_assets/Background Image.png"; // Update with your image file path

function Welcome() {
  return (
    <div className="relative h-screen">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="welcome-content mx-8 max-w-[1080px] p-8 sm:p-4 bg-[#F8F8F8] bg-opacity-90 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#278083] font-bold mb-4">
            BIG DATA MANAGEMENT
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#278083] font-normal mb-4">
            Effective big data management is crucial for organizations aiming to
            unlock the full potential of their data assets. It entails deploying
            a blend of technology, processes, and governance to ensure the
            accuracy, security, and accessibility of data for analysis and
            decision-making purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
