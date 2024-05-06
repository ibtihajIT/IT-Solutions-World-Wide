import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function DataEntry() {
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
          Data Entry Operator
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Data entry Operator to join our team. We specialize in
          creating innovative digital solutions for our clients and are
          committed to delivering high-quality work. We are looking for someone
          who can grow with the company and take on new challenges as we
          continue to expand our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Transfer data from paper formats into computer files or database
            systems using keyboards or data recorders.
          </li>
          <li>Type in data provided directly from customers.</li>
          <li>
            Create spreadsheets with large numbers of figures without mistakes.
          </li>
          <li>Verify data by comparing it to source documents.</li>
          <li>Update existing data.</li>
          <li>
            Retrieve data from the database or electronic files as requested.
          </li>
          <li>Perform regular backups to ensure data preservation.</li>
          <li>
            Sort and organize paperwork after entering data to ensure it is not
            lost.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Requirements</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Fast typing skills; Knowledge of touch typing system is strongly
            preferred.
          </li>
          <li>
            Excellent knowledge of word processing tools and spreadsheets (MS
            Office Word, Excel etc).
          </li>
          <li>Basic understanding of databases.</li>
          <li>
            Good command of English both oral and written and customer service
            skills.
          </li>
          <li>Great attention to detail.</li>
          <li>Bachelor degree or equivalent.</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Benefits</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Competitive salary package</li>
          <li>
            A lot of learning opportunities to enhance your skills and career
            growth
          </li>
          <li>
            Opportunity to relocate to the Netherlands in the future if needed
          </li>
          <li>Dynamic and collaborative work environment</li>
          <li>Opportunity to work with an innovative and dedicated team</li>
          <li>Travelling costs are reimbursed</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Job Types</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Full-time, Part time Contract, & non-remote worker</li>
        </ul>
      </div>
    </div>
  );
}

export default DataEntry;
