import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function ERP() {
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
          ERP Consultant
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious ERP Consultant to join our team. We specialize in creating
          innovative digital solutions for our clients and are committed to
          delivering high-quality work. We are looking for someone who can grow
          with the company and take on new challenges as we continue to expand
          our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Manage timeline, scope, and customer expectations.</li>
          <li>Manage project deliverables.</li>
          <li>Execute multiple projects at the same time.</li>
          <li>
            Interact with Oracle partners to ensure project plan alignment.
          </li>
          <li>
            Manage customer requirements, resolve issues, and escalate issues
            when needed.
          </li>
          <li>
            Lead the following project activities:
            <ul className="list-disc pl-5">
              <li>Definition of functional and technical specifications.</li>
              <li>Unit and integration testing.</li>
              <li>Go-live planning and support.</li>
            </ul>
          </li>
          <li>
            Develop relationships with customers in order to become a trusted
            Supply Chain advisor.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Requirements</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>A Bachelor’s degree in a related field or equivalent work.</li>
          <li>Minimum 3+ years consulting or equivalent experience.</li>
          <li>Strong written and verbal communication skills.</li>
          <li>Excellent presentation skills.</li>
          <li>
            Ability to adapt to different environments, industries, and business
            challenges.
          </li>
          <li>Adept at building trust and relationships quickly.</li>
          <li>Creative, motivated, and growth-oriented team player.</li>
          <li>Word, Excel, PowerPoint skills.</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Preferred Experience
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            3+ years of working experience with ERP, Cloud, Supply Chain, and/or
            Manufacturing.
          </li>
          <li>
            Technical functional, reporting building, or application development
            experience.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Benefits</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
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
          <li>Travelling costs are reimbursed</li>
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

export default ERP;
