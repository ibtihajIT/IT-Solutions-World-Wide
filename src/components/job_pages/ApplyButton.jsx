import React from "react";
import { Link } from "react-router-dom";

const ApplyButton = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-center mb-4 text-lg">
        If you're interested? Send your CV
      </p>
      <Link to="/ApplyJob">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default ApplyButton;
