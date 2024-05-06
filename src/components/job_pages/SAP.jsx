import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function SAP() {
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
          SAP TM / SCM - Functional Consultant
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious SAP Functional Consultant specialized in Transport
          Management and Supply Chain to join our team. We specialize in
          creating innovative digital solutions for our clients and are
          committed to delivering high-quality work. We are looking for someone
          who can grow with the company and take on new challenges as we
          continue to expand our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Manage timeline, scope and customer expectations</li>
          <li>Execute multiple TM and SCM projects at the same time</li>
          <li>
            Manage customer requirements, resolve issues and escalate issues
            when needed
          </li>
          <li>Definition of functional and technical design documents</li>
          <li>Create Proof of Concepts</li>
          <li>Module configuration and testing</li>
          <li>Provide user training</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Must-Have Requirements
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            A Bachelor’s or Master’s degree in a related field or equivalent
            work experience
          </li>
          <li>
            Extensive knowledge of Supply Chain processes including Procurement,
            Inventory Management, Manufacturing, and Maintenance
          </li>
          <li>Excellent verbal and written English communication skills</li>
          <li>
            Must have minimum 5+ years of experience in providing SAP TM / SCM
            Technical services for implementation, support and upgrade project
          </li>
          <li>
            Hands-on Supply Chain and Transport Management experience from
            S/4HANA solutions
          </li>
          <li>
            Should have cross integration knowledge with SAP EM & ERP. Must have
            TM and SCM integration experience with PI, EDI and third-party
            systems
          </li>
          <li>
            Need to have experience in developing and modifying code following
            the project standards within stipulated time frame
          </li>
          <li>
            Should be able to create OSS messages in case of standard issues and
            interact with Basis, SAP and functional team to take issues to
            resolution
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Preferred requirements
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Ability to adapt to different environments, industries, and business
            challenges
          </li>
          <li>Adapt at building trust and relationships quickly</li>
          <li>Creative, motivated, and growth-oriented team player</li>
          <li>Word, Excel, PowerPoint skills</li>
          <li>
            Experience and understanding of creating BI reports and dashboards
          </li>
          <li>Experience with creating solution design documents</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Job Type</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Full Time</li>
          <li>Benefits</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Benefits</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Salary range: between 1,20,000 – 1,50,000 PKR per month (depending
            on experience)
          </li>
          <li>Travelling costs are reimbursed</li>
          <li>Opportunity to relocate to Netherlands in the future</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Location</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Seventeen Square Block A Multi Gardens B-17, Islamabad, Pakistan
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          General Information
        </h2>
        <p className="text-gray-700">
          The above noted job description is not intended to be an exhaustive
          list of all duties and responsibilities, but rather to give a general
          sense of the responsibilities and expectations of the job. As the
          nature of business demands change so, too, may the essential functions
          of this specific position and/or the skills and abilities required.
        </p>
      </div>
    </div>
  );
}

export default SAP;
