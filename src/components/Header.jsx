import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoBVDesktop from "../assets/logoBV.png";
import LogoBVMobile from "../assets/logoBV Mobile.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null); // Ref to hold the timer

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the state
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle active dropdown
  };

  const openDropdown = (index) => {
    clearTimeout(closeTimer.current); // Clear any existing timer
    setActiveDropdown(index);
  };

  const closeDropdown = (index) => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Delay the closing of dropdown by 200 milliseconds
  };

  const clearCloseTimer = () => {
    clearTimeout(closeTimer.current);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-5 left-0 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="z-[999] flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <img src={LogoBVMobile} alt="Mobile Logo" className="md:hidden" />
            </Link>
            <Link to="/">
              <img
                src={LogoBVDesktop}
                alt="Desktop Logo"
                className="hidden md:block"
              />
            </Link>
          </div>
          {/* Menu (hidden on mobile) */}
          <div className="hidden md:flex md:ml-6 items-center">
            <div className="flex space-x-4">
              {/* Dropdown 1 */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown(1)}
                onMouseLeave={() => closeDropdown(1)}
              >
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleMenu()}
                >
                  SCM Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-1"
                  className={`absolute z-[999] mt-2 w-56 bg-white rounded-md shadow-lg ${
                    activeDropdown === 1 ? "" : "hidden"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => closeDropdown(1)}
                >
                  <div className="py-1">
                    <Link
                      to="/Change_Management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Change Management
                    </Link>
                    <Link
                      to="/Lean_&_six_sigma"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Lean & Six Sigma Implementation
                    </Link>
                    <Link
                      to="/Operational_Excellence"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Operational Excellence
                    </Link>
                    <Link
                      to="/Supply_Chain_Optimization_Study"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Supply Chain Optimization Study
                    </Link>
                    <Link
                      to="/Warehouse_Design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Warehouse Design
                    </Link>
                    <Link
                      to="/WMSImplementation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      WMS Implementation
                    </Link>
                  </div>
                </div>
              </div>
              {/* Dropdown 2 */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown(2)}
                onMouseLeave={() => closeDropdown(2)}
              >
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleMenu()}
                >
                  IT Support
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-2"
                  className={`absolute z-[999] mt-2 w-56 bg-white rounded-md shadow-lg ${
                    activeDropdown === 2 ? "" : "hidden"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => closeDropdown(2)}
                >
                  <div className="py-1">
                    <Link
                      to="/automation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Automation
                    </Link>
                    <Link
                      to="/Big_Data_Management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Big Data Management
                    </Link>
                    <Link
                      to="/Interim_IT_Support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Interim IT Support
                    </Link>
                  </div>
                </div>
              </div>
              {/* Dropdown 3 */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown(3)}
                onMouseLeave={() => closeDropdown(3)}
              >
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleMenu()}
                >
                  Orcale Cloud
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-3"
                  className={`absolute z-[999] mt-2 w-56 bg-white rounded-md shadow-lg ${
                    activeDropdown === 3 ? "" : "hidden"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => closeDropdown(3)}
                >
                  <div className="py-1">
                    <Link
                      to="/Cloud_Transformation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cloud Transformation
                    </Link>
                    <Link
                      to="/Cloud_Data_&_AI"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cloud Data & AI
                    </Link>
                    <Link
                      to="/Cloud_Management_Services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cloud Managed Services
                    </Link>
                  </div>
                </div>
              </div>
              {/* Dropdown 4 */}
              <div
                className="relative group"
                onMouseEnter={() => openDropdown(4)}
                onMouseLeave={() => closeDropdown(4)}
              >
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => toggleMenu()}
                >
                  Digital Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-4"
                  className={`absolute z-[999] mt-2 w-56 bg-white rounded-md shadow-lg ${
                    activeDropdown === 4 ? "" : "hidden"
                  }`}
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={() => closeDropdown(3)}
                >
                  <div className="py-1">
                    <Link
                      to="/Desinging"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Desinging
                    </Link>
                    <Link
                      to="/Development"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Development
                    </Link>
                    <Link
                      to="/Digital_Marketing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Digital Marketing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Other links */}
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/Career" className="text-white hover:text-gray-300">
                Career
              </Link>
              <Link
                to="/Contact_Us"
                className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-full"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Hamburger menu (visible on mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile menu (shown when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#278083] absolute -top-5 inset-x-0 z-[999] flex justify-center">
          {/* Close button */}
          <button
            onClick={handleCloseMenu}
            className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          {/* Mobile dropdowns and links */}
          <div className="py-4 px-2 space-y-2">
            {/* Dropdown 1 */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(1)}
                className="text-white w-full text-left"
              >
                SCM Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-[999] mt-1 w-56 bg-[#278083] rounded-md shadow-lg ${
                  activeDropdown === 1 ? "" : "hidden"
                }`}
                onMouseEnter={clearCloseTimer}
                onMouseLeave={() => closeDropdown(1)}
              >
                <div className="py-1">
                  <Link
                    to="/Change_Management"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Change Management
                  </Link>
                  <Link
                    to="/Lean_&_six_sigma"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Lean & Six Sigma Implementation
                  </Link>
                  <Link
                    to="/Operational_Excellence"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Operational Excellence
                  </Link>
                  <Link
                    to="/Supply_Chain_Optimization_Study"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Supply Chain Optimization Study
                  </Link>
                  <Link
                    to="/Warehouse_Design"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Warehouse Design
                  </Link>
                  <Link
                    to="/WMSImplementation"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    WMS Implementation
                  </Link>
                </div>
              </div>
            </div>
            {/* Dropdown 2 */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(2)}
                className="text-white w-full text-left"
              >
                IT Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-[999] mt-1 w-56 bg-[#278083] rounded-md shadow-lg ${
                  activeDropdown === 2 ? "" : "hidden"
                }`}
                onMouseEnter={clearCloseTimer}
                onMouseLeave={() => closeDropdown(2)}
              >
                <div className="py-1">
                  <Link
                    to="/Automation"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Automation
                  </Link>
                  <Link
                    to="/Big_Data_Management"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Big Data Management
                  </Link>
                  <Link
                    to="/Interim_IT_Support"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Interim IT Support
                  </Link>
                </div>
              </div>
            </div>
            {/* Dropdown 3 */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(3)}
                className="text-white w-full text-left"
              >
                Orcale Cloud
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-[999] mt-1 w-56 bg-[#278083] rounded-md shadow-lg ${
                  activeDropdown === 3 ? "" : "hidden"
                }`}
                onMouseEnter={clearCloseTimer}
                onMouseLeave={() => closeDropdown(3)}
              >
                <div className="py-1">
                  <Link
                    to="/Cloud_Transformation"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Cloud Transformation
                  </Link>
                  <Link
                    to="/Cloud_Data_&_AI"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Cloud Data & AI
                  </Link>
                  <Link
                    to="/Cloud_Management_Services"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Cloud Managed Services
                  </Link>
                </div>
              </div>
            </div>
            {/* Dropdown 4 */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(4)}
                className="text-white w-full text-left"
              >
                Digital Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-[999] mt-1 w-56 bg-[#278083] rounded-md shadow-lg ${
                  activeDropdown === 4 ? "" : "hidden"
                }`}
                onMouseEnter={clearCloseTimer}
                onMouseLeave={() => closeDropdown(3)}
              >
                <div className="py-1">
                  <Link
                    to="/Desinging"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Desinging
                  </Link>
                  <Link
                    to="/Development"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Development
                  </Link>
                  <Link
                    to="/DigitalMarketing"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                  >
                    Digital Marketing
                  </Link>
                </div>
              </div>
            </div>
            {/* Add more dropdowns here */}
            <Link
              to="/Career"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Career
            </Link>
            <Link
              to="/Contact_Us"
              className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-full"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
