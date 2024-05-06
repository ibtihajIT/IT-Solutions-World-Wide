import React, { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";

const ContactIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // New state for sending status
  const [sendStatus, setSendStatus] = useState(""); // New state for send status message
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); // Set sending status to true
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setSendStatus("Email sent successfully!"); // Set send status message
        console.log("Email sent successfully!");
        // Optionally, you can reset the form fields here
      } else {
        setSendStatus("Failed to send email."); // Set send status message
        console.error("Failed to send email.");
      }
    } catch (error) {
      setSendStatus("Error sending email: " + error.message); // Set send status message
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false); // Set sending status to false
    }
  };

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-white bg-[#278083] hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <div className="text-white animate-fade-in">
            <MdEmail className="text-3xl" />
          </div>
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {isOpen && (
        <div
          ref={drawerRef}
          className="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-white w-80"
        >
          <h5 className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Contact us
          </h5>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 dark:text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-black"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black dark:text-black"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-white dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
          {sendStatus && (
            <p
              className={
                sendStatus.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {sendStatus}
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Email: info@itsolutionsworldwide.com
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Phone: +31 6 40754768
          </p>
        </div>
      )}
    </>
  );
};

export default ContactIcon;
