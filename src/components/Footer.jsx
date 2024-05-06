import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logoBV green 2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      {/* Content Container */}
      <div
        className="container mx-auto px-4"
        style={{ maxWidth: "1275px", height: "auto" }}
      >
        <div className="flex flex-wrap justify-between">
          {/* Logo */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="h-[216px] w-[241px] mb-4 mx-auto md:mx-0"
            />
            {/* <div className="w-[303px] text-center md:text-left">
              <p
                style={{
                  color: "#278083",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0.3px",
                }}
              >
                OFFICE TIMINGS: MONDAY TO FRIDAY (09:00 - 18:00)
              </p>
            </div> */}
          </div>

          {/* Menu Sections */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-[#009782]">
              SCM Services
            </h3>
            <ul>
              <li>
                <Link
                  to="/Change_Management"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Change Management
                </Link>
              </li>
              <li>
                <Link
                  to="/Lean_&_six_sigma"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Lean & Six Sigma Implementation
                </Link>
              </li>
              <li>
                <Link
                  to="/Operational_Excellence"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Operational Excellence
                </Link>
              </li>
              <li>
                <Link
                  to="/Supply_Chain_Optimization_Study"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Supply Chain Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/Warehouse_Design"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Warehouse Design
                </Link>
              </li>
              <li>
                <Link
                  to="/WMSImplementation"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  WMS Implementation
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-[#009782]">
              IT Support
            </h3>
            <ul>
              <li>
                <Link
                  to="/Automation"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/Big_Data_Management"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Big Data Management
                </Link>
              </li>
              <li>
                <Link
                  to="/Interim_IT_Support"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Interim IT Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-[#009782]">
              Oracle Cloud
            </h3>
            <ul>
              <li>
                <Link
                  to="/Cloud_Transformation"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Cloud Transformation
                </Link>
              </li>
              <li>
                <Link
                  to="/Cloud_Data_&_AI"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Cloud Data & AI
                </Link>
              </li>
              <li>
                <Link
                  to="/Cloud_Management_Services"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Cloud Management Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-[#009782]">
              Digital Services
            </h3>
            <ul>
              <li>
                <Link
                  to="/Desinging"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Desinging
                </Link>
              </li>
              <li>
                <Link
                  to="/Development"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  to="/Digital_Marketing"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "36.5px",
                    letterSpacing: "0.3px",
                    color: "#898989",
                  }}
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          {/* Office Timing */}
          <div className="w-full text-center mt-8">
            <h3 className="text-lg font-bold text-[#009782]">
              OFFICE TIMINGS: MONDAY TO FRIDAY 9:00 - 18:00
            </h3>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center mt-4 gap-x-4 md:gap-x-[180px] mb-4">
            <div className="flex items-center mr-4 text-[#009782]">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#898989",
                  textAlign: "center",
                }}
              >
                Mandenmakerstraat 100C, 3194DG, Hoogvliet Rotterdam
              </span>
            </div>
            <div className="flex items-center mr-4 text-[#009782]">
              <i className="fas fa-phone-alt mr-2"></i>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#898989",
                }}
              >
                +31 6 40754768
              </span>
            </div>
            <div className="flex items-center text-[#009782]">
              <i className="far fa-envelope mr-2"></i>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#898989",
                }}
              >
                info@itsolutionsworldwide.com
              </span>
            </div>
          </div>

          {/* Navigation */}
          {/* Horizontal Line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 1362 2"
            fill="none"
          >
            <path
              d="M1 1H1361"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="w-full md:w-auto mb-8 md:mb-0 flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-8">
            <Link
              to="/"
              className="text-[#278083] font-normal text-lg bg-white px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <span className="hidden md:inline">|</span>
            <Link
              to="/About_Us"
              className="text-[#278083] font-normal text-lg bg-white px-4 py-2 rounded-lg"
            >
              About Us
            </Link>
            <span className="hidden md:inline">|</span>
            <Link
              to="/Contact_Us"
              className="text-[#278083] font-normal text-lg bg-white px-4 py-2 rounded-lg"
            >
              Contact Us
            </Link>
            <span className="hidden md:inline">|</span>

            <Link
              to="/Career"
              className="text-[#278083] font-normal text-lg bg-white px-4 py-2 rounded-lg"
            >
              Career
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-auto flex items-center justify-center md:justify-end space-x-4 md:space-x-8 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/itsolutionsww/"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/itsolutionsworldwide/"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/ITSolutionsBV"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://nl.linkedin.com/company/it-solutions-worldwide-bv"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="mailto:info@itsolutionsworldwide.com"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=31640754768"
              className="text-[#999999]"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 1362 2"
          fill="none"
        >
          <path
            d="M1 1H1361"
            stroke="#898989"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-[#000]">
            Chamber of Commerce No. 72768916
          </p>
          <p className="text-sm text-[#000]">
            &copy; ITSolutionsWorldwide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
