import React from "react";
import { Link } from "react-router-dom";
import imageUrl1 from "../../assets/ChangeManagement.png";
import imageUrl2 from "../../assets/Six sigma 1.png";
import imageUrl3 from "../../assets/Operational Excellence 1.png";
import imageUrl4 from "../../assets/Performance 1.png";
import imageUrl5 from "../../assets/Warehouse Design 1.png";
import imageUrl6 from "../../assets/WMS Implementation 1.png";
function Supply() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#278083] mb-8">
          Supply Chain Management Services
        </h2>
        <p className="text-center text-lg text-black mb-8">
          At IT Solutions, we streamline your supply chain with GAP analysis and
          tailored IT solutions. Utilizing the insights, we design the project
          framework, ensuring practical results and clear timelines.
        </p>
        <div className="flex flex-wrap -mx-4">
          {/* Cards */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl1}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Change Management
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Change management planning is the cornerstone of your
                  organizational structure. Robust change planning ensures that
                  your initiative is constructed on a stable foundation. Our
                  change managers are adept at dissecting a change strategy...
                </p>
                <Link
                  to="/Change_Management"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Repeat the above card divs for the rest of the cards */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl2}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Lean & Six Sigma Implementation
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Lean and Six Sigma represent distinct methodologies, yet they
                  converge on a shared mission: enhancing operational efficiency
                  and effectiveness. While their ultimate goals align, their
                  methodologies, emphases, and...
                </p>
                <Link
                  to="/Lean_&_six_sigma"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Ensure each card is wrapped inside a div with flex-grow class */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl3}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Operational Excellence
                </h2>
                <p className="text-black mb-4 flex-grow">
                  IT Solutions Worldwide specializes in operational excellence
                  strategies, aiding clients in developing the skills necessary
                  to identify and implement improvements across various key
                  areas, including safety, production...
                </p>
                <Link
                  to="/Operational_Excellence"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Ensure each card is wrapped inside a div with flex-grow class */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl4}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Supply Chain Optimization Study
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Unlocking the full potential of your business hinges on an
                  optimized Supply Chain. Whether you aim to elevate customer
                  satisfaction, enhance production efficiency, drive revenue, or
                  slash expenses, a critical reassessmen...
                </p>
                <Link
                  to="/Supply_Chain_Optimization_Study"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Ensure each card is wrapped inside a div with flex-grow class */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl5}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Warehouse Design
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Crafting the ideal warehouse layout design is akin to
                  navigating through a labyrinth, a task where even angels might
                  hesitate. It's a realm where attention to myriad details
                  reigns supreme, compounded...
                </p>
                <Link
                  to="/Warehouse_Design"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Ensure each card is wrapped inside a div with flex-grow class */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl6}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  WMS Implementation
                </h2>
                <p className="text-black mb-4 flex-grow">
                  To ensure an efficient supply chain, selecting the appropriate
                  Warehouse Management System (WMS) is imperative. Without
                  access to real-time stock data, insights into inbound...
                </p>
                <Link
                  to="/WMSImplementation"
                  className="text-black text-sm font-bold flex items-center"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-[#278083]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.707 10.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 11H6a1 1 0 0 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
