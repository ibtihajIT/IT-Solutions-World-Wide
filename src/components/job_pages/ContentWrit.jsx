import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";
// Assuming LogoBVMobile and LogoBVDesktop are imported somewhere else

function ContentWrit() {
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
          Content Writer
        </h1>
        <h2 className="text-xl font-medium mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          We are a Netherlands-based company looking for a talented and
          ambitious content writer to join our team. We specialize in creating
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
            Supporting writing projects, meeting deadlines, and following
            content requirements in terms of style and project specifications.
          </li>
          <li>
            Helping create style guides or suggesting changes to ensure content
            is consistent and clear.
          </li>
          <li>Conducting research on any given topic.</li>
          <li>Supporting on optimizing articles for SEO and accessibility.</li>
          <li>
            Writing engaging content for blogs, eBooks, case studies, video
            scripts, infographics, and other assets.
          </li>
          <li>Identifying gaps in content and recommending new topics.</li>
          <li>
            Creating and scheduling posts for multiple social media channels.
          </li>
          <li>
            Staying up to date on industry trends to support content
            development.
          </li>
          <li>
            Working closely with internal stakeholders to ensure alignment and
            consistency in messaging, branding, and style. Ensure deadlines are
            met.
          </li>
          <li>Supporting on building editorial calendars.</li>
        </ul>
        <h2 className="text-xl font-medium mb-4 text-center">Skills</h2>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>
            Understanding grammar rules and how to construct clear sentences.
          </li>
          <li>
            Being mindful of things like flow, readability, and sentence
            variety.
          </li>
          <li>Excellent English written and verbal skills.</li>
          <li>
            A basic understanding of search engine optimization best practices.
          </li>
          <li>
            The ability to cooperate with other writers and editors to complete
            projects.
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
            Opportunity to relocate to Netherlands in the future if needed
          </li>
          <li>Dynamic and collaborative work environment</li>
          <li>Opportunity to work with an innovative and dedicated team</li>
          <li>Travelling costs are reimbursed</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentWrit;
