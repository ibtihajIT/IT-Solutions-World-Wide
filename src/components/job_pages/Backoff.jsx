import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function SAP() {
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
          Backoffice Assistant
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Backoffice Assistant to join our team. We specialize in
          creating innovative digital solutions for our clients and are
          committed to delivering high-quality work. We are looking for someone
          who can grow with the company and take on new challenges as we
          continue to expand our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">About the job</h2>
        <p className="text-gray-700 mb-4">
          As Back-Office assistant, you will handle administrative activities to
          support the front office management. Your tasks will primarily consist
          of:
        </p>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Performing market research on internet and processing research data
          </li>
          <li>
            Performing basic admin dues including printing, sending emails, and
            ordering office supplies
          </li>
          <li>Assisting the Office team</li>
          <li>Organizing staff meetings and updating calendars</li>
          <li>Processing company receipts, invoices, and bills</li>
          <li>Assisting and supporting management</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Required skills
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Fluent in English</li>
          <li>
            Able to work with MS office documents Able to work independently
          </li>
          <li>Flexible and a multitasker</li>
          <li>Strong social skills (Must-have)</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          What do we offer:
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>A young and dynamic team</li>
          <li>A great learning environment</li>
          <li>
            Growth opportunities: you will be given the opportunity to apply for
            a traineeship and grow into a junior SCM analyst position.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Junior SCM analyst Roles:
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Support on ERP implementation tasks</li>
          <li>Update basic configurations</li>
          <li>Level 1 customer support</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Benefits</h2>
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
        <h2 className="text-xl font-medium mb-4 text-center">Job Types</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Full-time, Contract & non-remote worker</li>
        </ul>
      </div>
    </div>
  );
}

export default SAP;
