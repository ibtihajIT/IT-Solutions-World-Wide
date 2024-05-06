import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function OFC() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
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
          Oracle Functional Consultant
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
          <li>
            Liaising with customers and colleagues for the consultation,
            requirements gathering, design, implementation and ongoing support
            of Oracle SCM solutions.
          </li>
          <li>
            Assist customers with analysing, designing, testing and deploying
            Oracle SCM enhancements, reports and regular application updates and
            patches.
          </li>
          <li>Requirements Elicitation, Specification & Fit-Gap.</li>
          <li>Business Process Modelling and Specification.</li>
          <li>
            Functional Design Specification for customisations and enhancements
            (including interfaces and reports).
          </li>
          <li>Data Conversion Design Security Design and Build.</li>
          <li>
            Test Planning, Preparation, Execution and Defect Management;
            Management of issues and risks.
          </li>
          <li>
            Quality management: review of key deliverables; promote consistency
            in solution; ensure adherence to scope; and ensure adherence to
            standards and procedures.
          </li>
          <li>
            Provide Functional inputs to other streams such as Technical
            Upgrade, Development, Test and Deployment.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Excellent critical thinking, interpersonal, communication and
            problem-solving skills.
          </li>
          <li>Link-building strategy and Time management.</li>
          <li>Good understanding of gap analysis, ERP and Test scripts.</li>
          <li>
            Understanding the business requirement/ business process. Willing to
            learn and grow in a dynamic company.
          </li>
          <li>Must have strong experience in MS excel.</li>
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

export default OFC;
