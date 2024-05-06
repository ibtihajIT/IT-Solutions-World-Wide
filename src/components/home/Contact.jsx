import React from "react";
import your_image_source from "../../assets/Contact Icon.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="py-12">
      <div
        className="container mx-auto px-4 bg-[#278083] bg-opacity-30 rounded-lg"
        style={{ maxWidth: "1275px", height: "auto" }}
      >
        <div className="relative flex justify-center items-center py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <img
              src={your_image_source}
              alt="Your Image"
              className="w-[542px] h-[293.224px] mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-3xl text-[#278083] font-bold mb-8 md:mb-4">
                We're just a click away! Contact us for immediate assistance.
              </h2>
              <div className="flex justify-start">
                <Link
                  to="/Contact_Us"
                  className="px-6 py-2 bg-[#278083] text-white rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
