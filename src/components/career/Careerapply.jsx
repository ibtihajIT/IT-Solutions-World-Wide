import React from "react";
import { Link } from "react-router-dom";
import imageUrl1 from "../../assets/career_assets/perks.png";
import imageUrl2 from "../../assets/career_assets/office 1.png";
import imageUrl3 from "../../assets/career_assets/office 2.png";

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="flex justify-center">
        <h2 className="text-3xl text-[#278083] md:text-5xl font-bold text-center w-full">
          Join Our Team and Shape the Future
        </h2>
      </div>

      <div className="flex justify-center mt-6 md:mt-8">
        <p className="text-base md:text-lg text-center w-full md:w-3/4">
          Our company is the epitome of technology and innovation. Our
          exceptional team is a testament to this. We recruit top-tier talent in
          the market and showcase their expertise in their respective domains.
          At IT Solutions Worldwide, subsisting is not the norm, we go all out.
          Join our team as a skilled individual seeking an exceptional work
          environment to grow and thrive.
        </p>
      </div>

      {/* Perks Section */}
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img className="rounded-lg" src={imageUrl1} alt="placeholder" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-3xl text-[#278083] font-bold text-center md:text-left mb-4">
            Perks
          </h3>
          <p className="text-lg font-semibold text-center md:text-left mb-4">
            Perks That Go Beyond Borders
          </p>
          <p className="text-sm md:text-base text-justify">
            Our company is the epitome of technology and innovation. Our
            exceptional team is a testament to this. We recruit top-tier talent
            in the market and showcase their expertise in their respective
            domains. At IT Solutions Worldwide, subsisting is not the norm, we
            go all out. Join our team as a skilled individual seeking an
            exceptional work environment to grow and thrive.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-5">
        {/* Our Office Section */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-[#278083]">Our Office</h3>
          <p className="text-lg font-semibold mt-2 text-gray-800">
            Discover Our Global Network of Offices
          </p>
          <p className="text-base mt-2 text-gray-600">
            Experience our expansive network of offices across the world,
            connecting you to our exceptional services wherever you are.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-6">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img className="rounded-lg" src={imageUrl2} alt="placeholder" />
              <p className="text-sm font-semibold mt-2 text-gray-800">
                Street: Mandenmakerstraat 100C, Postal code: 3194DG, City:
                Hoogvliet Rotterdam
              </p>
              <p className="text-sm font-semibold mt-2 text-gray-800">
                +31 10 766 0786
              </p>
            </div>
          </div>
        </div>

        {/* Our Partner Office Section */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-[#278083]">
            Our Partner Office
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img className="rounded-lg" src={imageUrl3} alt="placeholder" />
              <p className="text-sm font-semibold mt-2 text-gray-800">
                Seventeen Square Block A Multi Gardens B-17 Islamabad, Pakistan
              </p>
              <p className="text-sm font-semibold mt-2 text-gray-800">
                +92 318 7192053
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render each job opportunity section */}
      <div className="mt-8">
        {/* BOX 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              SAP TM / SCM - Functional Consultant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/SCM"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 2 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Oracle Fusion - Functional Consultant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/OrcaleFusion"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Business Process Architect - Logistics
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/BusinessProcess"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 4 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Senior Logistics Engineer
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/SeniorLogistics"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 5 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Blue Yonder WMS Dispatcher Engineer
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/BlueYonder"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 6 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Backoffice Assistant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/Backoffice"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 7 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              IT Support Specialist
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/ITSupport"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 8 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">Web Developer</h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/WebDeveloper"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 8 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Oracle Functional Consultant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/OracleFunctionalConsultant"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 9 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Odoo Functional Consultant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/Odoofunctionalconsultant"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 10 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">Odoo Developer</h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/OdooDeveloper"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 11 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">ERP Consultant</h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/ERPConsultant"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 12 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">Content Writer</h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/ContentWriter"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 13 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Social Media Manager
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/SocialMediaManager"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 14 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              Data Entry Operator
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/DataEntryOperator"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 15 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">Data Analyst</h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/DataAna"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 16 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              SAP BI Consultant
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/SAPBIConsultant"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        {/* BOX 17 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-left">
              SEO Content Writer
            </h3>
            <p className="text-sm font-semibold text-left mt-1 text-gray-700">
              Full Time - <span className="text-purple-600">On site</span>
            </p>
            <Link
              to="/SEOContentWriter"
              className="btn btn-outline-secondary btn-sm mt-2 md:mt-4 inline-block text-xs md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/4 flex items-end justify-end">
            <Link to="/ApplyJob" className="btn mt-2 md:mt-4 inline-block">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default CareersPage;
