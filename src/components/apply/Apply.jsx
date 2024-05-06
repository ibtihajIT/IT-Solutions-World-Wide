import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoBVDesktop from "../../assets/logoBV.png";
import LogoBVMobile from "../../assets/logoBV Mobile.png";

const ApplyNowForm = () => {
  const [category, setCategory] = useState("");
  const [showOtherBox, setShowOtherBox] = useState(false);
  const [hearAbout, setHearAbout] = useState("");
  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setShowOtherBox(selectedCategory === "Other");
  };

  const handleHearAboutChange = (e) => {
    const selectedOption = e.target.value;
    setHearAbout(selectedOption);
    setShowOtherBox(selectedOption === "Other");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData(e.target); // Define formData here
      const response = await axios.post(
        "http://localhost:3001/apply", // Update with the correct route
        formData
      );

      if (response.data.success) {
        setResponseMessage("Form submitted successfully!");
      } else {
        setResponseMessage("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setResponseMessage("Failed to submit form.");
    }

    setSending(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-md w-full mt-8 space-y-8 bg-white rounded-lg shadow-lg p-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Apply Now
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="2"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Address"
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="sr-only">
                Job Type
              </label>
              <select
                id="category"
                name="category"
                required
                onChange={handleCategoryChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
              >
                <option value="">Select Job Type</option>
                <option value="SAP TM / SCM - Functional Consultant">
                  SAP TM / SCM - Functional Consultant
                </option>
                <option value="Oracle Fusion - Functional Consultant">
                  Oracle Fusion - Functional Consultant
                </option>
                <option value="Business Process Architect - Logistics">
                  Business Process Architect - Logistics
                </option>
                <option value="Senior Logistics Engineer">
                  Senior Logistics Engineer
                </option>
                <option value="Blue Yonder WMS Dispatcher Engineer">
                  Blue Yonder WMS Dispatcher Engineer
                </option>
                <option value="Backoffice Assistant">
                  Backoffice Assistant
                </option>
                <option value="IT Support Specialist">
                  IT Support Specialist
                </option>
                <option value="Web Developer">Web Developer</option>
                <option value="Oracle Functional Consultant">
                  Oracle Functional Consultant
                </option>
                <option value="Odoo Functional Consultant">
                  Odoo Functional Consultant
                </option>
                <option value="Odoo Ddeveloper">Odoo Developer</option>
                <option value="ERP Consultant">ERP Consultant</option>
                <option value="Content Writer">Content Writer</option>
                <option value="Social Media Manager">
                  Social Media Manager
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="SAP BI Consultant">SAP BI Consultant</option>
                <option value="SEO Content Writer">SEO Content Writer</option>
              </select>
            </div>
            <div>
              <label htmlFor="hearAbout" className="sr-only">
                How did you hear about us?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                required
                onChange={handleHearAboutChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
              >
                <option value="">How did you hear about us?</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Friend/Family">Friend/Family</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {showOtherBox && hearAbout === "Other" && (
              <div>
                <label htmlFor="other" className="sr-only">
                  Please specify
                </label>
                <input
                  id="other"
                  name="other"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                  placeholder="Please specify"
                />
              </div>
            )}
            <div>
              <label htmlFor="message" className="sr-only">
                Cover Letter
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                placeholder="Cover Letter"
              ></textarea>
            </div>

            <div>
              <label htmlFor="resume" className="mt-2">
                Upload CV/Resume (.pdf, .doc, .docx)
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={sending}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 ${
                  sending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {sending ? "Submitting..." : "Send Now"}
              </button>
            </div>
          </div>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplyNowForm;
