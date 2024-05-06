import React from "react";
import backgroundImage from "../../assets/lean_six_sigma_assets/Background Image.png"; // Update with your image file path

function Welcome() {
  return (
    <div className="relative h-screen">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="welcome-content mx-10 max-w-[1080px] p-4 sm:p-4 bg-[#F8F8F8] bg-opacity-90 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#278083] font-bold mb-4">
            LEAN & SIX SIGMA IMPLEMENTATION
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#278083] font-normal mb-4">
            Lean and Six Sigma represent distinct methodologies, yet they
            converge on a shared mission: enhancing operational efficiency and
            effectiveness. While their ultimate goals align, their
            methodologies, emphases, and tools differ significantly. Here's a
            comparative analysis highlighting the disparities between Lean and
            Six Sigma
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
