import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function Odoofunctional() {
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
          Odoo Functional Consultant
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Odoo Functional to join our team. We specialize in creating
          innovative digital solutions for our clients and are committed to
          delivering high-quality work. We are looking for someone who can grow
          with the company and take on new challenges as we continue to expand
          our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Analyze customers needs and business processes in order to map them
            properly with Odoo.
          </li>
          <li>
            Build strong relationships with stakeholders across the business to
            gather information, gain diverse perspectives, and deepen subject
            matter expertise.
          </li>
          <li>
            Configure the general settings of the different modules of Odoo.
          </li>
          <li>
            Customize modules to the requirements of the customer using Studio
            and standard server and automatic actions.
          </li>
          <li>
            Coordinate with developers to develop custom modules/functions.
          </li>
          <li>
            Write technical documentations to instruct developers to build
            modules/functions that meet the customer needs.
          </li>
          <li>
            Analyze latest updates of Odoo and bring awareness to the business
            of new developments.
          </li>
          <li>Design Odoo training documentations.</li>
          <li>
            Understand and document business processes, both in written and
            visual form (process flows).
          </li>
          <li>
            Project management including updating and tracking of key reporting
            documentation such as project plans and tasks lists.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Minimum of 3 years’ experience as functional consultant in ERP.
          </li>
          <li>Functional knowledge on Odoo ERP for all Enterprise Apps.</li>
          <li>
            Should be able to interact with stakeholders and create SRS/BRD
            documents.
          </li>
          <li>
            Should be able to communicate verbally and in wring in decent
            English with team members Proper planning and estimation of project
            resources & milestones [Excel/ERP].
          </li>
          <li>Ability to learn fast and execute accordingly.</li>
          <li>Excellent planning skills.</li>
          <li>
            Proficient in Microsoft Office Tools and draw.io or similar
            application to create flowcharts.
          </li>
          <li>Odoo Certification is an added advantage.</li>
          <li>Excellent English written and verbal communication skills.</li>
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

export default Odoofunctional;
