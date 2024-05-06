import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function SocialMedia() {
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
          Social Media Manager
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious Social Media Manager to join our team. We specialize in
          creating innovative digital solutions for our clients and are
          committed to delivering high-quality work. We are looking for someone
          who can grow with the company and take on new challenges as we
          continue to expand our operations.
        </p>
        <h2 className="text-xl font-medium mb-4 text-center">
          Responsibilities
        </h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>Use social media for impressions and brand awareness.</li>
          <li>
            Staying up to date on industry trends to support on social media
            ads.
          </li>
          <li>Support on building social media calendars.</li>
          <li>Support on increasing company awareness in the target market.</li>
          <li>Support on optimizing SEO.</li>
          <li>
            Identifying gaps in current social media platforms and recommending
            new topics.
          </li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Excellent critical thinking, interpersonal, communication, time
            management, and problem-solving skills.
          </li>
          <li>
            Good knowledge of social media platforms including Instagram,
            Pinterest, LinkedIn, Twitter, and Facebook.
          </li>
          <li>
            Basic understanding of social media KPIs, web traffic metrics, and
            SEO.
          </li>
          <li>Willingness to learn and grow in a dynamic company.</li>
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
          <li>Full-time, Contract, Internship, Freelancer</li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;
