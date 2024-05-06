import React from "react";
import imageUrl1 from "../../assets/cloud_data_ai_assets/Group 236.png";

const Imagetext = () => {
  return (
    <div className="flex flex-col space-y-6 py-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[673px]">
          <img src={imageUrl1} alt="placeholder" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mx-4">
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Seamless Scalability
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Bid farewell to limitations! Our cloud solutions empower your
            business to scale effortlessly, ensuring you're primed for growth
            without the hassle of infrastructure constraints.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Real-time Insights
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Unlock the potential of your data with AI-driven analytics. Acquire
            deep, actionable insights into your operations, customer behavior,
            and market trends in real-time, enabling smarter, data-driven
            decision-making.
          </p>

          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Enhanced Security
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Safeguarding your data is paramount. Rest assured with our
            state-of-the-art security measures, ensuring that your information
            is shielded against threats and vulnerabilities.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Improved Efficiency
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Streamline your processes and enhance productivity with AI
            automation. From routine tasks to complex workflows, allow our AI
            solutions to handle the heavy lifting, enabling your team to focus
            on strategic initiatives.
          </p>
          <h3 className="text-lg lg:text-xl font-semibold text-black leading-7 mt-4 lg:mt-0  mb-4">
            <span style={{ color: "#278083", fontWeight: "bold" }}>
              Personalized Customer Experience
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-black leading-7">
            Elevate customer satisfaction by leveraging AI to understand and
            anticipate their needs. Provide personalized experiences that foster
            loyalty and distinguish your brand from the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imagetext;
