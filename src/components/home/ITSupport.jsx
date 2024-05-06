import React from "react";
import { Link } from "react-router-dom";
import imageUrl1 from "../../assets/Automation 1.png";
import imageUrl2 from "../../assets/Big data 1.png";
import imageUrl3 from "../../assets/Cloud 1.png";
function Supply() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#278083] mb-8">
          IT Support Services
        </h2>
        <p className="text-center text-lg text-black mb-8">
          Be it an end-to-end project or temporary support you need on your
          project, our experts are in for any challenge! We offer wide range of
          expertise taking away your struggle of implementing new technologies
          at an affordable offer. Not sure what you need? Contact us to discuss
          the possibilities.
        </p>
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Cards */}
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl1}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Automation
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Automating operations can significantly enhance efficiency,
                  minimize errors, and liberate human resources for more
                  strategic endeavors. There are numerous avenues for...
                </p>
                <Link
                  to="/Automation"
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
          {/* Card 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl2}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Big Data
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Effective big data management is crucial for organizations
                  aiming to unlock the full potential of their data assets. It
                  entails deploying a blend of technology, processes, and...
                </p>
                <Link
                  to="/Big_Data_Management"
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

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl3}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Interim IT Support
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Looking for reliable IT support to enhance your projects? Need
                  assistance with software integration for your small business?
                  Our team specializes in providing top-notch...
                </p>
                <Link
                  to="/Interim_IT_Support"
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
