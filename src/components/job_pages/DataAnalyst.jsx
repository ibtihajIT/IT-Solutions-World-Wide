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
          Data Analyst
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Data analyst to join our team. We specialize in creating
          innovative digital solutions for our clients and are committed to
          delivering high-quality work. We are looking for someone who can grow
          with the company and take on new challenges as we continue to expand
          our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Analyze customers’ needs and business processes in order to
            translate them to usable analyses and dashboards.
          </li>
          <li>Identifying data sources.</li>
          <li>Collecting data.</li>
          <li>Sourcing missing data.</li>
          <li>Organizing data into usable formats.</li>
          <li>Analyzing data to find answers to specific questions.</li>
          <li>Setting up data infrastructure.</li>
          <li>Developing, implementing, and maintaining databases.</li>
          <li>Assessing quality of data and removing or cleaning data.</li>
          <li>
            Generating information and insights from data sets and identifying
            trends and patterns.
          </li>
          <li>Preparing reports for executive and project teams.</li>
          <li>Creating visualizations of data i.e. dashboards etc.</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Requirements</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            A bachelor's degree in computer science, information technology, or
            similar.
          </li>
          <li>Minimum of 3 years’ experience as a data analyst.</li>
          <li>
            Should be able to interact with customer teams and internal
            stakeholders.
          </li>
          <li>Ability to learn fast and execute accordingly.</li>
          <li>Excellent planning skills.</li>
          <li>Strong mathematical & numeracy skills.</li>
          <li>Excellent English written and verbal communication skills.</li>
          <li>
            Intermediate understanding of databases such as SQL Server, Oracle,
            and SAP.
          </li>
          <li>
            Understanding of reporting & data visualization tools such as
            Business Objects, PowerBI, and Tableau.
          </li>
          <li>
            Understanding of website scripts such as XML, JavaScript, JSON.
          </li>
          <li>
            Knowledge of digital marketing analytics tools including Google 360,
            Google Analytics, Google Tag Manager, and Adobe Marketing Suite is a
            nice-to-have.
          </li>
          <li>
            Excellent analytical skills - the ability to identify trends,
            patterns, and insights from data.
          </li>
          <li>Strong attention to detail.</li>
          <li>
            Presentation skills – ability to write and speak clearly to easily
            communicate complex ideas in a way that is easy to understand.
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
            Opportunity to relocate to the Netherlands in the future if needed
          </li>
          <li>Dynamic and collaborative work environment</li>
          <li>Opportunity to work with an innovative and dedicated team</li>
          <li>Travelling costs are reimbursed</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Job Types</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Full-time, Contract, Freelance</li>
        </ul>
      </div>
    </div>
  );
}

export default DataEntry;
