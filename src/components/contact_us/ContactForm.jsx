import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/send-email", // Update with your backend endpoint
        {
          name: name,
          email: email,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setResponseMessage("Email sent successfully!");
      } else {
        setResponseMessage("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Failed to send email.");
    }

    setSending(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSendEmail}>
        {/* Remove or adjust the jsx attribute */}
        <label className="block mb-4" jsx="true">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message:</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            rows="4"
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={sending}
          className={`w-full px-4 py-2 rounded-md font-semibold text-white bg-[#278083] hover:bg-blue-600 ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Email"}
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-center text-sm text-gray-600">
          {responseMessage}
        </p>
      )}
    </div>
  );
}

export default ContactForm;
