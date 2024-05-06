// NotFound.js
import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
