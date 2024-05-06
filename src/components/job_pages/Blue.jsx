import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function Blue() {
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
          Blue Yonder WMS Dispatcher Engineer
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for an experienced Blue
          Yonder WMS Dispatcher Engineer with experience in the logistics and
          transport sector. With your analytical skill, logistics experience and
          your IT creativity, you can create an optimal supply chain solution in
          our WMS (Blue Yonder WMS Dispatcher)? Then this is the role for you!
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Roles & Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          In the position of WMS application engineer you work in an
          international environment. As a person, you are independent and as a
          project member responsible for WMS site/client implementation projects
          and major improvements and the setup & configuration of processes in
          the WMS system (RedPrairie Blue Yonder Dispatcher WMS) You are able to
          create logistics solution designs to accomplish a win-win solution for
          all stakeholders. Translating business requirements into function &
          technical requirements.
        </p>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Complete configurations in BY WMS Dispatcher</li>
          <li>
            Translate business requirements to technical solutions designs for
            BY
          </li>
          <li>
            Manage customer requirements, resolve issues and escalate issues
            when needed
          </li>
          <li>Test and validate system readiness</li>
          <li>
            Defining the EDI architecture and the functional design of the EDI
            message flows between the client ERP system and Blue Yonder WMS
            Dispatcher
          </li>
          <li>
            Supporting the global IT team for technical solutions in Blue Yonder
            WMS Dispatcher or EDI setup
          </li>
          <li>
            Writing system work instructions and technical project documentation
          </li>
          <li>Assisting the business during user acceptance testing</li>
          <li>Reporting project progress to relevant stakeholders</li>
          <li>Support on external integrations with the WMS</li>
          <li>Conducting user trainings</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">
          Required Skills/Experience
        </h2>
        <ul className="text-gray-700 list-disc mb-4">
          <li>Master’s Degree in Information Technology or equivalent</li>
          <li>Desired Experience Range 8-15 years</li>
          <li>
            Strong Experience with implementation of JDA/Red Prairie/Blue Yonder
            WMS Dispatcher
          </li>
          <li>Proven experience of 8+ years of BY / RP / JDA WMS Dispatcher</li>
          <li>
            Understanding of and experience with supply chain, logistics, and
            distribution functional concepts
          </li>
          <li>
            Strong communication skills, including the ability to present
            complex information to individuals, small groups, and executive
            leadership
          </li>
          <li>Strong experience on PL SQL (basic knowledge)</li>
          <li>
            Nice-to-have: Experience in using tools like JIRA, Confluence, etc
          </li>
          <li>Self-starter, independent and self-driven</li>
          <li>
            Ability to work well in a team environment extensively both upwards
            and downwards in the organization
          </li>
          <li>Fluent in speaking and written English</li>
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

export default Blue;
