import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function Odoodev() {
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
          Odoo Developer
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Odoo Developer to join our team. We specialize in creating
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
            Analyze customer requirement, design and build Modules for ExisƟng
            ERP soluƟons (Based on Odoo – open source frame work).
          </li>
          <li>Customizing Odoo and integraƟon with third party systems.</li>
          <li>
            Consistently create quality soŌware that meets specific design and
            requirements on stated Ɵmelines.
          </li>
          <li>
            Enhance applicaƟons, develop and configure features and
            funcƟonaliƟes that support business requirements.
          </li>
          <li>Develop Technical DocumentaƟon & User (FuncƟonal) Manual.</li>
          <li>Customer support for bugs & issues.</li>
          <li>
            The job involves customizaƟon of Odoo, which is an open source ERP
            plaƞorm wriƩen in Python.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>
            Minimum of 5 year of work experience in IT related field, of which
            minimum 1 year experience in Odoo development.
          </li>
          <li>
            Excellent knowledge of web development languages (HTML, CSS,
            JavaScript, JQuery).
          </li>
          <li>
            Minimum of 3 year experience of Python development frameworks &
            Linux system.
          </li>
          <li>
            Knowledge of front-end development languages is a great plus,
            SoŌware development life cycle in an Agile environment.
          </li>
          <li>Ability to learn fast and execute accordingly.</li>
          <li>
            Outstanding communicaƟon and interpersonal abiliƟes and excellent
            wriƩen communicaƟon skills.
          </li>
          <li>CommunicaƟon, negoƟaƟon and relaƟonship-building skills.</li>
          <li>
            Excellent Ɵme management skills and the ability to prioriƟze work.
          </li>
          <li>Attention to detail and problem-solving skills.</li>
          <li>Strong organizaƟonal skills with the ability to mulƟ-task.</li>
          <li>
            Strong knowledge of Core Python and programming concepts and working
            knowledge of E-Commerce and ERP systems.
          </li>
          <li>
            Able to idenƟfy the requirement and propose good alternaƟve soluƟon
            to client requirements Design and develop Odoo apps(new module
            development, customisaƟon).
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Education / Experience / Specific Knowledge
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Under Graduate: B.Tech/B.E. – Any SpecializaƟon, Computers.</li>
          <li>Post Graduate: M.E/M.Tech/MCA – Computers, IT.</li>
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
        <h2 className="text-xl font-medium mb-4 text-center">Job Types</h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Full-time, Contract, Freelancer</li>
        </ul>
      </div>
    </div>
  );
}

export default Odoodev;
