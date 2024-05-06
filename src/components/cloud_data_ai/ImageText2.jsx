import React from "react";
import imageUrl1 from "../../assets/cloud_data_ai_assets/Group 237.png";

const Imagetext2 = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2 lg:ml-11 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Data Management
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Harness the power of organized, accessible data. Our cloud-based
            data management solutions ensure that your information is
            structured, secure, and primed for analysis.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Machine Learning
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Embrace the future with machine learning capabilities that empower
            your systems to learn and adapt. From predictive analytics to
            anomaly detection, let AI drive innovation in your business.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Cloud Infrastructure
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Enjoy the flexibility and reliability of cloud infrastructure.
            Whether it's public, private, or hybrid, we tailor solutions to
            match your unique business requirements.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Analytics and Reporting
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Transform raw data into actionable insights. Our analytics and
            reporting tools provide a clear and comprehensive view of your
            business performance, empowering informed decision-making.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Custom Solutions
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Recognizing that no two businesses are alike, our team collaborates
            closely with you to develop custom Cloud Data and AI solutions that
            align with your specific goals and challenges.
          </p>
        </div>
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Imagetext2;
