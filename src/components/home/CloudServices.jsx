import React from "react";
import { Link } from "react-router-dom";
import imageUrl1 from "../../assets/Cloud Transmission 1.png";
import imageUrl2 from "../../assets/Cloud Managed Services 1.png";
import imageUrl3 from "../../assets/Cloud Data 1.png";
function Supply() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#278083] mb-8">
          Oracle Cloud Services
        </h2>
        <p className="text-center text-lg text-black mb-8">
          Looking to take your business to the next level? Our experts are
          well-versed in the Oracle Cloud World to bring all your business
          virtual. Choose a partner who understands the nuances of your Oracle
          Cloud journey. Choose us for innovation, dedication, and unparalleled
          expertise.
        </p>
        <div className="flex flex-wrap -mx-4 justify-center">
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
                  Oracle Cloud Transformation
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Enterprise Resource Planning (ERP) systems have become an
                  integral part of modern businesses, streamlining operations,
                  enhancing productivity, and providing a centralized...
                </p>
                <Link
                  to="/Cloud_Transformation"
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
          {/* Card 2*/}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl2}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Oracle Cloud Data & AI
                </h2>
                <p className="text-black mb-4 flex-grow">
                  Transiting to Oracle Cloud is only one small step in a
                  transformative journey toward the future, all while leveraging
                  the power of...
                </p>
                <Link
                  to="/Cloud_Data_&_AI"
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

          {/* Card 3*/}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex items-stretch">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img
                src={imageUrl3}
                alt="placeholder"
                className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-[#278083] mb-2">
                  Oracle Customer Success
                </h2>
                <p className="text-black mb-4 flex-grow">
                  The Oracle Cloud journey does not end with implementing Oracle
                  Cloud. In fact, going live is step 1 of your cloud journey.
                  Once you are live, your organization...
                </p>
                <Link
                  to="/Cloud_Management_Services"
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
