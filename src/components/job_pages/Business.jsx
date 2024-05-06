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
          Business Process Architect - Logistics
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for an experienced Business
          Process Architect (Logistics) who can support our client in building
          new Logistics facilities. You will be the right hand of Leadership to
          start up the new facilities and implement processes as smoothly as
          possible.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Roles & Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          The Business Process Architect drives the functional alignment between
          strategic goals and key business decisions regarding products and
          services; partners and suppliers; organization; capabilities; and key
          business and IT initiatives. The primary focus includes the analysis
          of business motivations and business operations, through the use of
          business analysis frameworks and related networks that link these
          aspects of the enterprise together. You should have the experience and
          knowledge to understand the business processes without much data
          available and propose a scalable plan in a fast-changing environment.
          Note: this is a senior-level position.
        </p>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Drive process standardization & business metrics within their
            process area
          </li>
          <li>Manage project planning, work breakdown, and time tracking</li>
          <li>Benchmark end-to-end best practice</li>
          <li>Sign-off detailed design on time</li>
          <li>Resolve all process integration gaps and escalations</li>
          <li>Identify & mitigate risk w/ signed off plan</li>
          <li>Vet customizations</li>
          <li>Document integrated process/value stream mapping</li>
          <li>Drive training content and documentation of transactions</li>
          <li>
            Initiate and partner on integration test strategy, plan, scripts and
            testing
          </li>
          <li>
            On-time sign-off of integrated solution with Business Unit
            Exec.Mgmt.
          </li>
          <li>Supports driving user acceptance of change</li>
          <li>Provides Post Go-Live Support</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Required Skills/Experience
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Extensive Business Process, Manufacturing/Logistics in Blue Yonder
            (hands-on & systems) WMS Dispatcher Module.
          </li>
          <li>
            Leadership skills and able to drive decisions across the
            organization (downward, across, upward)
          </li>
          <li>Cross functional knowledge</li>
          <li>Proven experience of 10+ years in a similar role</li>
          <li>Proven experience of 10+ years in logistics environment</li>
          <li>
            Proven experience of 5+ years in new logistics start up environment
          </li>
          <li>
            Proven experience of supporting at least one WMS implementation
          </li>
          <li>
            Must have: knowledge of working with visio, drawio, sketchup or
            other similar tools to build warehouse layouts and process
            flowcharts
          </li>
          <li>Must have: strong project and matrixed management skills</li>
          <li>Must have: Ability to map and redesign business processes</li>
          <li>
            Dedication: 100% (across strategic and tactical responsibilities for
            program and project)
          </li>
          <li>Self-starter, independent and self-driven</li>
          <li>
            Ability to work well in a team environment extensively both upwards
            and downwards in the organization
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Location and Duration
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Location: Saudi-Arabia</li>
          <li>Duration: 18 months with possibility to extend</li>
          <li>
            Perks: travelling cost, living cost, etc will be reimbursed.
            Competitive salary package.
          </li>
          <li>Start: as soon as possible (within 2-3 weeks)</li>
        </ul>
      </div>
    </div>
  );
}

export default SAP;
