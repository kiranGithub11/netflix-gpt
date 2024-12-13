import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Error Illustration"
            className="mx-auto mb-4"
          />
        </div>
        <a
          href="/"
          className="inline-block px-6 py-3 mt-4 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error;
