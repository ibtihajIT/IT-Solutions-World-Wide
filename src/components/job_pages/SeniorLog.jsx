import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function SeniorLog() {
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
          Senior Logistics Engineer
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for an experienced Senior
          Logistics Engineer who can support our client in building new
          Logistics facilities. You will be the right hand of the Business
          Process Architect Are you able to drive customer implementations in
          our warehousing facilities using data analysis, process design,
          application configuration combined with automation. Then this is the
          role for you!
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Roles & Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          In the position of Senior Logistics Engineer, you work in an
          international environment. You lead and deliver as part of a project
          the business requirements as agreed with the customer. You lead and
          facilitate workshops with customers, business, and IT to define
          requirements and processes. Note: this is a senior-level position.
        </p>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Collecting and analyzing data from internal and external sources
          </li>
          <li>
            Designing innovative and appropriate (mechanised) concepts in
            logistics and deploying them in operations
          </li>
          <li>
            Calculating developed concepts in a warehouse management calculation
            model
          </li>
          <li>Presenting results in a professional and understandable way</li>
          <li>Designing and evaluating warehouse processes</li>
          <li>Determining and quantifying the impact on the business</li>
          <li>Communicating with suppliers, internal and external customers</li>
          <li>
            Drive process standardization & business metrics within their
            process area
          </li>
          <li>Benchmark end-to-end best practice</li>
          <li>Document integrated process/value stream mapping</li>
          <li>Drive training content and documentation of transactions</li>
          <li>
            Initiate and partner on integration test strategy, plan, scripts and
            testing
          </li>
          <li>Supports driving user acceptance of change</li>
          <li>Provides Post Go-Live Support</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Required Skills/Experience
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Bachelor’s or Master’s Degree in Business Economics, Supply Chain or
            relevant field
          </li>
          <li>
            Ability to drive client implementations using data analysis, process
            design, application configuration combined with automation
          </li>
          <li>Hands-on mentality</li>
          <li>Proven experience with working with various WMS systems</li>
          <li>
            Leadership skills and able to drive decisions across the
            organization (downward, across, upward)
          </li>
          <li>Cross functional knowledge</li>
          <li>Proven experience of 7+ years in a similar role</li>
          <li>Proven experience of 7+ years in logistics environment</li>
          <li>
            Proven experience of 3+ years in new logistics start up environment
          </li>
          <li>
            Proven experience of supporting at least one WMS implementation
          </li>
          <li>
            Must have: good knowledge of MS Office and Visio (or equivalent)
          </li>
          <li>Must have: Ability to map and redesign business processes</li>
          <li>Dedication: 100%</li>
          <li>
            Excellent communication, presentation, and organization skills
          </li>
          <li>Self-starter, independent and self-driven</li>
          <li>Fluent in speaking and written English</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Location and Duration
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Location: Saudi-Arabia</li>
          <li>Duration: 6 months with possibility to extend</li>
          <li>
            Perks: travelling cost, living cost, etc will be reimbursed.
            Competitive salary package.
          </li>
          <li>
            Other requirements: valid passport, police clearance and health
            clearance (with a minimum of 12 months validity)
          </li>
          <li>Start: as soon as possible (within 2-3 weeks)</li>
        </ul>
      </div>
    </div>
  );
}

export default SeniorLog;
