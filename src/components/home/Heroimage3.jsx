import React from "react";
import imageUrl from "../../assets/IT SUPPORT SERVICES.jpg"; // Update with your image file path

function HeroImage3() {
  return (
    <div className="relative lg:h-[800px] h-[300px] sm:h-[500px]">
      <img
        src={imageUrl}
        alt="Background Image"
        className="background-image absolute inset-0 w-full h-full object-contain sm:object-cover md:object-cover lg:object-contain xl:object-cover"
      />
    </div>
  );
}

export default HeroImage3;
