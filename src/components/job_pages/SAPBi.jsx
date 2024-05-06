import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function SAPBI() {
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
          SAP BI Consultant
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          experienced SAP BI Consultant (freelancer). We specialize in creating
          innovative digital solutions for our clients and are committed to
          delivering high-quality work. We are looking for someone who can
          support on ongoing projects.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          As an SAP BI Consultant, you will be responsible for implementing and
          maintaining SAP BI solutions for our clients. You will work closely
          with our clients to understand their business requirements and design
          solutions that meet their needs.
        </p>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Design and implement SAP BI solutions.</li>
          <li>
            Conduct analysis to identify data sources and develop data models.
          </li>
          <li>Develop and maintain data integrations</li>
          <li>
            Collaborate with cross-functional teams to identify and implement
            enhancements
          </li>
          <li>Perform quality assurance testing to ensure data accuracy</li>
          <li>Develop and maintain documentation of all SAP BI solutions</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Requirements</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Minimum of 3 years of experience in SAP BI implementation and
            development.
          </li>
          <li>Minimum of 3 years’ experience as a data analyst.</li>
          <li>Strong understanding of SAP BI tools and technology.</li>
          <li>
            Experience in data modeling, data integrations, and data
            warehousing.
          </li>
          <li>Excellent problem-solving and analytical skills.</li>
          <li>Strong communication and collaboration skills.</li>
          <li>
            Bachelor's degree in Computer Science, Information Technology or
            related field.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Job Types</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Freelance</li>
          <li>Availability: can be discussed</li>
          <li>
            If you meet the requirements above and are interested in joining a
            dynamic team of technology professionals, please submit your resume,
            cover letter, hourly rate, and availability. We look forward to
            hearing from you!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SAPBI;
