import React from "react";
import imageUrl1 from "../../assets/cloud_managed_assets/streamline process 1.png";
import imageUrl2 from "../../assets/cloud_managed_assets/Implement technology solutions 1.png";
import imageUrl3 from "../../assets/cloud_managed_assets/continous improvement 1.png";
import imageUrl4 from "../../assets/cloud_managed_assets/employee training and empowerment 1.png";
import imageUrl5 from "../../assets/cloud_managed_assets/customer focuss 1.png";
import imageUrl6 from "../../assets/cloud_managed_assets/supply-chain optimization 1.png";

function Cards() {
  return (
    <div className="flex flex-col md:flex-col justify-between gap-4 md:gap-12 md:px-[150px] items-center mx-4 py-12">
      {/* Box 1 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl1}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Cost Savings
            </h3>
            <p>
              Cost optimization stands as a primary benefit, obviating the need
              for investing in and frequently refreshing physical servers. By
              transitioning to managed cloud services, operational expenses
              dwindle, sparing valuable time typically consumed by
              infrastructure management. The result? A seamless operation,
              allowing for undivided attention towards business functions,
              underpinned by a fully integrated cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
      {/* Box 2 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl2}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Automatic Upgrades
            </h3>
            <p>
              Embrace automatic upgrades to facilitate swift innovation and
              progression within a modernized cloud framework. Ensure network
              security through continuous monitoring and disaster recovery
              support, safeguarding critical data round the clock. In a
              landscape driven by resilience and innovation, multi cloud-based
              solutions equipped with built-in intelligence and automation
              herald a new era of business performance.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat the above structure for additional boxes */}
      {/* Box 3 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl3}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Network Security
            </h3>
            <p>
              Deploy and leverage cloud managed services to provide 24/7
              monitoring, disaster recovery support and increased data
              protection. Use the advanced security of cloud services to
              increase operational efficiency and stay ahead of the competition
            </p>
          </div>
        </div>
      </div>
      {/* Box 4 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl4}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Resiliency and Innovation
            </h3>
            <p>
              Multi cloud-based business and technology platforms and services
              are resilient, have built-in intelligence, and drive automation
              and innovative business performance.
            </p>
          </div>
        </div>
      </div>
      {/* Box 5 */}
      <div className="w-full md:w-full md:px-0 md:pr-12">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl5}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Disaster Recovery Support
            </h3>
            <p>
              Back up and sync data to quickly retrieve and restore data and
              redeploy without system-wide disruptions. Ensure disaster recovery
              support to decrease downtime in the event of a disaster and resume
              normal business processes with resilience, speed and agility.
            </p>
          </div>
        </div>
      </div>
      {/* Box 6 */}
      <div className="w-full md:w-full md:px-0 md:pl-14">
        <div className="md:p-4 mb-4 md:transform md:translate-y-14 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center">
          <img
            src={imageUrl6}
            alt="placeholder"
            className="w-16 h-16 mr-4"
            style={{ maxWidth: "4rem", maxHeight: "4rem" }} // Style added inline
          />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#278083]">
              Rapid Response Times
            </h3>
            <p>
              Backed by robust disaster recovery mechanisms, data retrieval and
              redeployment occur seamlessly, minimizing system-wide disruptions.
              Rapid response times, courtesy of 24/7 support, mitigate
              operational impediments, fostering a reliable cloud environment
              conducive to sustained business operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
