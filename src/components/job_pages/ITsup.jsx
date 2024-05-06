import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function ITsup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
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
      </div>
      <div className="text-left mt-8 max-w-3xl mx-auto">
        {" "}
        {/* Centered content */}
        <h1 className="text-3xl font-semibold mb-4 text-center">
          IT Support Specialist
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Oracle Fusion Functional Consultant specialized in Supply
          Chain to join our team. We specialize in creating innovative digital
          solutions for our clients and are committed to delivering high-quality
          work. We are looking for someone who can grow with the company and
          take on new challenges as we continue to expand our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Providing IT assistance to staff and customers.</li>
          <li>Resolving logged errors in a timely manner.</li>
          <li>
            Monitoring hardware, software, and system performance metrics.
          </li>
          <li>
            Updating computer software. as well as upgrading hardware and
            systems.
          </li>
          <li>Maintaining databases and ensuring system security.</li>
          <li>Documenting processes and performing diagnostic tests.</li>
          <li>Preparing new employee hardware and software.</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Requirements</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            A bachelor's degree in computer science, information technology, or
            similar. 1-3 years of experience as an IT support specialist.
          </li>
          <li>
            Exceptional ability to provide technical support and resolve
            queries.
          </li>
          <li>
            In-depth knowledge of computer hardware, software, and networks.
          </li>
          <li>
            Experience in documenting processes and monitoring performance
            metrics.
          </li>
          <li>
            Advanced knowledge of database maintenance and system security.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Benefits:</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Competitive salary package</li>
          <li>
            A lot of learning opportunities to enhance your skills and career
            growth
          </li>
          <li>
            Opportunity to relocate to Netherlands in the future if needed
          </li>
          <li>Dynamic and collaborative work environment</li>
          <li>Opportunity to work with an innovative and dedicated team</li>
          <li>Travelling cost are reimbursed</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Job Type</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Full-time, Contract & non-remote worker</li>
        </ul>
      </div>
    </div>
  );
}

export default ITsup;
