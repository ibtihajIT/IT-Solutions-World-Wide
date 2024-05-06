import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function Webdev() {
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
          Web Developer
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
            Write well-designed, testable, efficient code by using web
            development best practices.
          </li>
          <li>
            Create basic website layouts and user interfaces with HTML and CSS.
          </li>
          <li>
            Integrate data from various back-end web services and databases.
          </li>
          <li>
            Work with stakeholders to gather and refine specifications and
            requirements based on technical needs.
          </li>
          <li>Create and maintain software documentation.</li>
          <li>Ensure cross-browser compatibility of new features.</li>
          <li>
            Be responsible for maintaining, expanding, and scaling our website.
          </li>
          <li>
            Stay plugged into emerging technologies and industry trends and
            apply them to operations and activities.
          </li>
          <li>
            Collaborate with web designers to realize visual design intent.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Bachelor's degree in computer science, web development, software
            development, or related field.
          </li>
          <li>
            Web development fundamentals, including HTML, CSS, and JavaScript.
          </li>
          <li>
            Front-end JavaScript frameworks such as Vue, React, and Angular.
          </li>
          <li>
            Back-end frameworks such as Ruby on Rails, Node.js, and ASP.NET
          </li>
          <li>
            Content management systems (CMSs) such as WordPress, Joomla, and
            Squarespace.
          </li>
          <li>UI/UX design experience.</li>
          <li>Working knowledge of graphic design.</li>
          <li>Relational databases such as MySQL.</li>
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

export default Webdev;
